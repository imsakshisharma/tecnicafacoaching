const fs = require('fs');
const css = fs.readFileSync('demo-style.css', 'utf8');

function printRulesFor(prefix) {
  const re = new RegExp(`(\\.[a-zA-Z0-9_-]*${prefix}[a-zA-Z0-9_-]*\\s*\\{[^}]+\\})`, 'gi');
  const matches = css.match(re) || [];
  console.log(`=== Matches for ${prefix} (${matches.length}) ===`);
  console.log(matches.slice(0, 10).join('\n'));
}

printRulesFor('hero');
printRulesFor('program');
printRulesFor('card');
printRulesFor('gallery');
printRulesFor('modal');
