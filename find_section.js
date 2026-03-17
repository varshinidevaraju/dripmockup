const fs = require('fs');
const content = fs.readFileSync('c:\\Users\\admin\\Desktop\\ClientProject\\react-app\\src\\pages\\Index.tsx', 'utf-8');
const searchStr = 'data-framer-name=\\"Popular Products\\"';
const index = content.indexOf(searchStr);
if (index !== -1) {
    console.log('Found at index:', index);
    console.log('Context:', content.substring(index - 500, index + 500));
} else {
    console.log('Not found');
    // Try without escaped quotes
    const searchStr2 = 'data-framer-name="Popular Products"';
    const index2 = content.indexOf(searchStr2);
    if (index2 !== -1) {
        console.log('Found (unescaped) at index:', index2);
        console.log('Context:', content.substring(index2 - 500, index2 + 500));
    } else {
        console.log('Still not found');
    }
}
