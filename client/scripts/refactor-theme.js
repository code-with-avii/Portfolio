import fs from 'fs';
import path from 'path';

const SRC_DIR = path.join(process.cwd(), 'src');

const mappings = [
  { regex: /\btext-white\b/g, replacement: 'text-text' },
  { regex: /\btext-zinc-300\b/g, replacement: 'text-mutedText' },
  { regex: /\btext-zinc-400\b/g, replacement: 'text-mutedText' },
  { regex: /\btext-zinc-500\b/g, replacement: 'text-mutedText' },
  { regex: /\bbg-zinc-950\b/g, replacement: 'bg-surface' },
  { regex: /\bbg-zinc-900\b/g, replacement: 'bg-surface' },
  { regex: /\bbg-zinc-800\b/g, replacement: 'bg-surface-hover' },
  { regex: /\bbg-white\/5\b/g, replacement: 'bg-border' },
  { regex: /\bhover:bg-zinc-800\b/g, replacement: 'hover:bg-surface-hover' },
  { regex: /\bborder-white\/5\b/g, replacement: 'border-border' },
  { regex: /\bborder-white\/10\b/g, replacement: 'border-border-hover' },
  { regex: /\bhover:border-white\/10\b/g, replacement: 'hover:border-border-hover' },
];

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (file.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let original = content;

      for (const { regex, replacement } of mappings) {
        content = content.replace(regex, replacement);
      }

      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Refactored: ${fullPath.replace(SRC_DIR, '')}`);
      }
    }
  }
}

console.log('Starting theme refactor...');
processDirectory(SRC_DIR);
console.log('Done!');
