const fs = require('fs');
const content = fs.readFileSync('c:\\Users\\admin\\Desktop\\ClientProject\\react-app\\src\\pages\\Index.tsx', 'utf-8');
const searchStr = '</section><section class=\\"framer-tv15yh\\" data-framer-name=\\"Popular Products\\">';
const index = content.indexOf(searchStr);
if (index !== -1) {
    console.log('---START---');
    console.log(content.substring(index, index + searchStr.length));
    console.log('---END---');
} else {
    console.log('NOT FOUND');
}
