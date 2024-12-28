---
title: Astro is a learner's paradise!
description: How Astro makes it easy to learn new frameworks, all in your own existing project.
authors:
  - sarah
date: 2021-09-30
excerpt: One of Astro's selling points has been that you can bring your own mix-and-match components... but I didn't really get the power of that as a *learner* until just now, listening to Fred K. Schott interviewed on devtools.fm
tags: ["astro", "blogging"]
---
# Astro is a learner's paradise!

My most recent experiment was to render two identical components, one counter/button written in React (which I know) and one written in Svelte (which I do not know) on the same page. This was originally going to be a post comparing the two, and that post will happen. 

But, while doing my end-of-the-month photo organizing, I finally got around to listening to [Fred](https://twitter.com/FredKSchott) being [interviewed on devtools.fm about Astro](https://devtools.fm/episode/14)... and THAT's when it really clicked for me that **Astro is the reason I can so easily play around with these various front-end tools, languages and frameworks as a learner**.

When I set out to try writing a Svelte component, it didn't even *occur* to me to go to CodeSandbox and find a Svelte template (which is absolutely what I would have otherwise had to do). Admittedly, I did have to go into my Astro config file and add a Svelte renderer, but Astro's error message was helpful in pointing that out when I was initially unsuccessful in rendering my Svelte counter.

**There was zero start-up cost to write my first Svelte component, and Fred explains why (at 36:02):**

>"...you've heard about this new framework, we are a great way to try it out. In any other project, you have to make a bet, this whole thing is gonna be React, and then that's your project. Astro's one of the only ways you can ... try it out, this one component. If you don't like it, pull it out! No big deal! You didn't just have to re-architect your entire project because you wanted to try a new framework... it's certainly a great thing for experimentation. There's no cost to me to bring in a new framework, and that framework doesn't actually break everything else that I've done."

Here are a couple of other quotations from the interview hosts that I found noteworthy enough to transcribe (before I realized that a transcription was available on their website, of course. SMRT.)

>"There's a lot to be said, if you do web development for a living, being able to play with different components and interject them directly into your blog posts. It's like, 'Hey, here's this really cool vue component, and the thing that it does!" without really having to think about your architecture. That's super powerful.'"

![](/images/birdhrthin.png)

>"Just the idea that this can be expanded in the future, so if React falls out of vogue and there's some new, better thing that comes along, we can jump on that ship and incrementally migrate with little to no cost."


So, eventually I'll get around to writing the post to accompany the process of creating my React and Svelte counter buttons in the same page experiment, but for now, I thought it was noteworthy to discuss *why* that is such a big deal in the first place:

I didn't have to go to CodeSandbox and look for a Svelte template, or find something to fork on GitHub.

I didn't have to spin up anything new/different. I just literally added a new component, with a different file extension, into my already-existing, already-working blog.

I could LEARN Svelte through Astro, if I wanted to.

This isn't just a "write in what you feel comfortable in" tool. This thing I'm learning *is itself* a learning tool, and code playground, all wrapped into my plain old website!