---
title: 'IDX: my first impressions'
authors:
  - sarah
date: 2024-12-01
pubDate: '2024-12-01'
excerpt: |

    "I learned to code on a Chromebook in online editors. My very first Astro project was a forked CodeSandbox of an Astro v0.12 (!) starter template.

    I have spent the last two years building several websites and maintaining the Astro documentation on Gitpod. 

    Two months ago, I switched to [IDX](https://idx.dev/) as my exclusive coding environment *(and you're not going to believe what happened next...)*"

tags: ["no local dev environment", "community", "open source"]
---
I learned to code on a Chromebook in online editors. My very first Astro project was a forked CodeSandbox of an Astro v0.12 (!) starter template.

I have spent the last two years building several websites and maintaining the Astro documentation on Gitpod. 

Two months ago, I switched to [IDX](https://idx.dev/) as my exclusive coding environment *(and you're not going to believe what happened next...)*


Even though I now have a Linux desktop in my office (slash laundry room), I prefer to use online IDEs.

Sure, some of this is a holdover from working on a seven year old Chromebook that would freeze and crash randomly. In that case, I could jump into Gitpod on my Android tablet with keyboard and **not lose a keystroke**. The workspace would still be actively running and my state was preserved. 

In fact, using an online IDE I can be logged in on multiple devices at the same time, using one for my editor and another for my browser preview. I can be working on my desktop, and when Joe tells me it's espresso time, I can open the Chromebook on the couch if I still want to get a few things out of my head before committing.

Since the announcement that Gitpod's hosted offering is ending and they are focusing on self-hosted and enterprise users, I decided to switch to IDX full-time to see whether it would be a suitable option for me. I have a Google account (a deal breaker for some) and use Android mobile devices, so using a Google-hosted project is not a problem for me. I decided the best way was to jump in, and I removed the "open in Gitpod" Chrome extension so I wouldn't be tempted. I was going to figure out how (and whether!) IDX would work.

Let's get one thing out of the way first: IDX is *sloooow*.

Starting up a workspace can take 30 seconds. Initializing a brand new workspace for the first time can take a minute. When you make a change to your Astro website, the browser preview will update in 12-18 seconds. In comparison, the same tasks on Gitpod typically take about half of that time. So, I'm used to slow, and this feels slow even to *me*!

But for me, it's worth the wait.

Once I got my footing in IDX and started working in a few repos, I was pleased to find that the sluggishness of the browser preview doesn't extend to the familiar code editor, which is nearly identical to VS Code. Keystrokes don't drop or lag, and every tab and menu item is instantly responsive.

I have access to the same plugins I did with Gitpod through Open VSX, including the [official Astro VS Code extension](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode), and our [Houston theme](https://marketplace.visualstudio.com/items?itemName=astro-build.houston). I also now have the [GitHub Pull Requests extension](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) installed to manage all of our Astro docs contributions. Signing in to GitHub from IDX has always worked flawlessly, and the work flow is familiar.

And I am happy to confirm that IDX works well on my 14" Samsung tablet in Android mobile Chrome, too. Even though it's my third device when I'm at home, there are some trips where I only take my tablet, and it's important that I can continue to access and work on GitHub repositories while travelling.

Of course, every piece of software has its quirks. I wouldn't say it has any more or less than Gitpod... just different ones. 

Both Gitpod and IDX create "workspaces" that show up in your dashboard. A new workspace is created for each repository that you edit. I have already given feedback in the IDX community forums that it would be nice to be able to create an overall settings profile vs. setting up profiles for each new workspace. I find that most of my preferences are about *how I work* (show all whitespace, configure word wrap, move the main panel to the right), and not *what is going on in this particular project*. Gitpod allows me to set global preferences that apply to all workspaces by default.

Gitpod also allowed me to open the same repository in multiple workspaces at the same time. This meant I could work, mess things up, then just abandon the workspace and start over fresh with a new workspace. In fact, it was *intended* to work this way. Gitpod considers workspaces to be ephemeral so you're always going back to start over from your source regularly. They even warn against keeping any one workspace for too long. (Sync? What is that?) 

IDX's strict, "We know you already have a workspace for this repo, so this is the one you get!" policy seemed more limiting at first. But now I'm finding that I enjoy my dashboard *actually* being workspaces that correspond to the projects I'm working on. It's not a random mess of single-use, arbitrarily named items. I'm finding I have become more organized, and more disciplined, with better repo maintenance habits.

Perhaps because of this difference, IDX handles simultaneous changes upstream and downstream *much* better than my Gitpod workspaces, which always seemed to throw errors and require git commands in the terminal to resolve. It's a small difference, but when the whole point of open source repos is to work collaboratively, having IDX handle this aspect seamlessly makes a huge difference. It feels like it's working *with* my workflow, not against it.

So, while I *hope* IDX initialization and browser preview gets faster, I have no complaints with reliability. Not everyone can handle opening a workspace, and *then* going to make a quick coffee (not the reverse). And I wouldn't blame you if you were one of those people! 

But, [docs are never done](/blog/community-driven-astro-docs/#docs-are-never-done) so I'm in this for the long haul! Not only do I personally prefer the flexibility of a cloud development experience to setting up, maintaining, and troubleshooting a local machine, and the ability to seamlessly pick up where I left off on another device. I also think it's important for someone on our team to be using the same tools that many in our community will be using.

An entire generation grew up with Chromebooks in schools. Some only have access to tablets and mobile devices. When I started learning to code, I couldn't justify buying a new laptop for a hobby I wasn't even sure was going to go anywhere. (Spoiler alert, it did!)

My primary goal in leading Astro's documentation is empowerment. My purpose is to equip our community with the knowledge and resources they need to build amazing websites of their own.

Online development environments like IDX open up web development to so many more people, and I am proud to use (and abuse!) them. I *want* to push them to their limits, and provide informed, helpful user feedback so they'll get better. Because if *I* can build Astro sites in a browser tab, then anyone can!


