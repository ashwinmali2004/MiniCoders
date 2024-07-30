import fs from 'fs';
import path from 'path';

const data = [
  // Example data
  { id: 1, title: 'First Page', content: 'This is the first page.' },
  { id: 2, title: 'Second Page', content: 'This is the second page.' },
  { id: 3, title: 'Third Page', content: 'This is the third page.' },
];

const buildSearchIndex = () => {
  const indexPath = path.join(__dirname, '../../public/path/to/search_index.json');
  fs.writeFileSync(indexPath, JSON.stringify(data, null, 2));
};

buildSearchIndex();
