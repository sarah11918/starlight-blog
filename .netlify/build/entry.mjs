import { r as renderers } from './chunks/_@astro-renderers_DaJsTJ8t.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_C-LhZ3tx.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/404.astro.mjs');
const _page1 = () => import('./pages/_---prefix_/authors/_author_.astro.mjs');
const _page2 = () => import('./pages/_---prefix_/rss.xml.astro.mjs');
const _page3 = () => import('./pages/_---prefix_/tags/_tag_.astro.mjs');
const _page4 = () => import('./pages/_---prefix_/_---page_.astro.mjs');
const _page5 = () => import('./pages/_---slug_.astro.mjs');
const pageMap = new Map([
    ["node_modules/@astrojs/starlight/routes/static/404.astro", _page0],
    ["node_modules/starlight-blog/routes/Authors.astro", _page1],
    ["node_modules/starlight-blog/routes/rss.xml.ts", _page2],
    ["node_modules/starlight-blog/routes/Tags.astro", _page3],
    ["node_modules/starlight-blog/routes/Blog.astro", _page4],
    ["node_modules/@astrojs/starlight/routes/static/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "9e277d45-2fd9-4767-b4e2-d2c0edf6f93a"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
