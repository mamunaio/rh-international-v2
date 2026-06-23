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

        // Add "use client" if it's a React component/hook and doesn't have it
        if (!content.includes('"use client"') && !content.includes("'use client'") && !filePath.includes('layout.tsx')) {
          content = '"use client";\n\n' + content;
          modified = true;
        }

        // Replace react-router-dom
        if (content.includes('react-router-dom')) {
          modified = true;
          
          // Replace Link
          if (content.includes('import { Link')) {
            content = content.replace(/import\s*\{\s*Link[^}]*\}\s*from\s*['"]react-router-dom['"];?/g, 'import Link from "next/link";');
          }
          if (content.includes('import {Link')) {
            content = content.replace(/import\s*\{\s*Link[^}]*\}\s*from\s*['"]react-router-dom['"];?/g, 'import Link from "next/link";');
          }
          
          // Replace useNavigate and useLocation
          let nextNavImports = [];
          if (content.includes('useNavigate')) {
            nextNavImports.push('useRouter');
            content = content.replace(/useNavigate/g, 'useRouter');
          }
          if (content.includes('useLocation')) {
            nextNavImports.push('usePathname');
            content = content.replace(/useLocation/g, 'usePathname');
          }

          if (nextNavImports.length > 0) {
            content = content.replace(/import\s*\{[^}]*\}\s*from\s*['"]react-router-dom['"];?/g, `import { ${nextNavImports.join(', ')} } from "next/navigation";`);
          } else {
             // If there was react-router-dom but no useNavigate/useLocation, it might have been just Link which we replaced, so remove the empty import if it exists.
             content = content.replace(/import\s*\{\s*\}\s*from\s*['"]react-router-dom['"];?/g, '');
          }
        }

        // Remove AutoScrollTop usage
        if (content.includes('<AutoScrollTop />')) {
           content = content.replace(/<AutoScrollTop \/>/g, '');
           modified = true;
        }

        if (modified) {
          fs.writeFileSync(filePath, content, 'utf8');
        }
      }
    });
  }
});
console.log('Migration script completed.');
