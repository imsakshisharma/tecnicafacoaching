const fs = require('fs');
const code = fs.readFileSync('app_source_dump.js', 'utf8');

// Look for theme or dark mode
const matchesTheme = code.match(/[a-zA-Z0-9_$]+\s*=\s*['"`](dark|light)['"`]/g) || [];
console.log('Theme matches:', matchesTheme);

// Look for state or context
const stateMatches = code.match(/useState\([^)]*\)/g) || [];
console.log('useState calls:', stateMatches.slice(0, 20));

// Find components or section names
const navItems = code.match(/label:\s*`[^`]+`/g) || [];
console.log('Nav labels:', navItems);

// Find active tab / page state
const tabMatches = code.match(/(setActiveTab|currentTab|setTheme|theme|mode|page|view)/gi) || [];
console.log('Tab/theme identifiers:', [...new Set(tabMatches)]);
