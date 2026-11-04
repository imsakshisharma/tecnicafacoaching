const fs = require('fs');
const html = fs.readFileSync('tecnica.html', 'utf8');

const imgMatches = html.match(/src="([^"]+)"/g) || [];
console.log('Image / Script tags found:');
for (const m of imgMatches) {
  const src = m.match(/src="([^"]+)"/)[1];
  const exists = fs.existsSync(src);
  console.log(' - ' + src + ' -> ' + (exists ? 'EXISTS (' + fs.statSync(src).size + 'B)' : 'MISSING!'));
}

const cssMatch = html.match(/href="([^"]+\.css)"/g) || [];
for (const m of cssMatch) {
  const href = m.match(/href="([^"]+)"/)[1];
  const exists = fs.existsSync(href);
  console.log(' - ' + href + ' -> ' + (exists ? 'EXISTS (' + fs.statSync(href).size + 'B)' : 'MISSING!'));
}
