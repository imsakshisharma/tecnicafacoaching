const fs = require('fs');
const code = fs.readFileSync('app_source_dump.js', 'utf8');

let idx = 0;
while ((idx = code.indexOf('activePage', idx)) !== -1) {
  console.log('Snippet:', code.substring(idx - 40, idx + 80));
  idx += 10;
}
