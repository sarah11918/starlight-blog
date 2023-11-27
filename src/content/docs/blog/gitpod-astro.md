---
 
title: Developing Astro with Gitpod
authors:
  - sarah
date: 2023-10-18
pubDate: '2023-10-18'
excerpt: From a 7 year-old Chromebook to an Android tablet to a Linux desktop... all my building with Astro is done in a cloud development environment thanks to Gitpod! No local development environment? No problem!
alt: "A screenshot of the Gitpod logo as a workspace is starting up."
tags: ["docs", "open source", "astro", "no local dev environment"]
---
I spend much of my day making sure people can get started and build with [Astro](https://astro.build). I am regularly working in several Astro websites: this personal site, Astro Docs, Astro Docs Docs... 

Even though I wrote a tutorial that includes instructions on setting up and using VS Code for your first Astro project, I don't actually have a local code editor installed on any machine I use!

Instead, all of my development is done in the cloud, through [Gitpod](https://www.gitpod.io/).

Cloud environments aren't new. I learned web development, and built my first projects entirely in Scrimba's online platform. My React birding app was built in Replit. My first Astro websites were built and maintained entirely on CodeSandbox. Astro regularly encourages our community members to create minimal reproductions of their issues on StackBlitz to share with the team. During our weekly "Talking and Doc'ing" events in the Astro Discord, we often have several members jump into a shared GitHub Codespace to work on a project in real-time together.

But, Gitpod was the first full cloud developer environment that could entirely support a full workflow. I can install the Astro VS Code extension, configure start-up scripts, commit back to GitHub or, if I realize I've made a horrible mistake, just close the tab and start fresh again with a new workspace. It's now what I use every day, both personally and professionally, to maintain all the Astro sites I work on.  

Although you can open any of Astro's official starter templates in a few different cloud environments at [astro.new](https://astro.new), the best way to get started with a new Astro project in Gitpod is to start from an existing repository of your own. Use the instructions below every time you want to make a new Astro (or [Starlight](https://starlight.astro.build)) website!

## Starting a new Astro project

1. Create a new, blank repository on GitHub, GitLab or BitBucket.

2. Open that new repository in Gitpod using one of the following methods:
    - install [Gitpod's browser extension](https://www.gitpod.io/docs/browser-extension) or [Gitpod's browser bookmarklet](https://www.gitpod.io/docs/browser-bookmarklet) to add an "Open in Gitpod" button right on your GitHub/GitLab repository page!
        
    - prefix your GitHub repository's full URL with `gitpod.io/#` and enter that URL into a browser window (e.g. `gitpod.io/#https://github.com/sarah11918/astro`)

3. When your repository finishes opening in Gitpod's editor, type `npm create astro@latest` in the terminal window to launch the Astro CLI wizard which will guide you through setting up a new project. 

    (Want to start your project from an existing Astro theme or template? You can use [the template flag](https://docs.astro.build/en/install/auto/#starter-templates) as shown in Astro docs. For example, to open a new Starlight project, type `npm create astro@latest -- --template starlight`)
      
4. Follow the instructions and when asked where to install the project, type `./` (Do not add a folder name. This will create your project at the root of your repository.)
      
5. The final set of instructions will tell you to start the dev server with the command `npm run dev`. Your workspace is now ready for coding!

6. Add a `.gitpod.yml` file to the root of your project to automatically run commands every time you re-open your Astro project. My file installs dependencies, starts the dev server and opens a preview of my site in another browser tab:

      ```yaml title=".gitpod.yml"
      tasks:
        - init: npm install
          command: npm run dev

      ports:
        - port: 4321
          onOpen: open-browser
      ```


7. After working on your site, you can commit your changes to local version control, and eventually back to your source repository (or throw them away!) via the Source Control menu item in the left navigation. 

    
    Any changes you make are saved to this "Workspace" which is a particular instance of your repository. This workspace will save its own state, even between starting/stopping the workspace, but will only push back to your online source code when you choose to commit and sync.

    To work on **this** version of your code, re-open the workspace. To go back and start fresh from source again, re-open your repository from one of the two earlier methods.
    
    If you don't like what you did in a particular workspace, then just delete (or ignore) the workspace! Unused workspaces will automatically delete after 14 days of inactivity via [Gitpod's Garbage Collection](https://www.gitpod.io/docs/life-of-workspace/#garbage-collection).

## Working on existing projects

Of course, most of my time is spent working on existing projects. With my Gitpod browser extension, I am just one click away from opening any branch of any repository. I use this to:

- Work on my personal websites

- Contribute to Astro Docs, knowning that my "fork" is never behind or out of date

- Edit Pull Requests to the Astro Docs, because I can open up any PR branch and work in my full editing environment

## Work on any machine

In fact, this very article was started on a desktop machine in my office while my partner was making espresso in the kitchen. When he was ready to sit with morning espresso in front of the television for our morning routine, I opened **the same Gitpod workspace** on my laptop on the couch and kept writing.

I hadn't even committed my earlier work: Gitpod's workspaces hold everything in memory so that I can pick up on a different machine at a moment's notice and never lose a keystroke. (This was quite handy when my 7 year-old Chromebook was prone to random freezing, and I'd need to jump to a different device to keep working.)

I'm now back at my desk, finishing off this post.

So, I *could* install VS Code locally, I guess. But, why would I? My setup is identical, and instantaneous, on any device and in any room of the house. I have even travelled for two weeks with only an Android tablet and continued to work on Astro docs on the road that way.

It's never "works on my machine" with me, because in fact, it never is my machine! With Gitpod as my only development environment, it just "works."

