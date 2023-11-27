---
title: "Getting started with React components in Astro"
description: "Having trouble with your React components Astro. Check these three things!"
authors:
  - sarah
date: 2021-10-13
excerpt: Yes, you can write and render your React components in your Astro page. But remember, Astro *isn't* React, and you might be getting error messages when you *totally know* your React component should work. It's not complicated to establish the Astro-React relationship, but you might not be used to doing these things. . . 
tags: ["react", "astro"]
---
# React Gut Check
Here are the very first, super-basic things to check that might be causing your perfectly-awesome React components to throw Astro errors:
## 1. Specify the React renderer in astro.config.mjs
Astro can render a variety of components: React, Svelte, Vue, Preact, Solid ... but, it first needs to import the appropriate renderer(s) to do so. If you didn't specify renderers when creating your project, your `astro.config.mjs` may have started with an empty renderers array, or it may have been commented out. It should include all renderers for components you intend to use. Make sure the following is in your config file at the root of your project (example shown with renderers for React and Svelte, but you only need the one(s) you intend to use):
```js
//astro.config.mjs
export default {
    renderers: ['@astrojs/renderer-react','@astrojs/renderer-svelte'],
}
```
## 2. Import your React component *with its file extension*
You have made sure to include your React renderer, but your super-happy-awesome React component still causes an error? Perhaps something like "Failed to fetch dynamically imported module"?

This can be a particular D'oh! moment when first getting used to writing React in Astro, especially if you're copy-pasting or uploading React files into your Astro project. Your React component may *itself* be importing child components, and you aren't used to writing a file extension for *those* imports. But, Astro *does* require you to type out the full import path. So, you may have to inspect all your imports carefully to make sure all .js/.jsx file extensions are included.

```astro
// src/pages/my-astro-page.astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import MyReactComponent from '../components/MyReactComponent.jsx'
---
```
## 3. Hydrate your React component for interactivity
Why do we fall for this one over and over again? Your technically-perfect React component has been imported into your .astro file, extension and all, and it *looks* like it's working. But it... doesn't work? 

Check to see that you have specified a hydration method with a `client:*` directive!

If you render `<MyAmazingReactComponentThatShouldTotallyWork />` in an Astro page, the way you would in a React component, you'll only get the static HTML representation of your component, with no interactivity. To include your component's functionality, be sure to specify one of the available options such as:

`<MyAmazingReactComponentThatShouldTotallyWork client:load />` (to load instantly)
or
`<MyAmazingReactComponentThatShouldTotallyWork client:visible />` (to load only when the component becomes visible on the page. This is handy for something lower on the page that doesn't need to load until / unless the user scrolls down to it)

These are the top three items on my checklist when a React component isn't working, especially if I've been writing my React code separately in a different environment, outside of my main Astro project with the intention of adding the files later. 

I mean, sure, there *could* be a flaw in my React code, but I can sometimes save myself a whole lot of pain and suffering if I just check these things first!