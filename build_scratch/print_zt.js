const fs = require('fs');
const code = fs.readFileSync('app_source_dump.js', 'utf8');

const ztIdx = code.indexOf('function zt()');
console.log('ztIdx:', ztIdx);
if (ztIdx !== -1) {
  console.log(code.substring(ztIdx, ztIdx + 1500));
}
