const fs = require('fs');
const bundle = fs.readFileSync('demo-bundle.js', 'utf8');

// The application code starts around 230000
const appCode = bundle.substring(230000);
fs.writeFileSync('app_source_dump.js', appCode, 'utf8');
console.log('Written app_source_dump.js, length:', appCode.length);
