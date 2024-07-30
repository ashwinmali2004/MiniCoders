import fs from 'fs';
import path from 'path';

const indexPath = path.join(process.cwd(), 'public/path/to/search_index.json');
const searchIndex = JSON.parse(fs.readFileSync(indexPath, 'utf-8'));

export const search = (query: string) => {
  return searchIndex.filter((item: any) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.content.toLowerCase().includes(query.toLowerCase()) ||
    item.tag.toLowerCase().includes(query.toLowerCase())
  );
};
