---
layout: post
title: The Type War: Javascript in 2017
---

Something that comes up again and again and again is the war between the dynamic languages and the programming languages.

These days, most people seem to be falling into the camp of "Yes, types are helpful for correctness, documentation, and refactoring."

What bums me out is that there seems to be a cargo culting going on, that is, that programmers are failing to take into account how a language works as a comprehensive whole and instead looking to tick boxes.

I'm sure I'll get flamed for saying this, but what the hell is the big deal with [Typescript][8]? I'll admit I'm not familiar with FB's [Flow][9], but isn't it also the same thing?

While these lukewarm extensions to Javascript (a language itself that we've been given, reluctantly) win incredible mindshare,

There are a ton of great languages out there looking to bring typed programming to the browser that are designed with a comprehensive vision.
It's incredibly ironic that Elm, Purescript, champions of statically-typed browser programming, are enjoying very little uptake when compared to the watered-down, less self-consistent Typescript and Flow.

are three functional languages that I hold in very high regard. I'd 

But does the industry gravitate towards these cohesive, decisive, polarizing options? No. As we've learned from Steve Yegge, the moderate/centrist language generally beats out the polarizing ones. Hence the success of Java and C# over the last 20 years, C++ in the 1980s and 1990s, and the success of Javascript and Typescript over Purescript, Elm, and Clojurescript.

It seems like ["Worse is Better"][12] all over again.

> Why am I not using Haskell? The overall experience of Clojure is better. Clojure has many design decisions that I think Haskell can learn from (for instance, basing everything on abstractions like seq instead of on concretions like List). And the huge availability of Java libraries, wrapped by Clojure or unwrapped. Haskell might catch up, but until it does, I still find Clojure a better fit for me.

 ["Haskell’s laziness requires you to think about space complexity more than in other languages"][6]

 ["Haskell seems like a particularly good fit for software where correctness and quality matter. You might expect to pay for its safety in reduced iteration speed"][6]

[1]: https://www.youtube.com/watch?v=XTl7Jn_kmio "Types are like the Weather, Type Systems are like Weathermen - Matthias Felleisen"
[2]: http://discuss.purelyfunctional.tv/t/types-clojure-and-pain/585/8 "Types, Clojure, and pain"
[3]: http://martintrojer.github.io/beyond-clojure/2016/04/19/beyond-clojure-preluden "Beyond Clojure: Prelude"
[4]: http://www.luna-lang.org/ "Luna: Visual and textual functional programming language"
[5]: https://www.reddit.com/r/haskell/comments/2i4tmh/is_haskell_ever_going_to_feel_faster_to_write/ "Is Haskell ever going to feel faster to write than Clojure?"
[6]: http://baatz.io/posts/haskell-in-a-startup/ "A founder's perspective on 4 years with Haskell"
[7]: http://steve-yegge.blogspot.ca/2008/05/dynamic-languages-strike-back.html "Dynamic Languages Strike Back"
[8]: https://www.typescriptlang.org/ "Typescript"
[9]: https://flow.org/ "Flow"
[10]: http://www.purescript.org/ "Purescript"
[11]: http://elm-lang.org/ "Elm"
[12]: http://dreamsongs.com/WIB.html "Lisp: Good News, Bad News, How to Win Big"
[13]: https://plus.google.com/110981030061712822816/posts/KaSKeg4vQtz "Notes from the Mystery Machine Bus"
