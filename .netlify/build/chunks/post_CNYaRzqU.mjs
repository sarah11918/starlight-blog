import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, Z as unescapeHTML, a0 as renderScript, W as maybeRenderHead, $ as addAttribute, _ as Fragment, a2 as spreadAttributes, X as renderSlot } from './astro/server_DgC14Out.mjs';
import 'kleur/colors';
/* empty css                         */
/* empty css                                 */
/* empty css                                                               */
/* empty css                         */
import 'clsx';
import './LinkPreview_astro_astro_type_style_index_0_lang.3c694fd8_l0sNRNKZ.mjs';
import { parseHTML } from 'linkedom/worker';
import './BaselineStatus_astro_astro_type_style_index_0_lang.a1d045b8_l0sNRNKZ.mjs';
import { AtpAgent, RichText, AppBskyEmbedImages, AppBskyEmbedExternal, AppBskyEmbedVideo, AppBskyEmbedRecordWithMedia, AppBskyEmbedRecord, AppBskyFeedPost, AppBskyGraphStarterpack, AppBskyGraphDefs } from '@atproto/api';
import { match, P } from 'ts-pattern';
/* empty css                                                                */
/* empty css                                                                  */
/* empty css                                                                       */
/* empty css                                                                       */
/* empty css                                                              */
/* empty css                                                                   */
/* empty css                                                            */
/* empty css                                                             */
/* empty css                          */
/* empty css                                                            */

const $$Astro$j = createAstro("https://www.rainsberger.ca");
const $$Tweet = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Tweet;
  const { id, theme = "light" } = Astro2.props;
  async function fetchTweet(id2, theme2 = "light") {
    try {
      const oembedUrl = new URL("https://publish.twitter.com/oembed");
      oembedUrl.searchParams.set("url", id2);
      oembedUrl.searchParams.set("omit_script", "true");
      oembedUrl.searchParams.set("dnt", "true");
      oembedUrl.searchParams.set("theme", theme2);
      return await fetch(oembedUrl).then((res) => res.json());
    } catch (e) {
      console.error(
        `[error]  astro-embed
         ${e.status} - ${e.statusText}: Failed to fetch tweet ${id2}`
      );
    }
  }
  const tweet = await fetchTweet(id, theme);
  return renderTemplate`${tweet && renderTemplate`${renderComponent($$result, "astro-embed-tweet", "astro-embed-tweet", {}, { "default": () => renderTemplate`${unescapeHTML(tweet.html)}` })}`}`;
}, "/home/user/starlight-blog/node_modules/@astro-community/astro-embed-twitter/Tweet.astro", void 0);

const urlPattern$1 = /(?=(\s*))\1(?:<a [^>]*?>)??(?=(\s*))\2(?:https?:\/\/)??(?:w{3}\.)??(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|shorts\/)??([A-Za-z0-9-_]{11})(?:[^\s<>]*)(?=(\s*))\4(?:<\/a>)??(?=(\s*))\5/;
function matcher$1(url) {
  const match = url.match(urlPattern$1);
  return match?.[3];
}

const $$Astro$i = createAstro("https://www.rainsberger.ca");
const $$YouTube = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$YouTube;
  const {
    id,
    poster,
    posterQuality = "default",
    title,
    ...attrs
  } = Astro2.props;
  const idRegExp = /^[A-Za-z0-9-_]+$/;
  function extractID(idOrUrl) {
    if (idRegExp.test(idOrUrl)) return idOrUrl;
    return matcher$1(idOrUrl);
  }
  const videoid = extractID(id);
  const posterFile = {
    max: "maxresdefault",
    high: "sddefault",
    default: "hqdefault",
    low: "default"
  }[posterQuality] || "hqdefault";
  const posterURL = poster || `https://i.ytimg.com/vi/${videoid}/${posterFile}.jpg`;
  const href = `https://youtube.com/watch?v=${videoid}`;
  return renderTemplate`${renderComponent($$result, "lite-youtube", "lite-youtube", { "videoid": videoid, "title": title, "data-title": title, ...attrs, "style": `background-image: url('${posterURL}');` }, { "default": () => renderTemplate` ${maybeRenderHead()}<a${addAttribute(href, "href")} class="lty-playbtn"> <span class="lyt-visually-hidden">${attrs.playlabel || "Play"}</span> </a> ` })} ${renderScript($$result, "/home/user/starlight-blog/node_modules/@astro-community/astro-embed-youtube/YouTube.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/user/starlight-blog/node_modules/@astro-community/astro-embed-youtube/YouTube.astro", void 0);

class LRU extends Map {
  constructor(maxSize) {
    super();
    this.maxSize = maxSize;
  }
  get(key) {
    const value = super.get(key);
    if (value) this.#touch(key, value);
    return value;
  }
  set(key, value) {
    this.#touch(key, value);
    if (this.size > this.maxSize) this.delete(this.keys().next().value);
    return this;
  }
  #touch(key, value) {
    this.delete(key);
    super.set(key, value);
  }
}
const formatError = (...lines) => lines.join("\n         ");
const safeGet = makeSafeGetter((res) => res.json());
const safeGetDOM = makeSafeGetter(
  async (res) => parseHTML(await res.text()).document
);
function makeSafeGetter(handleResponse, { cacheSize = 1e3 } = {}) {
  const cache = new LRU(cacheSize);
  return async function safeGet2(url) {
    try {
      const cached = cache.get(url);
      if (cached) return cached;
      const response = await fetch(url);
      if (!response.ok)
        throw new Error(
          formatError(
            `Failed to fetch ${url}`,
            `Error ${response.status}: ${response.statusText}`
          )
        );
      const result = await handleResponse(response);
      cache.set(url, result);
      return result;
    } catch (e) {
      console.error(formatError(`[error]  astro-embed`, e?.message ?? e));
      return void 0;
    }
  };
}

const urlPattern = /(?=(\s*))\1(?:<a [^>]*?>)??(?=(\s*))\2(?:https?:\/\/)??(?:w{3}\.)??(?:vimeo\.com)\/(\d{1,20})(?:[^\s<>]*)(?=(\s*))\4(?:<\/a>)??(?=(\s*))\5/;
function matcher(url) {
  const match = url.match(urlPattern);
  return match?.[3];
}

const $$Astro$h = createAstro("https://www.rainsberger.ca");
const $$Vimeo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Vimeo;
  const {
    id,
    poster,
    posterQuality = "default",
    params = "",
    playlabel = "Play",
    style,
    ...attrs
  } = Astro2.props;
  const idRegExp = /^\d+$/;
  function extractID(idOrUrl) {
    if (idRegExp.test(idOrUrl)) return idOrUrl;
    return matcher(idOrUrl);
  }
  const videoid = extractID(id);
  let posterURL = poster;
  if (!posterURL) {
    const data = await safeGet(`https://vimeo.com/api/v2/video/${videoid}.json`);
    if (data) {
      const resolution = { max: 1280, high: 640, default: 480, low: 120 }[posterQuality] || 480;
      const { thumbnail_large } = data?.[0] || {};
      if (thumbnail_large.endsWith("d_640")) {
        posterURL = thumbnail_large.slice(0, -3) + resolution;
      } else {
        posterURL = thumbnail_large;
      }
    }
  }
  let [searchString, t] = params.split("#t=");
  const searchParams = new URLSearchParams(searchString);
  if (!t) t = searchParams.get("t");
  searchParams.append("autoplay", "1");
  if (!searchParams.has("dnt")) searchParams.append("dnt", "1");
  const color = searchParams.get("color");
  const styles = [];
  if (style) styles.push(style);
  if (color) styles.push(`--ltv-color: #${color}`);
  if (posterURL) styles.push(`background-image: url('${posterURL}')`);
  return renderTemplate`${renderComponent($$result, "lite-vimeo", "lite-vimeo", { "data-id": videoid, "data-t": t, "data-params": searchParams.toString(), "style": styles.join(";"), ...attrs }, { "default": () => renderTemplate` ${maybeRenderHead()}<a class="ltv-playbtn"${addAttribute(`https://vimeo.com/${videoid}`, "href")}${addAttribute(playlabel, "aria-label")}></a> ` })} ${renderScript($$result, "/home/user/starlight-blog/node_modules/@astro-community/astro-embed-vimeo/Vimeo.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/user/starlight-blog/node_modules/@astro-community/astro-embed-vimeo/Vimeo.astro", void 0);

const getContent = (el) => el?.getAttribute("content");
const urlOrNull = (url) => url?.slice(0, 8) === "https://" ? url : null;
async function parseOpenGraph(pageUrl) {
  const html = await safeGetDOM(pageUrl);
  if (!html) return;
  const getMetaProperty = (prop) => getContent(html.querySelector(`meta[property=${JSON.stringify(prop)}]`));
  const getMetaName = (name) => getContent(html.querySelector(`meta[name=${JSON.stringify(name)}]`));
  const title = getMetaProperty("og:title") || html.querySelector("title")?.textContent;
  const description = getMetaProperty("og:description") || getMetaName("description");
  const image = urlOrNull(
    getMetaProperty("og:image:secure_url") || getMetaProperty("og:image:url") || getMetaProperty("og:image")
  );
  const imageAlt = getMetaProperty("og:image:alt");
  const video = urlOrNull(
    getMetaProperty("og:video:secure_url") || getMetaProperty("og:video:url") || getMetaProperty("og:video")
  );
  const videoType = getMetaProperty("og:video:type");
  const url = urlOrNull(
    getMetaProperty("og:url") || html.querySelector("link[rel='canonical']")?.getAttribute("href")
  ) || pageUrl;
  return { title, description, image, imageAlt, url, video, videoType };
}

const $$Astro$g = createAstro("https://www.rainsberger.ca");
const $$LinkPreview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$LinkPreview;
  const { id, hideMedia = false } = Astro2.props;
  const meta = await parseOpenGraph(id);
  const domain = meta?.url ? new URL(meta.url).hostname.replace("www.", "") : "";
  return renderTemplate`${meta && meta.title ? renderTemplate`${maybeRenderHead()}<article${addAttribute([[
    "link-preview",
    {
      "link-preview--has-video": !hideMedia && meta.video && meta.videoType,
      "link-preview--no-media": hideMedia || !(meta.video && meta.videoType || meta.image)
    }
  ], "astro-ztfdmrby"], "class:list")}><div class="link-preview__content astro-ztfdmrby"><header class="astro-ztfdmrby"><a class="link-preview__title astro-ztfdmrby"${addAttribute(id, "href")}>${meta.title}</a>${" "}${domain && renderTemplate`<small class="link-preview__domain astro-ztfdmrby">${domain}</small>`}</header><small class="link-preview__description astro-ztfdmrby">${meta.description}</small></div>${hideMedia ? null : meta.video && meta.videoType ? renderTemplate`<video controls preload="metadata" width="1200" height="630" class="astro-ztfdmrby"><source${addAttribute(meta.video, "src")}${addAttribute(meta.videoType, "type")} class="astro-ztfdmrby"></video>` : meta.image ? renderTemplate`<img${addAttribute(meta.image, "src")}${addAttribute(meta.imageAlt || "", "alt")} width="1200" height="630" class="astro-ztfdmrby">` : null}</article>` : renderTemplate`<div class="link-preview link-preview--no-metadata astro-ztfdmrby"><a${addAttribute(id, "href")} class="astro-ztfdmrby">${id}</a></div>`}`;
}, "/home/user/starlight-blog/node_modules/@astro-community/astro-embed-link-preview/LinkPreview.astro", void 0);

const $$Astro$f = createAstro("https://www.rainsberger.ca");
const $$BaselineIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$BaselineIcon;
  const paths = {
    limited: `<path fill="var(--color-limited)" d="m10 0 6 6-2 2-6-6 2-2Zm12 12-2 2 6 6 2-2-6-6Zm4-12 2 2-18 18-2-2L26 0Z"/><path fill="var(--color-limited-secondary)" d="m8 2 2 2-6 6 6 6-2 2-8-8 8-8Zm20 0 8 8-8 8-2-2 6-6-6-6 2-2Z"/>`,
    widely: `<path fill="var(--color-widely)" d="m18 8 2 2-2 2-2-2 2-2Z"/><path fill="var(--color-widely)" d="m26 0 2 2-18 18L0 10l2-2 8 8L26 0Z"/><path fill="var(--color-widely-secondary)" d="m28 2-2 2 6 6-6 6-4-4-2 2 6 6 10-10-8-8ZM10 0 2 8l2 2 6-6 4 4 2-2-6-6Z"/>`,
    newly: `<path fill="var(--color-newly-secondary)" d="m10 0 2 2-2 2-2-2 2-2Zm4 4 2 2-2 2-2-2 2-2Zm16 0 2 2-2 2-2-2 2-2Zm4 4 2 2-2 2-2-2 2-2Zm-4 4 2 2-2 2-2-2 2-2Zm-4 4 2 2-2 2-2-2 2-2Zm-4-4 2 2-2 2-2-2 2-2ZM6 4l2 2-2 2-2-2 2-2Z"/><path fill="var(--color-newly)" d="m26 0 2 2-18 18L0 10l2-2 8 8L26 0Z"/>`,
    no_data: `<path fill="var(--color-no_data-secondary)" d="m18 8 2 2-2 2-2-2 2-2Zm10-6-2 2 6 6-6 6-4-4-2 2 6 6 10-10-8-8ZM10 0 2 8l2 2 6-6 4 4 2-2-6-6Z"/><path fill="var(--color-no_data-secondary)" d="m26 0 2 2-18 18L0 10l2-2 8 8L26 0Z"/>`
  };
  return renderTemplate`${maybeRenderHead()}<svg width="36" height="20" viewBox="0 0 36 20" class="baseline-icon" aria-hidden="true">${unescapeHTML(paths[Astro2.props.support])}</svg>`;
}, "/home/user/starlight-blog/node_modules/@astro-community/astro-embed-baseline-status/BaselineIcon.astro", void 0);

const chrome = new Proxy({"src":"/_astro/chrome.f1eQSm4k.svg","width":21,"height":21,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/user/starlight-blog/node_modules/@astro-community/astro-embed-baseline-status/icons/browsers/chrome.svg";
							}
							
							return target[name];
						}
					});

const edge = new Proxy({"src":"/_astro/edge.B7O1xshw.svg","width":21,"height":21,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/user/starlight-blog/node_modules/@astro-community/astro-embed-baseline-status/icons/browsers/edge.svg";
							}
							
							return target[name];
						}
					});

const firefox = new Proxy({"src":"/_astro/firefox.CMmddY9p.svg","width":21,"height":21,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/user/starlight-blog/node_modules/@astro-community/astro-embed-baseline-status/icons/browsers/firefox.svg";
							}
							
							return target[name];
						}
					});

const safari = new Proxy({"src":"/_astro/safari.CdqjFDzc.svg","width":21,"height":21,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/user/starlight-blog/node_modules/@astro-community/astro-embed-baseline-status/icons/browsers/safari.svg";
							}
							
							return target[name];
						}
					});

const $$Astro$e = createAstro("https://www.rainsberger.ca");
const $$BrowserIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$BrowserIcon;
  const { browser } = Astro2.props;
  const icons = { chrome, edge, firefox, safari };
  const { src, width, height } = icons[browser];
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(src, "src")} alt=""${addAttribute(width, "width")}${addAttribute(height, "height")}>`;
}, "/home/user/starlight-blog/node_modules/@astro-community/astro-embed-baseline-status/BrowserIcon.astro", void 0);

const $$Astro$d = createAstro("https://www.rainsberger.ca");
const $$SupportIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$SupportIcon;
  const { baseline, browserImplementation } = Astro2.props;
  const paths = {
    available: `<path d="M1.25 3.31a8.84 8.84 0 0 1 5.47-1.88 8.8 8.8 0 0 1 8.84 8.77 8.8 8.8 0 0 1-8.84 8.77 8.84 8.84 0 0 1-5.47-1.88c-.23.34-.49.66-.75.97a10.07 10.07 0 0 0 6.22 2.14c5.57 0 10.07-4.48 10.07-10S12.3.2 6.72.2C4.37.2 2.21 1 .5 2.34c.26.31.52.64.75.97Z"/><path d="m11.35 8.13-5.01 4.93-3-2.96 1-.98 2 1.96 4-3.94 1 .98Z"/>`,
    unavailable: `<path d="M1.25 3.31a8.84 8.84 0 0 1 5.47-1.88 8.8 8.8 0 0 1 8.84 8.77 8.8 8.8 0 0 1-8.84 8.77 8.84 8.84 0 0 1-5.47-1.88c-.23.34-.49.66-.75.97a10.07 10.07 0 0 0 6.22 2.14c5.57 0 10.08-4.48 10.08-10S12.29.2 6.73.2C4.37.2 2.2 1 .5 2.34c.27.31.52.64.75.97Z"/><path d="M10.32 8.13 8.33 10.1l2 1.97-1 .99-1.99-1.98-1.99 1.98-.99-.99 1.99-1.97-1.99-1.97 1-.99 1.98 1.97 1.99-1.97 1 .99Z"/>`,
    no_data: `<path d="M7.18 12.28h-1.2c.01-.41.05-.74.12-1 .07-.27.19-.5.35-.72.16-.22.38-.47.65-.74l.54-.56c.16-.18.3-.37.4-.58.1-.2.16-.45.16-.74 0-.3-.06-.55-.16-.76a1.1 1.1 0 0 0-.47-.5 1.5 1.5 0 0 0-.75-.16c-.25 0-.48.04-.7.13-.23.09-.4.23-.54.41-.14.19-.21.43-.22.72H4.18c0-.48.12-.89.36-1.23.23-.35.55-.61.95-.8.4-.18.84-.27 1.33-.27.55 0 1 .1 1.39.3.38.2.68.47.88.84.2.36.3.79.3 1.29 0 .38-.08.73-.24 1.05-.15.32-.35.62-.6.9-.24.28-.5.55-.77.8-.24.22-.4.47-.48.74-.08.27-.12.56-.12.88ZM5.94 14.3c0-.2.06-.35.18-.49.12-.13.29-.2.52-.2.23 0 .4.07.52.2.12.14.18.3.18.49 0 .18-.06.34-.18.47-.12.13-.3.2-.52.2a.67.67 0 0 1-.52-.2.68.68 0 0 1-.18-.47Z"/><path d="M1.25 3.31a8.84 8.84 0 0 1 5.47-1.88 8.8 8.8 0 0 1 8.84 8.77 8.8 8.8 0 0 1-8.84 8.77c-2.06 0-3.96-.7-5.47-1.88-.23.34-.49.66-.75.97a10.07 10.07 0 0 0 6.22 2.14c5.57 0 10.07-4.48 10.07-10S12.3.2 6.72.2C4.37.2 2.21 1 .5 2.34c.26.31.52.64.75.97Z"/>`
  };
  const support = baseline === "limited" ? browserImplementation?.status || "unavailable" : baseline;
  const icon = support === "newly" || support === "widely" ? "available" : support;
  const fill = {
    no_data: "var(--color-no_data)",
    unavailable: "var(--color-limited)",
    newly: "var(--color-newly)",
    widely: "var(--color-widely)",
    available: "var(--color-widely)"
  }[support];
  return renderTemplate`${maybeRenderHead()}<svg width="17" height="21" aria-hidden="true"${addAttribute(fill, "fill")}>${unescapeHTML(paths[icon])}</svg>`;
}, "/home/user/starlight-blog/node_modules/@astro-community/astro-embed-baseline-status/SupportIcon.astro", void 0);

const $$Astro$c = createAstro("https://www.rainsberger.ca");
const $$BrowserSupport = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$BrowserSupport;
  const { browser, feature } = Astro2.props;
  const baseline = feature.baseline.status || "no_data";
  const browserImplementation = feature.browser_implementations?.[browser];
  const browserName = {
    chrome: "Chrome",
    edge: "Edge",
    firefox: "Firefox",
    safari: "Safari"
  }[browser];
  let supportLabel = browserImplementation?.status || "no";
  if (baseline === "no_data") supportLabel = "unknown";
  if (supportLabel === "available") supportLabel = "yes";
  return renderTemplate`${maybeRenderHead()}<span part="browser-support"> <span part="browser-support-label">
Supported in ${browserName}: ${supportLabel}.
</span> ${renderComponent($$result, "BrowserIcon", $$BrowserIcon, { "browser": browser })} ${renderComponent($$result, "SupportIcon", $$SupportIcon, { "baseline": baseline, "browserImplementation": browserImplementation })} </span>`;
}, "/home/user/starlight-blog/node_modules/@astro-community/astro-embed-baseline-status/BrowserSupport.astro", void 0);

const $$Astro$b = createAstro("https://www.rainsberger.ca");
const $$BaselineStatus = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$BaselineStatus;
  const API_ENDPOINT = "https://api.webstatus.dev/v1/features/";
  const BASELINE_DEFS = {
    limited: {
      title: "Limited availability",
      defaultDescription: "This feature is not Baseline because it does not work in some of the most widely-used browsers."
    },
    newly: {
      title: "",
      defaultDescription: "This feature works across the latest devices and browser versions. This feature might not work in older devices or browsers."
    },
    widely: {
      title: "Widely available",
      defaultDescription: "This feature is well established and works across many devices and browser versions."
    },
    no_data: {
      title: "Unknown availability",
      defaultDescription: "We currently don\u2019t have browser support information about this feature."
    }
  };
  function getBaselineDate(feature2) {
    return feature2.baseline.low_date ? new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long"
    }).format(new Date(feature2.baseline.low_date)) : "";
  }
  function getDescriptionDate(baseline2, date) {
    if (baseline2 === "newly" && date) {
      return `Since ${date} this feature works across the latest
			devices and browser versions. This feature might not work in older
			devices or browsers.`;
    } else if (baseline2 === "widely" && date) {
      return `This feature is well established and works across many
			devices and browser versions. It\u2019s been available across browsers
			since ${date}`;
    }
    return BASELINE_DEFS[baseline2].defaultDescription;
  }
  const featureData = await safeGet(API_ENDPOINT + Astro2.props.id);
  const feature = featureData?.baseline ? featureData : {
    baseline: {
      status: "no_data"
    },
    name: Astro2.props.id || "Unknown feature"
  };
  const baseline = feature.baseline.status || "no_data";
  const title = BASELINE_DEFS[baseline].title;
  const baselineDate = getBaselineDate(feature);
  const description = getDescriptionDate(baseline, baselineDate);
  const year = baseline === "newly" && baselineDate ? baselineDate.split(" ")[1] : "";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute((`baseline-status baseline-status--${baseline}` ?? "") + " astro-7wt35nye", "class")}> <template shadowrootmode="open" class="astro-7wt35nye"> <div part="root" class="astro-7wt35nye"> <p part="feature-name" class="astro-7wt35nye">${feature.name}</p> <details part="details" class="astro-7wt35nye"> <summary part="summary" class="astro-7wt35nye"> ${renderComponent($$result, "BaselineIcon", $$BaselineIcon, { "support": baseline, "class": "astro-7wt35nye" })} <div part="summary-content" class="astro-7wt35nye"> <div part="summary-label" class="astro-7wt35nye"> ${!(baseline === "limited" || baseline === "no_data") && renderTemplate`<strong class="astro-7wt35nye">Baseline</strong>`} ${title} ${year} ${baseline === "newly" && renderTemplate`<span part="badge" class="astro-7wt35nye">newly available</span>`} </div> <div part="browsers" class="astro-7wt35nye"> ${renderComponent($$result, "BrowserSupport", $$BrowserSupport, { "browser": "chrome", "feature": feature, "class": "astro-7wt35nye" })} ${renderComponent($$result, "BrowserSupport", $$BrowserSupport, { "browser": "edge", "feature": feature, "class": "astro-7wt35nye" })} ${renderComponent($$result, "BrowserSupport", $$BrowserSupport, { "browser": "firefox", "feature": feature, "class": "astro-7wt35nye" })} ${renderComponent($$result, "BrowserSupport", $$BrowserSupport, { "browser": "safari", "feature": feature, "class": "astro-7wt35nye" })} </div> </div> <style>
						[part='caret'] svg {
							transition: transform 0.3s;
						}
						details[open] [part='caret'] svg {
							transform: rotate(180deg);
						}
					</style> <span part="caret" aria-hidden="true" class="astro-7wt35nye"> <svg width="11" height="7" fill="currentColor" class="astro-7wt35nye"> <path d="M5.5 6.45.25 1.2l.94-.94L5.5 4.6 9.8.3l.95.94L5.5 6.45Z" class="astro-7wt35nye"></path> </svg> </span> </summary> <p part="description" class="astro-7wt35nye">${unescapeHTML(description)}</p> ${baseline !== "no_data" && renderTemplate`<p class="astro-7wt35nye"> <a${addAttribute(`https://webstatus.dev/features/${feature.feature_id}`, "href")} target="_top" part="link" class="astro-7wt35nye">${`${feature.name} on Web Platform Status`}</a> </p>`} </details> </div> </template> </div> `;
}, "/home/user/starlight-blog/node_modules/@astro-community/astro-embed-baseline-status/BaselineStatus.astro", void 0);

const escapeMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
const escapeHTML = (str) => str?.replace(/[&<>"']/g, (match) => escapeMap[match] || match) ?? "";
function renderPostAsHtml(post) {
  if (!post) {
    return "";
  }
  const rt = new RichText(post.record);
  let html = "";
  for (const segment of rt.segments()) {
    if (segment.isLink()) {
      html += `<a href="${escapeHTML(segment.link?.uri)}">${escapeHTML(
        segment.text
      )}</a>`;
    } else if (segment.isMention()) {
      html += `<a href="https://bsky.app/profile/${escapeHTML(
        segment.mention?.did
      )}">${escapeHTML(segment.text)}</a>`;
    } else if (segment.isTag()) {
      html += `<a href="https://bsky.app/hastag/${escapeHTML(
        segment.tag?.tag
      )}">#${escapeHTML(segment.tag?.tag)}</a>`;
    } else {
      html += escapeHTML(segment.text);
    }
  }
  return html;
}
function viewRecordToPostView(viewRecord) {
  const { value, embeds, ...rest } = viewRecord;
  return {
    ...rest,
    $type: "app.bsky.feed.defs#postView",
    record: value,
    embed: embeds?.[0]
  };
}
function viewRecordToEmbed(viewRecord, allowNestedQuotes = false) {
  const { embed } = viewRecordToPostView(viewRecord);
  if (allowNestedQuotes) {
    return embed;
  } else {
    if (AppBskyEmbedImages.isView(embed) || AppBskyEmbedExternal.isView(embed) || AppBskyEmbedVideo.isView(embed)) {
      return embed;
    } else if (AppBskyEmbedRecordWithMedia.isView(embed) && (AppBskyEmbedImages.isView(embed.media) || AppBskyEmbedExternal.isView(embed.media) || AppBskyEmbedVideo.isView(embed.media))) {
      return embed.media;
    }
  }
  return void 0;
}
const agent = new AtpAgent({
  service: "https://public.api.bsky.app"
});
async function resolvePost(postUrl) {
  let atUri;
  if (typeof postUrl === "object") {
    return postUrl;
  }
  if (postUrl.startsWith("at:")) {
    atUri = postUrl;
  } else {
    if (!postUrl.startsWith("https://bsky.app/")) {
      return void 0;
    }
    const urlParts = new URL(postUrl).pathname.split("/");
    let did = urlParts[2];
    const postId = urlParts[4];
    if (!did || !postId) {
      return void 0;
    }
    if (!did.startsWith("did:")) {
      try {
        const handleResolution = await agent.resolveHandle({ handle: did });
        if (!handleResolution.data.did) {
          return void 0;
        }
        did = handleResolution.data.did;
      } catch (e) {
        console.error(
          `[error]  astro-embed
         ` + (e?.message ?? e)
        );
        return void 0;
      }
    }
    atUri = `at://${did}/app.bsky.feed.post/${postId}`;
  }
  try {
    const hydratedPost = await agent.getPosts({ uris: [atUri] });
    return hydratedPost.data.posts[0];
  } catch (e) {
    console.error(`[error]  astro-embed
         ` + (e?.message ?? e));
    return void 0;
  }
}
function atUriToPostUri(atUri) {
  const [, , did, , postId] = atUri.split("/");
  return `https://bsky.app/profile/${did}/post/${postId}`;
}
function atUriToStarterPackUri(atUri) {
  const [, , did, , packId] = atUri.split("/");
  return `https://bsky.app/starter-pack/${did}/${packId}`;
}
function atUriToListUri(atUri) {
  const [, , did, , listId] = atUri.split("/");
  return `https://bsky.app/profile/${did}/lists/${listId}`;
}
function starterPackOgImage(uri) {
  const [, , did, , packId] = uri.split("/");
  return `https://ogcard.cdn.bsky.app/start/${did}/${packId}`;
}

const $$Astro$a = createAstro("https://www.rainsberger.ca");
const $$External = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$External;
  const { uri, thumb, title, description } = Astro2.props.embed.external;
  const domain = new URL(uri).hostname;
  const { compact } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(uri, "href")} target="_blank" rel="noopener noreferrer nofollow" class="external-link astro-stjl7fun"> ${!compact && thumb && renderTemplate`<img${addAttribute(thumb, "src")}${addAttribute(title, "alt")} class="thumbnail astro-stjl7fun">`} <div class="content astro-stjl7fun"> <p class="domain astro-stjl7fun">${domain}</p> ${!compact && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-stjl7fun" }, { "default": ($$result2) => renderTemplate` <p class="title astro-stjl7fun">${title}</p> <p class="description astro-stjl7fun">${description}</p> ` })}`} </div> </a> `;
}, "/home/user/starlight-blog/node_modules/@astro-community/astro-embed-bluesky/src/external.astro", void 0);

const $$Astro$9 = createAstro("https://www.rainsberger.ca");
const $$ImageGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$ImageGrid;
  const { images } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="image-grid-container astro-tayatr6q"> <div${addAttribute([["image-grid", `image-grid--${images.length}`], "astro-tayatr6q"], "class:list")}> ${images.map((image) => renderTemplate`<div class="image-grid-item astro-tayatr6q"> <img${addAttribute(image.thumb, "src")}${addAttribute(image.alt || "", "alt")} loading="lazy" decoding="async" class="astro-tayatr6q"> </div>`)} </div> </div> `;
}, "/home/user/starlight-blog/node_modules/@astro-community/astro-embed-bluesky/src/image-grid.astro", void 0);

const $$Astro$8 = createAstro("https://www.rainsberger.ca");
const $$MediaContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$MediaContainer;
  const { aspectRatio, onClick, className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([["media-container", className], "astro-kx6yyo6i"], "class:list")}${addAttribute({
    aspectRatio: aspectRatio ? `${aspectRatio.width}/${aspectRatio.height}` : void 0
  }, "style")}${spreadAttributes(onClick ? { onClick } : {})}> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "/home/user/starlight-blog/node_modules/@astro-community/astro-embed-bluesky/src/media-container.astro", void 0);

const $$Astro$7 = createAstro("https://www.rainsberger.ca");
const $$VideoThumbnail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$VideoThumbnail;
  const { thumbnail, aspectRatio } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "MediaContainer", $$MediaContainer, { "aspectRatio": aspectRatio, "class": "astro-pkddrwlf" }, { "default": ($$result2) => renderTemplate`${thumbnail && renderTemplate`${maybeRenderHead()}<img${addAttribute(thumbnail, "src")} class="thumbnail astro-pkddrwlf" alt="Video thumbnail">`}<div class="play-button astro-pkddrwlf"> <img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='%23fff'%20d='M9.576%202.534C7.578%201.299%205%202.737%205%205.086v13.828c0%202.35%202.578%203.787%204.576%202.552l11.194-6.914c1.899-1.172%201.899-3.932%200-5.104L9.576%202.534Z'/%3e%3c/svg%3e" class="play-icon astro-pkddrwlf" alt="Play button"> </div> ` })} `;
}, "/home/user/starlight-blog/node_modules/@astro-community/astro-embed-bluesky/src/video-thumbnail.astro", void 0);

const $$Astro$6 = createAstro("https://www.rainsberger.ca");
const $$Avatar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Avatar;
  const { user, link, size = "medium" } = Astro2.props;
  const src = user.avatar;
  return renderTemplate`${link ? renderTemplate`${maybeRenderHead()}<a${addAttribute([["avatar", size], "astro-manwa2bn"], "class:list")}${addAttribute(`https://bsky.app/profile/${user?.handle}`, "href")} target="_blank" rel="noopener noreferrer nofollow">${src && renderTemplate`<img${addAttribute(src, "src")}${addAttribute(user.displayName ?? user.handle, "alt")} class="astro-manwa2bn">`}</a>` : renderTemplate`<div${addAttribute([["avatar", size], "astro-manwa2bn"], "class:list")}>${src && renderTemplate`<img${addAttribute(src, "src")}${addAttribute(user.displayName ?? user.handle, "alt")} class="astro-manwa2bn">`}</div>`}`;
}, "/home/user/starlight-blog/node_modules/@astro-community/astro-embed-bluesky/src/avatar.astro", void 0);

const $$Astro$5 = createAstro("https://www.rainsberger.ca");
const $$QuoteEmbed = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$QuoteEmbed;
  const { embed } = Astro2.props;
  return renderTemplate`${AppBskyEmbedRecord.isViewRecord(embed.record) && AppBskyFeedPost.isRecord(embed.record.value) ? renderTemplate`${maybeRenderHead()}<div class="post-container astro-focmzavi"><a${addAttribute(atUriToPostUri(embed.record.uri), "href")} class="post-link astro-focmzavi"><div class="user-info astro-focmzavi">${renderComponent($$result, "Avatar", $$Avatar, { "user": embed.record.author, "size": "small", "class": "astro-focmzavi" })}<p class="user-text astro-focmzavi"><span class="name astro-focmzavi">${embed.record.author.displayName}</span><span class="handle astro-focmzavi">@${embed.record.author.handle}</span></p></div></a><a${addAttribute(atUriToPostUri(embed.record.uri), "href")} class="post-link astro-focmzavi"><p class="content astro-focmzavi">${embed.record.value.text}</p></a>${renderComponent($$result, "Embed", $$Embed, { "embed": viewRecordToEmbed(embed.record), "postUrl": atUriToPostUri(embed.record.uri), "compact": true, "class": "astro-focmzavi" })}</div>` : null}`;
}, "/home/user/starlight-blog/node_modules/@astro-community/astro-embed-bluesky/src/quote-embed.astro", void 0);

const $$Astro$4 = createAstro("https://www.rainsberger.ca");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Card;
  const { href, image, avatarUser, title, subtitle, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} target="_blank" rel="noopener noreferrer nofollow" class="card astro-ovxpf64e"> ${image && renderTemplate`<img class="cover-image astro-ovxpf64e"${addAttribute(image.src, "src")}${addAttribute(image.alt ?? "", "alt")}>`} <div class="content astro-ovxpf64e"> <div class="header astro-ovxpf64e"> ${renderComponent($$result, "Avatar", $$Avatar, { "user": avatarUser, "class": "astro-ovxpf64e" })} <div class="title-group astro-ovxpf64e"> <p class="title astro-ovxpf64e">${title}</p> <p class="subtitle astro-ovxpf64e">${subtitle}</p> </div> </div> ${description && renderTemplate`<p class="description astro-ovxpf64e">${description}</p>`} </div> </a> `;
}, "/home/user/starlight-blog/node_modules/@astro-community/astro-embed-bluesky/src/card.astro", void 0);

const $$Astro$3 = createAstro("https://www.rainsberger.ca");
const $$StarterPack = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$StarterPack;
  const { record } = Astro2.props;
  const pack = AppBskyGraphStarterpack.isRecord(record.record) ? record.record : null;
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "href": atUriToStarterPackUri(record.uri), "image": {
    src: starterPackOgImage(record.uri),
    alt: pack?.name || "Starter pack cover image"
  }, "avatarUser": record.creator, "title": pack?.name || "", "subtitle": `Starter pack by ${record.creator.displayName}`, "description": pack?.description })}`;
}, "/home/user/starlight-blog/node_modules/@astro-community/astro-embed-bluesky/src/starter-pack.astro", void 0);

const $$Astro$2 = createAstro("https://www.rainsberger.ca");
const $$List = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$List;
  const { record } = Astro2.props;
  const list = AppBskyGraphDefs.isListView(record) ? record : null;
  const purposes = {
    "app.bsky.graph.defs#curatelist": "User list",
    "app.bsky.graph.defs#modlist": "Moderation list",
    "app.bsky.graph.defs#referencelist": "List"
  };
  const purpose = (list && purposes[list.purpose]) ?? "List";
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "href": atUriToListUri(record.uri), "avatarUser": record.creator, "title": list?.name || "", "subtitle": `${purpose} by ${record.creator.displayName}`, "description": list?.description })}`;
}, "/home/user/starlight-blog/node_modules/@astro-community/astro-embed-bluesky/src/list.astro", void 0);

const $$Astro$1 = createAstro("https://www.rainsberger.ca");
const $$Embed = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Embed;
  const { embed, postUrl, compact } = Astro2.props;
  return renderTemplate`${match(embed).when(AppBskyEmbedRecordWithMedia.isView, (embed2) => renderTemplate`${maybeRenderHead()}<div class="record-with-media astro-ojlygtsz">${renderComponent($$result, "Astro.self", Astro2.self, { "embed": embed2.media, "postUrl": postUrl, "compact": compact, "class": "astro-ojlygtsz" })}${renderComponent($$result, "QuoteEmbed", $$QuoteEmbed, { "embed": embed2.record, "class": "astro-ojlygtsz" })}</div>`).when(AppBskyEmbedExternal.isView, (media) => renderTemplate`${renderComponent($$result, "External", $$External, { "embed": media, "compact": compact, "class": "astro-ojlygtsz" })}`).when(AppBskyEmbedImages.isView, (media) => renderTemplate`<a${addAttribute(postUrl, "href")} class="astro-ojlygtsz">${renderComponent($$result, "ImageGrid", $$ImageGrid, { "images": media.images, "class": "astro-ojlygtsz" })}</a>`).when(AppBskyEmbedVideo.isView, (media) => renderTemplate`<a${addAttribute(postUrl, "href")} class="astro-ojlygtsz">${renderComponent($$result, "VideoThumbnail", $$VideoThumbnail, { "thumbnail": media.thumbnail, "aspectRatio": media.aspectRatio, "class": "astro-ojlygtsz" })}</a>`).with(
    { record: P.when(AppBskyGraphDefs.isStarterPackViewBasic) },
    (media) => renderTemplate`${renderComponent($$result, "StarterPack", $$StarterPack, { "record": media.record, "class": "astro-ojlygtsz" })}`
  ).with({ record: P.when(AppBskyGraphDefs.isListView) }, (media) => renderTemplate`${renderComponent($$result, "List", $$List, { "record": media.record, "class": "astro-ojlygtsz" })}`).when(AppBskyEmbedRecord.isView, (media) => renderTemplate`${renderComponent($$result, "QuoteEmbed", $$QuoteEmbed, { "embed": media, "class": "astro-ojlygtsz" })}`).with(P.nullish, () => null).otherwise((media) => media?.$type)}`;
}, "/home/user/starlight-blog/node_modules/@astro-community/astro-embed-bluesky/src/embed.astro", void 0);

const $$Astro = createAstro("https://www.rainsberger.ca");
const $$Post = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Post;
  const postRef = Astro2.props.id ?? Astro2.props.post;
  if (!postRef) {
    return new Response("");
  }
  const post = await resolvePost(postRef);
  if (!post) {
    return new Response("");
  }
  const postUrl = atUriToPostUri(post.uri);
  const { record, embed, author } = post;
  const authorUrl = `https://bsky.app/profile/${author?.handle}`;
  const body = renderPostAsHtml(post);
  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: "UTC",
    timeZoneName: "short"
  });
  return renderTemplate`${maybeRenderHead()}<div class="bluesky-post-container not-content astro-cefdu6fu"> <div class="post-content astro-cefdu6fu"> <div class="post-header astro-cefdu6fu"> ${renderComponent($$result, "Avatar", $$Avatar, { "user": author, "link": true, "class": "astro-cefdu6fu" })} <div class="user-info astro-cefdu6fu"> <a${addAttribute(authorUrl, "href")} class="display-name astro-cefdu6fu">${author?.displayName}</a> <a${addAttribute(authorUrl, "href")} class="username astro-cefdu6fu">@${author?.handle}</a> </div> <a${addAttribute(postUrl, "href")} class="logo-link astro-cefdu6fu"> <img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0%200%20320%20286'%3e%3cpath%20fill='rgb(10,122,255)'%20d='M69.364%2019.146c36.687%2027.806%2076.147%2084.186%2090.636%20114.439%2014.489-30.253%2053.948-86.633%2090.636-114.439C277.107-.917%20320-16.44%20320%2032.957c0%209.865-5.603%2082.875-8.889%2094.729-11.423%2041.208-53.045%2051.719-90.071%2045.357%2064.719%2011.12%2081.182%2047.953%2045.627%2084.785-80%2082.874-106.667-44.333-106.667-44.333s-26.667%20127.207-106.667%2044.333c-35.555-36.832-19.092-73.665%2045.627-84.785-37.026%206.362-78.648-4.149-90.071-45.357C5.603%20115.832%200%2042.822%200%2032.957%200-16.44%2042.893-.917%2069.364%2019.147Z'/%3e%3c/svg%3e" class="bluesky-logo astro-cefdu6fu" alt="Bluesky"> </a> </div> <p class="post-text astro-cefdu6fu">${unescapeHTML(body)}</p> ${embed && renderTemplate`${renderComponent($$result, "Embed", $$Embed, { "embed": embed, "postUrl": postUrl, "class": "astro-cefdu6fu" })}`} <a${addAttribute(postUrl, "href")} class="timestamp astro-cefdu6fu"> ${formatter.format(new Date(record.createdAt ?? ""))} </a> </div> </div> `;
}, "/home/user/starlight-blog/node_modules/@astro-community/astro-embed-bluesky/src/post.astro", void 0);

export { $$YouTube as $, $$Post as a };
