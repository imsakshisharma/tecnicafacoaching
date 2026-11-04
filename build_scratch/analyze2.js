const fs = require('fs');
const bundle = fs.readFileSync('demo-bundle.js', 'utf8');

console.log('Bundle length:', bundle.length);
// Check for JSX or React strings
const sampleIdx = bundle.indexOf('Tecnica');
console.log('First Tecnica at:', sampleIdx);
if (sampleIdx !== -1) {
  console.log('Snippet around Tecnica:', bundle.substring(sampleIdx - 100, sampleIdx + 200));
}

const austinIdx = bundle.indexOf('Austin');
console.log('First Austin at:', austinIdx);
if (austinIdx !== -1) {
  console.log('Snippet around Austin:', bundle.substring(austinIdx - 100, austinIdx + 200));
}

// Find any url or image paths
const images = bundle.match(/(\/[a-zA-Z0-9_\-\.\/]+\.(png|jpg|jpeg|svg|webp))/gi) || [];
console.log('Images found:', [...new Set(images)]);
