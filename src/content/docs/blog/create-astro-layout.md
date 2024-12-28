---
title: "Creating an Astro layout - screencast and transcript"
description: "A video walkthrough of creating your first Astro layout."
date: 2022-01-20
authors:
  - sarah
excerpt: This is a screencast and transcript of refactoring one of the basic Astro examples to create an initial BaseLayout component.
tags: ["videos", "astro"]
---
Trying out some new technology, and since I can't fit the entire transcript in the YouTube video description, here it is all on this page.
<div class="video-container">
<iframe src="https://www.youtube.com/embed/9bVuIBD70wc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
Transcript:

0:01  
Here, we're going to take a look at creating an astro layout component. So I'm just gonna open my project up in Gitpod and get it arranged the way I want.

0:15  
The intro to any Astro project is going to be at source/pages/index.astro. So let's jump in there and take a look at what this looks like.

0:27  
Any Astro page is going to be separated into two sections: we've got this code fence block section at the top, and then we've got our HTML rendering part at the bottom. So what I want to do is look down and see that the second part of an Astro page file will render to a complete HTML document. You can see it starts with open HTML, and finishes with a closing HTML tag. To make that a little easier to see, I'm just going to clean up some of these code comments, and I'm going to collapse some of these tags so we can just get a sense of the structure and see what's going on with this rendering here. Collapsing... collapsing... navigating through... just so we can see that essentially what we have within HTML tags is a head and a body. 

1:29  
And in our body, we've got main, we've got header, we've got some components. And I'm going to add a little bit of text, just to separate that out, because maybe we're not sure what this Tour component is doing and how that's different from the header. So now, I can refresh my browser preview here in Gitpod. 

1:51  
I'm just going to organize things the way I like to see them, I can have a couple of panes going, and I can make my browser preview kind of small on the right, because I just want to see at a glance what's going on here and I want more space for my code. 

2:08  
So now we can see that yes, we do have some text on the page, let's do the same with the frontmatter. Let's delete some of these code comments where they're guiding us for the places to put our JavaScript and TypeScript. And at the very top of the page is where an Astro File expects to receive its component imports, whether they're Astro components, or React components or Svelte components. 

2:41  
And now we are ready to make our first layout. So we're going to go back to source, create a layouts folder. And we'll create the file BaseLayout.astro. It's empty, but it exists. So before we forget, let's go back into index.astro, and import BaseLayout. And we're going to import it exactly the same way we import our other components... noting that with all these Astro components and framework components that do get imported into an Astro File, you DO need to include the file extension. 

3:27  
So a quick refresh shows we didn't break anything. We also didn't really do anything, but at least we're importing a file that exists. Now, let's choose some stuff to go into that BaseLayout folder. And I'm thinking, what we don't want to have to copy each time we make a new Astro page is HTML and head. So let's start there. 

3:53  
We're going to cut it out of index. And we'll clean it up a bit and move it into our base layout. Right now BaseLayout.astro is providing HTML and head, so we can take that closing tag out of our index file. And our index right now is just responsible for rendering the body tag. To use the layout component that we imported, we are going to wrap the content here in open and close BaseLayout tags. Alright, so we can see the body, the main, the header (let's just just format this out)... this is what the index page is responsible for rendering, so let's refresh and we get ...an error: "Title is not defined."

4:48  
All right, well, let's take a look at that because we have certainly defined a title here. The problem is that the index.astro file isn't using that title. The title is being used in BaseLayout.astro. So what we're going to have to do is pass that title information into our layout. And we're just going to do that via props, title equals title. Excellent. Refresh.

5:21  
And we still get the error, because although we have SENT the information, we haven't properly RECEIVED the information in our layout component. So now we're going to need a code fence. And we're going to need to import that title property from Astro.props. Perfect. That is going to receive the title just fine. And then BaseLayout will be able to use that title to create the title tag in our head. So we refresh, and there's no error... but there's also nothing else on the page. Okay, so what's going on here? 

6:06  
Well, if we look at what our BaseLayout is actually rendering, (and that *is* what's getting rendered to index, because we've wrapped everything in BaseLayout), all that we're sending to index is the HTML tag and a head. 

6:21  
We need somewhere to SLOT IN the content that's actually being provided at index.astro. And in Astro, we do that via a self closing tag called slot. And now as soon as the layout knows where to slot in the information that's wrapped in the other page, we have our original page back up again, looks exactly the same. 

6:36  
Now I'm just going to pop this out in Gitpod into a full tab browser preview because sometimes the simple browser in Gitpod might not have all the same interactivity as the full page preview does. So I just want to show you that those buttons, the counters are in fact working. 

7:11  
In fact, the page looks identical to the page we started with, because all we did was pull out the head and enclosed HTML tags. And we're now rendering them instead via a layout. Alright, so then the whole point of having a layout is to be able to make another page that's going to use the same thing. So to create a second page in our project, let's take a look at what index is rendering and figure out what we're going to need to throw in page two to also render a full document. 

8:01  
The first thing we should do is make sure we're importing the layout. I'm going to start a code fence and I'm going to put a layout, our BaseLayout in there. And let's take one of the counters, let's take the Svelte counter, and we will also import that into page two. So we can use that to get some test render. And we know that our layout expects a page title. So let's give this page a title: "Page Two." 

8:32  
Now we're ready to actually render some HTML. So we're going to start again with BaseLayout component, passing the title information, open and close tags to wrap whatever now we decided to render on page two. And we said we wanted to render a counter on page two. So here's our Svelte counter. And framework components *do* need a client directive. I'm just going to choose Load, we're not going to wait till the page is visible on the page. This is just a very small page anyway.

9:14  
We'll put a bit of text in here. So right now we've got a paragraph tag, and we've got a Svelte counter rendered. We go back to index and and look at what we wrapped here. Notice that we do need the body tag; the body was rendered in index. Our layout is not taking care of that. So we are going to put our body and we're going to put our main tags on page two. I'm pretty sure this default project, its CSS does make use of the main tag. So just to keep things consistent, let's make sure we've also got main in here and then we need to close out main, close out body. Okay, structurally, we should have the same thing that we had for our index page. So I'm going to go up and navigate manually to page two in my little preview here. And in fact, yes, so we have a paragraph rendered, and we have a counter rendered. Now you can't see in this preview, but if you look at the top of the page, it does actually specify that the title is page two. So that's working as well. Excellent. 

10:44  
Now, if we go back and compare to the index site, though, our index had a header, and our second page does not. Now you might not want every page to say welcome to Astro. But you may very well want the same header on all your pages. So we can, again, refactor and we can pull the header into the layout. But by doing so this time, we have to make sure that we're also bringing into layout the main and the body tags. 

11:19  
So let's go into the layout and after our head, that's where we're going to insert the body, main and header. And then after our slot, we'll close off the main and close off the body. The slot can go wherever you want that wrapped content to be. 

11:48  
Now, if we go back to index, obviously, we don't want those closing tags duplicated, so we'll get rid of them. Now our index component is looking pretty minimal, quite easy to read. (I'm not dealing with all the indentation and formatting right now.) But now when we go to page two, same thing, we don't want our page rendering the body and main tags. Our layout is taking care of that. So refresh the index page, again, looks identical. 

12:18  
And that's what we're going for: we are not designing, we are not creating anything new here. We are just exploring how to use refactoring to take out some stuff from the pages and have them instead rendered via an Astro layout component. 

12:39  
Now if we can have two pages, we can have three pages. So now let's create page three. And let's make it super minimal. Let's see the bare minimum we need to create a new page and what it looks like when there is nothing on a page. 

13:01  
We will need the layout. And we will need to give it a title. But I'm going to remove everything wrapped in the layout in the BaseLayout ta. I'm going to remove the paragraph and the counter. I'm going to manually navigate to page three. And what do we have? We have our header. But notice that we DO have our header and we DO have a page and it works... even with nothing inside the BaseLayout open and close tags so your slot can be empty. But this gives you an idea of what your layout looks like with nothing there. This is what the layout is bringing to the table. 

13:47  
So we created a couple of new pages. But most importantly, we recreated that index page and didn't really change anything. It looks exactly to the eye the way it did before. But now it's being rendered using an Astro layout component.

Transcribed by https://otter.ai