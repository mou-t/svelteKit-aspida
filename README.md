SvelteKit で aspida を使用する

- aspida の config ファイルを cjs 拡張子にする
- @aspida/fetch パッケージを使用。呼び出しを以下のようにする

```
import aspida from '@aspida/fetch';
import type { FetchConfig } from '@aspida/fetch';
import api from '../aspida/$api';

const fetchConfig: FetchConfig = {
	baseURL: 'http://localhost:3000/api',
	throwHttpErrors: true // throw an error on 4xx/5xx, default is false
};

type Aspida = typeof aspida;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore pnpm previewの時に、aspida is not a functionというエラーが発生する。
const callableAspida = typeof aspida === 'function' ? aspida : (aspida.default as Aspida);

export const client = api(callableAspida(fetch, fetchConfig));

```

- aspida で出力したファイルを、Type-Only Imports に書き換える

```
const convertTypeOnlyImport = async (filePath) => {
	console.log(filePath);
	const file = await readFile(filePath, { encoding: 'utf-8' });
	const result = file
		.replace(/import { AspidaClient } from 'aspida'/, "import type { AspidaClient } from 'aspida'")
		.replace(/\nimport { Methods as/g, '\nimport type { Methods as');

	writeFile(filePath, result);
	return 0;
};
```

- aspida 用の型定義ファイル向けに prettier の設定を変える（原因を要確認）

```
{
  "printWidth": 100,
  "semi": false,
  "arrowParens": "avoid",
  "singleQuote": true,
  "trailingComma": "none"
}
```
