const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'build_scratch');
fs.mkdirSync(targetDir, { recursive: true });

const preserve = new Set(['tecnica.html', 'index.html', 'README.md', 'css', 'js', 'assets', 'build_scratch']);

const files = fs.readdirSync(__dirname);
for (const f of files) {
  if (!preserve.has(f)) {
    try {
      fs.renameSync(path.join(__dirname, f), path.join(targetDir, f));
      console.log('Moved', f);
    } catch (e) {
      console.log('Error moving', f, e.message);
    }
  }
}
console.log('Done organizing!');
