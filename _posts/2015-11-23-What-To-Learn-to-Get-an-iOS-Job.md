---
layout: post
title: What Should I Learn to Get An iOS Job?
---

On r/iOSProgramming/, abcocktail [asks](https://www.reddit.com/r/iOSProgramming/comments/3tz0ro/couple_of_questions_about_1_what_to_learn_to_get/) for iOS career advice:

> **Couple of questions about 1) what to learn to get an iOS job in several months and 2) what lang to use to create own startup mobile app in swift or obj-c**

> Sorry for the two-part question but I have a lot on my mind! I Could use the advice of more experienced devs.
> 
> So I'm back on the iOS learning bandwagon, this time learning Swift. I want to learn enough to get an iOS job in 3-6 months.
> 
> Can you recommend a list of 4-5 projects I should learn that would be a good resume for employers?
> 
> also, some of you have said that objective C is more useful for employers currently. Should I forget about swift and refocus on Objective C? Finally, if you were to start a new startup project, like a social media similar app, what is the best language to choose, swift or objective C?


Great questions, abcocktail.

I've written a [post on Swift vs Objective-C](http://www.davidkay.cc/Swift-Versus-Objective-C/), which essentially boils down to: Swift is a better language and you should choose it if you can, but the more robust tooling and the vast amount of legacy code out there means you should still learn Objective-C first if you're looking to get a job.

In terms of what skills to learn, changerr's [list of topics](https://www.reddit.com/r/iOSProgramming/comments/3tz0ro/couple_of_questions_about_1_what_to_learn_to_get/cxalq63) is pretty solid.

My take on what skills you should learn something like this:

* **OOP Fundamentals** - Classes, protocols, categories
* **UI Fundamentals** - View lifecycle, Autolayout, custom views
* **UITableView** - Know it inside and out. It's everywhere.
* **Memory Management** - Leaks, strong/weak references, view recycling, `dealloc`, `didReceiveMemoryWarning`
* **Threading** - Main thread, background threads
* **AFNetworking** - GET and POST calls 

In terms of 4-5 projects to learn, I suspect you mean open source library projects. My opinion is that it's more important to learn the fundamentals than a given open source library. 

In fact, if I had to give you one piece of advice, it'd be to **work on a portfolio project** so that you can show a potential employer what you can do! As a former employer, myself, I'll tell you that if you can show ONE portfolio piece which demonstrates your skills, that's **often enough** to convince an employer to **hire you**. 

In the worst case, it'll be a great talking point as you can *direct the flow of the conversation* rather than go through the standard "computer science problems on a whiteboard" type of interview.

Hope this was helpful!

If it was, keep an eye out for my upcoming iOS programming tutorial, titled, [Learn Enough iOS to Be Dangerous](http://www.learnenough.com/ios-tutorial).
