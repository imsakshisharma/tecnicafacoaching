const fs = require('fs');
const et = fs.readFileSync('Et_dump.js', 'utf8');

const sections = et.match(/section[^>]*id:[`'"][^`'"]+[`'"]/g) || [];
console.log('Sections with id:', sections);

const h2s = et.match(/children:\[`[^`]+`/g) || [];
console.log('Sample text headings:', h2s.slice(0, 15));

const badges = et.match(/className:[`'"][a-zA-Z0-9_\-\s]+[`'"],children:[`'"][^`'"]+[`'"]/g) || [];
console.log('Badges/tags:', badges.slice(0, 20));
