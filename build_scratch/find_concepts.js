const fs = require('fs');
const css = fs.readFileSync('demo-style.css', 'utf8');

const conceptMatches = css.match(/\[data-concept=[^\]]+\]\{[^}]+\}/g) || [];
console.log('Concept definitions:\n', conceptMatches.join('\n\n'));
