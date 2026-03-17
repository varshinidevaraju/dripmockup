const fs = require('fs');
const content = fs.readFileSync('c:/Users/admin/Desktop/ClientProject/react-app/src/pages/Index.tsx', 'utf8');

const popPos = content.indexOf('Popular Products');
const scrollPos = content.indexOf('running-scrollsection');

console.log(JSON.stringify({
    popPos,
    scrollPos,
    popSnippet: popPos !== -1 ? content.substring(popPos - 100, popPos + 200) : null,
    scrollSnippet: scrollPos !== -1 ? content.substring(scrollPos - 100, scrollPos + 200) : null
}));
