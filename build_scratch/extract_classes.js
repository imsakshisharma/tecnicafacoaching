const fs = require('fs');
const css = fs.readFileSync('demo-style.css', 'utf8');

// List main class names in CSS
const classes = css.match(/\.[a-zA-Z0-9_-]+/g) || [];
const uniqueClasses = [...new Set(classes)];
console.log('Total unique classes:', uniqueClasses.length);
console.log('Sample classes:', uniqueClasses.slice(0, 50));

fs.writeFileSync('css_classes.txt', uniqueClasses.join('\n'), 'utf8');
