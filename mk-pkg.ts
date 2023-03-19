import {writeFileSync, mkdirSync} from 'node:fs';

const types = [['dist/cjs', 'commonjs'], ['dist/esm', 'module']] as const;
for (const [path, type] of types) {
	mkdirSync(path, { recursive: true })
	writeFileSync(`${path}/package.json`, `{"type":"${type}"}`);
}
