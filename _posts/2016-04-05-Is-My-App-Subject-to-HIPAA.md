---
layout: post
title: Is My App Subject to HIPAA?
---

When developing a healthcare app, one of the first concerns to surface is regulation.

If I'm developing a calorie counter, I don't expect that suddenly I'll have to comply with HIPAA. And, fortunately, that's not how it works.

On the other hand, if I'm developing a chat app for doctors in the hospital, I **clearly** need to worry about HIPAA.

Where it gets interesting is: what if I'm building something like FitBit? I'm collecting a lot of potentially-sensitive data from the patient, perhaps cardiovascular or blood glucose data: do I need to worry about HIPAA?

This exact scenario presented itself recently as my friend, Oliver, who is developing a [consumer app for hypertension patients](http://www.heartbpapp.com/), asked me what steps he needed to take in order to be entirely compliant.

My first instinct was: as long as you're storing the data on the device and not the cloud, you'll be fine!

Turns out I was *wrong*. 

Let's step through my findings to understand when we **do** and when we **don't** need to worry about HIPAA.

## Covered Entity

The HIPAA Privacy Rule is aimed entirely at "covered entities." Not a covered entity? Then you have nothing to worry about.

But clearly, if you're collecting health data and PHIs, of **course** you're a covered entity, *right*??

Not so.

Oliver spoke with a HIPAA consultant on the matter who advised him that he's *not* a covered entity. 

I was in disbelief until I re-read the [official list of covered entities](http://www.hhs.gov/hipaa/for-professionals/covered-entities/index.html):

> 1. Health Plans 
> 2. Health Care Providers 
> 3. Health Care Clearinghouses

We can plainly see that "app developer" is not on the list. 

But what's a "Health Care Clearinghouse?" Turns out it's a specific type of company that's involved in the medical billing process. Not a consumer-facing app developer.

This is a **revelation** as many health app developers have currently been living in fear of HIPAA.

If app developers are NOT covered, then the gates are wide open for app developers to collect health data and PHIs from patients and store them freely!

I suppose that this is exactly the loophole that FitBit and its ilk are taking advantage of: not a healthcare provider? Not producing medical claims? No problem.

The real question, though, is: when can an app developer run afoul of HIPAA?

## BAA

If your app is going to be used by a covered entity (Health Plan, Provider, or Clearinghouse), you **will** be subject to HIPAA. 

As such, you'll need to sign a Business Associate Agreement, or BAA, with the covered entity. The purpose of the BAA is twofold: 1. To share the liability of a breach with the covered entity and 2. To clearly declare how the business associate (in this case, the app developer) will maintain the privacy and security of the PHIs in the system.

In short, you can think of yourself as being a covered entity by association, and now you need to worry about HIPAA.

## OCR Scenarios

Still with me? If you build FitBit, you're not covered by HIPAA. If you build an app that is prescribed to the patient by the doctor, you're covered by HIPAA.

If you're interested in reading up on this in more detail, the Office of Civil Rights at HHS recently published a [list of scenarios for health app developers](http://hipaaqsportal.hhs.gov/community-library/accounts/92/925889/OCR-health-app-developer-scenarios-2-2016.pdf) which is hugely helpful. 

Morgan Lewis also put out a [more readable summary](https://www.morganlewis.com/pubs/health-apps-and-hipaa-ocr-publishes-new-guidance-for-health-app-developers) of the paper.

## Wrap-up

I hope this answered your question! Hopefully you're now ready to either develop a killer unregulated app, or roll up your sleeves and to the hard work of developing a HIPAA-compliant one.

If you found this useful, I invite you to join my [newsletter](/newsletter), where I share helpful articles on building healthcare software.


