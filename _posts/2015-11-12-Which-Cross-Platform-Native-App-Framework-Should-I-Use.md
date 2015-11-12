---
layout: post
title: Which Cross-platform Native App Framework Should I Use?
---

## Intro 

Today, we're going to examine three options for cross-platform native app development. 

What these choices all have in common is the potential to develop entirely native screens that touch all the functionality of Android and iOS. Some tools, such as Unity Game Engine or XMLVM aren't designed to use truly native UI.

Likewise, for the scope of this post, we will not be discussing any tools that use a Web-based UI. That rules out PhoneGap / Cordova and several similar solutions. 

So, what's left? Tools that will allow us to: 

1. Use an entirely native UI by default
2. Use all native APIs on the platform
3. Allow us to share code across both platforms

As we'll see, the amount of code sharing does vary between the different solutions, the classic tradeoff being that with 100% code sharing, we're performing a "lowest common denominator," while with 0% code sharing, we're developing two entirely different apps. Our goal is to find a tool that gives us the flexibility to take either approach so that we can find our happy medium in the middle, no matter whether that's 30%, 60%, or 90%.

My three favorite tools for achieving this are: [Xamarin](http://xamarin.com/), [RoboVM](http://robovm.com/), and [React Native](https://facebook.github.io/react-native/).

Let's take a look at the three of them and determine what differentiates the three and when we might pick one or the other.

## Xamarin 

**What is it:** a C#-oriented approach to mobile apps on iOS, Android, and Windows Phone. Branchild of Miguel de Icaza, founder of GNOME and Mono. 

**Upside:** Gives an incredible experience, especially in conjunction with Reactive UI or Xamarin. Forms. Compile and run cycle is surprisingly fast. Oh, and there's support for F#, one of the safest and most productive languages around. 

**Downside:** there's a gun against your head. If you stop paying the monthly fee, you get locked out of the compiler.

## RoboVM 

**What is it:** An open-core, JVM-based competitor to Xamarin. 

**Upside:** Open-core means the only proprietary part of the tool chain is the debugger. The rest is open source. So, if you fall upon hard times, you can still compile your code, but you will get locked out of the proprietary debugger. 

You also get full access to the JVM ecosystem, which can be a huge boon. And the freedom to use essentially any JVM language you want. I've seen work done in Scala and Clojure. I personally use Kotlin in conjunction with RoboVM as I feel it strikes the sweet spot between performance, expressiveness, tooling, and familiarity. 

**Downside:** cross-platform not as nice as Xamarin's, compile time on iOS is a bit slow. I'll need to double check this to see if this is still current. 

## React Native 

**What is it:** The new hotness, straight out of Facebook. All application code is written in Javascript, using a framework based on React JS. But the JS is used essentially as a puppeteer, driving native UI components. 

**Upside:** fast development cycle (browser reload), same programming model as React. JS (Functional Reactive Programming), fully open source 

**Downside:** any serious functionality will require a native module, it's early on, so the number of modules available is a bit limited. 

## Other Notable Options 

### RubyMotion 

[Rubymotion](http://www.rubymotion.com/) is a great option. It's essentially the same thing as Xamarin, but based on Ruby. 

If you like Ruby and don't mind choosing a proprietary solution, look no further! 

### Appcelerator Titanium 

I haven't given [Appcelerator Titanium](http://www.appcelerator.com/product/) a nod because I see their offering as a less well-designed but more mature stab at the same thing React Native is attempting. I argue that Titanium has a huge headstart in tooling and libraries, but React Native's functional programming model gives them the long-term, structural advantage.

## Conclusion 

Let's recap. 

Before picking any of the three above choices, make sure that you need a mobile UI. If not, rejoice! You can get away with HTML5, which should be way easier to develop for and find talent for. 

If you've determined you need a cross-platform native app, then closely evaluate the above options. 

Do you want the best out of box experience, and you don't mind proprietary lock-in? Go for Xamarin. (Or RubyMotion)

Want something similar to Xamarin, but JVM and open core? RoboVM is for you.

Looking for the tightest possible feedback loop? There's nothing like React Native (especially if used in conjunction with ClojureScript).

Of course, just like they say on Reading Rainbow, "Don't take my word for it!" You'll want to experiment with all of these solutions to see which is the best fit for you.

Happy coding!
