const fs = require('fs');
let css = fs.readFileSync('demo-style.css', 'utf8');

// Replace [data-concept=concept2] so that :root defaults to concept2 variables!
const c2Idx = css.indexOf('[data-concept=concept2]{');
let c2Vars = '';
if (c2Idx !== -1) {
  const c2End = css.indexOf('}', c2Idx);
  c2Vars = css.substring(c2Idx + '[data-concept=concept2]{'.length, c2End);
  console.log('Concept 2 Vars extracted:', c2Vars.length, 'characters');
}

fs.writeFileSync('c2_vars.txt', c2Vars, 'utf8');
