import { s as starlightConfig, g as getCollection, a as getEntry, r as renderEntry } from './user-config_BfEp3o7N.mjs';
import { slug } from 'github-slugger';

const config = {"authors":{"sarah":{"name":"Sarah","title":"","picture":"/profile.jpg","url":"https://rainsberger.ca/about/"}},"prefix":"blog","postCount":15,"recentPostCount":10,"title":"Blog"};

const context = {"rootDir":"/home/user/starlight-blog/","srcDir":"/home/user/starlight-blog/src/","title":"rainsberger.ca","trailingSlash":"ignore"};

function stripLeadingSlash(path) {
  if (!path.startsWith("/")) {
    return path;
  }
  return path.slice(1);
}
function stripTrailingSlash(path) {
  if (!path.endsWith("/")) {
    return path;
  }
  return path.slice(0, -1);
}
function ensureTrailingSlash(path) {
  if (path.endsWith("/")) {
    return path;
  }
  return `${path}/`;
}

const trailingSlashTransformers = {
  always: ensureTrailingSlash,
  ignore: ensureTrailingSlash,
  never: stripTrailingSlash
};
const base = stripTrailingSlash("/");
function getRelativeBlogUrl(path, locale, ignoreTrailingSlash = false) {
  path = stripLeadingSlash(path);
  return getRelativeUrl(
    getPathWithLocale(path ? `/${config.prefix}/${path}` : `/${config.prefix}`, locale),
    ignoreTrailingSlash
  );
}
function getRelativeUrl(path, ignoreTrailingSlash = false) {
  path = stripLeadingSlash(path);
  path = path ? `${base}/${path}` : `${base}/`;
  if (ignoreTrailingSlash) {
    return path;
  }
  const trailingSlashTransformer = trailingSlashTransformers[context.trailingSlash];
  return trailingSlashTransformer(path);
}
function getPathWithLocale(path, locale) {
  const pathLocale = getLocaleFromPath(path);
  if (pathLocale === locale) return path;
  locale = locale ?? "";
  if (pathLocale === path) return locale;
  if (pathLocale) return stripTrailingSlash(path.replace(`${pathLocale}/`, locale ? `${locale}/` : ""));
  return path ? `${stripTrailingSlash(locale)}/${stripLeadingSlash(path)}` : locale;
}
function isAnyBlogPage(slug) {
  return new RegExp(`^${getPathWithLocale(config.prefix, getLocaleFromPath(slug))}(/?$|/.+/?$)`).exec(slug) !== null;
}
function isAnyBlogPostPage(slug) {
  return new RegExp(
    `^${getPathWithLocale(config.prefix, getLocaleFromPath(slug))}/(?!(\\d+/?|tags/.+|authors/.+)$).+$`
  ).exec(slug) !== null;
}
function isBlogRoot(slug) {
  return slug === getPathWithLocale(config.prefix, getLocaleFromPath(slug));
}
function isBlogPostPage(slug, postSlug) {
  return slug === postSlug;
}
function isBlogTagPage(slug, tag) {
  return slug === `${getPathWithLocale(config.prefix, getLocaleFromPath(slug))}/tags/${tag}`;
}
function isBlogAuthorPage(slug, author) {
  return slug === `${getPathWithLocale(config.prefix, getLocaleFromPath(slug))}/authors/${author}`;
}
function getPageProps(title) {
  return {
    frontmatter: {
      pagefind: false,
      title,
      prev: false,
      next: false
    }
  };
}
function getSidebarProps(slug, entries, locale) {
  return entries.map((entry) => {
    const localizedEntrySlug = getPathWithLocale(entry.id, locale);
    return {
      attrs: {},
      badge: void 0,
      href: getRelativeUrl(`/${localizedEntrySlug}`),
      isCurrent: isBlogPostPage(slug, localizedEntrySlug),
      label: entry.data.title,
      type: "link"
    };
  });
}
function getLocaleFromPath(path) {
  const baseSegment = path.split("/")[0];
  return starlightConfig.locales && baseSegment && baseSegment in starlightConfig.locales ? baseSegment : void 0;
}

const DefaultLocale = starlightConfig.defaultLocale.locale === "root" ? void 0 : starlightConfig.defaultLocale.locale;
function getLangFromLocale(locale) {
  const lang = locale ? starlightConfig.locales?.[locale]?.lang : starlightConfig.locales?.root?.lang;
  const defaultLang = starlightConfig.defaultLocale.lang ?? starlightConfig.defaultLocale.locale;
  return lang ?? defaultLang ?? "en";
}

function getBlogTitle(locale) {
  return config.title;
}

async function getAllAuthors(locale) {
  const entries = await getBlogEntries(locale);
  const entryAuthors = /* @__PURE__ */ new Map();
  for (const entry of entries) {
    for (const author of getEntryAuthors(entry)) {
      const infos = entryAuthors.get(author.name) ?? { entries: [], author: { ...author, slug: slug(author.name) } };
      infos.entries.push(entry);
      entryAuthors.set(author.name, infos);
    }
  }
  return entryAuthors;
}
async function getAuthorsStaticPaths() {
  const paths = [];
  {
    const entryAuthors = await getAllAuthors(DefaultLocale);
    for (const [, { author, entries }] of entryAuthors.entries()) {
      paths.push(getAuthorsStaticPath(entries, author, DefaultLocale));
    }
  }
  return paths;
}
function getEntryAuthors(entry) {
  const authors = [];
  if (!entry.data.authors) {
    authors.push(...Object.values(config.authors));
  } else if (typeof entry.data.authors === "string") {
    authors.push(getAuthorFromConfig(entry.data.authors));
  } else if (Array.isArray(entry.data.authors)) {
    for (const author of entry.data.authors) {
      if (typeof author === "string") {
        authors.push(getAuthorFromConfig(author));
      } else {
        authors.push(author);
      }
    }
  } else {
    authors.push(entry.data.authors);
  }
  return authors;
}
function getAuthorFromConfig(id) {
  const author = config.authors[id];
  if (!author) {
    throw new Error(`Author '${id}' not found in the blog configuration.`);
  }
  return author;
}
function getAuthorsStaticPath(entries, author, locale) {
  return {
    params: {
      prefix: getPathWithLocale(config.prefix, locale),
      author: author.slug
    },
    props: {
      author,
      entries,
      locale
    }
  };
}

const blogEntriesPerLocale = /* @__PURE__ */ new Map();
async function getBlogStaticPaths() {
  const paths = [];
  {
    const entries = await getBlogEntries(DefaultLocale);
    const pages = getPaginatedBlogEntries(entries);
    for (const [index, entries2] of pages.entries()) {
      paths.push(getBlogStaticPath(pages, entries2, index, DefaultLocale));
    }
  }
  return paths;
}
async function getSidebarBlogEntries(locale) {
  const entries = await getBlogEntries(locale);
  const featured = [];
  const recent = [];
  for (const entry of entries) {
    if (entry.data.featured) {
      featured.push(entry);
    } else {
      recent.push(entry);
    }
  }
  return { featured, recent: recent.slice(0, config.recentPostCount) };
}
async function getBlogEntry(slug, locale) {
  const entries = await getBlogEntries(locale);
  const entryIndex = entries.findIndex((entry2) => {
    if (entry2.id === stripLeadingSlash(stripTrailingSlash(slug))) return true;
    if (locale) return entry2.id === stripLeadingSlash(stripTrailingSlash(getPathWithLocale(slug, void 0)));
    return false;
  });
  const entry = entries[entryIndex];
  if (!entry) {
    throw new Error(`Blog post with slug '${slug}' not found.`);
  }
  validateBlogEntry(entry);
  const prevEntry = entries[entryIndex - 1];
  const prevLink = prevEntry ? { href: getRelativeUrl(`/${getPathWithLocale(prevEntry.id, locale)}`), label: prevEntry.data.title } : void 0;
  const nextEntry = entries[entryIndex + 1];
  const nextLink = nextEntry ? { href: getRelativeUrl(`/${getPathWithLocale(nextEntry.id, locale)}`), label: nextEntry.data.title } : void 0;
  return {
    entry,
    nextLink: nextLink ,
    prevLink: prevLink 
  };
}
function getBlogEntryMetadata(entry, locale) {
  return {
    authors: getEntryAuthors(entry),
    date: entry.data.date.toLocaleDateString(getLangFromLocale(locale), { dateStyle: "medium" }),
    lastUpdated: typeof entry.data.lastUpdated === "boolean" ? void 0 : entry.data.lastUpdated?.toLocaleDateString(getLangFromLocale(locale), {
      dateStyle: "medium"
    })
  };
}
async function getBlogEntries(locale) {
  if (blogEntriesPerLocale.has(locale)) {
    return blogEntriesPerLocale.get(locale);
  }
  const docEntries = await getCollection("docs");
  const blogEntries = [];
  const contentRelativePath = `${context.srcDir.replace(context.rootDir, "")}content/docs/`;
  for (const entry of docEntries) {
    if (entry.data.draft === true) continue;
    const fileRelativePath = entry.filePath?.replace(contentRelativePath, "");
    const isDefaultLocaleEntry = fileRelativePath?.startsWith(`${getPathWithLocale(config.prefix, DefaultLocale)}/`) && fileRelativePath !== `${getPathWithLocale(config.prefix, DefaultLocale)}/index.mdx`;
    if (isDefaultLocaleEntry) {
      if (locale === DefaultLocale) {
        blogEntries.push(entry);
        continue;
      }
      const warn = console.warn;
      console.warn = () => {
      };
      try {
        const localizedEntry = await getEntry("docs", getPathWithLocale(entry.id, locale));
        if (!localizedEntry) throw new Error("Unavailable localized entry.");
        if (localizedEntry.data.draft === true) throw new Error("Draft localized entry.");
        blogEntries.push(localizedEntry);
      } catch {
        blogEntries.push(entry);
      }
      console.warn = warn;
    }
  }
  validateBlogEntries(blogEntries);
  blogEntries.sort((a, b) => {
    return b.data.date.getTime() - a.data.date.getTime();
  });
  blogEntriesPerLocale.set(locale, blogEntries);
  return blogEntries;
}
async function getBlogEntryExcerpt(entry) {
  if (entry.data.excerpt) {
    return entry.data.excerpt;
  }
  const { Content } = await renderEntry(entry);
  return Content;
}
function getBlogStaticPath(pages, entries, index, locale) {
  const prevPage = index === 0 ? void 0 : pages.at(index - 1);
  const prevLink = prevPage ? { href: getRelativeBlogUrl(index === 1 ? "/" : `/${index}`, locale) } : void 0;
  const nextPage = pages.at(index + 1);
  const nextLink = nextPage ? { href: getRelativeBlogUrl(`/${index + 2}`, locale) } : void 0;
  return {
    params: {
      page: index === 0 ? void 0 : index + 1,
      prefix: getPathWithLocale(config.prefix, locale)
    },
    props: {
      entries,
      locale,
      nextLink: nextLink ,
      prevLink: prevLink 
    }
  };
}
function getPaginatedBlogEntries(entries) {
  const pages = [];
  for (const entry of entries) {
    const lastPage = pages.at(-1);
    if (!lastPage || lastPage.length === config.postCount) {
      pages.push([entry]);
    } else {
      lastPage.push(entry);
    }
  }
  if (pages.length === 0) {
    pages.push([]);
  }
  return pages;
}
function validateBlogEntries(entries) {
  for (const entry of entries) {
    validateBlogEntry(entry);
  }
}
function validateBlogEntry(entry) {
  if (entry.data.date === void 0) {
    throw new Error(`Missing date for blog entry '${entry.id}'.`);
  }
}

export { DefaultLocale as D, getAuthorsStaticPaths as a, getBlogEntries as b, getLangFromLocale as c, getRelativeUrl as d, getPathWithLocale as e, context as f, getPageProps as g, config as h, getBlogTitle as i, getLocaleFromPath as j, getBlogStaticPaths as k, getBlogEntryExcerpt as l, getRelativeBlogUrl as m, getBlogEntryMetadata as n, isAnyBlogPostPage as o, getBlogEntry as p, isAnyBlogPage as q, getSidebarBlogEntries as r, stripTrailingSlash as s, isBlogRoot as t, getSidebarProps as u, isBlogTagPage as v, getAllAuthors as w, isBlogAuthorPage as x };
