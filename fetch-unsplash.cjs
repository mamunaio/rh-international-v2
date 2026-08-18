const https = require('https');
const fs = require('fs');

https.get('https://unsplash.com/s/photos/solar-panel', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  }
}, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        // Unsplash image URLs are like https://images.unsplash.com/photo-...
        const matches = [...data.matchAll(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+/g)];
        const uniqueUrls = [...new Set(matches.map(m => m[0]))].slice(0, 6);
        
        console.log("Found URLs:", uniqueUrls);
        
        uniqueUrls.forEach((url, i) => {
            const dest = `public/portfolio/solar/p${i+1}.jpg`;
            https.get(`${url}?auto=format&fit=crop&w=800&q=80`, (imgRes) => {
                const file = fs.createWriteStream(dest);
                imgRes.pipe(file);
                file.on('finish', () => {
                    file.close();
                    console.log(`Downloaded ${dest}`);
                });
            });
        });
    });
});
