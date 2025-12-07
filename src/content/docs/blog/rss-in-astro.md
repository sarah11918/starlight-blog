---
title: Adding an RSS feed to my Astro blog
description: Using Astro's dynamic routing pattern to create an XML feed page
author: Sarah
date: 2022-01-07
pubDate: '2022-01-07'
excerpt: "One of the reasons I had delayed setting up an RSS feed for this blog is that Astro is still technically in beta, and many aspects of coding the site are changing right before my eyes! With everything else I was learning, I didn't want to have to re-learn this, too. But, in the spirit of accessible, self-hosted content, I started the new year by sitting down and cranking it out. Here's how I did it..."
tags: ["rss", "astro", "blogging"]
---

## Static vs Dynaming Routing

Astro uses **file-based routing** to create URLs (pages) for your site. Any `.md` or `.astro` file placed in a specific folder (and any subfolders therein) can become pages. Perfect! So nice to see you again, Web 1.0!

A single Astro page component can generate one or multiple URL paths for your site. To create a single URL via static routing, just place a Markdown file or Astro component file somewhere under `src/pages`. Congratulations, you now have a new page on your site at that relative URL!  For example, `src/pages/about.md` or `src/pages/about.astro` will automatically create a page at `https://example.com/about`

To generate multiple URLs from a single Astro page component, you can use dynamic parameters in your page component's name, using `[bracket]` notation. This is key for creating an RSS feed... and this is why I haven't had a feed until now!

## URL Paths vs Web Site Pages

A static site generator is a great choice for a blog is because it typically has a built-in way (though it may require an initial set up) to create a new web page for each post, simply by adding a new Markdown file to your project source. This is how Octopress (Jekyll) worked, this is how Gatsby works, and this is how Astro works. And, this is exactly how all my 90s/2000s static websites worked, but instead of Markdown, I was adding new, fully-complete html files to create a new page. (I guess *I* was the static-site generator?)

Since this is how I started with websites, my instinct is to think of a website as a thing composed of "pages" and not "URL paths." It was only after doing some projects with React (specifically React Router) that it even occurred to me to think of these as two different things.

So, my Astro site only used **static routes** -- I think of one file as one page. It's not a complicated site, and I only needed a page created for each post, which Astro does as soon as I add a new file to my source repository. Why would I need to worry about a single page building multiple URL paths?

For RSS, that's why. 

(And, for my next goal, which will be to add tags to my blog post and have pages corresponding to individual tags. Astro will automatically generate all my static routes for `/posts/first-post` and `/posts/second-post` etc. to correspond to my individual blog post Markdown files. But, I will need to make use of Astro's **dynamic routing** to create "pages" like `/posts/tags/chromebook` and `posts/tags/react` because there's no one single Markdown file corresponding to either of these URL paths. If I have truly wrapped my head around this concept, then look for this coming soon!)

## Creating My first Dynamic Route

So, the first thing I had to do was turn one of my **static** routes into a **dynamic** route. Even though I didn't need to create multiple URL paths from it, I did need an Astro page component that exported a `getStaticPaths()` function. I needed an *XML document* (not necessarily a page!) to be built, but right now Astro can only "build" files from Astro page components. So, I had to use a page to build this file.

And, since this page component would also end up creating a page itself, it made sense to convert `src/pages/posts/index.astro` (currently my Post Archives page) to `src/pages/posts/[...page].astro`. This page component could still render my Archives list to a page on my website at the same URL path, so to website visitors it would look exactly the same. But, the Astro front matter would now be doing a bit more work...

## Exporting `getStaticPaths()`

My `.astro` page component now needs to export `getStaticPaths()`, taking Astro's own `rss()` function as an argument and returning a paginated list with information about all my posts.

The `rss()` function is, in turn, passed an `items` array with information for and about my feed as well as the name and route for the XML document `getStaticPaths()` will create.

## Summary of the `getStaticPaths()` Process

In summary, you can build an XML document for your Astro site's RSS feed by configuring `getStaticPaths()` to:
- take Astro's `rss()` function as an argument
- perform an `Astro.fetchContent()` to get information about every Markdown file (blog post)
- sort the posts in descending date order
- return an array of objects, (ie. a list of your blog posts), with whatever data for each individual blog post item you specified in the `rss()` function.

## Summary of the `rss()` Process

Astro's `rss()` function is passed into `getStaticPaths()` in order to generate "rss-y" information about (a) your feed itself and (b) each individual blog post that will be read by rss readers. The `rss()` is passed:
- key identifying information about your feed (e.g. title, description)
- an `items` array of objects, which is the result of mapping through each Markdown file's information (as provided from the `Astro.fetchContent()` performed in `getStaticPaths()`) and returning an object with information about each individual blog post that conforms to rss standards and can be read by feed readers.
- a destination property that specifies the full name/path of the XML document you will create. 

## What the Code Looks like

```js
export async function getStaticPaths({ paginate, rss }) {
  const allPosts = Astro.fetchContent('./*.md');
  const sortedPosts = allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

  rss({
    title: "Sarah Rainsberger | Blog",
    description: "Writing by Sarah Rainsberger",
    customData: `<language>en-us</language>`,
    
    items: allPosts.map((item) => {
      
      const customData = `<guid isPermaLink="true">https://rainsberger.ca${item.url}</guid>`

      return {
        title: item.title,
        description: item.description,
        link: item.url,
        pubDate: item.date,
        customData,
      }
    }),
    
    dest: "/rss.xml",

  })

    return paginate(sortedPosts, { pageSize: 25 })
}
```

## All my feeds are belong to you!

So yes, now you can point your feed reader to https://rainsberger.ca/rss.xml and subscribe to these posts! 

(Although, there may yet be more troubleshooting to do. I woke up this morning to all my blog posts unread again? I guess maybe the story is not over....)

## Additional Notes/Discoveries etc:

### `<guid>`
It is apparently good practice for each RSS item to have a `<guid>` tag for uniquely identifying each post, and common for that identifying to be the page's URL. Using [Tony's Navillus example](https://github.com/Navillus-BV/navillus-dev/blob/c8a9851fd210d2388ea7dcff40e2befa20f39311/src/pages/blog/%5B...page%5D.astro#L51), I was able to add this tag via `customData` within my `items` mapping. (Thanks, Tony!)

However, using `item.url` outside of the `link:` property only returned the page slug, not the full URL. So you can see that I had to hard-code my website domain in `customData`, although the `item.link: item.url` property does use the `site` I have set in `buildOptions` in config to create a full URL.
