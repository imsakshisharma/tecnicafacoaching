const fs = require('fs');
const https = require('https');
const path = require('path');

const urls = [
  'https://tecnicafa.netlify.app/assets/logo_transparent.png',
  'https://tecnicafa.netlify.app/assets/images/fulham_match_1.jpg',
  'https://tecnicafa.netlify.app/assets/images/fulham_match_2.jpg',
  'https://tecnicafa.netlify.app/assets/images/u13_palace.jpg',
  'https://tecnicafa.netlify.app/assets/images/fulham_acad_6.jpg',
  'https://tecnicafa.netlify.app/assets/images/holiday_camp.jpg',
  'https://tecnicafa.netlify.app/assets/images/hero_banner.jpg',
  'https://tecnicafa.netlify.app/assets/images/hero_austin.jpg',
  'https://tecnicafa.netlify.app/assets/images/futsal_session.jpg',
  'https://tecnicafa.netlify.app/assets/images/club_kit_prokit.jpg',
  'https://www.tecnicafa.com/wp-content/uploads/2021/07/Tecnica_2021_80px.svg',
  'https://www.tecnicafa.com/wp-content/uploads/2023/03/Fulham-Acad-7-1024x768.jpg',
  'https://www.tecnicafa.com/wp-content/uploads/2023/03/Fulham-Acad-3.jpg'
];

async function download(url) {
  return new Promise((resolve) => {
    let relPath = url.includes('tecnicafa.netlify.app') 
      ? url.replace('https://tecnicafa.netlify.app/', '')
      : 'assets/wp/' + path.basename(url);
    const dest = path.join(__dirname, relPath);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location).then(resolve);
      }
      if (res.statusCode !== 200) {
        console.log(`Failed ${url}: status ${res.statusCode}`);
        return resolve();
      }
      const stream = fs.createWriteStream(dest);
      res.pipe(stream);
      stream.on('finish', () => {
        stream.close();
        console.log(`Saved ${relPath} (${fs.statSync(dest).size} bytes)`);
        resolve();
      });
    }).on('error', (err) => {
      console.log(`Error ${url}: ${err.message}`);
      resolve();
    });
  });
}

(async () => {
  for (const u of urls) {
    await download(u);
  }
  console.log('All downloads completed!');
})();
