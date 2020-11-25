---
layout: post
title: Hello World
---

I've taken some time recently to share my concerns, publicly and privately, over the rise of global tyranny during the so-called "COVID-19 pandemic."

The actions taken over the past eight months are clearly leading to the destruction of the economy and the crushing of the human spirit.

Most people seem to believe that these are mere side-effects of well-intentioned efforts by the government. However, there's a great deal of evidence which indicates otherwise.

Over the past few months, I've written speeches, reports, and blog posts that I have yet to publish. In my heart of hearts, I'd love to take on this cause full-time. I believe deeply in the capacity of the human species and don't want it to fall under the yoke of tyrants. In my estimation, we are closer to enslavement than we have ever been in my lifetime.

However, I have a business to get off the ground, and it seems that most people would rather not hear a viewpoint which dissents from that of the mainstream media. 

As much as I'd like to claim that I am Iron Man, impervious to all assaults, physical and emotional, the truth is that to be a full-time "champion of the people" takes an incredible amount of emotional energy, a sum that I do not feel comfortable devoting while my business is not yet fully established.

If you are in the minority of people who also smell a rat, but don't know who to turn to, I'd like you to know that you are not alone. There are many others just like you out there. Seek them out. They will be glad to have you.

How can it be that the average person is blind to the truth? 

Some don't care to know.

Others know, but don't want to confront the horror.

Others know, but don't want to be shunned by their peers.

Remember that humans have a natural instinct to operate as a herd. This instinct has been carefully exploited for decades.

"It's easier to fool someone than to convince him that he's been fooled."

Orwell cautioned us that there is a state from which the citizenry has no escape, a situation where an oppressive government has the people in a complete and total chokehold.  

Go into one's house

> Without derogating from section 25, an authorised officer 
> may, for the purpose of ensuring compliance with any 
> direction under that section, remove a child from any 
> premises, place, vehicle or vessel to a place of residence of 
> the child or to a hospital or quarantine facility, as the 
> authorised officer thinks fit (and may, in doing so, use such 
> force as is reasonably necessary).
[South Australia][4]


> "Nothing is so permanent as a temporary government program."  
> -- Milton Friedman 

The USA PATRIOT Act was meant to be a temporary measure, instituted for 4 years. Since then, we've only seen an increase in far-reaching governmental surveillance of American citizens.
Britain's income tax was a temporary measures.


The income tax was originally unconstitutional. 

Indeed, we've been told for months that ["We can't go back to normal"][2].


It's my firm belief that we are dangerously close to such a situation.
I have faith that enough will wake up before we lose our freedom and our property rights. 

My grandparents come from North Korea, and were sure to teach us about how "paradisal" it is to live there. The shifts currently occurring in American government, education, and culture, do not bode well. Secondly, I've spoken with friends who have lived under former Soviet Union governments, and they are also ringing the alarm bell. Thirdly, a Sikh friend of mine told me that he has been very concerned about the trajectory that we are on, explaining that, coming from a part of the world where the "rule of law" is not a given, he and his family have been much more critical of the COVID-19 response than they would have otherwise been. 

Please consider that if your family has lived under the rule of a Western democracy for generations that you may not have been primed for the possibility that the guardians of the people might one day turn on them.

Regardless of your political affiliation, I urge you to read Orwell's 1984 and to consider how we might prevent such a situation from occurring.

Thank you.

-----

This article is the first in a series of articles on how to learn to program.

-----

Programming is the vocation I've chosen for myself. Or, perhaps, the one that chose me? 

My father put me in front of a computer at a very early age, and, though I shunned the idea of being a professional computer nerd for many years, I finally succumbed in my early twenties and learned the art of programming.

Today I'd like to share with you the very first thing you'll need to learn as a computer programmer.


Traditionally, the very first program each new programmer learns to implement is known as "Hello World."

What is "Hello World?"

"Hello World" is known as the simplest program that actually does something that the user can see.

### The Simplest Possible Program

You can write a simpler program, but you won't know if anything happened!

For example, this would be the simplest possible program in C:

```c
int main() {
  return 0;
}
```

Unfortunately, if we run it, we don't have much information on what happened!

```
flynn@grid ~/workspace/example/c/hello $ ./simplestProgram 
flynn@grid ~/workspace/example/c/hello $ 
```

Technically, there is a way of getting the exit code. On UNIX machines, this is performed with `echo $?`.

```
flynn@grid ~/workspace/example/c/hello $ echo $?
0
```

### Hello World - Simplest Program with Visible Output


```c
#include <stdio.h>

int main() 
{
  printf("Hello, world!\n");
  return 0;
}
```

If you've never seen C before, you might be wondering WTF `#include <stdio.h>` means, why the print function has a funny name, and why we need to include the 

If you've never seen code before, you're going to be wondering what the hell I just said.



For the newbies with no programming experience whatsoever, I'll take a moment to explain each line:

#### Line-by-line Explanation

```c
#include <stdio.h>
```

Please allow me to use all of the code provided by the file `stdio.h` from the C standard library. `stdio` means "Standard I/O," which means "Standard Input/Output," which means the most commonly used functions for reading/writing files and reading/writing text.

```c
int main() 
```

What follows is a function named main, which will return an integer value.


```c
{
```
Until the corresponding `}` bracket, all following code is part of the aforementioned `main()` function.


```c
  printf("Hello, world!\n");
```


```c
  return 0;
```
I'm going to hand back a 0 to the person who "called" me. A 0 means "success" in UNIX operating systems.


```C
}
```

This marks the end of the `main()` function.


### Language Selection

Even as a complete beginner, it's likely that you have been exposed to the idea that there are multiple "languages" that you can program with.

These days, you'll likely have been exposed to Javascript or Python. C might seem a bit esoteric.

The good news is that most tasks on a computer can be done by most languages. Different languages will have different fortes from one another,

For good measure, here's Hello World in Python:

```py
print("Hello, world!")
```

You'll notice that there's much less "boilerplate" than in the C version.

Why is that?

Larry Wall once described the two key axes of a programming language as "Manipulexity" and "Whipuptitude." I had no idea what he meant when he first mentioned these ideas, but you'll find that languages such as C and C++ excel in "Manipulexity," in that you can control every little detail about how the program runs on your particular hardware. Meanwhile, languages like Python and Javascript tend to excel in "Whipuptitude," meaning that it's easy to get a solution up and running very quickly. Different projects will call for different tools, but most companies these days are working in domains where "Whipuptitude" is more important than "Manipulexity."

### What's the Point?

So, why do we bother with "Hello World" in the first place? If this program was first implemented 40+ years ago, why do we still write it today?

Hello World is a sanity check. 

If you've ever had trouble starting your car, then you know the value of a sanity check. It might be the alternator. It might be the battery. Luckily, the guy at the local parts store will gladly slap your battery on a testing machine to verify that it can hold a charge. This is a VERY useful sanity check before you start hunting for gremlins in your car!

Likewise, when writing code, it's very easy to have a problem and to not know where it is! 

Trust me, it's very easy to settle into a flow state, let enthusiasm get the best of you, and before long, you've introduced three changes, each of which could be causing the mysterious issue you are currently looking at!

Whenever this happens, the safe thing is to back up and test your assumptions. See if your code is working the way you assume that it is.

"Hello World" is the sanity check in your toolbox. I use it often. Whenever I learn a new language, move to a new platform, or begin a new programming project, the first thing that I do is to spin up a "Hello World" program.

When implementing a new feature in an existing project, often the first sane thing to do, before you do your write-home-to-mom, world-class, professional implementation, is a plain, simple, minimal implementation.


The next time you find yourself not knowing where to start, perhaps a "Hello World" is in order.

-----

Thank you for reading. 

My team and I are currently working on an educational game which teaches the fundamentals of computer programming.

Computer programming is a well-paying, rewarding career, and has been dubbed "the new literacy."

We grew up on educational computer games which cultivated our love of computing. Our hope is to help the next generation discover the joy of coding.

If you find this article useful, please share it with another budding programmer in your life.

[1]: https://www.youtube.com/watch?v=nuDQ_3g53qc "What NO ONE is Saying About The Lockdowns"
[2]: https://www.theguardian.com/world/2020/mar/31/how-will-the-world-emerge-from-the-coronavirus-crisis "The Guardian - ‘We can’t go back to normal’: how will coronavirus change the world?"
[3]: https://www.legislation.sa.gov.au/LZ/C/A/COVID-19%20EMERGENCY%20RESPONSE%20ACT%202020/CURRENT/2020.7.AUTH.PDF
