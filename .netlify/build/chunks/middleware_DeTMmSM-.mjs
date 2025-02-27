import { b as createAstro, c as createComponent, W as maybeRenderHead, Z as unescapeHTML, a as renderTemplate, X as renderSlot, r as renderComponent, $ as addAttribute, a0 as renderScript, _ as Fragment, a1 as defineStyleVars, A as AstroUserError, a2 as spreadAttributes, a3 as renderHead } from './astro/server_DgC14Out.mjs';
import { p as printHref } from './Authors.684f257e_ZcElbZtT.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Icon, c as $$LinkButton, d as $$Badge, e as $$LinkCard, f as $$CardGrid } from './Code_DPCfmiuD.mjs';
import { s as starlightConfig, g as getCollection, r as renderEntry, a as getEntry } from './user-config_BfEp3o7N.mjs';
import * as z from 'zod';
import { i as getBlogTitle, m as getRelativeBlogUrl, d as getRelativeUrl, n as getBlogEntryMetadata, b as getBlogEntries, D as DefaultLocale, e as getPathWithLocale, h as config, o as isAnyBlogPostPage, p as getBlogEntry, q as isAnyBlogPage, r as getSidebarBlogEntries, t as isBlogRoot, u as getSidebarProps, v as isBlogTagPage, w as getAllAuthors, x as isBlogAuthorPage } from './content_rpfOBkRn.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image } from './_astro_assets_BQ_QfnC2.mjs';
import { a as stripTrailingSlash, b as stripLeadingSlash, c as stripHtmlExtension, e as ensureHtmlExtension, d as ensureTrailingSlash, p as project, B as BuiltInDefaultLocale, g as getCollectionPathFromRoot, f as pickLang, s as stripLeadingAndTrailingSlashes, h as ensureLeadingSlash, i as stripExtension, u as useTranslations } from './translations_B-yCkTVG.mjs';
import { klona } from 'klona/lite';
import { slug } from 'github-slugger';

const $$Astro$B = createAstro("https://www.rainsberger.ca");
const $$Banner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$B, $$props, $$slots);
  Astro2.self = $$Banner;
  const { banner } = Astro2.locals.starlightRoute.entry.data;
  return renderTemplate`${banner && renderTemplate`${maybeRenderHead()}<div class="sl-banner astro-laz2plt2">${unescapeHTML(banner.content)}</div>`}`;
}, "/home/user/starlight-blog/node_modules/@astrojs/starlight/components/Banner.astro", void 0);

const $$ContentPanel = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="content-panel astro-7nkwcw3z"> <div class="sl-container astro-7nkwcw3z">${renderSlot($$result, $$slots["default"])}</div> </div> `;
}, "/home/user/starlight-blog/node_modules/@astrojs/starlight/components/ContentPanel.astro", void 0);

const $$Astro$A = createAstro("https://www.rainsberger.ca");
const $$ContentNotice = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$A, $$props, $$slots);
  Astro2.self = $$ContentNotice;
  const { icon, label } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p class="sl-flex astro-opzsrvew"> ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "size": "1.5em", "color": "var(--sl-color-orange-high)", "class": "astro-opzsrvew" })} <span class="astro-opzsrvew">${label}</span> </p> `;
}, "/home/user/starlight-blog/node_modules/@astrojs/starlight/components/ContentNotice.astro", void 0);

const $$Astro$z = createAstro("https://www.rainsberger.ca");
const $$FallbackContentNotice = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$z, $$props, $$slots);
  Astro2.self = $$FallbackContentNotice;
  return renderTemplate`${renderComponent($$result, "ContentNotice", $$ContentNotice, { "icon": "warning", "label": Astro2.locals.t("i18n.untranslatedContent") })}`;
}, "/home/user/starlight-blog/node_modules/@astrojs/starlight/components/FallbackContentNotice.astro", void 0);

const $$Astro$y = createAstro("https://www.rainsberger.ca");
const $$DraftContentNotice = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$y, $$props, $$slots);
  Astro2.self = $$DraftContentNotice;
  return renderTemplate`${renderComponent($$result, "ContentNotice", $$ContentNotice, { "icon": "warning", "label": Astro2.locals.t("page.draft") })}`;
}, "/home/user/starlight-blog/node_modules/@astrojs/starlight/components/DraftContentNotice.astro", void 0);

const $$Astro$x = createAstro("https://www.rainsberger.ca");
const $$EditLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$x, $$props, $$slots);
  Astro2.self = $$EditLink;
  const { editUrl } = Astro2.locals.starlightRoute;
  return renderTemplate`${editUrl && renderTemplate`${maybeRenderHead()}<a${addAttribute(editUrl, "href")} class="sl-flex print:hidden astro-eez2twj6">${renderComponent($$result, "Icon", $$Icon, { "name": "pencil", "size": "1.2em", "class": "astro-eez2twj6" })}${Astro2.locals.t("page.editLink")}</a>`}`;
}, "/home/user/starlight-blog/node_modules/@astrojs/starlight/components/EditLink.astro", void 0);

const $$Astro$w = createAstro("https://www.rainsberger.ca");
const $$LastUpdated = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$w, $$props, $$slots);
  Astro2.self = $$LastUpdated;
  const { lang, lastUpdated } = Astro2.locals.starlightRoute;
  return renderTemplate`${lastUpdated && renderTemplate`${maybeRenderHead()}<p>${Astro2.locals.t("page.lastUpdated")}${" "}<time${addAttribute(lastUpdated.toISOString(), "datetime")}>${lastUpdated.toLocaleDateString(lang, { dateStyle: "medium", timeZone: "UTC" })}</time></p>`}`;
}, "/home/user/starlight-blog/node_modules/@astrojs/starlight/components/LastUpdated.astro", void 0);

const $$Astro$v = createAstro("https://www.rainsberger.ca");
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$v, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { dir, pagination } = Astro2.locals.starlightRoute;
  const { prev, next } = pagination;
  const isRtl = dir === "rtl";
  return renderTemplate`${maybeRenderHead()}<div class="pagination-links print:hidden astro-u2l5gyhi"${addAttribute(dir, "dir")}> ${prev && renderTemplate`<a${addAttribute(prev.href, "href")} rel="prev" class="astro-u2l5gyhi"> ${renderComponent($$result, "Icon", $$Icon, { "name": isRtl ? "right-arrow" : "left-arrow", "size": "1.5rem", "class": "astro-u2l5gyhi" })} <span class="astro-u2l5gyhi"> ${Astro2.locals.t("page.previousLink")} <br class="astro-u2l5gyhi"> <span class="link-title astro-u2l5gyhi">${prev.label}</span> </span> </a>`} ${next && renderTemplate`<a${addAttribute(next.href, "href")} rel="next" class="astro-u2l5gyhi"> ${renderComponent($$result, "Icon", $$Icon, { "name": isRtl ? "left-arrow" : "right-arrow", "size": "1.5rem", "class": "astro-u2l5gyhi" })} <span class="astro-u2l5gyhi"> ${Astro2.locals.t("page.nextLink")} <br class="astro-u2l5gyhi"> <span class="link-title astro-u2l5gyhi">${next.label}</span> </span> </a>`} </div> `;
}, "/home/user/starlight-blog/node_modules/@astrojs/starlight/components/Pagination.astro", void 0);

const $$Astro$u = createAstro("https://www.rainsberger.ca");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$u, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="sl-flex astro-3yyafb3n"> <div class="meta sl-flex astro-3yyafb3n"> ${renderComponent($$result, "EditLink", $$EditLink, { "class": "astro-3yyafb3n" })} ${renderComponent($$result, "LastUpdated", $$LastUpdated, { "class": "astro-3yyafb3n" })} </div> ${renderComponent($$result, "Pagination", $$Pagination, { "class": "astro-3yyafb3n" })} ${renderTemplate`<a class="kudos sl-flex astro-3yyafb3n" href="https://starlight.astro.build"> ${renderComponent($$result, "Icon", $$Icon, { "name": "starlight", "class": "astro-3yyafb3n" })} ${Astro2.locals.t("builtWithStarlight.label")} </a>`} </footer> `;
}, "/home/user/starlight-blog/node_modules/@astrojs/starlight/components/Footer.astro", void 0);

const $$License = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<p class="license astro-zghd3z2v" xmlns:cc="http://creativecommons.org/ns#">© 2021 - 2024 Sarah Rainsberger. Except where otherwise noted, and/or quoting external sources, the content of this site is licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1" style="display:inline-block;" class="astro-zghd3z2v">CC BY-NC-SA 4.0 <img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt="" class="astro-zghd3z2v"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt="" class="astro-zghd3z2v"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" alt="" class="astro-zghd3z2v"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1" alt="" class="astro-zghd3z2v"></a></p> `;
}, "/home/user/starlight-blog/src/components/License.astro", void 0);

var __freeze$4 = Object.freeze;
var __defProp$4 = Object.defineProperty;
var __template$4 = (cooked, raw) => __freeze$4(__defProp$4(cooked, "raw", { value: __freeze$4(cooked.slice()) }));
var _a$4;
const $$Astro$t = createAstro("https://www.rainsberger.ca");
const $$ConditionalFooter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$ConditionalFooter;
  const isBlog = Astro2.locals.starlightRoute.id.slice(0, 5) === "blog/";
  Astro2.locals.starlightRoute.id.slice(0, 8) === "blog/tags/";
  const isHomePage = Astro2.locals.starlightRoute.id === "";
  const isOtherPage = !isHomePage;
  return renderTemplate`${isBlog && renderTemplate(_a$4 || (_a$4 = __template$4(["", '<details class="astro-j6nhshny"><summary class="astro-j6nhshny">Toggle Comments</summary><div class="feedback astro-j6nhshny"><script src="https://giscus.app/client.js" data-repo="sarah11918/starlight-blog-comments" data-repo-id="R_kgDOMNav6A" data-category="Announcements" data-category-id="DIC_kwDOMNav6M4CgVsQ" data-mapping="pathname" data-strict="0" data-reactions-enabled="1" data-emit-metadata="0" data-input-position="top" data-theme="light" data-lang="en" data-loading="lazy" crossorigin="anonymous">\n      <\/script></div></details>'])), maybeRenderHead())}${isOtherPage && renderTemplate`${renderComponent($$result, "Default", $$Footer, { "class": "astro-j6nhshny" }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}`}${renderComponent($$result, "License", $$License, { "class": "astro-j6nhshny" })}`;
}, "/home/user/starlight-blog/src/components/ConditionalFooter.astro", void 0);

const version = "0.32.2";

const base = stripTrailingSlash("/");
function pathWithBase(path) {
  path = stripLeadingSlash(path);
  return path ? base + "/" + path : base + "/";
}
function fileWithBase(path) {
  path = stripLeadingSlash(path);
  return path ? base + "/" + path : base;
}

const HeadConfigSchema = () => z.array(
  z.object({
    /** Name of the HTML tag to add to `<head>`, e.g. `'meta'`, `'link'`, or `'script'`. */
    tag: z.enum(["title", "base", "link", "style", "meta", "script", "noscript", "template"]),
    /** Attributes to set on the tag, e.g. `{ rel: 'stylesheet', href: '/custom.css' }`. */
    attrs: z.record(z.union([z.string(), z.boolean(), z.undefined()])).default({}),
    /** Content to place inside the tag (optional). */
    content: z.string().default("")
  })
).default([]);

const HeadSchema = HeadConfigSchema();
function createHead(defaults, ...heads) {
  let head = HeadSchema.parse(defaults);
  for (const next of heads) {
    head = mergeHead(head, next);
  }
  return sortHead(head);
}
function hasTag(head, entry) {
  switch (entry.tag) {
    case "title":
      return head.some(({ tag }) => tag === "title");
    case "meta":
      return hasOneOf(head, entry, ["name", "property", "http-equiv"]);
    case "link":
      return head.some(({ attrs }) => attrs.rel === "canonical");
    default:
      return false;
  }
}
function hasOneOf(head, entry, keys) {
  const attr = getAttr(keys, entry);
  if (!attr) return false;
  const [key, val] = attr;
  return head.some(({ tag, attrs }) => tag === entry.tag && attrs[key] === val);
}
function getAttr(keys, entry) {
  let attr;
  for (const key of keys) {
    const val = entry.attrs[key];
    if (val) {
      attr = [key, val];
      break;
    }
  }
  return attr;
}
function mergeHead(oldHead, newHead) {
  return [...oldHead.filter((tag) => !hasTag(newHead, tag)), ...newHead];
}
function sortHead(head) {
  return head.sort((a, b) => {
    const aImportance = getImportance(a);
    const bImportance = getImportance(b);
    return aImportance > bImportance ? -1 : bImportance > aImportance ? 1 : 0;
  });
}
function getImportance(entry) {
  if (entry.tag === "meta" && ("charset" in entry.attrs || "http-equiv" in entry.attrs || entry.attrs.name === "viewport")) {
    return 100;
  }
  if (entry.tag === "title") return 90;
  if (entry.tag !== "meta") {
    if (entry.tag === "link" && "rel" in entry.attrs && entry.attrs.rel === "shortcut icon") {
      return 70;
    }
    return 80;
  }
  return 0;
}

const $$Astro$s = createAstro("https://www.rainsberger.ca");
const $$Head = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$Head;
  const { entry, lang, siteTitle } = Astro2.locals.starlightRoute;
  const { data } = entry;
  const canonical = Astro2.site ? new URL(Astro2.url.pathname, Astro2.site) : void 0;
  const description = data.description || starlightConfig.description;
  const headDefaults = [
    { tag: "meta", attrs: { charset: "utf-8" } },
    {
      tag: "meta",
      attrs: { name: "viewport", content: "width=device-width, initial-scale=1" }
    },
    { tag: "title", content: `${data.title} ${starlightConfig.titleDelimiter} ${siteTitle}` },
    { tag: "link", attrs: { rel: "canonical", href: canonical?.href } },
    { tag: "meta", attrs: { name: "generator", content: Astro2.generator } },
    {
      tag: "meta",
      attrs: { name: "generator", content: `Starlight v${version}` }
    },
    // Favicon
    {
      tag: "link",
      attrs: {
        rel: "shortcut icon",
        href: fileWithBase(starlightConfig.favicon.href),
        type: starlightConfig.favicon.type
      }
    },
    // OpenGraph Tags
    { tag: "meta", attrs: { property: "og:title", content: data.title } },
    { tag: "meta", attrs: { property: "og:type", content: "article" } },
    { tag: "meta", attrs: { property: "og:url", content: canonical?.href } },
    { tag: "meta", attrs: { property: "og:locale", content: lang } },
    { tag: "meta", attrs: { property: "og:description", content: description } },
    { tag: "meta", attrs: { property: "og:site_name", content: siteTitle } },
    // Twitter Tags
    {
      tag: "meta",
      attrs: { name: "twitter:card", content: "summary_large_image" }
    }
  ];
  if (description)
    headDefaults.push({
      tag: "meta",
      attrs: { name: "description", content: description }
    });
  if (Astro2.site) {
    headDefaults.push({
      tag: "link",
      attrs: {
        rel: "sitemap",
        href: fileWithBase("/sitemap-index.xml")
      }
    });
  }
  if (starlightConfig.social?.twitter) {
    headDefaults.push({
      tag: "meta",
      attrs: {
        name: "twitter:site",
        content: new URL(starlightConfig.social.twitter.url).pathname
      }
    });
  }
  const head = createHead(headDefaults, starlightConfig.head, data.head);
  return renderTemplate`${head.map(({ tag: Tag, attrs, content }) => renderTemplate`${renderComponent($$result, "Tag", Tag, { ...attrs }, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}`)}`;
}, "/home/user/starlight-blog/node_modules/@astrojs/starlight/components/Head.astro", void 0);

const $$Astro$r = createAstro("https://www.rainsberger.ca");
const $$Select = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$Select;
  return renderTemplate`${maybeRenderHead()}<label${addAttribute(`--sl-select-width: ${Astro2.props.width}`, "style")} class="astro-4yphtoen"> <span class="sr-only astro-4yphtoen">${Astro2.props.label}</span> ${renderComponent($$result, "Icon", $$Icon, { "name": Astro2.props.icon, "class": "icon label-icon astro-4yphtoen" })} <select${addAttribute(Astro2.props.value, "value")} autocomplete="off" class="astro-4yphtoen"> ${Astro2.props.options.map(({ value, selected, label }) => renderTemplate`<option${addAttribute(value, "value")}${addAttribute(selected, "selected")} class="astro-4yphtoen">${unescapeHTML(label)}</option>`)} </select> ${renderComponent($$result, "Icon", $$Icon, { "name": "down-caret", "class": "icon caret astro-4yphtoen" })} </label> `;
}, "/home/user/starlight-blog/node_modules/@astrojs/starlight/components/Select.astro", void 0);

const $$Astro$q = createAstro("https://www.rainsberger.ca");
const $$LanguageSelect = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$LanguageSelect;
  return renderTemplate`${starlightConfig.isMultilingual}${renderScript($$result, "/home/user/starlight-blog/node_modules/@astrojs/starlight/components/LanguageSelect.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/user/starlight-blog/node_modules/@astrojs/starlight/components/LanguageSelect.astro", void 0);

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(cooked.slice()) }));
var _a$3;
const $$Astro$p = createAstro("https://www.rainsberger.ca");
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$Search;
  const pagefindTranslations = {
    placeholder: Astro2.locals.t("search.label"),
    ...Object.fromEntries(
      Object.entries(Astro2.locals.t.all()).filter(([key]) => key.startsWith("pagefind.")).map(([key, value]) => [key.replace("pagefind.", ""), value])
    )
  };
  const dataAttributes = { "data-translations": JSON.stringify(pagefindTranslations) };
  return renderTemplate(_a$3 || (_a$3 = __template$3(["", "  <script>\n	(() => {\n		const openBtn = document.querySelector('button[data-open-modal]');\n		const shortcut = openBtn?.querySelector('kbd');\n		if (!openBtn || !(shortcut instanceof HTMLElement)) return;\n		const platformKey = shortcut.querySelector('kbd');\n		if (platformKey && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) {\n			platformKey.textContent = '⌘';\n			openBtn.setAttribute('aria-keyshortcuts', 'Meta+K');\n		}\n		shortcut.style.display = '';\n	})();\n</script> ", "  "])), renderComponent($$result, "site-search", "site-search", { "class": (Astro2.props.class ?? "") + " astro-v37mnknz", ...dataAttributes }, { "default": () => renderTemplate` ${maybeRenderHead()}<button data-open-modal disabled${addAttribute(Astro2.locals.t("search.label"), "aria-label")} aria-keyshortcuts="Control+K" class="astro-v37mnknz"> ${renderComponent($$result, "Icon", $$Icon, { "name": "magnifier", "class": "astro-v37mnknz" })} <span class="sl-hidden md:sl-block astro-v37mnknz" aria-hidden="true">${Astro2.locals.t("search.label")}</span> <kbd class="sl-hidden md:sl-flex astro-v37mnknz" style="display: none;"> <kbd class="astro-v37mnknz">${Astro2.locals.t("search.ctrlKey")}</kbd><kbd class="astro-v37mnknz">K</kbd> </kbd> </button> <dialog style="padding:0"${addAttribute(Astro2.locals.t("search.label"), "aria-label")} class="astro-v37mnknz"> <div class="dialog-frame sl-flex astro-v37mnknz">  <button data-close-modal class="sl-flex md:sl-hidden astro-v37mnknz"> ${Astro2.locals.t("search.cancelLabel")} </button> ${renderTemplate`<div class="search-container astro-v37mnknz"> <div id="starlight__search" class="astro-v37mnknz"></div> </div>`} </div> </dialog> ` }), renderScript($$result, "/home/user/starlight-blog/node_modules/@astrojs/starlight/components/Search.astro?astro&type=script&index=0&lang.ts"));
}, "/home/user/starlight-blog/node_modules/@astrojs/starlight/components/Search.astro", void 0);

const src = new Proxy({"src":"/_astro/heartjay200.C4rJl-iA.webp","width":220,"height":200,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/user/starlight-blog/src/assets/heartjay200.webp";
							}
							
							return target[name];
						}
					});

const logos = { dark: src, light: src };

const $$Astro$o = createAstro("https://www.rainsberger.ca");
const $$SiteTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$SiteTitle;
  const { siteTitle, siteTitleHref } = Astro2.locals.starlightRoute;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(siteTitleHref, "href")} class="site-title sl-flex astro-m46x6ez3"> ${starlightConfig.logo && logos.dark && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-m46x6ez3" }, { "default": ($$result2) => renderTemplate` <img${addAttribute([{ "light:sl-hidden print:hidden": !("src" in starlightConfig.logo) }, "astro-m46x6ez3"], "class:list")}${addAttribute(starlightConfig.logo.alt, "alt")}${addAttribute(logos.dark.src, "src")}${addAttribute(logos.dark.width, "width")}${addAttribute(logos.dark.height, "height")}> ${!("src" in starlightConfig.logo) && renderTemplate`<img class="dark:sl-hidden print:block astro-m46x6ez3"${addAttribute(starlightConfig.logo.alt, "alt")}${addAttribute(logos.light?.src, "src")}${addAttribute(logos.light?.width, "width")}${addAttribute(logos.light?.height, "height")}>`}` })}`} <span${addAttribute([{ "sr-only": starlightConfig.logo?.replacesTitle }, "astro-m46x6ez3"], "class:list")} translate="no"> ${siteTitle} </span> </a> `;
}, "/home/user/starlight-blog/node_modules/@astrojs/starlight/components/SiteTitle.astro", void 0);

const $$SocialIcons = createComponent(($$result, $$props, $$slots) => {
  const links = Object.entries(starlightConfig.social || {});
  return renderTemplate`${links.length > 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-wy4te6ga" }, { "default": ($$result2) => renderTemplate`${links.map(([platform, { label, url }]) => renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} rel="me" class="sl-flex astro-wy4te6ga"><span class="sr-only astro-wy4te6ga">${label}</span>${renderComponent($$result2, "Icon", $$Icon, { "name": platform, "class": "astro-wy4te6ga" })}</a>`)}` })}`}`;
}, "/home/user/starlight-blog/node_modules/@astrojs/starlight/components/SocialIcons.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Astro$n = createAstro("https://www.rainsberger.ca");
const $$ThemeSelect$2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$ThemeSelect$2;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", "  <script>\n	StarlightThemeProvider.updatePickers();\n<\/script> ", ""])), renderComponent($$result, "starlight-theme-select", "starlight-theme-select", {}, { "default": () => renderTemplate`  ${renderComponent($$result, "Select", $$Select, { "icon": "laptop", "label": Astro2.locals.t("themeSelect.accessibleLabel"), "value": "auto", "options": [
    { label: Astro2.locals.t("themeSelect.dark"), selected: false, value: "dark" },
    { label: Astro2.locals.t("themeSelect.light"), selected: false, value: "light" },
    { label: Astro2.locals.t("themeSelect.auto"), selected: true, value: "auto" }
  ], "width": "6.25em" })} ` }), renderScript($$result, "/home/user/starlight-blog/node_modules/@astrojs/starlight/components/ThemeSelect.astro?astro&type=script&index=0&lang.ts"));
}, "/home/user/starlight-blog/node_modules/@astrojs/starlight/components/ThemeSelect.astro", void 0);

const $$Astro$m = createAstro("https://www.rainsberger.ca");
const $$ThemeSelect$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$ThemeSelect$1;
  const { locale } = Astro2.locals.starlightRoute;
  return renderTemplate`${maybeRenderHead()}<div class="astro-eboeziq4"> <a${addAttribute(getRelativeBlogUrl("/", locale), "href")} class="astro-eboeziq4">${getBlogTitle()}</a> </div> `;
}, "/home/user/starlight-blog/node_modules/starlight-blog/components/starlight/ThemeSelect.astro", void 0);

const $$ThemeSelect = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "StarlightBlogThemeSelect", $$ThemeSelect$1, {}, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })} ${renderComponent($$result, "Default", $$ThemeSelect$2, {}, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}`;
}, "/home/user/starlight-blog/node_modules/starlight-blog/overrides/ThemeSelect.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const shouldRenderSearch = starlightConfig.pagefind || starlightConfig.components.Search !== "@astrojs/starlight/components/Search.astro";
  return renderTemplate`${maybeRenderHead()}<div class="header sl-flex astro-kmkmnagf"> <div class="title-wrapper sl-flex astro-kmkmnagf"> ${renderComponent($$result, "SiteTitle", $$SiteTitle, { "class": "astro-kmkmnagf" })} </div> <div class="sl-flex print:hidden astro-kmkmnagf"> ${shouldRenderSearch && renderTemplate`${renderComponent($$result, "Search", $$Search, { "class": "astro-kmkmnagf" })}`} </div> <div class="sl-hidden md:sl-flex print:hidden right-group astro-kmkmnagf"> <div class="sl-flex social-icons astro-kmkmnagf"> ${renderComponent($$result, "SocialIcons", $$SocialIcons, { "class": "astro-kmkmnagf" })} </div> ${renderComponent($$result, "ThemeSelect", $$ThemeSelect, { "class": "astro-kmkmnagf" })} ${renderComponent($$result, "LanguageSelect", $$LanguageSelect, { "class": "astro-kmkmnagf" })} </div> </div> `;
}, "/home/user/starlight-blog/node_modules/@astrojs/starlight/components/Header.astro", void 0);

const PAGE_TITLE_ID = "_top";

const $$Astro$l = createAstro("https://www.rainsberger.ca");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$Hero;
  const { data } = Astro2.locals.starlightRoute.entry;
  const { title = data.title, tagline, image, actions = [] } = data.hero || {};
  const imageAttrs = {
    loading: "eager",
    decoding: "async",
    width: 400,
    height: 400,
    alt: image?.alt || ""
  };
  let darkImage;
  let lightImage;
  let rawHtml;
  if (image) {
    if ("file" in image) {
      darkImage = image.file;
    } else if ("dark" in image) {
      darkImage = image.dark;
      lightImage = image.light;
    } else {
      rawHtml = image.html;
    }
  }
  return renderTemplate`${maybeRenderHead()}<div class="hero astro-jbfsktt5"> ${darkImage && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": darkImage, ...imageAttrs, "class:list": [{ "light:sl-hidden": Boolean(lightImage) }, "astro-jbfsktt5"] })}`} ${lightImage && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": lightImage, ...imageAttrs, "class": "dark:sl-hidden astro-jbfsktt5" })}`} ${rawHtml && renderTemplate`<div class="hero-html sl-flex astro-jbfsktt5">${unescapeHTML(rawHtml)}</div>`} <div class="sl-flex stack astro-jbfsktt5"> <div class="sl-flex copy astro-jbfsktt5"> <h1${addAttribute(PAGE_TITLE_ID, "id")} data-page-title class="astro-jbfsktt5">${unescapeHTML(title)}</h1> ${tagline && renderTemplate`<div class="tagline astro-jbfsktt5">${unescapeHTML(tagline)}</div>`} </div> ${actions.length > 0 && renderTemplate`<div class="sl-flex actions astro-jbfsktt5"> ${actions.map(
    ({ attrs: { class: className, ...attrs } = {}, icon, link: href, text, variant }) => renderTemplate`${renderComponent($$result, "LinkButton", $$LinkButton, { "href": href, "variant": variant, "icon": icon?.name, "class:list": [[className], "astro-jbfsktt5"], ...attrs }, { "default": ($$result2) => renderTemplate`${text}${icon?.html && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(icon.html)}` })}`}` })}`
  )} </div>`} </div> </div> `;
}, "/home/user/starlight-blog/node_modules/@astrojs/starlight/components/Hero.astro", void 0);

const $$MarkdownContent$2 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="sl-markdown-content">${renderSlot($$result, $$slots["default"])}</div>`;
}, "/home/user/starlight-blog/node_modules/@astrojs/starlight/components/MarkdownContent.astro", void 0);

const $$Astro$k = createAstro("https://www.rainsberger.ca");
const $$Cover = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Cover;
  const { cover } = Astro2.props;
  const darkImage = "dark" in cover ? cover.dark : cover.image;
  const lightImage = "light" in cover ? cover.light : void 0;
  return renderTemplate`${maybeRenderHead()}<figure class="astro-ubv65s3q"> ${renderComponent($$result, "Image", $$Image, { "alt": cover.alt, "class:list": [{ "light:sl-hidden": Boolean(lightImage) }, "astro-ubv65s3q"], "loading": "eager", "src": darkImage })} ${lightImage && renderTemplate`${renderComponent($$result, "Image", $$Image, { "alt": cover.alt, "class": "dark:sl-hidden astro-ubv65s3q", "loading": "eager", "src": lightImage })}`} </figure> `;
}, "/home/user/starlight-blog/node_modules/starlight-blog/components/Cover.astro", void 0);

const $$Astro$j = createAstro("https://www.rainsberger.ca");
const $$Author = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Author;
  const { author } = Astro2.props;
  const isLink = author.url !== void 0;
  const Element = isLink ? "a" : "div";
  const pictureSrc = author.picture ? author.picture.startsWith("http") ? author.picture : getRelativeUrl(author.picture, true) : void 0;
  return renderTemplate`${renderComponent($$result, "Element", Element, { "href": isLink ? author.url : void 0, "class": "author astro-kbhsbk7c" }, { "default": ($$result2) => renderTemplate`${pictureSrc && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "alt": author.name, "loading": "eager", "src": pictureSrc, "height": 40, "width": 40, "class": "astro-kbhsbk7c" })}`}${maybeRenderHead()}<div class="text astro-kbhsbk7c"> <div class="name astro-kbhsbk7c">${author.name}</div> ${author.title && renderTemplate`<div class="title astro-kbhsbk7c">${author.title}</div>`} </div> ` })} `;
}, "/home/user/starlight-blog/node_modules/starlight-blog/components/Author.astro", void 0);

const $$Astro$i = createAstro("https://www.rainsberger.ca");
const $$Metadata = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Metadata;
  const { entry, locale, showBadges = true } = Astro2.props;
  const { authors, date, lastUpdated } = getBlogEntryMetadata(entry, locale);
  const hasAuthors = authors.length > 0;
  return renderTemplate`${maybeRenderHead()}<div class="metadata not-content astro-2oxtfctb"> <div class="dates astro-2oxtfctb"> <time${addAttribute(entry.data.date.toISOString(), "datetime")} class="astro-2oxtfctb"> ${date} </time> ${lastUpdated !== void 0 && typeof entry.data.lastUpdated !== "boolean" && entry.data.lastUpdated?.toISOString() !== entry.data.date.toISOString() ? renderTemplate`<span class="update-date astro-2oxtfctb">${unescapeHTML(Astro2.locals.t("starlightBlog.post.lastUpdate", {
    date: `<time datetime="${entry.data.lastUpdated?.toISOString()}">${lastUpdated}</time>`,
    interpolation: { escapeValue: false }
  }))}</span>` : null} </div> ${hasAuthors ? renderTemplate`<div class="authors astro-2oxtfctb"> ${authors.map((author) => renderTemplate`${renderComponent($$result, "Author", $$Author, { "author": author, "class": "astro-2oxtfctb" })}`)} </div>` : null} ${showBadges && (entry.data?.draft || entry.data.featured) && renderTemplate`<div class="badges astro-2oxtfctb"> ${entry.data.draft && renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "size": "medium", "text": Astro2.locals.t("starlightBlog.post.draft"), "variant": "caution", "class": "astro-2oxtfctb" })}`} ${entry.data.featured && renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "size": "medium", "text": Astro2.locals.t("starlightBlog.post.featured"), "variant": "note", "class": "astro-2oxtfctb" })}`} </div>`} </div> `;
}, "/home/user/starlight-blog/node_modules/starlight-blog/components/Metadata.astro", void 0);

async function getAllTags(locale) {
  const entries = await getBlogEntries(locale);
  const entryTags = /* @__PURE__ */ new Map();
  for (const entry of entries) {
    for (const tag of getEntryTags(entry)) {
      const infos = entryTags.get(tag.slug) ?? { entries: [], label: tag.label };
      infos.entries.push(entry);
      entryTags.set(tag.slug, infos);
    }
  }
  return entryTags;
}
async function getTagsStaticPaths() {
  const paths = [];
  {
    const entryTags = await getAllTags(DefaultLocale);
    for (const [slug2, { entries, label }] of entryTags.entries()) {
      paths.push(getTagsStaticPath(entries, slug2, label, DefaultLocale));
    }
  }
  return paths;
}
function getEntryTags(entry) {
  return (entry.data.tags ?? []).map((tag) => {
    return {
      label: tag,
      slug: slug(tag)
    };
  });
}
function getTagsStaticPath(entries, slug2, label, locale) {
  return {
    params: {
      prefix: getPathWithLocale(config.prefix, locale),
      tag: slug2
    },
    props: {
      entries,
      label,
      locale,
      tag: slug2
    }
  };
}

const $$Astro$h = createAstro("https://www.rainsberger.ca");
const $$PostTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$PostTags;
  const { entry, locale } = Astro2.props;
  const tags = getEntryTags(entry);
  return renderTemplate`${tags.length > 0 ? renderTemplate`${maybeRenderHead()}<div class="astro-sg3lsd66"><b class="astro-sg3lsd66">${Astro2.locals.t("starlightBlog.post.tags")}</b><ul class="astro-sg3lsd66">${tags.map((tag) => renderTemplate`<li class="astro-sg3lsd66"><a${addAttribute(getRelativeBlogUrl(`/tags/${tag.slug}`, locale), "href")} class="astro-sg3lsd66">${tag.label}</a></li>`)}</ul></div>` : null}`;
}, "/home/user/starlight-blog/node_modules/starlight-blog/components/PostTags.astro", void 0);

const $$Astro$g = createAstro("https://www.rainsberger.ca");
const $$PrevNextLinks = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$PrevNextLinks;
  const { next, prev } = Astro2.props;
  return renderTemplate`${prev || next ? renderTemplate`${maybeRenderHead()}<div class="pagination astro-q3jscx35" data-pagefind-ignore>${renderComponent($$result, "CardGrid", $$CardGrid, { "class": "astro-q3jscx35" }, { "default": ($$result2) => renderTemplate`${prev && renderTemplate`${renderComponent($$result2, "LinkCard", $$LinkCard, { "href": prev.href, "rel": "prev", "title": prev.label ?? Astro2.locals.t("starlightBlog.pagination.prev"), "class": "astro-q3jscx35" })}`}${next && renderTemplate`${renderComponent($$result2, "LinkCard", $$LinkCard, { "href": next.href, "rel": "next", "title": next.label ?? Astro2.locals.t("starlightBlog.pagination.next"), "class": "astro-q3jscx35" })}`}` })}</div>` : null}`;
}, "/home/user/starlight-blog/node_modules/starlight-blog/components/PrevNextLinks.astro", void 0);

const $$Astro$f = createAstro("https://www.rainsberger.ca");
const $$MarkdownContent$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$MarkdownContent$1;
  const { id, locale } = Astro2.locals.starlightRoute;
  if (!isAnyBlogPostPage(id)) {
    return null;
  }
  const { entry, nextLink, prevLink } = await getBlogEntry(id, locale);
  return renderTemplate`${renderComponent($$result, "Default", $$MarkdownContent$2, { "class": "astro-3jbi6clj" }, { "default": ($$result2) => renderTemplate`${entry.data.cover && renderTemplate`${renderComponent($$result2, "Cover", $$Cover, { "cover": entry.data.cover, "class": "astro-3jbi6clj" })}`}${renderComponent($$result2, "Metadata", $$Metadata, { "entry": entry, "locale": locale, "showBadges": false, "class": "astro-3jbi6clj" })} ${renderSlot($$result2, $$slots["default"])} ${maybeRenderHead()}<div class="post-footer astro-3jbi6clj"> ${renderComponent($$result2, "PostTags", $$PostTags, { "entry": entry, "locale": locale, "class": "astro-3jbi6clj" })} ${renderComponent($$result2, "PrevNextLinks", $$PrevNextLinks, { "next": nextLink, "prev": prevLink, "class": "astro-3jbi6clj" })} </div> ` })} `;
}, "/home/user/starlight-blog/node_modules/starlight-blog/components/starlight/MarkdownContent.astro", void 0);

const $$Astro$e = createAstro("https://www.rainsberger.ca");
const $$MarkdownContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$MarkdownContent;
  const { id } = Astro2.locals.starlightRoute;
  return renderTemplate`${isAnyBlogPostPage(id) ? renderTemplate`${renderComponent($$result, "StarlightBlogMarkdownContent", $$MarkdownContent$1, {}, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}` : renderTemplate`${renderComponent($$result, "Default", $$MarkdownContent$2, {}, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}`}`;
}, "/home/user/starlight-blog/node_modules/starlight-blog/overrides/MarkdownContent.astro", void 0);

const $$Astro$d = createAstro("https://www.rainsberger.ca");
const $$MobileMenuToggle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$MobileMenuToggle;
  return renderTemplate`${renderComponent($$result, "starlight-menu-button", "starlight-menu-button", { "class": "print:hidden astro-jif73yzw" }, { "default": () => renderTemplate` ${maybeRenderHead()}<button aria-expanded="false"${addAttribute(Astro2.locals.t("menuButton.accessibleLabel"), "aria-label")} aria-controls="starlight__sidebar" class="sl-flex md:sl-hidden astro-jif73yzw"> ${renderComponent($$result, "Icon", $$Icon, { "name": "bars", "class": "astro-jif73yzw" })} </button> ` })} ${renderScript($$result, "/home/user/starlight-blog/node_modules/@astrojs/starlight/components/MobileMenuToggle.astro?astro&type=script&index=0&lang.ts")}  `;
}, "/home/user/starlight-blog/node_modules/@astrojs/starlight/components/MobileMenuToggle.astro", void 0);

const $$Astro$c = createAstro("https://www.rainsberger.ca");
const $$PageFrame = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$PageFrame;
  const { hasSidebar } = Astro2.locals.starlightRoute;
  return renderTemplate`${maybeRenderHead()}<div class="page sl-flex astro-vrdttmbt"> <header class="header astro-vrdttmbt">${renderSlot($$result, $$slots["header"])}</header> ${hasSidebar && renderTemplate`<nav class="sidebar print:hidden astro-vrdttmbt"${addAttribute(Astro2.locals.t("sidebarNav.accessibleLabel"), "aria-label")}> ${renderComponent($$result, "MobileMenuToggle", $$MobileMenuToggle, { "class": "astro-vrdttmbt" })} <div id="starlight__sidebar" class="sidebar-pane astro-vrdttmbt"> <div class="sidebar-content sl-flex astro-vrdttmbt"> ${renderSlot($$result, $$slots["sidebar"])} </div> </div> </nav>`} <div class="main-frame astro-vrdttmbt">${renderSlot($$result, $$slots["default"])}</div> </div> `;
}, "/home/user/starlight-blog/node_modules/@astrojs/starlight/components/PageFrame.astro", void 0);

const $$Astro$b = createAstro("https://www.rainsberger.ca");
const $$TableOfContentsList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$TableOfContentsList;
  const { toc, isMobile = false, depth = 0 } = Astro2.props;
  const $$definedVars = defineStyleVars([{ depth }]);
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute([{ isMobile }, "astro-g2bywc46"], "class:list")}${addAttribute($$definedVars, "style")}> ${toc.map((heading) => renderTemplate`<li class="astro-g2bywc46"${addAttribute($$definedVars, "style")}> <a${addAttribute("#" + heading.slug, "href")} class="astro-g2bywc46"${addAttribute($$definedVars, "style")}> <span class="astro-g2bywc46"${addAttribute($$definedVars, "style")}>${heading.text}</span> </a> ${heading.children.length > 0 && renderTemplate`${renderComponent($$result, "Astro.self", Astro2.self, { "toc": heading.children, "depth": depth + 1, "isMobile": isMobile, "class": "astro-g2bywc46" })}`} </li>`)} </ul> `;
}, "/home/user/starlight-blog/node_modules/@astrojs/starlight/components/TableOfContents/TableOfContentsList.astro", void 0);

const $$Astro$a = createAstro("https://www.rainsberger.ca");
const $$MobileTableOfContents = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$MobileTableOfContents;
  const { toc } = Astro2.locals.starlightRoute;
  return renderTemplate`${toc && renderTemplate`${renderComponent($$result, "mobile-starlight-toc", "mobile-starlight-toc", { "data-min-h": toc.minHeadingLevel, "data-max-h": toc.maxHeadingLevel, "class": "astro-doynk5tl" }, { "default": () => renderTemplate`${maybeRenderHead()}<nav aria-labelledby="starlight__on-this-page--mobile" class="astro-doynk5tl"><details id="starlight__mobile-toc" class="astro-doynk5tl"><summary id="starlight__on-this-page--mobile" class="sl-flex astro-doynk5tl"><div class="toggle sl-flex astro-doynk5tl">${Astro2.locals.t("tableOfContents.onThisPage")}${renderComponent($$result, "Icon", $$Icon, { "name": "right-caret", "class": "caret astro-doynk5tl", "size": "1rem" })}</div><span class="display-current astro-doynk5tl"></span></summary><div class="dropdown astro-doynk5tl">${renderComponent($$result, "TableOfContentsList", $$TableOfContentsList, { "toc": toc.items, "isMobile": true, "class": "astro-doynk5tl" })}</div></details></nav>` })}`}${renderScript($$result, "/home/user/starlight-blog/node_modules/@astrojs/starlight/components/MobileTableOfContents.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/user/starlight-blog/node_modules/@astrojs/starlight/components/MobileTableOfContents.astro", void 0);

const $$Astro$9 = createAstro("https://www.rainsberger.ca");
const $$TableOfContents = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$TableOfContents;
  const { toc } = Astro2.locals.starlightRoute;
  return renderTemplate`${toc && renderTemplate`${renderComponent($$result, "starlight-toc", "starlight-toc", { "data-min-h": toc.minHeadingLevel, "data-max-h": toc.maxHeadingLevel }, { "default": () => renderTemplate`${maybeRenderHead()}<nav aria-labelledby="starlight__on-this-page"><h2 id="starlight__on-this-page">${Astro2.locals.t("tableOfContents.onThisPage")}</h2>${renderComponent($$result, "TableOfContentsList", $$TableOfContentsList, { "toc": toc.items })}</nav>` })}`}${renderScript($$result, "/home/user/starlight-blog/node_modules/@astrojs/starlight/components/TableOfContents.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/user/starlight-blog/node_modules/@astrojs/starlight/components/TableOfContents.astro", void 0);

const $$Astro$8 = createAstro("https://www.rainsberger.ca");
const $$PageSidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$PageSidebar;
  return renderTemplate`${Astro2.locals.starlightRoute.toc && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-pb3aqygn" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="lg:sl-hidden astro-pb3aqygn">${renderComponent($$result2, "MobileTableOfContents", $$MobileTableOfContents, { "class": "astro-pb3aqygn" })}</div><div class="right-sidebar-panel sl-hidden lg:sl-block astro-pb3aqygn"><div class="sl-container astro-pb3aqygn">${renderComponent($$result2, "TableOfContents", $$TableOfContents, { "class": "astro-pb3aqygn" })}</div></div>` })}`}`;
}, "/home/user/starlight-blog/node_modules/@astrojs/starlight/components/PageSidebar.astro", void 0);

const $$Astro$7 = createAstro("https://www.rainsberger.ca");
const $$PageTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$PageTitle;
  return renderTemplate`${maybeRenderHead()}<h1${addAttribute(PAGE_TITLE_ID, "id")} class="astro-j6tvhyss">${Astro2.locals.starlightRoute.entry.data.title}</h1> `;
}, "/home/user/starlight-blog/node_modules/@astrojs/starlight/components/PageTitle.astro", void 0);

const $$MobileMenuFooter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mobile-preferences sl-flex astro-wu23bvmt"> <div class="sl-flex social-icons astro-wu23bvmt"> ${renderComponent($$result, "SocialIcons", $$SocialIcons, { "class": "astro-wu23bvmt" })} </div> ${renderComponent($$result, "ThemeSelect", $$ThemeSelect, { "class": "astro-wu23bvmt" })} ${renderComponent($$result, "LanguageSelect", $$LanguageSelect, { "class": "astro-wu23bvmt" })} </div> `;
}, "/home/user/starlight-blog/node_modules/@astrojs/starlight/components/MobileMenuFooter.astro", void 0);

const defaultFormatStrategy = {
  addBase: pathWithBase,
  handleExtension: (href) => stripHtmlExtension(href)
};
const formatStrategies = {
  file: {
    addBase: fileWithBase,
    handleExtension: (href) => ensureHtmlExtension(href)
  },
  directory: defaultFormatStrategy,
  preserve: defaultFormatStrategy
};
const trailingSlashStrategies = {
  always: ensureTrailingSlash,
  never: stripTrailingSlash,
  ignore: (href) => href
};
function formatPath$1(href, { format = "directory", trailingSlash = "ignore" }) {
  const formatStrategy = formatStrategies[format];
  const trailingSlashStrategy = trailingSlashStrategies[trailingSlash];
  href = formatStrategy.handleExtension(href);
  href = formatStrategy.addBase(href);
  if (format === "file") return href;
  href = href === "/" ? href : trailingSlashStrategy(href);
  return href;
}
function createPathFormatter(opts) {
  return (href) => formatPath$1(href, opts);
}

const formatPath = createPathFormatter({
  format: project.build.format,
  trailingSlash: project.trailingSlash
});

function slugToLocale$1(slug, config) {
  const localesConfig = config.locales ?? {};
  const baseSegment = slug?.split("/")[0];
  if (baseSegment && localesConfig[baseSegment]) return baseSegment;
  if (!localesConfig.root) return config.defaultLocale.locale;
  return void 0;
}

function slugToLocale(slug) {
  return slugToLocale$1(slug, starlightConfig);
}
function slugToLocaleData(slug) {
  const locale = slugToLocale(slug);
  return { dir: localeToDir(locale), lang: localeToLang(locale), locale };
}
function localeToLang(locale) {
  const lang = locale ? starlightConfig.locales?.[locale]?.lang : starlightConfig.locales?.root?.lang;
  const defaultLang = starlightConfig.defaultLocale?.lang || starlightConfig.defaultLocale?.locale;
  return lang || defaultLang || BuiltInDefaultLocale.lang;
}
function localeToDir(locale) {
  const dir = locale ? starlightConfig.locales?.[locale]?.dir : starlightConfig.locales?.root?.dir;
  return dir || starlightConfig.defaultLocale.dir;
}
function slugToParam(slug) {
  return slug === "index" || slug === "" ? void 0 : slug.endsWith("/index") ? slug.slice(0, -6) : slug;
}
function slugToPathname(slug) {
  const param = slugToParam(slug);
  return param ? "/" + param + "/" : "/";
}
function localizedId(id, locale) {
  const idLocale = slugToLocale(id);
  if (idLocale) {
    return id.replace(idLocale + "/", locale ? locale + "/" : "");
  } else if (locale) {
    return locale + "/" + id;
  } else {
    return id;
  }
}
function urlToSlug(url) {
  let pathname = url.pathname;
  const base = stripTrailingSlash("/");
  if (pathname.startsWith(base)) pathname = pathname.replace(base, "");
  const segments = pathname.split("/");
  const htmlExt = ".html";
  if (segments.at(-1) === "index.html") {
    segments.pop();
  } else if (segments.at(-1)?.endsWith(htmlExt)) {
    const last = segments.pop();
    if (last) segments.push(last.slice(0, -1 * htmlExt.length));
  }
  return segments.filter(Boolean).join("/");
}

function validateLogoImports() {
  if (starlightConfig.logo) {
    let err;
    if ("src" in starlightConfig.logo) {
      if (!logos.dark || !logos.light) {
        err = `Could not resolve logo import for "${starlightConfig.logo.src}" (logo.src)`;
      }
    } else {
      if (!logos.dark) {
        err = `Could not resolve logo import for "${starlightConfig.logo.dark}" (logo.dark)`;
      } else if (!logos.light) {
        err = `Could not resolve logo import for "${starlightConfig.logo.light}" (logo.light)`;
      }
    }
    if (err) throw new Error(err);
  }
}

validateLogoImports();
const normalizeIndexSlug = (slug) => slug === "index" ? "" : slug;
function normalizeCollectionEntry(entry) {
  const slug = normalizeIndexSlug(entry.slug ?? entry.id);
  return {
    ...entry,
    // In a collection with a loader, the `id` is a slug and should be normalized.
    id: entry.slug ? entry.id : slug,
    // In a legacy collection, the `filePath` property doesn't exist.
    filePath: entry.filePath ?? `${getCollectionPathFromRoot("docs", project)}/${entry.id}`,
    // In a collection with a loader, the `slug` property is replaced by the `id`.
    slug: normalizeIndexSlug(entry.slug ?? entry.id)
  };
}
const docs = (await getCollection("docs", ({ data }) => {
  return data.draft === false;
}) ?? []).map(normalizeCollectionEntry);
function getRoutes() {
  const routes2 = docs.map((entry) => ({
    entry,
    slug: entry.slug,
    id: entry.id,
    entryMeta: slugToLocaleData(entry.slug),
    ...slugToLocaleData(entry.slug)
  }));
  return routes2;
}
const routes = getRoutes();
function getParamRouteMapping() {
  const map = /* @__PURE__ */ new Map();
  for (const route of routes) {
    map.set(slugToParam(route.slug), route);
  }
  return map;
}
const routesBySlugParam = getParamRouteMapping();
function getRouteBySlugParam(slugParam) {
  return routesBySlugParam.get(slugParam?.replace(/\/$/, "") || void 0);
}
function getPaths() {
  return routes.map((route) => ({
    params: { slug: slugToParam(route.slug) },
    props: route
  }));
}
const paths = getPaths();
function getLocaleRoutes(locale) {
  return filterByLocale(routes, locale);
}
function filterByLocale(items, locale) {
  if (starlightConfig.locales) {
    if (locale && locale in starlightConfig.locales) {
      return items.filter((i) => i.slug === locale || i.slug.startsWith(locale + "/"));
    } else if (starlightConfig.locales.root) {
      const langKeys = Object.keys(starlightConfig.locales).filter((k) => k !== "root");
      const isLangIndex = new RegExp(`^(${langKeys.join("|")})$`);
      const isLangDir = new RegExp(`^(${langKeys.join("|")})/`);
      return items.filter((i) => !isLangIndex.test(i.slug) && !isLangDir.test(i.slug));
    }
  }
  return items;
}

const DirKey = Symbol("DirKey");
const SlugKey = Symbol("SlugKey");
const neverPathFormatter = createPathFormatter({ trailingSlash: "never" });
const docsCollectionPathFromRoot = getCollectionPathFromRoot("docs", project);
function makeDir(slug) {
  const dir = {};
  Object.defineProperty(dir, DirKey, { enumerable: false });
  Object.defineProperty(dir, SlugKey, { value: slug, enumerable: false });
  return dir;
}
function isDir(data) {
  return DirKey in data;
}
function configItemToEntry(item, currentPathname, locale, routes2) {
  if ("link" in item) {
    return linkFromSidebarLinkItem(item, locale);
  } else if ("autogenerate" in item) {
    return groupFromAutogenerateConfig(item, locale, routes2, currentPathname);
  } else if ("slug" in item) {
    return linkFromInternalSidebarLinkItem(item, locale);
  } else {
    const label = pickLang(item.translations, localeToLang(locale)) || item.label;
    return {
      type: "group",
      label,
      entries: item.items.map((i) => configItemToEntry(i, currentPathname, locale, routes2)),
      collapsed: item.collapsed,
      badge: getSidebarBadge(item.badge, locale, label)
    };
  }
}
function groupFromAutogenerateConfig(item, locale, routes2, currentPathname) {
  const { collapsed: subgroupCollapsed, directory } = item.autogenerate;
  const localeDir = locale ? locale + "/" + directory : directory;
  const dirDocs = routes2.filter((doc) => {
    const filePathFromContentDir = getRoutePathRelativeToCollectionRoot(doc, locale);
    return (
      // Match against `foo.md` or `foo/index.md`.
      stripExtension(filePathFromContentDir) === localeDir || // Match against `foo/anything/else.md`.
      filePathFromContentDir.startsWith(localeDir + "/")
    );
  });
  const tree = treeify(dirDocs, locale, localeDir);
  const label = pickLang(item.translations, localeToLang(locale)) || item.label;
  return {
    type: "group",
    label,
    entries: sidebarFromDir(tree, currentPathname, locale, subgroupCollapsed ?? item.collapsed),
    collapsed: item.collapsed,
    badge: getSidebarBadge(item.badge, locale, label)
  };
}
const isAbsolute = (link) => /^https?:\/\//.test(link);
function linkFromSidebarLinkItem(item, locale) {
  let href = item.link;
  if (!isAbsolute(href)) {
    href = ensureLeadingSlash(href);
    if (locale) href = "/" + locale + href;
  }
  const label = pickLang(item.translations, localeToLang(locale)) || item.label;
  return makeSidebarLink$1(href, label, getSidebarBadge(item.badge, locale, label), item.attrs);
}
function linkFromInternalSidebarLinkItem(item, locale) {
  const slug = item.slug === "index" ? "" : item.slug;
  const localizedSlug = locale ? slug ? locale + "/" + slug : locale : slug;
  const route = routes.find((entry) => localizedSlug === entry.slug);
  if (!route) {
    const hasExternalSlashes = item.slug.at(0) === "/" || item.slug.at(-1) === "/";
    if (hasExternalSlashes) {
      throw new AstroUserError(
        `The slug \`"${item.slug}"\` specified in the Starlight sidebar config must not start or end with a slash.`,
        `Please try updating \`"${item.slug}"\` to \`"${stripLeadingAndTrailingSlashes(item.slug)}"\`.`
      );
    } else {
      throw new AstroUserError(
        `The slug \`"${item.slug}"\` specified in the Starlight sidebar config does not exist.`,
        "Update the Starlight config to reference a valid entry slug in the docs content collection.\nLearn more about Astro content collection slugs at https://docs.astro.build/en/reference/modules/astro-content/#getentry"
      );
    }
  }
  const frontmatter = route.entry.data;
  const label = pickLang(item.translations, localeToLang(locale)) || item.label || frontmatter.sidebar?.label || frontmatter.title;
  const badge = item.badge ?? frontmatter.sidebar?.badge;
  const attrs = { ...frontmatter.sidebar?.attrs, ...item.attrs };
  return makeSidebarLink$1(
    slugToPathname(route.slug),
    label,
    getSidebarBadge(badge, locale, label),
    attrs
  );
}
function makeSidebarLink$1(href, label, badge, attrs) {
  if (!isAbsolute(href)) {
    href = formatPath(href);
  }
  return makeLink({ label, href, badge, attrs });
}
function makeLink({
  attrs = {},
  badge = void 0,
  ...opts
}) {
  return { type: "link", ...opts, badge, isCurrent: false, attrs };
}
function pathsMatch(pathA, pathB) {
  return neverPathFormatter(pathA) === neverPathFormatter(pathB);
}
function getBreadcrumbs(path, baseDir) {
  const pathWithoutExt = stripExtension(path);
  if (pathWithoutExt === baseDir) return [];
  baseDir = ensureTrailingSlash(baseDir);
  const relativePath = pathWithoutExt.startsWith(baseDir) ? pathWithoutExt.replace(baseDir, "") : pathWithoutExt;
  return relativePath.split("/");
}
function getRoutePathRelativeToCollectionRoot(route, locale) {
  return (        localizedId(route.entry.filePath.replace(`${docsCollectionPathFromRoot}/`, ""), locale)
  );
}
function treeify(routes2, locale, baseDir) {
  const treeRoot = makeDir(baseDir);
  routes2.filter((doc) => !doc.entry.data.sidebar.hidden).map((doc) => [getRoutePathRelativeToCollectionRoot(doc, locale), doc]).sort(([a], [b]) => b.split("/").length - a.split("/").length).forEach(([filePathFromContentDir, doc]) => {
    const parts = getBreadcrumbs(filePathFromContentDir, baseDir);
    let currentNode = treeRoot;
    parts.forEach((part, index) => {
      const isLeaf = index === parts.length - 1;
      if (isLeaf && currentNode.hasOwnProperty(part)) {
        currentNode = currentNode[part];
        part = "index";
      }
      if (!isLeaf) {
        const path = currentNode[SlugKey];
        currentNode[part] ||= makeDir(stripLeadingAndTrailingSlashes(path + "/" + part));
        currentNode = currentNode[part];
      } else {
        currentNode[part] = doc;
      }
    });
  });
  return treeRoot;
}
function linkFromRoute(route) {
  return makeSidebarLink$1(
    slugToPathname(route.slug),
    route.entry.data.sidebar.label || route.entry.data.title,
    route.entry.data.sidebar.badge,
    route.entry.data.sidebar.attrs
  );
}
function getOrder(routeOrDir) {
  return isDir(routeOrDir) ? Math.min(...Object.values(routeOrDir).flatMap(getOrder)) : (
    // If no order value is found, set it to the largest number possible.
    routeOrDir.entry.data.sidebar.order ?? Number.MAX_VALUE
  );
}
function sortDirEntries(dir) {
  const collator = new Intl.Collator(localeToLang(void 0));
  return dir.sort(([_keyA, a], [_keyB, b]) => {
    const [aOrder, bOrder] = [getOrder(a), getOrder(b)];
    if (aOrder !== bOrder) return aOrder < bOrder ? -1 : 1;
    return collator.compare(isDir(a) ? a[SlugKey] : a.slug, isDir(b) ? b[SlugKey] : b.slug);
  });
}
function groupFromDir(dir, fullPath, dirName, currentPathname, locale, collapsed) {
  const entries = sortDirEntries(Object.entries(dir)).map(
    ([key, dirOrRoute]) => dirToItem(dirOrRoute, `${fullPath}/${key}`, key, currentPathname, locale, collapsed)
  );
  return {
    type: "group",
    label: dirName,
    entries,
    collapsed,
    badge: void 0
  };
}
function dirToItem(dirOrRoute, fullPath, dirName, currentPathname, locale, collapsed) {
  return isDir(dirOrRoute) ? groupFromDir(dirOrRoute, fullPath, dirName, currentPathname, locale, collapsed) : linkFromRoute(dirOrRoute);
}
function sidebarFromDir(tree, currentPathname, locale, collapsed) {
  return sortDirEntries(Object.entries(tree)).map(
    ([key, dirOrRoute]) => dirToItem(dirOrRoute, key, key, currentPathname, locale, collapsed)
  );
}
const intermediateSidebars = /* @__PURE__ */ new Map();
function getSidebar(pathname, locale) {
  let intermediateSidebar = intermediateSidebars.get(locale);
  if (!intermediateSidebar) {
    intermediateSidebar = getIntermediateSidebarFromConfig(starlightConfig.sidebar, pathname, locale);
    intermediateSidebars.set(locale, intermediateSidebar);
  }
  return getSidebarFromIntermediateSidebar(intermediateSidebar, pathname);
}
function getSidebarFromConfig(sidebarConfig, pathname, locale) {
  const intermediateSidebar = getIntermediateSidebarFromConfig(sidebarConfig, pathname, locale);
  return getSidebarFromIntermediateSidebar(intermediateSidebar, pathname);
}
function getIntermediateSidebarFromConfig(sidebarConfig, pathname, locale) {
  const routes2 = getLocaleRoutes(locale);
  if (sidebarConfig) {
    return sidebarConfig.map((group) => configItemToEntry(group, pathname, locale, routes2));
  } else {
    const tree = treeify(routes2, locale, locale || "");
    return sidebarFromDir(tree, pathname, locale, false);
  }
}
function getSidebarFromIntermediateSidebar(intermediateSidebar, pathname) {
  const sidebar = structuredClone(intermediateSidebar);
  setIntermediateSidebarCurrentEntry(sidebar, pathname);
  return sidebar;
}
function setIntermediateSidebarCurrentEntry(intermediateSidebar, pathname) {
  for (const entry of intermediateSidebar) {
    if (entry.type === "link" && pathsMatch(encodeURI(entry.href), pathname)) {
      entry.isCurrent = true;
      return true;
    }
    if (entry.type === "group" && setIntermediateSidebarCurrentEntry(entry.entries, pathname)) {
      return true;
    }
  }
  return false;
}
function getSidebarHash(sidebar) {
  let hash = 0;
  const sidebarIdentity = recursivelyBuildSidebarIdentity(sidebar);
  for (let i = 0; i < sidebarIdentity.length; i++) {
    const char = sidebarIdentity.charCodeAt(i);
    hash = (hash << 5) - hash + char;
  }
  return (hash >>> 0).toString(36).padStart(7, "0");
}
function recursivelyBuildSidebarIdentity(sidebar) {
  return sidebar.flatMap(
    (entry) => entry.type === "group" ? entry.label + recursivelyBuildSidebarIdentity(entry.entries) : entry.label + entry.href
  ).join("");
}
function flattenSidebar(sidebar) {
  return sidebar.flatMap(
    (entry) => entry.type === "group" ? flattenSidebar(entry.entries) : entry
  );
}
function getPrevNextLinks(sidebar, paginationEnabled, config2) {
  const entries = flattenSidebar(sidebar);
  const currentIndex = entries.findIndex((entry) => entry.isCurrent);
  const prev = applyPrevNextLinkConfig(entries[currentIndex - 1], paginationEnabled, config2.prev);
  const next = applyPrevNextLinkConfig(
    currentIndex > -1 ? entries[currentIndex + 1] : void 0,
    paginationEnabled,
    config2.next
  );
  return { prev, next };
}
function applyPrevNextLinkConfig(link, paginationEnabled, config2) {
  if (config2 === false) return void 0;
  else if (config2 === true) return link;
  else if (typeof config2 === "string" && link) {
    return { ...link, label: config2 };
  } else if (typeof config2 === "object") {
    if (link) {
      return {
        ...link,
        label: config2.label ?? link.label,
        href: config2.link ?? link.href,
        // Explicitly remove sidebar link attributes for prev/next links.
        attrs: {}
      };
    } else if (config2.link && config2.label) {
      return makeLink({ href: config2.link, label: config2.label });
    }
  }
  return paginationEnabled ? link : void 0;
}
function getSidebarBadge(config2, locale, itemLabel) {
  if (!config2) return;
  if (typeof config2 === "string") {
    return { variant: "default", text: config2 };
  }
  return { ...config2, text: getSidebarBadgeText(config2.text, locale, itemLabel) };
}
function getSidebarBadgeText(text, locale, itemLabel) {
  if (typeof text === "string") return text;
  const defaultLang = starlightConfig.defaultLocale?.lang || starlightConfig.defaultLocale?.locale || BuiltInDefaultLocale.lang;
  const defaultText = text[defaultLang];
  if (!defaultText) {
    throw new AstroUserError(
      `The badge text for "${itemLabel}" must have a key for the default language "${defaultLang}".`,
      "Update the Starlight config to include a badge text for the default language.\nLearn more about sidebar badges internationalization at https://starlight.astro.build/guides/sidebar/#internationalization-with-badges"
    );
  }
  return pickLang(text, localeToLang(locale)) || defaultText;
}

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$6 = createAstro("https://www.rainsberger.ca");
const $$SidebarPersister = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$SidebarPersister;
  const hash = getSidebarHash(Astro2.locals.starlightRoute.sidebar);
  return renderTemplate`${renderComponent($$result, "sl-sidebar-state-persist", "sl-sidebar-state-persist", { "data-hash": hash, "class": "astro-kku4brbg" }, { "default": () => renderTemplate(_a$1 || (_a$1 = __template$1([` <script aria-hidden="true">
		(() => {
			try {
				if (!matchMedia('(min-width: 50em)').matches) return;
				/** @type {HTMLElement | null} */
				const target = document.querySelector('sl-sidebar-state-persist');
				const state = JSON.parse(sessionStorage.getItem('sl-sidebar-state') || '0');
				if (!target || !state || target.dataset.hash !== state.hash) return;
				window._starlightScrollRestore = state.scroll;
				customElements.define(
					'sl-sidebar-restore',
					class SidebarRestore extends HTMLElement {
						connectedCallback() {
							try {
								const idx = parseInt(this.dataset.index || '');
								const details = this.closest('details');
								if (details && typeof state.open[idx] === 'boolean') details.open = state.open[idx];
							} catch {}
						}
					}
				);
			} catch {}
		})();
	<\/script> `, ` <script aria-hidden="true">
		(() => {
			const scroller = document.getElementById('starlight__sidebar');
			if (!window._starlightScrollRestore || !scroller) return;
			scroller.scrollTop = window._starlightScrollRestore;
			delete window._starlightScrollRestore;
		})();
	<\/script> `])), renderSlot($$result, $$slots["default"])) })} `;
}, "/home/user/starlight-blog/node_modules/@astrojs/starlight/components/SidebarPersister.astro", void 0);

const $$Astro$5 = createAstro("https://www.rainsberger.ca");
const $$SidebarRestorePoint = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SidebarRestorePoint;
  const currentGroupIndexSymbol = Symbol.for("starlight-sidebar-group-index");
  const locals = Astro2.locals;
  const index = locals[currentGroupIndexSymbol] || 0;
  locals[currentGroupIndexSymbol] = index + 1;
  return renderTemplate`${renderComponent($$result, "sl-sidebar-restore", "sl-sidebar-restore", { "data-index": index })}`;
}, "/home/user/starlight-blog/node_modules/@astrojs/starlight/components/SidebarRestorePoint.astro", void 0);

const $$Astro$4 = createAstro("https://www.rainsberger.ca");
const $$SidebarSublist = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SidebarSublist;
  const { sublist, nested } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute([{ "top-level": !nested }, "astro-3ii7xxms"], "class:list")}> ${sublist.map((entry) => renderTemplate`<li class="astro-3ii7xxms"> ${entry.type === "link" ? renderTemplate`<a${addAttribute(entry.href, "href")}${addAttribute(entry.isCurrent && "page", "aria-current")}${addAttribute([[{ large: !nested }, entry.attrs.class], "astro-3ii7xxms"], "class:list")}${spreadAttributes(entry.attrs)}> <span class="astro-3ii7xxms">${entry.label}</span> ${entry.badge && renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "variant": entry.badge.variant, "class": (entry.badge.class ?? "") + " astro-3ii7xxms", "text": entry.badge.text })}`} </a>` : renderTemplate`<details${addAttribute(flattenSidebar(entry.entries).some((i) => i.isCurrent) || !entry.collapsed, "open")} class="astro-3ii7xxms"> ${renderComponent($$result, "SidebarRestorePoint", $$SidebarRestorePoint, { "class": "astro-3ii7xxms" })} <summary class="astro-3ii7xxms"> <div class="group-label astro-3ii7xxms"> <span class="large astro-3ii7xxms">${entry.label}</span> ${entry.badge && renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "variant": entry.badge.variant, "class": (entry.badge.class ?? "") + " astro-3ii7xxms", "text": entry.badge.text })}`} </div> ${renderComponent($$result, "Icon", $$Icon, { "name": "right-caret", "class": "caret astro-3ii7xxms", "size": "1.25rem" })} </summary> ${renderComponent($$result, "Astro.self", Astro2.self, { "sublist": entry.entries, "nested": true, "class": "astro-3ii7xxms" })} </details>`} </li>`)} </ul> `;
}, "/home/user/starlight-blog/node_modules/@astrojs/starlight/components/SidebarSublist.astro", void 0);

const $$Astro$3 = createAstro("https://www.rainsberger.ca");
const $$Sidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Sidebar;
  const { sidebar } = Astro2.locals.starlightRoute;
  return renderTemplate`${renderComponent($$result, "SidebarPersister", $$SidebarPersister, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SidebarSublist", $$SidebarSublist, { "sublist": sidebar })} ` })} ${maybeRenderHead()}<div class="md:sl-hidden"> ${renderComponent($$result, "MobileMenuFooter", $$MobileMenuFooter, {})} </div>`;
}, "/home/user/starlight-blog/node_modules/@astrojs/starlight/components/Sidebar.astro", void 0);

const $$Astro$2 = createAstro("https://www.rainsberger.ca");
const $$SkipLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SkipLink;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`#${PAGE_TITLE_ID}`, "href")} class="astro-7q3lir66">${Astro2.locals.t("skipLink.label")}</a> `;
}, "/home/user/starlight-blog/node_modules/@astrojs/starlight/components/SkipLink.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$ThemeProvider = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["<script>\n	window.StarlightThemeProvider = (() => {\n		const storedTheme =\n			typeof localStorage !== 'undefined' && localStorage.getItem('starlight-theme');\n		const theme =\n			storedTheme ||\n			(window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');\n		document.documentElement.dataset.theme = theme === 'light' ? 'light' : 'dark';\n		return {\n			updatePickers(theme = storedTheme || 'auto') {\n				document.querySelectorAll('starlight-theme-select').forEach((picker) => {\n					const select = picker.querySelector('select');\n					if (select) select.value = theme;\n					/** @type {HTMLTemplateElement | null} */\n					const tmpl = document.querySelector(`#theme-icons`);\n					const newIcon = tmpl && tmpl.content.querySelector('.' + theme);\n					if (newIcon) {\n						const oldIcon = picker.querySelector('svg.label-icon');\n						if (oldIcon) {\n							oldIcon.replaceChildren(...newIcon.cloneNode(true).childNodes);\n						}\n					}\n				});\n			},\n		};\n	})();\n<\/script><template id=\"theme-icons\">", "", "", "</template>"], ["<script>\n	window.StarlightThemeProvider = (() => {\n		const storedTheme =\n			typeof localStorage !== 'undefined' && localStorage.getItem('starlight-theme');\n		const theme =\n			storedTheme ||\n			(window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');\n		document.documentElement.dataset.theme = theme === 'light' ? 'light' : 'dark';\n		return {\n			updatePickers(theme = storedTheme || 'auto') {\n				document.querySelectorAll('starlight-theme-select').forEach((picker) => {\n					const select = picker.querySelector('select');\n					if (select) select.value = theme;\n					/** @type {HTMLTemplateElement | null} */\n					const tmpl = document.querySelector(\\`#theme-icons\\`);\n					const newIcon = tmpl && tmpl.content.querySelector('.' + theme);\n					if (newIcon) {\n						const oldIcon = picker.querySelector('svg.label-icon');\n						if (oldIcon) {\n							oldIcon.replaceChildren(...newIcon.cloneNode(true).childNodes);\n						}\n					}\n				});\n			},\n		};\n	})();\n<\/script><template id=\"theme-icons\">", "", "", "</template>"])), renderComponent($$result, "Icon", $$Icon, { "name": "sun", "class": "light" }), renderComponent($$result, "Icon", $$Icon, { "name": "moon", "class": "dark" }), renderComponent($$result, "Icon", $$Icon, { "name": "laptop", "class": "auto" }));
}, "/home/user/starlight-blog/node_modules/@astrojs/starlight/components/ThemeProvider.astro", void 0);

const $$Astro$1 = createAstro("https://www.rainsberger.ca");
const $$TwoColumnContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TwoColumnContent;
  return renderTemplate`${maybeRenderHead()}<div class="lg:sl-flex astro-67yu43on"> ${Astro2.locals.starlightRoute.toc && renderTemplate`<aside class="right-sidebar-container print:hidden astro-67yu43on"> <div class="right-sidebar astro-67yu43on"> ${renderSlot($$result, $$slots["right-sidebar"])} </div> </aside>`} <div class="main-pane astro-67yu43on">${renderSlot($$result, $$slots["default"])}</div> </div> `;
}, "/home/user/starlight-blog/node_modules/@astrojs/starlight/components/TwoColumnContent.astro", void 0);

const $$Astro = createAstro("https://www.rainsberger.ca");
const $$Page = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Page;
  const { starlightRoute } = Astro2.locals;
  const pagefindEnabled = starlightRoute.entry.slug !== "404" && !starlightRoute.entry.slug.endsWith("/404") && starlightRoute.entry.data.pagefind !== false;
  const htmlDataAttributes = { "data-theme": "dark" };
  if (Boolean(starlightRoute.toc)) htmlDataAttributes["data-has-toc"] = "";
  if (starlightRoute.hasSidebar) htmlDataAttributes["data-has-sidebar"] = "";
  if (Boolean(starlightRoute.entry.data.hero)) htmlDataAttributes["data-has-hero"] = "";
  const mainDataAttributes = {};
  if (pagefindEnabled) mainDataAttributes["data-pagefind-body"] = "";
  return renderTemplate`<html${addAttribute(starlightRoute.lang, "lang")}${addAttribute(starlightRoute.dir, "dir")}${spreadAttributes(htmlDataAttributes, void 0, { "class": "astro-bguv2lll" })}> <head>${renderComponent($$result, "Head", $$Head, { "class": "astro-bguv2lll" })}${renderComponent($$result, "ThemeProvider", $$ThemeProvider, { "class": "astro-bguv2lll" })}<link rel="stylesheet"${addAttribute(printHref, "href")} media="print">${renderHead()}</head> <body class="astro-bguv2lll"> ${renderComponent($$result, "SkipLink", $$SkipLink, { "class": "astro-bguv2lll" })} ${renderComponent($$result, "PageFrame", $$PageFrame, { "class": "astro-bguv2lll" }, { "default": ($$result2) => renderTemplate`  ${renderScript($$result2, "/home/user/starlight-blog/node_modules/@astrojs/starlight/components/Page.astro?astro&type=script&index=0&lang.ts")} ${renderComponent($$result2, "TwoColumnContent", $$TwoColumnContent, { "class": "astro-bguv2lll" }, { "default": ($$result3) => renderTemplate`  <main${spreadAttributes(mainDataAttributes, void 0, { "class": "astro-bguv2lll" })}${addAttribute(starlightRoute.entryMeta.lang, "lang")}${addAttribute(starlightRoute.entryMeta.dir, "dir")}>  ${renderComponent($$result3, "Banner", $$Banner, { "class": "astro-bguv2lll" })} ${starlightRoute.entry.data.hero ? renderTemplate`${renderComponent($$result3, "ContentPanel", $$ContentPanel, { "class": "astro-bguv2lll" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Hero", $$Hero, { "class": "astro-bguv2lll" })} ${renderComponent($$result4, "MarkdownContent", $$MarkdownContent, { "class": "astro-bguv2lll" }, { "default": ($$result5) => renderTemplate` ${renderSlot($$result5, $$slots["default"])} ` })} ${renderComponent($$result4, "Footer", $$ConditionalFooter, { "class": "astro-bguv2lll" })} ` })}` : renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "class": "astro-bguv2lll" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "ContentPanel", $$ContentPanel, { "class": "astro-bguv2lll" }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "PageTitle", $$PageTitle, { "class": "astro-bguv2lll" })} ${starlightRoute.entry.data.draft && renderTemplate`${renderComponent($$result5, "DraftContentNotice", $$DraftContentNotice, { "class": "astro-bguv2lll" })}`}${starlightRoute.isFallback && renderTemplate`${renderComponent($$result5, "FallbackContentNotice", $$FallbackContentNotice, { "class": "astro-bguv2lll" })}`}` })} ${renderComponent($$result4, "ContentPanel", $$ContentPanel, { "class": "astro-bguv2lll" }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "MarkdownContent", $$MarkdownContent, { "class": "astro-bguv2lll" }, { "default": ($$result6) => renderTemplate` ${renderSlot($$result6, $$slots["default"])} ` })} ${renderComponent($$result5, "Footer", $$ConditionalFooter, { "class": "astro-bguv2lll" })} ` })} ` })}`} </main> `, "right-sidebar": ($$result3) => renderTemplate`${renderComponent($$result3, "PageSidebar", $$PageSidebar, { "slot": "right-sidebar", "class": "astro-bguv2lll" })}` })} `, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header", "class": "astro-bguv2lll" })}`, "sidebar": ($$result2) => renderTemplate`${starlightRoute.hasSidebar && renderTemplate`${renderComponent($$result2, "Sidebar", $$Sidebar, { "slot": "sidebar", "class": "astro-bguv2lll" })}`}` })} </body></html>`;
}, "/home/user/starlight-blog/node_modules/@astrojs/starlight/components/Page.astro", void 0);

function generateToC(headings, { minHeadingLevel, maxHeadingLevel, title }) {
  headings = headings.filter(({ depth }) => depth >= minHeadingLevel && depth <= maxHeadingLevel);
  const toc = [{ depth: 2, slug: PAGE_TITLE_ID, text: title, children: [] }];
  for (const heading of headings) injectChild(toc, { ...heading, children: [] });
  return toc;
}
function injectChild(items, item) {
  const lastItem = items.at(-1);
  if (!lastItem || lastItem.depth >= item.depth) {
    items.push(item);
  } else {
    return injectChild(lastItem.children, item);
  }
}

const makeAPI = (data) => {
  const trackedDocsFiles = new Map(data);
  return {
    getNewestCommitDate: (file) => {
      const timestamp = trackedDocsFiles.get(file);
      if (!timestamp) throw new Error(`Failed to retrieve the git history for file "${file}"`);
      return new Date(timestamp);
    }
  };
};

const api = makeAPI([["src/content/docs/about.mdx",1740276843000],["src/content/docs/photography.mdx",1740273957000],["src/content/docs/index.mdx",1740257331000],["src/content/docs/blog/community-driven-astro-docs.md",1740254873000],["src/content/docs/blog/contribute-open-source-docs-edit-page-on-github.md",1740254873000],["src/content/docs/blog/documenting-the-docs.md",1740254873000],["src/content/docs/blog/gitpod-astro.md",1740254873000],["src/content/docs/blog/idx-first-impressions.md",1740254873000],["src/content/docs/blog/non-code-contributions.md",1740254873000],["src/content/docs/blog/reads-2024-10-06.md",1740254873000],["src/content/docs/blog/stop-writing-start-helping.md",1740254873000],["src/content/docs/blog/50-49-nwtwwhb.mdx",1740252401000],["src/content/docs/gear.mdx",1740252401000],["src/content/docs/guides/contribute-to-open-source-via-edit-this-page.mdx",1740252401000],["src/content/docs/photography/art-advent-calendar.mdx",1737939732000],["src/content/docs/photography/silent-sunday.mdx",1737926440000],["src/content/docs/birding.mdx",1736108375000],["src/content/docs/choirtech.md",1736096608000],["src/content/docs/photography.md",1736096608000],["src/content/docs/blog/5-pin-bowling-simulation.md",1733103280000],["src/content/docs/blog/50-1-if-one-does-not-already-exist.mdx",1731257923000],["src/content/docs/blog/50-10-headings-work-alone.mdx",1731257923000],["src/content/docs/blog/50-11-what-could-have-been.mdx",1731257923000],["src/content/docs/blog/50-12-cool-story-bro.mdx",1731257923000],["src/content/docs/blog/50-13-inadvertently-inappropriate.mdx",1731257923000],["src/content/docs/blog/50-14-this-post-includes-advice.mdx",1731257923000],["src/content/docs/blog/50-15-dont-doc-when-you-can-fix.mdx",1731257923000],["src/content/docs/blog/50-16-if-you-want-to.mdx",1731257923000],["src/content/docs/blog/50-17-go-with-the-flow.mdx",1731257923000],["src/content/docs/blog/50-18-twist-then-pull.mdx",1731257923000],["src/content/docs/blog/50-19-be-the-change.mdx",1731257923000],["src/content/docs/blog/50-2-put-the-condition-first.mdx",1731257923000],["src/content/docs/blog/50-20-add-this-code.mdx",1731257923000],["src/content/docs/blog/50-21-prepare-to-be-assimilated.mdx",1731257923000],["src/content/docs/blog/50-22-and-then.mdx",1731257923000],["src/content/docs/blog/50-23-is-not-was.mdx",1731257923000],["src/content/docs/blog/50-24-mise-en-place.mdx",1731257923000],["src/content/docs/blog/50-25-just-follow-this-tip.mdx",1731257923000],["src/content/docs/blog/50-26-use-this.mdx",1731257923000],["src/content/docs/blog/50-27-writing-that-clicks.mdx",1731257923000],["src/content/docs/blog/50-28-this-time.mdx",1731257923000],["src/content/docs/blog/50-29-seen-and-not-heard.mdx",1731257923000],["src/content/docs/blog/50-3-repetition-pedagogical-tool.mdx",1731257923000],["src/content/docs/blog/50-30-link-in-your-chain.mdx",1731257923000],["src/content/docs/blog/50-31-as-not-shown-here.mdx",1731257923000],["src/content/docs/blog/50-32-defining-the-obvious.mdx",1731257923000],["src/content/docs/blog/50-33-whats-your-problem.mdx",1731257923000],["src/content/docs/blog/50-34-show-what-to-do.mdx",1731257923000],["src/content/docs/blog/50-35-link-in-bio.mdx",1731257923000],["src/content/docs/blog/50-36-not-my-problem.mdx",1731257923000],["src/content/docs/blog/50-37-right-words-wrong-place.mdx",1731257923000],["src/content/docs/blog/50-38-this-and-that.mdx",1731257923000],["src/content/docs/blog/50-39-smarty-pants.mdx",1731257923000],["src/content/docs/blog/50-4-make-it-a-heading.mdx",1731257923000],["src/content/docs/blog/50-40-make-my-day.mdx",1731257923000],["src/content/docs/blog/50-41-if-you-please.mdx",1731257923000],["src/content/docs/blog/50-42-whos-there.mdx",1731257923000],["src/content/docs/blog/50-43-whats-in-a-name.mdx",1731257923000],["src/content/docs/blog/50-44-we-did-it.mdx",1731257923000],["src/content/docs/blog/50-45-and-another-thing.mdx",1731257923000],["src/content/docs/blog/50-46-not-a-bug-its-a-feature.mdx",1731257923000],["src/content/docs/blog/50-47-ch-ch-ch-ch-changes.mdx",1731257923000],["src/content/docs/blog/50-48-do-it-yourself.mdx",1731257923000],["src/content/docs/blog/50-5-easy-fix-better-edit.mdx",1731257923000],["src/content/docs/blog/50-50-tip-your-server.mdx",1731257923000],["src/content/docs/blog/50-6-new-gets-old.mdx",1731257923000],["src/content/docs/blog/50-7-title-code-blocks.mdx",1731257923000],["src/content/docs/blog/50-8-dont-forget.mdx",1731257923000],["src/content/docs/blog/50-9-dislike-like.mdx",1731257923000],["src/content/docs/blog/50-docs-tips-in-50-days.md",1731257923000],["src/content/docs/.well-known/atproto-did",1730570706000],["src/content/docs/blog/_50-11-what-could-have-been.md",1720048905000],["src/content/docs/blog/50-10-headings-work-alone.md",1720040747000],["src/content/docs/blog/50-10-headings-used-in-toc.md",1720040438000],["src/content/docs/blog/50-9-dislike-like.md",1719953179000],["src/content/docs/blog/50-3-repetition-pedagogical-tool.md",1719858810000],["src/content/docs/blog/50-8-dont-forget.md",1719858810000],["src/content/docs/blog/50-7-title-code-blocks.md",1719765753000],["src/content/docs/blog/_50-7-title-code-blocks.md",1719765753000],["src/content/docs/blog/50-5-easy-fix-better-edit.md",1719763385000],["src/content/docs/blog/50-6-new-gets-old.md",1719763385000],["src/content/docs/blog/50-1-if-one-does-not-already-exist.md",1719588638000],["src/content/docs/blog/_50-5-easy-fix-better-edit.md",1719535651000],["src/content/docs/blog/50-4-make-it-a-heading.md",1719524800000],["src/content/docs/blog/50-2-put-the-condition-first.md",1719316043000],["src/content/docs/blog/50-2-hypothesis-first.md",1719315858000],["src/content/docs/blog/1-50-if-one-does-not-already-exist.md",1719259595000],["src/content/docs/guides/direct-link-for-posting-google-photos-image.md",1713987237000],["src/content/docs/blog/astro-learners-paradise.md",1701054924000],["src/content/docs/blog/create-astro-layout.md",1701054924000],["src/content/docs/blog/dynamic-routing-tag-pages-in-astro.md",1701054924000],["src/content/docs/blog/react-astro-first-things.md",1701054924000],["src/content/docs/blog/rewrite-react-as-astro.md",1701054924000],["src/content/docs/blog/thinking-in-astro-from-react.md",1701054924000],["src/content/docs/blog/xelement-bird-1.md",1701054924000],["src/content/docs/404.md",1701051055000],["src/content/docs/guides/contribute-to-open-source-via-edit-this-page.md",1701022080000],["src/content/docs/guides/create-new-astro-project-in-gitpod.mdx",1701022080000],["src/content/docs/guides/example.md",1701022080000],["src/content/docs/blog/hello-world.mdx",1700934733000],["src/content/docs/reference/example.md",1700921045000]]);const getNewestCommitDate = api.getNewestCommitDate;

async function useRouteData(context) {
  const route = "slug" in context.params && getRouteBySlugParam(context.params.slug) || await get404Route(context.locals);
  const { Content, headings } = await renderEntry(route.entry);
  const routeData = generateRouteData({ props: { ...route, headings }, url: context.url });
  return { ...routeData, Content };
}
function generateRouteData({
  props,
  url
}) {
  const { entry, locale, lang } = props;
  const sidebar = getSidebar(url.pathname, locale);
  const siteTitle = getSiteTitle(lang);
  return {
    ...props,
    siteTitle,
    siteTitleHref: getSiteTitleHref(locale),
    sidebar,
    hasSidebar: entry.data.template !== "splash",
    pagination: getPrevNextLinks(sidebar, starlightConfig.pagination, entry.data),
    toc: getToC(props),
    lastUpdated: getLastUpdated(props),
    editUrl: getEditUrl(props)
  };
}
function getToC({ entry, lang, headings }) {
  const tocConfig = entry.data.template === "splash" ? false : entry.data.tableOfContents !== void 0 ? entry.data.tableOfContents : starlightConfig.tableOfContents;
  if (!tocConfig) return;
  const t = useTranslations(lang);
  return {
    ...tocConfig,
    items: generateToC(headings, { ...tocConfig, title: t("tableOfContents.overview") })
  };
}
function getLastUpdated({ entry }) {
  const { lastUpdated: frontmatterLastUpdated } = entry.data;
  const { lastUpdated: configLastUpdated } = starlightConfig;
  if (frontmatterLastUpdated ?? configLastUpdated) {
    try {
      return frontmatterLastUpdated instanceof Date ? frontmatterLastUpdated : getNewestCommitDate(entry.filePath);
    } catch {
      return void 0;
    }
  }
  return void 0;
}
function getEditUrl({ entry }) {
  const { editUrl } = entry.data;
  if (editUrl === false) return;
  let url;
  if (typeof editUrl === "string") {
    url = editUrl;
  } else if (starlightConfig.editLink.baseUrl) {
    url = ensureTrailingSlash(starlightConfig.editLink.baseUrl) + entry.filePath;
  }
  return url ? new URL(url) : void 0;
}
function getSiteTitle(lang) {
  const defaultLang = starlightConfig.defaultLocale.lang;
  if (lang && starlightConfig.title[lang]) {
    return starlightConfig.title[lang];
  }
  return starlightConfig.title[defaultLang];
}
function getSiteTitleHref(locale) {
  return formatPath(locale || "/");
}
async function get404Route(locals) {
  const { lang = BuiltInDefaultLocale.lang, dir = BuiltInDefaultLocale.dir } = starlightConfig.defaultLocale || {};
  let locale = starlightConfig.defaultLocale?.locale;
  if (locale === "root") locale = void 0;
  const entryMeta = { dir, lang, locale };
  const fallbackEntry = {
    slug: "404",
    id: "404",
    body: "",
    collection: "docs",
    data: {
      title: "404",
      template: "splash",
      editUrl: false,
      head: [],
      hero: { tagline: locals.t("404.text"), actions: [] },
      pagefind: false,
      sidebar: { hidden: false, attrs: {} },
      draft: false
    },
    filePath: `${getCollectionPathFromRoot("docs", project)}/404.md`
  };
  const userEntry = await getEntry("docs", "404");
  const entry = userEntry ? normalizeCollectionEntry(userEntry) : fallbackEntry;
  return { ...entryMeta, entryMeta, entry, id: entry.id, slug: entry.slug };
}

function defineRouteMiddleware(fn) {
  return fn;
}

const blogDataPerLocale = /* @__PURE__ */ new Map();
const onRequest = defineRouteMiddleware(async (context) => {
  const { starlightRoute } = context.locals;
  const { id, locale } = starlightRoute;
  context.locals.starlightBlog = await getBlogData(starlightRoute);
  const isBlog = isAnyBlogPage(id);
  if (!isBlog) {
    starlightRoute.sidebar.unshift(
      makeSidebarLink(getBlogTitle(), getRelativeBlogUrl("/", locale), false, { class: "sl-blog-mobile-link" })
    );
    return;
  }
  starlightRoute.sidebar = await getBlogSidebar(context);
});
async function getBlogData({ locale }) {
  if (blogDataPerLocale.has(locale)) {
    return blogDataPerLocale.get(locale);
  }
  const blogData = {
    posts: await getBlogPostsData(locale)
  };
  blogDataPerLocale.set(locale, blogData);
  return blogData;
}
async function getBlogPostsData(locale) {
  const entries = await getBlogEntries(locale);
  return entries.map((entry) => {
    const { authors } = getBlogEntryMetadata(entry, locale);
    const tags = getEntryTags(entry);
    const postsData = {
      authors: authors.map(({ name, title, url }) => ({
        name,
        title,
        url
      })),
      createdAt: entry.data.date,
      draft: entry.data.draft,
      featured: entry.data.featured === true,
      href: getRelativeUrl(`/${getPathWithLocale(entry.id, locale)}`),
      tags: tags.map(({ label, slug }) => ({
        label,
        href: getRelativeBlogUrl(`/tags/${slug}`, locale)
      })),
      title: entry.data.title
    };
    if (entry.data.lastUpdated && typeof entry.data.lastUpdated !== "boolean") {
      postsData.updatedAt = entry.data.lastUpdated;
    }
    return postsData;
  });
}
async function getBlogSidebar(context) {
  const { starlightRoute, t } = context.locals;
  const { id, locale } = starlightRoute;
  const { featured, recent } = await getSidebarBlogEntries(locale);
  const sidebar = [
    makeSidebarLink(t("starlightBlog.sidebar.all"), getRelativeBlogUrl("/", locale), isBlogRoot(id))
  ];
  if (featured.length > 0) {
    sidebar.push(makeSidebarGroup(t("starlightBlog.sidebar.featured"), getSidebarProps(id, featured, locale)));
  }
  sidebar.push(makeSidebarGroup(t("starlightBlog.sidebar.recent"), getSidebarProps(id, recent, locale)));
  const tags = await getAllTags(locale);
  if (tags.size > 0) {
    sidebar.push(
      makeSidebarGroup(
        t("starlightBlog.sidebar.tags"),
        [...tags].sort(([, a], [, b]) => {
          if (a.entries.length === b.entries.length) {
            return a.label.localeCompare(b.label);
          }
          return b.entries.length - a.entries.length;
        }).map(
          ([tagSlug, { entries, label }]) => makeSidebarLink(
            `${label} (${entries.length})`,
            getRelativeBlogUrl(`/tags/${tagSlug}`, locale),
            isBlogTagPage(id, tagSlug)
          )
        )
      )
    );
  }
  const authors = await getAllAuthors(locale);
  if (authors.size > 1) {
    sidebar.push(
      makeSidebarGroup(
        t("starlightBlog.sidebar.authors"),
        [...authors].sort(([, a], [, b]) => {
          if (a.entries.length === b.entries.length) {
            return a.author.name.localeCompare(b.author.name);
          }
          return b.entries.length - a.entries.length;
        }).map(
          ([, { author, entries }]) => makeSidebarLink(
            `${author.name} (${entries.length})`,
            getRelativeBlogUrl(`/authors/${author.slug}`, locale),
            isBlogAuthorPage(id, author.slug)
          )
        )
      )
    );
  }
  if (context.site) {
    sidebar.push(makeSidebarLink(t("starlightBlog.sidebar.rss"), getRelativeBlogUrl("/rss.xml", locale, true), false));
  }
  return sidebar;
}
function makeSidebarLink(label, href, isCurrent, attributes) {
  return {
    attrs: attributes ?? {},
    badge: void 0,
    href,
    isCurrent,
    label,
    type: "link"
  };
}
function makeSidebarGroup(label, entries) {
  return {
    badge: void 0,
    collapsed: false,
    entries,
    label,
    type: "group"
  };
}

const routeMiddleware = [
	onRequest,
];

async function attachRouteDataAndRunMiddleware(context, routeData) {
  context.locals.starlightRoute = klona(routeData);
  const runner = new MiddlewareRunner(context, routeMiddleware);
  await runner.run();
}
class MiddlewareRunnerStep {
  #callback;
  constructor(callback) {
    this.#callback = callback;
  }
  async run(context, next) {
    if (this.#callback) {
      await this.#callback(context, next);
      this.#callback = null;
    }
  }
}
class MiddlewareRunner {
  #context;
  #steps;
  constructor(context, stack = []) {
    this.#context = context;
    this.#steps = stack.map((callback) => new MiddlewareRunnerStep(callback));
  }
  async #stepThrough(steps) {
    let currentStep;
    while (steps.length > 0) {
      [currentStep, ...steps] = steps;
      await currentStep.run(this.#context, async () => this.#stepThrough(steps));
    }
  }
  async run() {
    await this.#stepThrough(this.#steps);
  }
}

export { $$PrevNextLinks as $, HeadConfigSchema as H, getSidebarFromConfig as a, getSidebar as b, getToC as c, getSiteTitleHref as d, getSiteTitle as e, getPrevNextLinks as f, getTagsStaticPaths as g, attachRouteDataAndRunMiddleware as h, $$Page as i, $$Metadata as j, $$PostTags as k, useRouteData as l, slugToLocale$1 as m, paths as p, slugToLocaleData as s, urlToSlug as u };
