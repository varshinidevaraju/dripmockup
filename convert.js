const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'knitknots.framer.website');
const destDir = path.join(__dirname, 'react-app', 'src', 'pages');
const publicDir = path.join(__dirname, 'react-app', 'public');

if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

const assetsToCopy = ['framerusercontent.com', 'cdn.shopify.com', 'fade.gif', 'backblue.gif'];
assetsToCopy.forEach(asset => {
    const assetPath = path.join(__dirname, asset);
    if (fs.existsSync(assetPath)) {
        fs.cpSync(assetPath, path.join(publicDir, asset), { recursive: true });
    }
});

let imports = '';
let routes = '';

function processHtmlFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    let replacedContent = content
        .split('../framerusercontent.com').join('/framerusercontent.com')
        .split('../cdn.shopify.com').join('/cdn.shopify.com')
        .replace(/KnitKnot/gi, 'DripNest')
        .replace(/knitknots/gi, 'dripnest')
        .replace(/Knit knots/gi, 'Drip Nest')
        .replace(/Framerify /gi, ''); // Remove 'Framerify ' including space

    let headStylesMatch = replacedContent.match(/<head>([\s\S]*?)<\/head>/i);
    let headContent = headStylesMatch ? headStylesMatch[1] : '';
    let bodyMatch = replacedContent.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    let bodyContent = bodyMatch ? bodyMatch[1] : '';
    
    // Ensure all internal links are updated to relative paths or handled by router
    bodyContent = bodyContent.replace(/href="([^"]+)\.html"/g, 'href="$1"');

    let titleMatch = headContent.match(/<title>([^<]+)<\/title>/i);
    let title = titleMatch ? titleMatch[1] : 'DripNest';
    title = title.replace(/KnitKnot/gi, 'DripNest').replace(/Framerify/gi, 'DripNest');

    let filteredHead = headContent.split(/<title>.*?<\/title>/gi).join('')
                                  .split(/<meta[^>]*?charset[^>]*>/i).join('')
                                  .split(/<meta[^>]*?viewport[^>]*>/i).join('');

    return { headContent: filteredHead, bodyContent, title };
}

function scanDir(dir, routePrefix = '') {
    const items = fs.readdirSync(dir);
    for (const item of items) {
        const fullPath = path.join(dir, item);
        if (fs.statSync(fullPath).isDirectory()) {
            scanDir(fullPath, routePrefix + item + '/');
        } else if (item.endsWith('.html')) {
            const { headContent, bodyContent, title } = processHtmlFile(fullPath);
            
            let routeName = item.replace('.html', '');
            let componentName = (routePrefix.split('/').join('_') + '_' + routeName).replace(/[^a-zA-Z0-9]/g, '');
            componentName = componentName.charAt(0).toUpperCase() + componentName.slice(1);
            if (!componentName) componentName = 'Home';
            if (/^[0-9]/.test(componentName)) {
                componentName = 'Page' + componentName;
            }

            let routePath = '/' + routePrefix + routeName;
            let isHome = false;
            if (item === 'index.html') {
                routePath = '/' + routePrefix;
                if (routePath.endsWith('/') && routePath !== '/') {
                    routePath = routePath.slice(0, -1);
                }
                if (routePath === '/') isHome = true;
            }

            const pageContent = [
                "import { useEffect, useRef } from 'react';",
                "",
                "const " + componentName + " = () => {",
                "    const wrapperRef = useRef<HTMLDivElement>(null);",
                "    useEffect(() => {",
                "        document.title = " + JSON.stringify(title) + ";",
                "        const replaceText = () => {",
                "            // Replace document title",
                "            if (document.title.includes('KnitKnot')) document.title = document.title.replace(/KnitKnot/gi, 'DripNest');",
                "            if (document.title.includes('Framerify')) document.title = document.title.replace(/Framerify /gi, '').replace(/Framerify/gi, '');",
                "",
                "            // Replace text nodes",
                "            const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);",
                "            let node;",
                "            while (node = walker.nextNode()) {",
                "                if (node.textContent && node.textContent.includes('KnitKnot')) {",
                "                    node.textContent = node.textContent.replace(/KnitKnot/gi, 'DripNest');",
                "                }",
                "                if (node.textContent && node.textContent.includes('Framerify')) {",
                "                    node.textContent = node.textContent.replace(/Framerify /gi, '').replace(/Framerify/gi, '');",
                "                }",
                "            }",
                "            // Replace logo SVGs",
                "            document.querySelectorAll('[data-framer-name=\"KnitKnot\"], [data-framer-name=\"Logo\"]').forEach(el => {",
                "                if (el.getAttribute('data-framer-name') === 'KnitKnot' || el.querySelector('svg')) {",
                "                    if (el.tagName === 'DIV' && el.getAttribute('data-framer-component-type') === 'SVG') {",
                "                       el.innerHTML = '<span style=\"font-family: Oswald, sans-serif; font-weight: 700; font-size: 24px; color: inherit; letter-spacing: -0.02em; display: flex; align-items: center;\">DripNest</span>';",
                "                       el.style.width = 'auto';",
                "                       el.style.height = 'auto';",
                "                    }",
                "                }",
                "            });",
                "            // Replace attributes",
                "            document.querySelectorAll('[data-framer-name*=\"KnitKnot\"], [href*=\"framer.com\"], [href*=\"knitknot\"]').forEach(el => {",
                "                if (el.getAttribute('data-framer-name')) el.setAttribute('data-framer-name', el.getAttribute('data-framer-name').replace(/KnitKnot/gi, 'DripNest'));",
                "                if (el.getAttribute('href') && (el.getAttribute('href').includes('framer.com') || el.getAttribute('href').includes('knitknot'))) {",
                "                    el.setAttribute('href', '#'); // Remove external framer links",
                "                }",
                "            });",
                "        };",
                "        replaceText();",
                "        const observer = new MutationObserver(replaceText);",
                "        observer.observe(document.body, { childList: true, subtree: true });",
                "        if (wrapperRef.current) {",
                "            const scripts = Array.from(wrapperRef.current.querySelectorAll('script'));",
                "            scripts.forEach(oldScript => {",
                "                const newScript = document.createElement('script');",
                "                Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));",
                "                if (oldScript.innerHTML) {",
                "                    newScript.appendChild(document.createTextNode(oldScript.innerHTML));",
                "                }",
                "                if (oldScript.parentNode) {",
                "                    oldScript.parentNode.replaceChild(newScript, oldScript);",
                "                }",
                "            });",
                "        }",
                "        return () => observer.disconnect();",
                "    }, []);",
                "",
                "    return (",
                "        <div ref={wrapperRef} className='page-wrapper' style={{ width: '100%', height: '100%', overflowX: 'hidden' }}>",
                "            <style>{`.framer-badge, .__framer-badge { display: none !important; }`}</style>",
                "            <div dangerouslySetInnerHTML={{ __html: " + JSON.stringify(headContent) + " }} style={{ display: 'none' }} />",
                "            <div dangerouslySetInnerHTML={{ __html: " + JSON.stringify(bodyContent) + " }} />",
                "        </div>",
                "    );",
                "};",
                "",
                "export default " + componentName + ";"
            ].join('\n');

            const componentFile = path.join(destDir, componentName + '.tsx');
            fs.writeFileSync(componentFile, pageContent);

            imports += "import " + componentName + " from './pages/" + componentName + "';\n";
            routes += "          <Route path='" + routePath + "' element={<" + componentName + " />} />\n";
            
            // Prefer Index over Index0114 or Homev2 for the root path
            // But if the user explicitly wants Homev2 as home, we can adjust.
            // For now, only index.html gets path='/'
        }
    }
}

scanDir(srcDir);

const appTsx = [
    "import { BrowserRouter, Routes, Route } from 'react-router-dom';",
    imports,
    "function App() {",
    "  return (",
    "    <BrowserRouter>",
    "      <Routes>",
    routes,
    "      </Routes>",
    "    </BrowserRouter>",
    "  );",
    "}",
    "export default App;"
].join('\n');

fs.writeFileSync(path.join(__dirname, 'react-app', 'src', 'App.tsx'), appTsx);
console.log('Conversion Complete!');
