---
layout: post
title: The Type War, Misunderstanding, and Pragmatism
---

**Summary:** Static types are back, but most programmers are hesitant to leave their comfort zones and think holistically.

## The Type War

Something that comes up again and again and again in programming is the war between the **dynamic** languages and the **static** languages.  

The dynamic devotees deify **rapid development time**, while the the static supporters seek **correctness and performance**.

Will this war ever resolve? Will it cycle forever like the battle between good and evil? Let's take a look at the latest chapter to form our own opinion.

## The Pendulum Has Swung

At different times in computing, static and dynamic typing have **traded off** the honor of being the dominant paradigm of the day.

Through the dot-com boom and for several years afterward, **dynamic languages** dominated during the growth of the Web, from Perl-CGI through PHP, ASP, and then the emergence of Ruby on Rails.

The pendulum has now begun to swing in the opposite direction, perhaps beginning with Twitter's famous migration from Ruby to Scala, lending new credibility to **functional programming and static typing**.

These days, it seems that more and more programmers, whether members of the static or dynamic camp, agree that, "Yes, types are helpful for correctness, documentation, and refactoring."

On the one hand, it's great to see this well of strongly-typed enthusiasm leading to the mainstream success of languages like Rust, which embraces esoteric ideas from type theory! This would have been *unthinkable* only a few years ago.

On the other hand, it seems that some of this enthusiasm is misplaced or confused, and I'd like to untangle some **misunderstanding** that I perceive in industry right now.

## Misunderstanding

The biggest evidence of the misunderstanding of strongly-typed programming is the wild popularity of [TypeScript][8], a static type checking extension to JavaScript.

I congratulate TypeScript on its popularity, and fiendish devotees are good for our industry, but I'm concerned that several of the TypeScript camp have lost touch with reality. Some TypeScript programmers have gone so far as to argue, ["All JavaScript libraries should be written in TypeScript,"][17] a viewpoint which I find **absurd**.  

If JavaScript is to be the lingua franca, we need to embrace **polyglotism and interoperability**, not the homogenous compliance to ONE compile-to-JS language. How insane would you call me if I wrote that "All Java libraries should be written in *Kotlin*?"

However, what **most** bums me out is that, like occurs with many popular movements, there seems to be a [cargo cult][14] forming, that is, programmers / technical decision makers are failing to take into account how a language works as a **comprehensive whole** and losing the problem-solving forest for the statically-typed trees. 

Adopting static typing may be beneficial for aiding in correctness, documentation, and refactoring, but what **tradeoffs** do you make in so doing? And is TypeScript the **best way** to get there?

## Well-designed Languages

What saddens me is that there are great, self-consistent languages that sit in the same niche as TypeScript and Flow that are largely being ignored.

If we like TypeScript's static typing for its **bug-reducing** qualities, why not maximize this strength by seeking out a language with a stronger, **more effective type system**, such as [Elm][11] or [PureScript][10]?

If we enjoy the TypeScript's flexibility to begin **without strong types**, then gradually **add them later**, why not use [Clojurescript][18] and the excellent [Spec][19] library? 

In all three cases, we'd be picking up a more powerful, less bug-prone, terse language.

Surely I'm not the only one that finds it ironic that these diehard TypeScript fans who extol the virtues of static typing *aren't actually willing* to reach all the way towards the tools that will **maximize leverage** of their brainpower?

## Worse is Better

On the other hand, does the industry ever gravitate towards cohesive, decisive, polarizing options? No. As we've learned from Steve Yegge, the **[moderate/centrist language generally beats out the ones at both poles][13]**. Hence the success of Java and C# over the last 20 years, C++ in the 1980s and 1990s, and C in the 1970s. 

In **each case**, there was a credible, forward-thinking option available, but it was **too scary**! Too different! Much more comfortable to something only incrementally different than the current tool: from assembly programming to C, from C to C++, from C++ to Java.

Also, I should point out that, in each case there was ONE key "tick-the-box" feature that drove the migration. 

* From assembly to C: assembly is great, but machine-specific. Oh, C is **portable** assembly? I'm in!
* From C to C++: man, **object-oriented programming** sounds great, but I don't want to learn Smalltalk or Eiffel! OK, let's add objects to C and call it C++.
* From C++ to Java: **garbage collection** could make us more productive and eliminate a whole class of errors! Java is C++ with garbage collection? Sold!

Thus, the success of Typescript over PureScript, Elm, and Clojurescript should come as **no surprise**: it's JavaScript with static types! 

What's more, it offers a "money-back guarantee" that any pencil-pusher would love: an instantly reversible migration path from a pre-existing JavaScript codebase. **Don't like TypeScript after 30 days?** No problem. Throw away a few annotations and you're 100% back in standard JS land. I'd bet there's even an option to leave your type annotations in there -- zero migration cost!

Yes, you *could* move to PureScript or Elm (or Clojurescript), and even enjoying seamless interoperability with your legacy code through your entire migration, you'd still have to **re-train** your developers in a new paradigm, I get it.

It reminds me of the addition of the **class** keyword in JavaScript. JavaScript was designed around the concept of prototypical inheritance, and did quite a good job at it, but the bulk of the industry never grew to appreciate prototypical inheritance, and thus the ECMAScript committee caved to the political pressure for familiarity. 

Politics, not principles. [**Easy**, not simple][20].

But perhaps I need to have more empathy and patience? Jeff Atwood reminds us that there are [Two Types of Programmers][16], and that the pace of change among the 80% is **glacially slow**.

## Pragmatism

The message that I hope to impart, however, is that these issues are never as simple as black and white. 

Static typing has benefits, yes, but there are also tradeoffs. But, as we see time and again, ["Programmers know the benefits of everything and the tradeoffs of nothing."][15]

My ask for you is to remind yourself to **examine these tradeoffs closely** and make the right decisions **for your problem domain**.

Remember, if static typing were the silver bullet, there'd be no reason to use Clojure over Haskell. 

And yet, even a Haskell devotee [confesses][6], "Haskell seems like a particularly good fit for software where **correctness and quality** matter. You might expect to pay for its safety in **reduced iteration speed**."

Before you get out your pitchfork, remember this is *not* a rallying cry for dynamic languages. 

This is a stand for **well-reasoned decision making**. No groupthink, no cargo cult, no "tick-the-box."

Just tradeoffs.

[1]: https://www.youtube.com/watch?v=XTl7Jn_kmio "Types are like the Weather, Type Systems are like Weathermen - Matthias Felleisen"
[2]: http://discuss.purelyfunctional.tv/t/types-clojure-and-pain/585/8 "Types, Clojure, and pain"
[3]: http://martintrojer.github.io/beyond-clojure/2016/04/19/beyond-clojure-preluden "Beyond Clojure: Prelude"
[4]: http://www.luna-lang.org/ "Luna: Visual and textual functional programming language"
[5]: https://www.reddit.com/r/haskell/comments/2i4tmh/is_haskell_ever_going_to_feel_faster_to_write/ "Is Haskell ever going to feel faster to write than Clojure?"
[6]: http://baatz.io/posts/haskell-in-a-startup/ "A founder's perspective on 4 years with Haskell"
[7]: http://steve-yegge.blogspot.ca/2008/05/dynamic-languages-strike-back.html "Dynamic Languages Strike Back"
[8]: https://www.typescriptlang.org/ "Typescript"
[9]: https://flow.org/ "Flow"
[10]: http://www.purescript.org/ "PureScript"
[11]: http://elm-lang.org/ "Elm"
[12]: http://dreamsongs.com/WIB.html "Lisp: Good News, Bad News, How to Win Big"
[13]: https://plus.google.com/110981030061712822816/posts/KaSKeg4vQtz "Notes from the Mystery Machine Bus"
[14]: https://en.wikipedia.org/wiki/Cargo_cult "Cargo cult"
[15]: https://www.reddit.com/r/programming/comments/3va6x0/programmers_know_the_benefits_of_everything_and/ "Programmers know the benefits of everything and the tradeoffs of nothing."
[16]: https://blog.codinghorror.com/the-two-types-of-programmers/ "The Two Types of Programmers"
[17]: https://staltz.com/all-js-libraries-should-be-authored-in-typescript.html "All JavaScript libraries should be written in TypeScript"
[18]: https://clojurescript.org/ "ClojureScript"
[19]: https://clojure.org/about/spec "Clojure.spec"
[20]: https://www.infoq.com/presentations/Simple-Made-Easy "Simple Made Easy"
