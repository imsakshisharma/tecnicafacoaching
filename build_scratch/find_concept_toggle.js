const fs = require('fs');
const code = fs.readFileSync('app_source_dump.js', 'utf8');

// Find concept toggle or concept state
const conceptMatches = code.match(/concept[12]/gi) || [];
console.log('concept occurrences:', conceptMatches.length);

const stateMatch = code.match(/concept/gi) || [];
// Let's search where concept is used
let idx = 0;
while ((idx = code.indexOf('concept', idx)) !== -1) {
  console.log('Concept snippet:', code.substring(idx - 60, idx + 100));
  idx += 10;
}
