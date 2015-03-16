---
layout: post
title: How to use F# in a PCL with Xamarin Forms in Xamarin Studio
---

The problem: Xamarin Studio doesn't officially support creating PCL (portable class library) projects using F#. C# works fine, but F# support is still lagging behind.

Why not just stick with C#? F# is functional! Combined with tools like [ReactiveUI](http://reactiveui.net/), it's hard to beat.

The solution: I originally read that it's possible to create an F# PCL project in Visual Studio on Windows and then import it to Xamarin Studio on Mac, but this approach didn't work for me. After importing the project in Xamarin Studio on Mac OS X, I got the Profile78 "not installed" error.

So, after doing some more research, it turns out that in order to get the F# PCL to work on Xamarin Studio, you need to perform a workaround in your .fsproj file, adding the following line:

    <ProjectTypeGuids Condition="'$(MinimumVisualStudioVersion)' == '12'">
        {786C830F-07A1-408B-BD7F-6EE04809D6DB}
    </ProjectTypeGuids>

[Kudos to Dave Thomas](http://forums.xamarin.com/discussion/comment/90863/#Comment_90863) for the above intel.

Still, I am a .NET newbie and didn't know what the heck that meant at first, so I took the time to assemble a [working example on GitHub](https://github.com/DavidYKay/HelloFSharpXamarinFormsPCL). I hope this is helpful.

Please note that this example currently still uses C# to bootstrap the application. I'll add an additional example in the future that is entirely based in F#.

Any comments? Let me know.
