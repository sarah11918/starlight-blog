---
title: Stop writing docs. Start helping!
authors:
  - sarah
date: 2023-10-05
pubDate: '2023-10-05'
excerpt: Good docs can be the difference between a happy, successful user of your project and ... a happy, successful user of *someone else's* project. But documentation is often a task left to people who don't feel comfortable writing it. This talk presented at ViteConf 2023 presents a new way to think about "writing good docs" and some action items that will immediately improve any existing documentation... without doing any writing at all!
img: ../../../assets/helpfuldocs.png
alt: "A blue jay sitting on a branch with head tilted asking the question Are your docs helpful?"
tags: ["docs", "open source"]
featured: true
---
*(approximate transcript below, in "speaker notes" formatting rather than properly written, with some slides sprinkled in and [resources and references](#references-and-resources) at the end)*

I'm going to ask a question and we'll get back to the answer a little later.

"Are your docs... good?"

Whether your current docs are...
- a README
- a few markdown files
- a Discord server
- a CHANGELOG
- the code itself
- an entire website
- ... or nothing at all!

... they can *always* get better!

Not what you wanted to hear, right? This actually sounds pretty overwhelming... OR... is it a COMFORTING fact that "docs are never done"... so don't expect them to be! You'll never get there! You CAN'T get there.

**You don't have to WORRY about getting there.**

![ A version of the Drake/woman two square meme with two blue jays, one disliking the statement Docs Are Never Done with the second jay looking intrigued at the same sentence.]( ../../../assets/docsneverdone.png)

With docs, you CANNOT, you must not, let "the perfect" be the enemy of:
- the good.
- the good *enough*.
- the #NWTWWHB. (Not worse than what we had before)

My name is Sarah, and I’m the docs lead at Astro.

I hope in just a few minutes' time, you'll see how achievable "better" docs are, even without:

- ... a technical writer
- ... a team of volunteers
- ... writing experience
- ... a lot of time

Whether you're:

- ... crafting your very first README
- ... adding the changeset for your next PR
- ... preparing a guide for using a new feature
- ... starting to think about redesigning your entire documentation site (hint: Starlight!)
 
  
I'm going to make your docs better, I'm going to make YOU a better, more confident docs writer, without doing much WRITING at all!

![A small sparrow standing on a bridge railing amid seeds with an upturned, confused head position.]( ../../../assets/whyhavedocs.png)

Why do projects have documentation? Why do *you* have docs, if you do, for your project?

You might have said, "to document an API" or "to show how to use a feature" or "explain what the project is."

I would argue, the sole purpose of documentation, the only reason it exists, is to be helpful.

- **internal docs:** help with cross-team collaboration and onboarding
- **external docs:** help people understand, evaluate and use your project
- **open source docs:** help people contribute to your project

![Three blue jays standing in a row, each labelled as a different kind of docs: internal, external, open source]( ../../../assets/typesofdocs.png)

Documentation even helps **you** as you're building, making design decisions, learning, and leaving yourself notes.

Documentation is... a source of truth, docs is support, docs is record-keeping, docs is even marketing, promotion and community building ... 

![A small structure covered in grafitti with crows on top listing all the things docs is from the previous sentence.]( ../../../assets/docsis.png)

... but ultimately docs **exist** to *help*.

Remember when I asked at the beginning, "Are your docs 'good'?" How did that make you feel? Was that an easy question to answer?

What if I ask instead, "Are your docs *helpful*"?

For many people, I think that second question feels different.

![Two blue jays, one looking drab and disgruntled under the word good. The second blue jay has wings outstretched as if showing off under the word helpful]( ../../../assets/goodhelpful.png)

Changing the question you ask will immediately put you on the path to "better" docs... more helpful docs!

Notice that this ALSO changed the task of making docs from primarily a *writing* task to a *helping* task! 

And, YOU ARE the foremost expert on your project, so you are the BEST person to help! 

## "Are your docs helpful?" 

![""]( ../../../assets/areyourdocshelpful.png)

So how do we answer this question?

We begin to answer it by first understanding that it's really a collection of questions, that start with the phrase:

Is this helping someone...
- get started with my project
- figure out what my project is or does?
- evaluate whether it's right for their needs? (so you get the *right* users in the first place!)
- accomplish their OWN goals using MY project (e.g. add authentication to password protect some pages)
- troubleshoot something in their project that's not working as expected
- use my project to the fullest
- avoid common pitfalls
- keep up with the latest changes in my project, so they can successfully update *their* project

Evaluating whether your docs are
- HELPFUL
- helpful TO SOMEONE
- helpful to someone FOR SOMETHING

... will get you further, faster, than any other single docs intervention.

![""]( ../../../assets/docsmustbehelpfulto.png)

![""]( ../../../assets/tosomeoneforsomething.png)

Your docs can only be helpful **to someone** and that someone... 

Helpful TO SomeONE WHO IS:

- Human
- (With needs/wants/desires/hopes/dreams)
- In a particular mood


WHO HAS:

- Context
- Goals/purpose
- Motivations, expectations


WITH A CERTAIN EXPERIENCE LEVEL WITH:

- Code
- The industry
- Your project


WITH VARYING

- Language proficiencies
- Bad experiences ("burned before")
- Pre- or (mis) conceptions


AND ONLY LIMITED

- Attention
- Patience
- Time 
- Energy
- Resources (internet speed/cap, hardware)

They also need to help someone **do something**:

- Learn
- Conceptualize
- Evaluate
- Achieve
- Build
- Fix
- Test
- Upgrade
- Improve
- Experiment
- Convince (themselves, someone else)
- Solve a business problem or technical challlenge

But, docs should ultimately be helpful at getting people OUT of docs, and back into (using) your project.

![An eagle flying away over water]( ../../../assets/outofdocs.png)


Now, let's look at some characteristics of **helpful documentation**:

## CLEAR AND CORRECT

> If your docs are wrong, they are not helpful.

If docs are factually wrong, if they're misleading, if they're outdated, if they're technically correct but so confusing you'd never know it... they are not correct. They are WRONG. 

You might even have some existing documentation that . . . isn’t really helping anyone do anything! Instead, it's more words on the screen making it harder to see the helpful content!

 Action Items:

- Read every statement in your docs for ACCURACY
- Or, if you're starting fresh, ONLY WRITE TRUE STATEMENTS
- Go through each part of your docs and identify WHO this helps, and WHAT it helps them do
- Less is more: both in content AND in style!
- Use clear, simple language: No one ever complained, "Gee, these docs are just [too easy to read](https://vimeo.com/238673931#t=2045s)!"

![Screenshot of Ashley Bischoff giving a talk called 1Up Your Writing with Plain Language at Fronteers Conference 2017 and a slide that reads Because no one has ever complained that somethign was too easy to read.]( ../../../assets/tooeasytoread.png)

If you're not sure whether something in your docs is entirely clear and correct, and you can't immediately see how to make it better... REMOVE IT: 

> *"No documentation means I go look somewhere else for information. Incorrect documentation means I waste my time."* - Mason Egger

Incorrect docs reduce credibility. They can make people frustrated enough to stop using your project and choose another.

If your users can't be successful, then they do NOT use your project; they DON'T spread word of mouth (at least, not the good kind), they don't create items themselves that showcase your project. And they don't contribute back and improve your project.

![Two ducks swimming, one with a cursing emoji face over its head representing incorrect docs. The second is a duckling looking up sweetly representing the friendlier reaction when you have incomplete docs, as if asking "Could you add...?"]( ../../../assets/incorrectincomplete.png)


If it's not clear, and correct... delete it! I am giving you permission! It wasn't helping you anyway! It was frustrating people trying to use your project and potentially generating ill will and bad vibes!

If you're worried you might have deleted something important, it's fine. It's the internet! Someone will tell you.

![An XKCD cartoon where someone is on the computer, saying they can't come to bed yet because someone is wrong on the internet]( ../../../assets/wrongoninternet.png)

CHECK IN: Congratulations! You've made your docs better and you haven't written a single thing!

We're going to take things one step further and make your docs even more helpful:

## Navigable and Discoverable


- Can people move around your documentation and find what they need?

- Are things where people expect to look? If they first look in the wrong spot, can they easily GET to the right spot?

These concepts relate to Information Architecture, and you can get into things like "signposts", "escape hatches/off ramps". These are all the structural things we add to our documentation to help people quickly and easily situate themselves and move around.

When someone lands in your your docs, can they get where they need to go before they lose hope? And remember that a lot of people will enter your documentation via a web search, and not necessarily "[on page one](https://everypageispageone.com/)." So *every* page you have needs to pull their own weight. This is *not* just a task for a landing page.

The good news though, if there's only one page, your reader can't be on the wrong page.

![A book cover titled Every Page is Page One next to the thinking, pointing at brain meme]( ../../../assets/pageone.png)

I'm serious! If you don't know how to structure your content, there is nothing wrong with one huge README to start! Even if your readers have to look around, at least they'll know they're on the right page!

If the only reason docs exist is to be HELPFUL, to SOMEONE, trying to DO SOMETHING, then the first step in organizing your content is thinking about how to get your readers to the material that actually helps them accomplish the task they came for. e.g.:

- If they are coming to quickly look up a reference value, like a property name or config option, make sure they don't get stuck in an onboarding tutorial!
- If they want to learn about what needs your project solves so they can decide whether to use it, don't make them get stuck in implementation details before they even know what it is or does!

Here's where a framework like [Diataxis](https://diataxis.fr) can be helpful: by identifying parts of your documentation by **content type** and **reader goal**, you can logically group sections of your docs and start to provide a helpful structure.

But the key thing is, if someone is not reading your docs like a book, top-to-bottom, first-page to last-page, do you have a plan for how will they discover and navigate to the clear, correct information they need?

Action item:

- go to literally any random point in your documentation, and imagine you are a reader who is not in the right place to get the info you need for a particular goal. Think about how your docs could direct them there, quickly and accurately.
- Is this solved by a TOC? a search widget? a "How to read these docs" page? an internal link?
- If you have multiple pages or files, do the titles accurately represent the content? Does your content live under the title you'd expect?

So, at this point, I've now basically said: Don't lie (and, delete any lies), and don't hide stuff (if you have to, throw everything on a single page. Good news, CTRL+F works for everyone!).

This is, I think, STILL an achievable bar for docs that help your readers without any new writing!

If every statement in your docs is true, and people can find, read and understand what they mean... Congratulations! You have Minimum Viable Docs! (*whispers If you have to, you can stop now*)

![A sparrow on a wooden boardwalk with the title Minimum Viable Docs - Clear and Correct (no lies), Discoverable and Navigable (no hiding)]( ../../../assets/mvd.png)

But, of *course*, there *are* characteristics of well-written docs, and there are also some pretty common anti-patterns.

There's no shortage of talks on "how to write good documenation" that go into specifics, and I DO recommend you check out some great ones if you want to get better at writing! But that can get overwhelming and we already know that WRITING is secondary to HELPING.

![A collage of images of various resource; talks, books, podcasts that are linked from ths post.]( ../../../assets/resources.png)

- It might feel like there's a scary Docs Police waiting to criticize you and that there are a lot of potential failure pitfalls.
- Instead of thinking of these as things to worry about getting wrong, think of them as things that you DON'T have to worry about; things NOT TO DO because they are NOT YOUR JOB as a helper. 
- These things "thou shalt not do" actually REMOVE pressure and responsibility, and are guard rails to keep you focused on a productive path towards helping.


![A screenshot of a pulll request suggested edit made by Sarah. The original was a very long, excited description about installing Bun, and the suggested change for docs is simply: Use the following command to install Bun, with the added note Booo... Sarah is boring!]( ../../../assets/boo.png)

So, I absolutely love this social media post, because it perfectly demonstrates everything we've been talking about here.

It’s CLEAR, and CORRECT. If you’re looking for the command to install Bun, these are the words you will search for! It introduces exactly what’s coming next, and it’s not hidden in a bunch of other words.

This edit is NOT me saying, "BAD AUTHOR, BAD DOCS!"

This edit is me freeing the pull request submitter from the responsibility to:

- write something clever
- motivate the reader
- get all the punctuation correct in longer, multi-clause sentences
- have 10 times as many words to proofread and spellcheck

My edit reminds you to focus on "helping" instead of "writing."

Similarly, many other "Docs Don'ts" are actually "don't worry abouts!"

If less is more, then here are some things you can remove or stop doing that reduce clutter and confusion in your docs. 

![""]( ../../../assets/we.png)

1. Don't use "we", because you're not sitting there with your potentially frustrated reader
    - This frees you from the extra work of checking that all your we/us/our/let's all agree. You know what's super easy to check? You and your.
    - Using "you" also naturally puts the emphasis on your reader, and what they are doing. It guides you to thinking about helping THEM. (What might THEIR set up look like? instead of writing "our" which can trick you into thinking about your OWN context or situation that your reader might not share.)
    - Often, these instructions work without any "you" at all, and become even clearer.

![""]( ../../../assets/should.png)

2. Don't use "should" - Should implies uncertainty, and your readers are looking to YOU for what to do. If your reader really MUST do something, just say that.
    - Again, sounds like a rule we just made up! But I guarantee you that we are freeing you from feedback from a confused reader!
    - "You should create a new folder for your blog posts." Do I... have to do this? What happens if I don't, and how bad is that? What else could I do?
    - Not only do your sentences get clearer, but your reader stays laser-focused on the task at hand without any doubt. -> Create a new folder for your blog posts.
    - I am giving you permission to avoid writing, and just tell someone directly what to do! Even when more things are possible, if you WANT them to do this to have a successful outcome, just say it that way. THIS FREES YOU from the responsibility of describing every possible path when you, the expert in your own project, already have a recommendation and know the happy path. You can help. Don't write. Just help.

ACTION ITEMS:

- Don't stress out about writing rules, but embrace them as telling you things that aren't your responsibility!
- Pick one or two (I suggest "we" and "should"), or just read through your docs looking for things that aren't your responsibility, and remove them!

In conclusion, think of yourself as a HELPER. Someone who just happens to be helping in writing.
- helpers don't need to entertain or write beautiful stories
- they need to make CLEAR, CORRECT information available. Ideally in such a way that readers can DISCOVER, and NAVIGATE it. (CTRL+F is your friend!)

And The best help is CONTEXTUAL: it is FOR someone who is trying to DO something specific.
- this person may also not be in the greatest state to RECIEVE help, but they are in your docs because they need it.
- don't overwhelm. Less is always more.
- You can probably improve your docs RIGHT NOW by *deleting*, not writing more!
    - delete words like "should"; delete outdated or unmaintained docs, even if you can't yet replace them; delete entire pages if you are afraid people won't find them, and put everything on one page if you need to!

![A shiny black and purple grackle amid the words Don't write, help: clear & correct; discoverable; navigable; contextual; for someone; to do something; less is more]( ../../../assets/dontwritehelp.png)

You can have great docs even if you aren't a great writer. Because in many cases, maybe even most of the time, the less you write, the more you help.

<!-- Everything in docs must be true, but, not everything that is true belongs in docs... in part because not every true statement is *helpful*.

Incomplete documentation is not a crime, it's an invitation. Invite your readers to help you help them, and tell you what's missing. It is not your responsibility to 

 If you can't imagine a situation in which someone might need this information to accomplish a specific task, then why is it there? -->

## References and Resources

- [Diataxis](https://diataxis.fr)
- [Talk - Mason Egger: Write Docs Devs Love: Ten Tips To Level Up Your Tech Writing](https://www.youtube.com/watch?v=9WobKoE9OPI)
- [Talk - Ashley Bischoff: “1Up Your Writing with Plain Language” at Fronteers Conference 2017](https://vimeo.com/238673931#t=2045s)
- [Book - Docs for Developers](https://docsfordevelopers.com/)
- [Book - Write Useful Books](https://writeusefulbooks.com/)
- [Book - Every Page is Page One](https://xmlpress.net/publications/eppo/)
- [Audio - Making Documentation Developers Love](https://www.youtube.com/watch?v=YW4IfoJM30g)
