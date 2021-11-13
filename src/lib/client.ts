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
