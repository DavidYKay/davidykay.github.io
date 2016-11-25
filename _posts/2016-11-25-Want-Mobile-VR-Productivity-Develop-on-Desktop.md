---
layout: post
title: Want Mobile VR Productivity? Develop on Desktop
---

If you're new to VR development, you might be wondering what a good workflow is for developing mobile VR experiences.

Mobile VR (Cardboard, Gear VR, Daydream) currently has the largest audience, with well over one million active users monthly, but development is painful. 

For developers using the default GearVR or GoogleVR SDK, a one-line code change means: 

* Removing the phone from the headset
* plugging the phone into the PC
* compiling the code
* deploying the .APK to the phone
* Mounting the phone back in the headset
* Wearing the headset

Now think about doing that over and over and over.

This frustration is surely what lead John Carmack to develop a [Lisp-based programming environment for live development on GearVR](https://youtu.be/ydyztGZnbNs?t=15m34s). His solution looks very slick, but has unfortunately been held up by Oculus management who find Lisp to be too strange of a programming language for mere mortals.

Thankfully, there are other approaches to high-productivity mobile VR development:

## 1. Develop on Desktop, then Port to Mobile

Using Unreal or Unity, you can create a desktop-based VR app, and then move it over to GearVR / Daydream when you are ready. 

By taking this approach, you'll use one Unreal/Unity project to support multiple platforms. However, this is not 100% for free! There are two key things you'll need to worry about as you support mobile and desktop VR.

### Input

The first thing to keep in mind is your input mechanism. If you are doing seated VR with a gamepad, you should be able to retain almost ALL of your code! If you use motion controllers on desktop, or if you use the touchpad on mobile, you may need to make some more adjustments, but once you're comfortable in your given game engine, you should have no trouble doing this.

The [UE4 VR Template Project](https://wiki.unrealengine.com/VR_Template) is a good demonstration of this, as they have support for both headset & gamepad (Oculus Rift without Touch) as well as room-scale with touch controllers (Vive).

### Art Assets

The second thing to mind is your assets. Mobile devices have far less GPU, CPU, and RAM to work with, so you'll need to shrink down your art assets to match. Also, due to hardware constraints, you won't be able to use all of the graphical effects that you might wield in desktop VR. You can check out the UE4 docs for some good rules of thumb for [optimizing your assets to Gear VR](https://docs.unrealengine.com/latest/INT/Platforms/GearVR/BestPractices/index.html).

### Build Target

One more thing you'll need to keep in mind, at least with UE4 + Gear VR, is that you'll need to take an extra step to set up the Gear VR build target. This is a decent [video tutorial](https://www.youtube.com/watch?v=eh6JL3d94Tk) on how to do so.

## 2. WebVR

Another option is to use Javascript & WebVR. With this workflow, you'll be writing your code and hosting a web server on your desktop, then connecting to your desktop using the web browser on the Gear VR.

The results you get won't be as impressive as with Unreal or Unity, but it will be a far less intimidating path for a beginner. You also have better access to modern browser APIs like speech recognition, sockets, HTTP, etc. It's definitely worth a look for prototyping. I like to prototype VR concepts using Clojurescript and WebVR -- it's way easier to do small experiments when compared to the larger game engines.

If interested in getting started with this, I recommend looking at Mozilla's [A-Frame](https://aframe.io/) as it's very simple to get started with. You can move to more complex tools later if necessary.

## Wrap

OK, so hopefully that clears up any questions you have around developing your VR app using a desktop headset with plans to later deploy it on mobile!

Have any more questions? Shoot them in the comments.

P.S. Huge thanks to Neonjung on reddit whose [question](https://www.reddit.com/r/vrdev/comments/5eru9s/vive_app_with_gear_compatibilty/) was the inspiration for this post.
