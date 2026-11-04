const fs = require('fs');
const code = fs.readFileSync('app_source_dump.js', 'utf8');

const etIdx = code.indexOf('function Et(');
const dtIdx = code.indexOf('function Dt(');
console.log('Et length:', dtIdx - etIdx);
fs.writeFileSync('Et_dump.js', code.substring(etIdx, dtIdx), 'utf8');
console.log('Written Et_dump.js');
