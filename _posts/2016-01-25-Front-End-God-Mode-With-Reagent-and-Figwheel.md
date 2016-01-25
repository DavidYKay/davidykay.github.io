---
layout: post
title: Front-end God Mode with Clojurescript, Reagent and Figwheel
---

Do you spend your days developing browser applications? Are you sick of reloading the browser? Worse yet, are you **tired** of clicking around your application to restore the application state that you just LOST?

I know I was.

*But then I learned to use Figwheel.*

### Figwheel

Figwheel is a tool for writing browser applications that allows you to continually tweak and edit your code, and all changes are *instantly* rendered to the screen, with NO loss of state. Yep, it's what non-programmers assume programming must be like!

If you've never tried it, it's a revelation.

For a visual example, see how Flappy Bird can be programmed LIVE using Figwheel:

<iframe width="420" height="315" src="https://www.youtube.com/embed/KZjFVdU8VLI" frameborder="0" allowfullscreen></iframe>

Want more depth? See Bruce Hauman's great talk on the subject here:

<iframe width="560" height="315" src="https://www.youtube.com/embed/j-kj2qwJa_E" frameborder="0" allowfullscreen></iframe>

### Clojurescript

But Figwheel is the just the reload functionality. What use is the ability to code, live without a good programming language?

In order to get started, you'll need to [learn Clojurescript](http://clojurescript.net/). (The [koans](http://clojurescriptkoans.com/) are also nice, but only run in Chrome.)

### Reagent

But you won't want to write a real web app without a **UI framework**. 

In my opinion, the best library/framework to write a Clojurescript application is [Reagent](https://holmsand.github.io/reagent/), a binding to Facebook's [React.js](https://facebook.github.io/react/).

### My Talk

Sounds like a lot to take on?

Don't sweat it. I've got you covered!

I gave a talk on the subject last week at the Vancouver Functional Programmer's meetup.

**Slides** are [here](http://www.slideshare.net/DavidYKay/frontend-god-mode-with-reagent-and-figwheel).

There's also a [demo chat application](https://github.com/DavidYKay/figwheel-reagent-chat-example), with a full version history and Git tags, step-1 through step-10, demonstrating how to build it.

Let me know if you're interested in the topic and I can put together a **screencast** which may be more educational.

Happy coding!
