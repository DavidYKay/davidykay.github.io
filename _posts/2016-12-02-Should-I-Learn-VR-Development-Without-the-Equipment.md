---
layout: post
title: Should I Learn VR Development if I Don't Have the Equipment?
---

crabbythecrustacean on the learnVRdev subreddit [asks](https://www.reddit.com/r/learnVRdev/comments/5fvo16/introduction_to_vr_development_using_unreal/daovdcp/):

> Is there any point to learning this stuff before you have the hardware to test with? I'm a recent grad, trying to get my first job (in any software development) but I'm thinking I want to start trying to direct my career towards being in VR app development. Right now I don't have either the money or space (in share housing) to invest in the equipment.

If you're 100% sure you're interested in VR, my recommendation is to start learning a 3D engine without the equipment. This means you won't be able to learn VR input (motion controllers definitely change how you design things), and you won't get the same feeling of scale and "presence" as you would behind the visor, but you **will** be able to learn many other valuable lessons.

## Which 3D Engine?

Depending on your programming background, you may find it easier to start with WebVR than Unreal or Unity. Also, Mozilla's [A-Frame](https://aframe.io/) framework is built from the ground up with the assumption that some users won't have headsets and that everything should fall back to. So, you could develop some basic experiences using the flat-screen fallback, and then try them out in an HMD if you can get access to one.

Between Unreal, Unity, and WebVR, my preference was for Unreal because it has a ton of structure and discoverablility compared to the Unity and WebVR tools that I've seen so far. I've found that just by dinking around in the UE4 editor, I can learn a lot about the process for creating a great VR experience, while with Unity and A-frame, it's more about Googling documentation / StackOverflow, then coming back to write the code. I will admit that, out-of-the-box, if you are an experienced coder, A-Frame and Unity will make you feel more at home at first, as they both emphasize a text-based scripting workflow for prototyping. Unreal, on the other hand, promotes a visual language for prototyping and scripting, which may feel uncomfortable to an experienced programmer. Still, Unreal does expose all engine features in C++ or, if you're looking for a good text-based scripting solution, I highly recommend [SkookumScript](http://skookumscript.com/).

## Google Cardboard - Cheap HMD

One thing you may not have considered is that almost every smartphone is compatible with Google Cardboard. So, if you really want a cheap HMD, you could buy a Cardboard and use that as your test rig for now. It costs about $10, which I'm sure you can come up with.

Also, the input mechanism on Cardboard is VERY similar to Gear VR (touch button on your temple). AND, you can use a Bluetooth gamepad! Using a gamepad on Cardboard essentially means you're using the same input mechanism as Oculus Rift, which means much of your code will carry over to Rift and GearVR if you decide to go down that path.

One caveat if you are deciding to build for Cardboard is that the iteration time for Unity and Unreal, especially Unreal, is very slow. If you are building for Cardboard, WebVR will give you a much faster iteration time. These concerns lessen if you have a desktop headset to [develop on before you deploy to mobile](http://www.davidkay.cc/Want-Mobile-VR-Productivity-Develop-on-Desktop/), but it's something to keep in mind.

## Conclusion

The most important thing for you to do right now is to figure out if VR is something that you're really interested in. It may be tougher to find a job in VR right now since the industry is so new. I'm not sure on this one, and I've seen at least one article proclaiming a [VR developer shortage](http://uploadvr.com/huge-shortage-developers-vr-industry/).

My advice is: if you're really committed to this, and you aren't under heavy pressure to get a job RIGHT away, then you should seriously consider diving in. The industry is poised to grow, and most developers haven't dove in just yet. I was able to build my career by getting a head-start on iOS development (starting in 2008), so you may be able to "ride the wave" in the same way that I did.

Hope this helps.
