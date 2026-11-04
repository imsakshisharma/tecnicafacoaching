const fs = require('fs');
const bundle = fs.readFileSync('demo-bundle.js', 'utf8');

// Search for links / navigation
const linkMatches = bundle.match(/"#[a-zA-Z0-9_-]+"/g) || [];
console.log('Anchor links:', [...new Set(linkMatches)]);

// Search for route or page paths
const hrefs = bundle.match(/href:\s*"[^"]+"/g) || [];
console.log('Hrefs:', [...new Set(hrefs)]);

// Search for section headers / titles
const titles = bundle.match(/title:\s*"[^"]+"/g) || [];
console.log('Titles:', [...new Set(titles)].slice(0, 30));

// Find long readable text
const texts = bundle.match(/"[A-Z][^"<>{}]{20,120}"/g) || [];
console.log('Texts count:', texts.length);
fs.writeFileSync('extracted_texts.txt', [...new Set(texts)].join('\n'), 'utf8');
console.log('Saved extracted_texts.txt');
