const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? 
      walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const targetDirs = ['./app', './components', './hooks', './lib', './integrations'];

targetDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    walkDir(dir, function(filePath) {
      if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;

        if (content.includes('navigate(') && content.includes('const navigate = useRouter();')) {
          content = content.replace(/navigate\(/g, 'navigate.push(');
          modified = true;
        }

        if (modified) {
          fs.writeFileSync(filePath, content, 'utf8');
        }
      }
    });
  }
});
console.log('Fixed navigate to navigate.push');
