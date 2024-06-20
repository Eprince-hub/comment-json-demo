import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from 'comment-json';

const withComment = join(process.cwd(), 'tsconfig.json');

const tsconfigObj = parse(readFileSync(withComment, 'utf-8'));

console.log(tsconfigObj?.compilerOptions);
