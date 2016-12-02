---
layout: post
title: Distributing Mobile VR Apps Outside Official Channels
---

On the learnVRdev subreddit, one user asks:

> Can a mobile VR user download a VR game/app file from a website directly onto the mobile device and run it... Or does the user have to use the Oculus or other established platform related to the hardware? (Like the Oculus store for GearVR users)

What a great question!

In a word, yes. But the details are quite complicated.

## Cardboard

Cardboard has no problem as you are just distributing a simple APK. Your users will need to [enable sideloading](http://www.greenbot.com/article/2452614/how-to-sideload-an-app-onto-your-android-phone-or-tablet.html) first, but then the rest is easy.

## Daydream

Same as above. Daydream is just Android so you need to provide an APK and have your users enable sideloading.

## Gear VR

GearVR is a pain-in-the-butt, because they require you to either include a device-specific OSig (Oculus Signature File), or publish in their official store.

There IS a hack to get around this in the form of SideloadVR.

[SideloadVR](https://play.google.com/store/apps/details?id=com.sideloadvr.market&hl=en) is attempting to be a solution to the OSig problem, but you'll need to publish via their store, which may make this option unsuitable for your purposes.

So, your options are:

1. Use official GearVR store (including beta testing)
2. Publish to SideloadVR
3. Gather every device ID from your testers, and distribute them builds
4. Write your own script to reimplement the SideloadVR functionality. (Dynamically providing OSig based on user's device ID. BuddyBuild, for example, does this on iOS quite elegantly).

## iOS (Cardboard, Bridge Engine)

This is tricky. To self-host an .ipa (iOS equivalent of .apk), you will need an enterprise app developer license. And, TECHNICALLY speaking, you're only supposed to deploy over-the-air to people inside your own organization. But there have been several companies to use an enterprise account to distribute to their beta testers. Most people simply don't consider it worth the effort.

## Wrap

In short, Google VR developers have it easy. Gear VR and iOS devs have it tough!
