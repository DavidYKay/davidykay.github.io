I'd like to post a reply I wrote on a [reddit thread](http://www.reddit.com/r/healthIT/comments/363kyj/programming_languages_useful_for_health/) today.

An MSHI student was wondering which language to learn first:

> I just finished my first semester of an MSHI program. I was wondering if there might be any useful programming languages that would be beneficial to learn. Or should I really bother learning any at all?

Later coming back to give more context:

> Thanks for the responses. I should have probably given some more background. My current job uses Social Solutions ETO. It's a case management system. I don't know if anyone has heard of it. I'm planning on stick with my current employer after I graduate. Obviously, I'm still in the early stage of my education. So I don't know exactly how I would effectively apply that knowledge, but I do know that no one else in our organization has a health informatics degree.
> Is there a particular language applicable to that system (ETO)?
> Thanks

This is a topic I like to think a lot about and so I hammered out a quick reply. 

Here's what I had to say:

* * * * 

I'd like to respond to this as thoroughly as I can:

Many people who are responding to your question are advising you to learn tools they have learned and found useful.
I have no doubt that these languages have been very useful for them in their careers. 
However, I don't think that they are looking very deeply at your needs and ambitions, and I'd like to take the time to speak through all the concerns.
Please note that as a human, I am inherently biased, but I'm trying to present the facts in a balanced way so that you can reach your own conclusion. 

With that out of the way, let's drill in:

When picking your first language, the biggest tradeoff you need to make is specialization vs generalization. Many of the options you've been given so far are fairly specialized.
If you learn Microsoft VBA or Powershell, you'll be highly productive doing day-to-day automation tasks, but most tasks outside of scripting & automation will be difficult if not impossible.
If you learn R and SQL, you'll be razor-sharp at performing data analysis, but putting together a meaningful web application? No way. Not the right tool for the job.
And so on.

So am I advocating a general-purpose language? Yes. I think they are a better long-term investment since they will expose you, as a beginner, to a broader range of concepts and possibilities. Am I saying NOT to learn VBA, R, SQL, etc? No way! Those guys are very useful. But I think you will be better served by learning a general-purpose programming language for your FIRST language.

Keep in mind, however, that even when it comes to general-purpose languages, there are tradeoffs to be made. 

For example: static vs dynamic types - this may not make sense just yet, but if you contrast, say, Python, a dynamically-typed language versus Java, a statically-typed language, the general wisdom is that the statically-typed language will help reduce errors and coordinate large teams, but dynamic languages are more productive and thus what you should pick for a quick-and-dirty job. 

Forgive me for the abbreviated example, but I think it may be more helpful to take a look at the top contenders, which I'd argue are: Python, Javascript, C#, and Java.

**Python** - Python is a mature, open-source, dynamic language that is used in many different domains. Python is one of the most productive languages I have in my toolbelt, and I believe most programmers would agree. There are libraries for nearly every task, from web applications to DICOM to game development. I don't generally build big systems in Python, but I find that it's almost always the tool I reach for when building a proof-of-concept. You'll find a lot of researchers and bioinformatics programmers using Python.

The downsides of Python are: 
1. The IDE options aren't as good as Java/C#
2. Python's Windows support is a bit awkward compared to on Unix systems
3. As a dynamic language, you'll likely get more work done in the short term, but introduce more bugs as the system grows larger

**Javascript** - Javascript had humble beginnings as a two-week project at Netscape to add a lightweight language to add bit of dynamism to webpages, like validating your email address before you submitted a webpage. And now it is EVERYWHERE. 
Modern web applications like Gmail and Facebook make extensive use of Javascript to drive the UI, and over the last few years, Javascript developers have developed tools for building software on other platforms using Javascript.
The key downside of Javascript is that it's EXCELLENT for doing web applications and high-performance networked servers, but lackluster in other domains. Also, the error output is generally crappy, so it can be hard to troubleshoot your code as a newbie. Also, I wouldn't trust it with heavy-duty scientific computations because, unless things have changed, they don't have a proper integer type.

**C#** - C# is the obvious choice if you will only ever work on Windows and deploy code to Windows systems. C# is Microsoft's key language, and it enjoys world-class support on Windows and has a huge market share there. And rightfuly so: it's a well-designed, modern language. Plus you can always start moving your code to F# once you're ready. The main downsides of C# are: 
1. The open source ecosystem is lackluster for a language of its size, so you may occasionally have trouble finding libraries to help you out. 
2. Support on other OSes, like Mac and Linux, is limited. However, there's a company called Xamarin that offers a toolchain for using C# to build excellent mobile apps on iOS, Android, and Windows Phone.
3. You're tied to Visual Studio. Visual Studio is an awesome tool, but it's generally considered the only tool you should use for C# development. Thus, any time Microsoft goes in and overhauls Visual Studio, there's an uproar in the dev community.

**Java** - it is **A LOT** like C#. C# was heavily inspired by Java. They key difference is that Java is a bit less modern, but more open-source-oriented and with much stronger cross-platform support. So you're losing out on all the awesome Windows-oriented stuff that C# gives you, but in return, you're getting a richer ecosystem of tools and libraries (and other languages that compile to Java). Seriously, the Java development tools are world-class. And, for an example: most of the high-profile big data projects are built on Java: Storm, Hadoop, Cassandra, etc. 

The downsides of Java:
1. Java's getting a bit old and grey -- it's not as nice as C# to work in. (But you can always upgrade from Java to Scala/Clojure/Groovy/Kotlin when you're ready.)
2. More of a learning curve than Python & Javascript
3. Safer but less productive than Python & Javascript

* * * * * * * * * 

So, having said all that, which one do I recommend? It depends! You're going to need to do some soul-searching about what your long-term ambitions are.

But I should come back to your Social Solutions question and tell you: you can interact with the Social Solutions ETO in any of the above languages. They use a [standard REST API](https://services.etosoftware.com/).

However, it looks a SMIDGEON easier to get started in C#, because their 
[examples](https://github.com/SocialSolutions/QaaWS-Samples) are [written in](https://github.com/SocialSolutions/CodeSamples) C#: 

Please chime in with any questions. I'm very excited that there's a new programmer being born and wish you the best of luck on your journey.
