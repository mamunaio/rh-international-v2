const https = require('https');
const fs = require('fs');

https.get('https://www.pexels.com/search/solar%20panel/', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  }
}, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        const matches = [...data.matchAll(/https:\/\/images\.pexels\.com\/photos\/\d+\/pexels-photo-\d+\.jpeg/g)];
        const uniqueUrls = [...new Set(matches.map(m => m[0]))].slice(0, 4);
        
        console.log("Found URLs:", uniqueUrls);
        
        uniqueUrls.slice(0, 2).forEach((url, i) => {
            const dest = `public/portfolio/solar/pexels-new-${i}.jpg`;
            https.get(`${url}?auto=compress&cs=tinysrgb&w=800`, (imgRes) => {
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
