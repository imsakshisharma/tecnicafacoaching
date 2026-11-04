const fs = require('fs');
const css = fs.readFileSync('demo-style.css', 'utf8');

// Look for CSS variables
const vars = css.match(/--[a-zA-Z0-9_-]+:\s*[^;]+;/g) || [];
console.log('CSS Variables:', vars.slice(0, 30));

// Look for body or background styling
const bodyMatch = css.match(/body\s*\{[^}]+\}/g);
console.log('Body styles:', bodyMatch);

// Look for dark classes or theme classes
const darkMatches = css.match(/\.[a-zA-Z0-9_-]*dark[a-zA-Z0-9_-]*/gi) || [];
console.log('Dark selectors:', [...new Set(darkMatches)]);
