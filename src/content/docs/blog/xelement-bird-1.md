---
title: "React to XElement in Astro: sBird to xBird"
description: "Rewriting a React Router app as an Astro XElement app."
authors:
  - sarah
date: 2022-03-07
excerpt: aFuzzyBear and I have started a community, build-in-public project where we take my React-in-Astro sBird app and recreate all the same functionality using XElement, natively in Astro! The first video is now up on YouTube.
tags: ["videos", "astro", "xelement"]
---
Last weekend, aFuzzyBear and I spent 3hrs on live-chat in the Astro Discord while other community members joined in. I've started editing the footage and will be uploading it in smaller pieces.

This first video is an introduction to our project, to Astro and to XElement.

See the demo and our up-to-the-moment progress at https://xelement-bird.netlify.app

## About XElement
XElement is an Astro-native solution to providing interactive web elements without the need for script tags or any other JavaScript framework components (React, Preact, Vue, Svelte, Solid...)

npm package - https://www.npmjs.com/package/astro-xelement

XElement Docs - https://xelement-docs.vercel.app

## This video:

0:00 - Introduction to Astro and this project

1:17 - What is "sBird"?

2:59 - Building in React vs Astro vs React-in-Astro

6:06 - Partial Hydration in Astro

12:14 - How XElement accomplishes interactivity natively in Astro

15:00 - XElement component demonstration

Since I can't fit the entire transcript in the YouTube video description, here it is all on this page.

<iframe src="https://www.youtube.com/embed/0-aH18YH2SQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Transcript:

aFuzzyBear  0:00  
What we're going to do is just have a quick overview of the bird app that is written in React, then we will introduce XElement. And then we're going to get working on "xbird", which is the reverse engineering of XElement and sBird. 

Right. So what do we know about Astro? Astro is a static site generator that focuses on basically sending zero JavaScript, well as little JavaScript to the client as possible. And it does some fantastic things in terms of its progressive hydration when it comes to using other frameworks like React, Svelte, Vue, Preact, Solid, etc. 

And XElement is Astro's first and only web component framework that at the present moment allows you to create dynamic HTML elements from a very simple and intuitive interface. It sends pure JavaScript down the wire to the client, there is no renders, no partial hydrations... nothing required like that. It is as vanilla, as close to vanilla, as you can get. So that is the introduction. And let's get demonstrating sBird. Sarah, do you want to talk about sBird?

Sarah Rainsberger  1:23  
Sure. So sBird is my little bird app. It uses the eBird API and eBird is a global bird organization where birders around the world submit reports of the birds they've observed, a big citizen science project. 

This bit of the app we're looking at right now is specifically to see what rare or unusual birds people have recorded in a particular area. So that's what this shows here. So I make an API call, and I can see sightings that are pending review. So like that Sandhill Crane, these are sightings people have reported, but I have them classified as pending: they haven't been reviewed yet. So if you're waiting, you're like, "Did they look at my bird report yet...?" This is where I go to check. 

And then, there are birds recently confirmed. So I know when my sighting was actually confirmed. And then so down below, I have other sections that Fuzzy is showing that are doing other things. This is a section if I want to see which birds have been reported at all in the last 30 days. These are things that I use when I'm out reporting birds. I want to know whether something is rare. I want to know, “Has anybody else seen an Icelandic gull lately in this area? Is that really what this could be?” And other things like that. 

So these are the kinds of things that I built for myself using React because that's what I learned. And then when I learned Astro, I could put this entire React app in an Astro page on my website. And now we're going to try to see if we can get rid of the React and build the same functionality in XElement. That's today's task.

Unknown Speaker  3:25  
Yep. And I just want to ask you a couple of questions. How did you find using Astro and a third party component like React? Like, what was your experience when you came to building this React part that we are just about to explore the code for?

Sarah Rainsberger  3:44  
Well, so one change I had to make was because I built the thing originally in React before I even knew about Astro. And so of course, that was a single page application. So you're looking at routes, things like that. 

So the first thing was when I came to Astro, I sort of had to make some decisions about whether I am going to try to replicate an SPA inside of an Astro page, which I sort of did at first. And then I was like, "Well, let's take advantage of Astros routing!" And so then I broke my app apart, and I had different React pieces on different Astro pages. 

But then I would get into issues when I wanted to share some state like a default location. I wanted someone to be able to set a default location. And then Astro had the quite major upgrade to version 0.21. So I had to rebuild the site, anyway, because there were a bunch of things at this point that sort of needed some fine tuning to upgrade. And so at that point, I just actually threw them back all onto one page. And, what you're seeing now is actually a subset of what the original app was. 

So that was one issue. And I think we hear that a lot in the Discord, trying to wrangle state and context, things that you're used to when you basically start from an App.js file. But in Astro because everything is split onto different pages naturally, we look to the Astro SPA plugin or XElement, other things like that. The second thing is, if you look in my code, on the sBird page, for the version we have here, this (`client:load`) works. But there have been some issues with React where I have had to use client:only="react" to get the app to run properly.

aFuzzyBear  6:06  
So I just want to quickly say, for those who are not familiar with the client load directives that Astro uses, this is how Astro gets around their partial hydration. I'm just going to bring up their page, their documentation is getting a lot better, I have to say. Thank you, Sarah. And just for those who don't know, Sarah, is working as well on the docs for Astro at the present moment. 

So yeah, the concept of partial hydration and Astro is that it is not your single page application like Sarah has just mentioned, where everything is within a JSX file. And life inside a JSX file is life inside JavaScript. But Astro and these new concepts like partial hydration, which describes Islands Architecture, takes your interactive elements, and they become one off components. 

Because approximately 80% of your application is static, that being the static HTML content that React is constantly rendering, along with the additional JavaScript functionality. So Astro takes the concept of islands and really drives home this ethos, where within this picture, (here is a brilliant picture that kind of emphasizes it), you have several small applications, whereas in the past, this used to be one giant application. And React would render all these small parts together. Whereas with Astro, it only renders out the static parts that do not ever really change. There's no real need for dynamism over the top of it. And the stuff that doesn't need any dynamic components or interactions for instance, a sidebar, or a header array at the top, a little table of contents on the right hand side… So these things here are small applications that are embedded on to the actual page itself. And Astro then goes one step further to make only some components interactive on the client. 

There are several ways of doing this, like Sarah mentioned there is the client:load directive, which is currently what's implemented on sBird at the moment, which loads the components when the DOM has finished and the JavaScript is ready, then starts to hydrate all the static parts of your page and starts to make them interactive. And client:idle is pretty much the same thing. But this happens when the thread is free, the main thread comes free. client:visible is a very cool and extremely powerful hydration selector where it uses the intersection observer to see whether or not the element itself has become visible onto the viewport and if it has, then it starts interaction. Likewise, we've the client:media hydration query. So, on certain viewports, on certain view sizes, you could have certain islands that only hydrate that interactivity on a given media query. 

And then, if all else fails, and you're struggling with getting your UI framework to work, it's normally because a lot of the UI frameworks have hooks that require access to the DOM straight away. For instance, the React plugin ecosystem is built around the React model. This assumes that when React loads, that the document is there, etc. So there is no pre concept of islands or multi page architecture when it comes to a lot of the React ecosystem. But Astro provides you with ways to get around those gotchas and client:only is a very good one, if you're struggling with your application, regardless of what framework, try the client only. 

And, and a typical question we normally get in support and the community channels, especially for those new to Astro, is that you can't hydrate Astro components. And this page, and I highly recommend checking out the partial hydration page on Astro docs, explains it well, because Astro components are HTML components. And, really, there is no server runtime. And they're straight up HTML. So a string of HTML and, and like it says here, in order for you to make it interactive, you're going to need to convert it into a framework of your choice. And what if there is a case where, like me, you don't like these frameworks? 

Now, this is where I'm going to introduce XElement. Because, personally speaking, when I came into Astroland, I was happy with the fact that I didn't need to write a lot in my cage, in a JSX file. So the less Reacty I could get my site to be, the happier as a developer I am. And that's just my own preference. And that's what inspired XElement to come into fruition. 

Me and an excellent maintainer and contributor to the community, Jonathan Neal, we got together and we basically came up with a way that we could incorporate XElement into Astro to allow you to have that client side runtime, and interactivity and deliver it without the use of having a UI framework as a middleman in this case. These frameworks really do empower Astro to create fantastic, fantastic experiences, however, for those who just don't like using UI frameworks, there is something else out there now. 

Before this, in Astro if you wanted to use any sort of client side interactivity, you would use a good old fashioned script tag, right where it would be placed, unbundled using Astro's magic. And attached to the page, right. There's no need for any client side hydration with us because it literally just fires once the script is ready. And this inspired XElement to take this one step further, because as you can see here, let me see if I can zoom in. Just to show this point. 

There's one heading element along with the button. Now this button we wanted action on it, we just want it when it clicks, we just want to change the text from “not clicked” to “clicked.” Right. Now, the standard approach would be to just go script document query selector. Second add event listener on to it to specify the event listener, and then retargeting the h1, we get the enter text, and then we're just changing that to click. It's a bit verbose, especially as a developer when you're constantly having to do this for more than one component. And this is where XElement comes in. 

So we've actually got a page set for us right now to demonstrate some XElement components. Thank you, Sarah. And now this page is all components using JavaScript on the client side, created within Astro without using any UI framework. And let's break them down. This one here, as you probably noticed, is a type and text as third party script that we're calling, which basically just takes a string and just prints it out on the screen as if it's being typed out right in front of us. Quite cool, really is. And we've also got everyone's counter, where we just increase the count, and decrease the count.

And we've got a flashy little animation going on here. We've got a couple of animations. And we had a SURPRISE, and I ruined it, we'll try it again. And so this text is designed to move to the right after a certain period. And this is all using the web animation API. The web animation API is actually incorporated into XElement and makes this whole thing a lot easier for you. And if we do click this text, we get confetti. And it only fires once, if you notice, right. So you can control event behavior and propagation and the likes to give you that fine-grained control over your element's interactions. Start Stop control animation. At the bottom, we have a request animation and frame clock, which is just basically updating the time, every millisecond. So every 60 frames per second, this thing is going off quite nicely. 

And none of these are interfering with each other. So for instance, if one was to break, the rest of this page will still keep working. Next up, we're going to be asking for data from an API call. And here, we're just doing a suspenseful action where we just have a loading, you can see that there is a little loading state there, right? Let's just do this. Again. Quick data loading brought back the data. Now this is a client side fetch request that is going off. And then we're just populating the DOM once we get the data. And all of this all works at native JavaScript speed. And we have Astro to thank for that right now. That is the introduction. Let's get cracking. Do you think Sarah?

Sarah Rainsberger  18:26  
Yeah, let's do it.