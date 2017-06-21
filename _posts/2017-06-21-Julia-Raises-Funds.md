---
layout: post
title: Julia Raises $4.6M
---

I had a bigger post on quantum computing in the works, but it got a bit too ambitious, so here's a small update. Look out for the quantum computing post tomorrow.

## Julia Raises Funds

<center>
    <img src="../images/2017/06/JuliaRaisesFunds/logo.png" width="400" />
</center>

[Julia][6], a modern programming language designed with the aim of capturing the numerical computing crown from FORTRAN, seems to be winning its battle. They've just [raised $4.6M][1] with hopes to monetize their [open source][7] language through commercial [products][4] and [services][5].

### Open-source Business Model

I'm always excited to see an open-source business poised for success, as I think that open source creates an insane amount of value, but requires a profitable sponsor in order to reach its full potential. Likewise, open source often helps achieve market dominance through a network effect, so it's not a wholly altruistic, self-sacrificing endeavor. 

I like to view it as a tradeoff between value **created** versus value **captured**. With a closed-source business model, you're essentially hoping to capture a higher percentage of the value you create, but with and open-source business model, you're agreeing to reduce the percentage that you capture while growing the value created.

Seems like a good deal to me. (If you can pull it off!)

### The Two language problem

What I find most interesting about Julia is their stated goal of solving the "two language problem."

Here's an excerpt from the [Wired article][3] on the Julia origin story (emphasis mine):

> Today's languages were each designed with different goals in mind. Matlab was built for matrix calculations, and it's great at linear algebra. The R language is meant for statistics. Ruby and Python are good general purpose languages, beloved by web developers because they make coding faster and easier. But they don't run as quickly as languages like C and Java. What we need... is a **single language that does everything well**.

While "one language to rule them all" is a very dangerous idea (see C++), I believe the Julia guys have a much more constrained goal: to build a language that scientists, statisticians, and programmers can agree on.

If you've ever worked on a **big data** or **scientific computing** system, you probably know what they're talking about. And if not, it's easy to envision the problem, as each role has tools it prefers; many companies are in the awkward situation of having their statisticians working in R, web programmers in Python, and scientists/mechanical engineers in MATLAB. Getting the systems to interop gracefully and to develop a good methodology for working together is a **pain**.

The guys at [ThinkTopic][8] ran into this issue when productionizing Python-based deep learning systems. Their solution was to unify the data scientists and the engineers on Clojure, even if that meant developing their own [deep learning framework][9].

To bring it back to Julia, good for them. While I don't have any experience writing the language myself, I've been casually following their progress for several years now.

I particularly appreciate their emphasis of [parallelism and distributed computation][10] and am very optimistic that they can win the scientific computing game. I'm a bit skeptical of their desire to displace R as a statistician's language, and I don't think it will beat out Python for prototyping and day-to-day programming. 

Then again, being category leader in each category **isn't necessary**. If they can be the best in **numerical computing**, and grow outward into the ancillary data & web systems that support a numerical computing system, they have a winning formula.

Next time I want to noodle on linear algebra or signal processing, I know what I'll be checking out.

[1]: https://juliacomputing.com/press/2017/06/19/funding.html "Julia Computing Raises $4.6M in Seed Funding"
[2]: http://www.davidykay.com/Whats-Next-in-Programming/ "What's Next in Programming?"
[3]: https://www.wired.com/2014/02/julia/ "Wired:  One Programming Language to Rule Them All"
[4]: https://juliacomputing.com/products/ "Julia Computing: Products"
[5]: https://juliacomputing.com/services/ "Julia Computing: Services"
[6]: https://julialang.org/ "Julia Language"
[7]: https://github.com/JuliaLang/julia "Julia: Open Source"
[8]: http://thinktopic.com/ "ThinkTopic"
[9]: https://github.com/thinktopic/cortex "Cortex"
[10]: https://docs.julialang.org/en/stable/manual/parallel-computing/ "Julia: Parallel Computing"
