---
title: Rewriting a React Component as an Astro Component
description: Walking through converting a .jsx React component to an Astro component
authors:
  - sarah
date: 2021-09-09
excerpt: I'd been using a lot of components in my Astro blog, but I realized that they were almost all *React* components, because that's what I know. So, I wanted to try reproducing some functionality by replacing a React component with a corresponding Astro component.
tags: ["react", "astro"]
---
# Rewriting a React/JSX Component as an Astro Component

Astro describes their component syntax as "HTML enhanced with JavaScript." *("Hey, **I'm** a person who knows HTML and JavaScript...")*

From Astro's docs:
>Astro component syntax is a superset of HTML ... An Astro component represents some snippet of HTML in your project.


Here's what my test Astro page looked like:
```astro
// src/pages/flickr-test.astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import FlickrPhoto from "../components/FlickrPhoto.jsx"; // Note: importing a jsx component
const allPhotosResponse = await fetch(`https://www.flickr.com/services/rest/?...`);
const allPhotosResult = await allPhotosResponse.json();
const allPhotos = allPhotosResult.photos.photo;
---
<BaseLayout title = "Flickr Import Test Page">
    <main>
        <h1>Test of "Get all my public photos" from Flickr</h1> 
        {allPhotos.map((photo) => (
            <FlickrPhoto photoprops = {photo} client:load />
        ))}
    </main>
</BaseLayout>
```
This page renders a list of my Flickr images, showing a photo with a link back to Flickr, and captioning with both the image title and the photo ID number.

... and here's what my React component looked like:
```jsx
// src/components/FlickrPhoto.jsx
import React from "react";

export default function FlickrPhoto({photoprops}) {
    const { id, secret, title } = photoprops
    const picsrc = `https://live.staticflickr.com/65535/${id}_${secret}_z.jpg`
    const picurl = `https://www.flickr.com/photos/sarahrainsberger/${id}`
    return(
        <div>
            <p>{title} - {id}</p>
            <a href={picurl}><img src={picsrc} width="640" alt={title} /></a>
        </div>
    )
}
```
To write the new Astro component that performed the same function as the old React component, I used much of the same code, but the structure is slightly different.

### React Component Structure vs Astro Component Structure
A React component (at least, a small one like this) is a **function that must be exported.** This function can take props passed from the Astro page which can then be destructured and used within the function. This function's **return** is what generates the HTML to be rendered to the page.

An Astro component, however, is **HTML with a frontmatter component script inside a "code fence" with full support for JavaScript and TypeScript that will run server-side during build and provides values available to the HTML.** A function is not explicitly written (nor is it exported), but the pieces of the Astro component do correspond to a JSX function: Astro's "code fence" is analagous to the part of the function before the render(), and its main body corresponds to function's render(). So, we can create the same component functionality just with a little slicing and dicing of the code we already have.

### The functions performed by the component to be reproduced
My Astro page fetches data about my photos from Flickr, and maps over the resulting photos generating a "FlickrPhoto" (my component!) for each one. `<FlickrPhoto />` is passed information about each individual photo as a `photoprops` object. The properties of interest (`id`, `title`, and `secret`) are first destructured within my FlickrPhoto function, then used as variables throughout to generate an image source link and page url for the photo. Additionally, these variables are used to determine what the page should display, in this case some properties as text, and also the image with a link back to its page on Flickr.

### Reproducing the non-rendering actions from a React function in an Astro code fence
The *non-rendering* actions my React function performs are:
1. accept props
2. destructure props
3. use the destructured properties to create some https links

These are the actions that now need to occur in my Astro code fence, and here's what it looks like:

```astro
---
const { photoprops } = Astro.props
const { id, title, secret } = photoprops
const picsrc = `https://live.staticflickr.com/65535/${id}_${secret}_z.jpg`
const picurl = `https://www.flickr.com/photos/sarahrainsberger/${id}`
---
```
So what's different?
|React Component | Astro Component |
--- | --- 
|props passed as the argument of a function |props defined in code fence via Astro.props|
|props object destructured within the function body|props object destructured in the code fence|
|variables defined in the function body|variables defined in the code fence|

But, notice that other than where/how props are imported for use by the component, the JavaScript-y goodness is identical!

### Reproducing the rendering of a React function in an Astro component file
The *rendering* actions my React function performs are:
1. create a `div` for each photo
2. display the photo's title and id number as text
3. display an image of the photo with a link back to the photo's page

These are the actions that now need to occur in my Astro code, and here's what it looks like:

```astro
<div>
  <p>{title} - {id}</p>
  <a href={picurl} ><img src={picsrc} width="640" alt={title} /></a>
</div>
```
So what's different?

|React Component | Astro Component |
--- | --- 
Content to be rendered occurs within the render() function | Content to be rendered exists on its own, in the main body of the component
The function needs to be exported so that another file can import it | Astro components do not need to be explicitly exported; they are available to other components simply by importing

But, the `div` and all its contents are exactly the same!

So the entire Astro component that replaces my React component is:

```astro
// src/components/FlickrPhoto.astro
---
const { photoprops } = Astro.props
const { id, title, secret } = photoprops
const picsrc= `https://live.staticflickr.com/65535/${id}_${secret}_z.jpg`
const picurl= `https://www.flickr.com/photos/sarahrainsberger/${id}`
---
<div>
  <p>{title} - {id}</p>
  <a href={picurl} ><img src={picsrc} width="640" alt={title} /></a>
</div>
```
### Using the new Astro component in the page
To make the switch to using this new Astro component on my page, I had to change the import on my Astro page from .jsx to .astro (because otherwise, my two files had the same name and were in the same location) ... and that was the *only* change required on the page itself! Yay!