---
title: "Thinking in Astro, Coming from React"
description: "Differences in an Astro MPA project from a React Router app."
authors:
  - sarah
date: 2021-11-12
excerpt: "Astro sites allow you to *use* React, but they *aren't* React, themselves. Understanding the differences between React and Astro can help you get started more quickly, so here are some thoughts on how to think like an Astro-naut!"
tags: ["react", "astro"]
---
When I first built basic websites, back in nineteen-ninety... *mumble mumble*, I figured out enough HTML to make a static page, then link to another page. My first site for the small tutoring company I worked for didn't even contain css, let alone JavaScript. Just html elements. (But, it did have a table!)

## Back in my day...

HTML elements, content organized on separate pages, links between them... this was my early introduction to "web development," such as it was back then. By the time I owned my own tutoring company in 2002, I built a website that included font families, sizes and colours! (Still tables, though.) By 2005, I had discovered places online to look for tiny scripts (`<script language="javascript">`) that you could include in your HTML for some basic interactivity. But, the underlying structure was *the page.* You have an index page, where the browser assumes you want to "start" unless told otherwise, but other content, for the most part, lives on other pages.

## Where we went...

Fast forward to learning React in 2020, and (my) introduction to thinking about *rendering an app to a page*.

Sites built with React, yes, *do* have that entry HTML index page. But, it doesn't really feel like a first-class citizen. Nothing is really "on" (or, maybe nothing really "lives in?") that page in the same way it used to "back in my day." A React's index.html page is a container -- a single "root" element -- for all the good stuff. It's not even just a single `<div id="root"></div>`, it's generally a single `<App />` rendered in that single `<div>`. That's a lot of "single" thinking! It's easy to picture your React site or app as "a single thing" where you can point to the top of the tree.

## Where we're going...

I find the easiest way to start "thinking in Astro" is to go back to the days of the page. Because in Astro, yes you (must) have an index.html page, but you can *also* have an about.html page and contact.html page... and these exist *independently of each other*, as equals. You can (and probably will!) make use of an Astro layout so that they share some common features. But, you are building *each page* separately, and adding those common elements *to it*, not starting from a common, shared entry point.

So if you're just starting out with Astro and wondering, "Where does my "app" go?"... it... doesn't? 

## How it changes...

Maybe you have a React Router project (like the first version of my sBird app!) and use "routes" to render different content to the screen under different url paths. Well, get ready to create yourself some individual page files! (I'll be detailing how I did this for my bird app in an upcoming series of blog posts.)

Maybe you have a Gatsby blog, and like me, you diligently went through the tutorial on dynamically creating new pages using Gatsby’s Filesystem Route API so that each .md or .mdx blog post has its own page. Well, get ready to... do nothing! Astro respects the almighty page, and *assumes* that you've got pages, and posts and that you'd like them each to have their own page. As long as you put your files in the expected source folders, That. Just. Happens.

## Back... to the future!

There's obviously so much more to say about Astro, how it works, and the tasks it's trying to help you achieve. And, perhaps most importantly, **where and how React fits in and co-exists with Astro** (...because it totally does! My site is actually *all* kinds of React components all over the place!)

And, I promise, Astro is not "stuck in the past"! But, as you experiment with and learn more about Astro, especially if you're coming from React, and trying to fit your existing React into your Astro site, I find that it can help to try "thinking in Astro"... and party like it's 1999!

![The musician Prince on stage singing, Tonight I'm gonna party like it's 1999.](https://media.publit.io/file/RJD/200.gif)