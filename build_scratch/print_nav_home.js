const fs = require('fs');
const code = fs.readFileSync('app_source_dump.js', 'utf8');

// Print function St (Header & Nav)
const stIdx = code.indexOf('function St(');
if (stIdx !== -1) {
  console.log('--- St (Nav) ---');
  console.log(code.substring(stIdx, stIdx + 2000));
}

// Print function Et (Homepage)
const etIdx = code.indexOf('function Et(');
if (etIdx !== -1) {
  console.log('--- Et (Homepage) Start ---');
  console.log(code.substring(etIdx, etIdx + 3000));
}
