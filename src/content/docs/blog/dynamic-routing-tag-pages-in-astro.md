---
title: Creating individual tag pages in Astro via dynamic routes
description: Building pages to view your blog posts by tags.
authors:
  - sarah
date: 2022-01-12
excerpt: "Now that I'm on a roll with dynamic routing via getStaticPaths() in Astro, I'm checking the next item off my Astro blog wish list: pages to display blog posts by tag."
tags: ["blogging", "astro"]
---
One issue I was struggling to fully understand regarding `getStaticPaths()` in Astro was... why?

As I "sneak-previewed" when I described [adding an RSS feed to this Astro blog](https://www.rainsberger.ca/posts/rss-in-astro/), generating a page for each `tag` from all my blog posts can be done with **dynamic routing**. This is the concept I set out to learn to start the new year, since thus far, all my pages have been created via Astro's automatic **static routing** which only requires placing `.md` and/or `.astro` files somewhere under the `src/pages/` path.

## Dynaming Routing to create pages that... "aren't there"

The way dynamic routing first made sense to me was to think of using it for "creating pages that aren't there." (This initial way of thinking of it has helped me understand it more fully. But, this was how it started.)

It seemed weird to me to (need to?) use dynamic routing to eventually end up at `rainsberger.ca/posts/my-first-post` because... it already existed via static routing! If `src/pages/posts/my-first-post.md` (or `src/pages/posts/my-first-post.astro`) exists, then Astro creates that url automatically and I can totally "get to" a page for that blog post. I didn't understand examples I found about creating post pages/urls dynamically because I didn't understand *why* I'd need to do that. (So, I think my brain kind of turned off in protest.)

(It also probably didn't help (me) that `getStaticPaths()` is also used elsewhere, and isn't just an Astro thing. So, I never thought to look outside of Astro to figure out what this was, nor did I have prior experience with it to bring to Astro and be like, "Oh, cool. So just like how I do this thing in NextJs...")

So, the first thing that helped me get started with Astro's dynamic routing was to envision the specific use case of **making a page that wasn't automatically created statically because I hadn't put a file somewhere**.

I had `src/pages/posts/my-first-post.md` but I did NOT have anything like `src/pages/posts/tags/blogging.md`. However, I understood that **dynamic routing** would let me make pages at those URLS even without those files.

## Creating a 'Tag List' page

I *did* know how to make `src/pages/tags/index.astro`, and I didn't even need `getStaticPaths()` to do it. So, I started there.

This page is **statically** generated, since it's an Astro page component file somewhere under `/src/pages`. Its content uses `Astro.fetchContent()`, just like my Blog Page or my Full Post Archive page that fetch information about all my Markdown blog post files (ie: content from the Markdown front matter, including its array of tags).

The difference is that this time I need to create a `Set` of my tags, so that each tag is only listed once. Then I can display each element of the set.

So with a bit of JavaScript in my Astro front matter, this page doesn't require a ton of heavy lifting:

```astro
// src/pages/tags/index.astro

---
import BaseLayout from '../../layouts/BaseLayout.astro';
let title = 'Tags'

const allPosts = await Astro.fetchContent('../posts/*.md');
const tags = [...new Set([].concat.apply([],allPosts.map(post => post.tags)))]
---
<BaseLayout title={title}>
    <main>
        <h1>Tags</h1>
        <div style="display: flex; flex-wrap: wrap; margin: 0 auto">
            {tags.sort().map((tag) => (
                <p><a href={`/tags/${tag}`}>{tag}</a></p>
            ))}
        </div>
    </main>
</BaseLayout>
```

## Creating individual tag pages

But now for making a page that *doesn't exist*! Magic!

### Page slugs / url routes

To create url routes of the form `rainsberger.ca/tags/tagname`, I need to create `src/pages/tags/[tag].astro` The `[tag]` in brackets indicates that this one file will create dynamic routes for multiple different tag names.

### Page Layout

Because I'm making pages, I still need to structure this `.astro` file like a proper Astro Page Component: it either needs full `<html></html>` or needs an Astro Layout. Since I want this page to look like the rest of my pages, I'll import in the front matter, then wrap my content in my regular `<BaseLayout>` component.

### Page Content

The content I want to render is some information about each of my *blog posts* that happen to be tagged with *one specific tag*. So, I'll need a way to access all my posts (even if I don't display all of them on a particular page).

### Page Logic

This page needs to:

- fetch info about all my posts
- sort my posts in date order
- create a set of tags used from all the posts

And then this page needs to return (for rendering as HTML):

- an array of *tag name (`params`)/posts with that tag name* (`props`) objects
    
## Astro Page Component

Everything except the `getStaticPaths()` function looks very much like an Astro page I've created before where I've fetched content from my Markdown posts and rendered them to the page.

```astro
// src/pages/tags/[tag].astro

---
import BaseLayout from '../../layouts/BaseLayout.astro';

// here's where getStaticPaths() will go! 

const { posts } = Astro.props;
const { tag } = Astro.request.params;

let title = tag; 
---
<BaseLayout title={title}>
    <main>
        <p>Posts tagged with {title}</p>
        {posts.map(post => 
            <p>{post.date} - <a href={post.url}>{post.title}</a></p>
        )}
        <hr />
        <p><a href ="/tags/">See all tags...</a></p>
    </main>
</BaseLayout>
```

Once we get our `tag` and `posts` from our `getStaticPaths()` function, we can create any content layout we want using that tag name, and all the content normally available from a Markdown post's front matter like title, date, url, description, hero image etc.

## Using getStaticPaths() to fetch tag and post data

This function will do my fetching, sorting, creating and adding to a set of tags and return a set of filtered posts corresponding to each tag.

```astro
// (function to go inside src/pages/tags/[tag].astro)

export async function getStaticPaths({ }) {
  const allPosts = Astro.fetchContent('../posts/*.md');
  const sortedPosts = allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
  const allTags = new Set();
  sortedPosts.map(post => {
      post.tags && post.tags.map(tag => allTags.add(tag))
  })
  
  return Array.from(allTags).map((tag) => {
    const filteredPosts = sortedPosts.filter((post) => post.tags.includes(tag))
    return {
      params: { tag },
      props: {
        posts: filteredPosts
      }
    };
  });
}
```

And now... yes, we have tags! You can [see the list of tags](/tags) and you can click on any tag to be taken to its tag page.

## Linking to tag pages elsewhere on the site
You might notice that on this post's page itself, you can see a list of clickable tags generated from its front matter: `tags: ["blogging", "astro"]`. This is an array that can be used in any `.astro` component that fetches your front matter data. 

Now that I have tag pages, I can update my `MarkdownPostLayout.astro` so that each post displays its own linked tags. Here's a simplified version of this nested layout, which is itself inside my `<BaseLayout>` (so that these posts look like all my other pages). I'm displying each tag, linked to its own tag page, between the posts title and the author/date.

```astro
// src/layouts/MarkdownPostLayout.astro

---
import BaseLayout from '../layouts/BaseLayout.astro'
const {content} = Astro.props;
---
<BaseLayout title = {content.title}>
    <main>
        <h1>{content.title}</h1>
        <div style="display:flex;">
            {content.tags.map((tag) => <p><a href={`/tags/${tag}`}>{tag}</a></p>)}
        </div>
        <p>Written by: {content.author} on {postDate}</p>
        <article>
          <slot />
        </article>
        <p><a href="/posts">See more posts ...</a></p>
    </main>
</BaseLayout>
```

Similarly, I updated both my main Blog page showing my recent posts, as well as my full Post Archive listing to include these linked tags along with other post content.

I think it's safe to say you can now find tags all over the place on this blog! So, you have no excuse for not checking them out.  ;)