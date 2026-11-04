const fs = require('fs');
const code = fs.readFileSync('app_source_dump.js', 'utf8');

// Find switch(activePage) or if(activePage === ...)
const pageSwitchMatch = code.match(/activePage===`[^`]+`/g) || [];
console.log('activePage matches:', [...new Set(pageSwitchMatch)]);

// Find all navigateTo calls
const navCalls = code.match(/navigateTo\(`[^`]+`\)/g) || [];
console.log('navigateTo calls:', [...new Set(navCalls)]);
