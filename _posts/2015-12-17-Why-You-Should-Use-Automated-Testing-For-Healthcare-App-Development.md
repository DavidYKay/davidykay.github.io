---
layout: post
title: Why You Should Use Automated Testing For Healthcare App Development
---

*Welcome to my series on healthcare code quality! In this series of posts, I'll step you through some of the most common tools for improving code correctness and quality. Today, we'll begin with automated testing.*

## Intro

In healthcare software development, the stakes are high.

In diagnostic and therapeutic software, correctness failures in our code can mean a failure to properly treat or diagnose a patient. Sometimes with lethal implications.

Even in back-office, administrative software, bugs can mean billing errors or costly security breaches.

Thus, in this war on bugs, we need all the help we can get.

<center>
<a data-flickr-embed="true"  href="https://www.flickr.com/photos/mirando/53537281" title="... ya no puede caminar!"><img src="https://farm1.staticflickr.com/33/53537281_480a1b933a_z.jpg?zz=1" width="640" height="480" alt="... ya no puede caminar!"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
</center>
<center> *Do you really want one of these walking around in patient-facing code?*
</center>

One of the most common bug-fighting tools in our arsenal is automated testing.

In this article, we'll be looking how automated testing is beneficial for preventing bugs from entering already-correct code (regression) and for helping to ensure that new code is written correctly. 

My hope is that you'll walk away from this post with the inspiration and knowledge to write your **first automated test**. 

## What is Automated Testing?

In essence, automated testing is the practice of letting a computer *verify* that our software is **working correctly**.

Sounds great, eh?

The challenge is that, without any guidance, the computer doesn't know what **"correct"** means! 

<!--
<center> 
<a data-flickr-embed="true"  href="https://www.flickr.com/photos/44214515@N06/15337608284" title="ROBOCOP"><img src="https://farm8.staticflickr.com/7514/15337608284_61e20f78aa_z.jpg" width="424" height="640" alt="ROBOCOP"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
<center> *Without a programmer, Robocop wouldn't know to "serve the public trust!"*  </center>
</center> 
-->

So, in order to use automated testing, we need to first teach the computer what "correct" means in the context of our code. Once we've done that, it can verify the correctness for us as often as we like.


### Code Examples

A quite note: in this post, I will show some code examples. Don't panic. I've written them in such a way that non-programmers will be able to read them and get the gist.

In fact, I expect you, dear reader, to NOT be a programmer. Once again, I am writing the code examples in such a way that you will be able to read them. So, give it a shot. Read the code samples just like English and they should make sense. At least enough to fundamentally understand what's going on.

<center> 
<a data-flickr-embed="true"  href="https://www.flickr.com/photos/whoisbadwolf/3298612044" title="The Hacker Manifesto"><img src="https://farm4.staticflickr.com/3561/3298612044_59b6c4800b_z.jpg?zz=1" width="640" height="419" alt="The Hacker Manifesto"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
<center> *"I don't even see the code. Of course, it wasn't always like that..."*  </center>
</center> 

Or you can skip them and come back when you are ready. But be sure to come back. You can do more than you think you can. I have faith in you!

Do me a favor? Let me know in the comments if they were too hard to follow. And where you got stuck!

### Unit Testing - Square Root

To cite a simple example, we know that the `square_root(x)` function is working correctly if we pass it a number `k` and it returns a number `o` such that `o*o = k`. So, `square_root(1)` = 1, `square_root(4)` = 2, `square_root(9)` = 3, etc.

One way to test this would be to sit down and actually write the test like that, looking something like this:

```rb
def test_square_root
    expect(square_root(0)).to eq 0
    expect(square_root(1)).to eq 1
    expect(square_root(4)).to eq 2
    expect(square_root(9)).to eq 3
end
```

And this will work for most cases. In fact, this approach is good enough for most software developers in the industry today!

Clearly, though, we can see that something like `square_root` must work for **all real numbers**. And there's no possible way for us to write *all the real numbers* in our test case. So what do we do?

### Generative Testing

Luckily for us, there's a more modern approach to testing, known as generative testing.

The idea here is that we can implement this test in a way that is more similar to how a mathematician would define it, something like:

"For all integers, the square function takes a number, `k`, and returns `k*k`"

For the adventurous, the code looks like this:

```rb
def test_square_root
    generate_real_numbers.do |k|
        result = square_root(k)
        expect(result * result).to eq k
    end
end
```

<!--
<center> 
<img src="../images/2015/12/17/MasterMold.png" /> 
</center>
<center> *Generative Testing: robots making robots*  </center>
<center> Photo: Marvel Entertainment Group </center>
-->

Obviously, in a healthcare app, you won't be re-implementing the square root function, but it should be apparent that use unit testing and generative testing can be used to verify most mathematical code. What may not be immediately apparent is that the same techniques can be used to verify business logic, modeling, and most types of code. 

### UI Testing

So, what do we use for UI Development? 

Many companies still use humans and a checklist to click around the app and verify that all the buttons are working as specified.

The good news is that modern UI testing is largely equivalent to this, with the key difference being that a computer is performing the verification instead of a human! Holy cost savings, Batman!

<center> 
<a data-flickr-embed="true"  href="https://www.flickr.com/photos/toyville/13986097115/in/photolist-niUppr-53Kq9P-ac4SFv-7RB3N1-qeX2rV-n1fr6-5LZRg1-5EXj3f-5qcVDm-cpK8Q7-5pZpuP-nYVFDL-o9VMEM-bvx5hH-eXADKX-5wytEM-9i3kxX-8oWegP-xEpNMy-ixCfD-9tzkq3-o4afcR-8D84xL-pDhag6-8u2RFd-btpqNX-dMLciv-5h7oUE-84AwUa-5BqsvN-5BmchZ-5BqsnC-cAqTG3-a82M5q-6wZxJ6-8yUctK-dKTCAp-nqavbk-juEBmN-nLZkWS-8471JT-qhuueg-dQ7RTR-qmUbp4-9azC1a-qxTmim-dgDN9Y-dMBLu8-nbQZPH-bb2yut" title="Batman"><img src="https://farm8.staticflickr.com/7372/13986097115_161b585e81.jpg" width="500" height="473" alt="Batman"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
</center> 
<center> *"The batcave was able to cut costs by 30% after adopting test-first development."*  </center>

Most of the time when we are testing UI, we want to perform a complicated set of instructions and check the state before and after.

For example:

1. **Launch** the app
2. **Verify** we are at the login screen
3. **Log in** to the app
4. **Post** a new Tweet to Twitter
5. **Verify** that my Twitter feed now contains that same Tweet that I posted

Once we have assembled a script like this, we can have the computer run through the test over and over, on-demand. No more waiting for the QA team! UI tests like this are very handy for catching breakages right when they happen rather than after the fact.

## Drawbacks

Now that we've seen some examples of tests and how they work for us, let's take a moment to look at the downsides.

### They Are a Burden

Unfortunately, any time we add code to our project, we decrease our agility and increase our maintenance cost. Tests are no different in this regard.

> Measuring software productivity by lines of code is like measuring progress on an airplane by how much it weighs. - Bill Gates

The good news, however, is that as we add (intelligent) tests, we increase our confidence in our code's correctness.

<center> 
<a data-flickr-embed="true"  href="https://www.flickr.com/photos/22280677@N07/3383384471" title="Atlas"><img src="https://farm4.staticflickr.com/3644/3383384471_4ab6958190_z.jpg" width="326" height="640" alt="Atlas"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
</center> 
<center> *Some burdens are worth carrying.*  </center>

So, while there is a burden in carrying around a large suite of tests, their value, especially in a mature, production-grade product outweighs their cost. 

The flip-side of this is that if you are working on an early prototype and not shipping anything to actual customers, you may want to hold off on tests until your product is a bit more settled-in.

## How to Implement

OK, so you're excited about automated testing and want to implement it for your organization? Great. Let's take the following steps to get up and running.

### Know Your Requirements

Make sure your requirements are buttoned down before writing a bunch of tests. If your requirements shift, then **your tests** *and* **your code** will both need to shift.

### Code-Before-Tests vs Tests-Before-Code

#### Code-Before-Tests

Purists hate this method because it's not making the most of testing's ability to assure correct code. After all, if you implement first and test later, there's a danger that "later" never comes.

The unfortunate truth is that this is the way that most of industry does it.

<center> 
<a data-flickr-embed="true"  href="https://www.flickr.com/photos/aigle_dore/5951731165/in/photolist-a4Wbjz-nfRvFL-9Qc2ex-6WXSM-by3Dr1-9Gyu5u-541n57-7NHQbr-o65btX-aee4X8-9av7WQ-hCVQM-8Gbi2r-brBmJK-nJguMp-as3uF-66uPw4-9CquY7-8DmAbM-QLQjY-6HG2N-e74ry6-eWPgVq-bEQuDv-aFCZRp-8GbhRp-7AHAMn-r41Qjn-8FDdC-8WRw7n-aiQGSu-7gcr1-9GR8uq-oaRDQc-7jyDSr-pEPpJN-8Lkd2a-6ska5J-bM1d2-a128Ms-q6yUe1-qrQxUb-2Q2tYk-EUsie-qoaydU-9JYE95-8Getk5-e8xeoJ-5pJ7sb-adjYFE" title="Cowboy"><img src="https://farm7.staticflickr.com/6140/5951731165_1ea3076eab_z.jpg" width="640" height="399" alt="Cowboy"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
</center> 
<center> *Code-Before-Tests? Must be a cowboy coder.*  </center>

The upside here is **productivity**. You can first focus on getting a feature working, without the distraction of tests, then come back and focus on tightening up your correctness once you have implemented the basic functionality.

The main dangers here, if you write the tests **after** the code, are that:

First, you may end up taking shortcuts and testing your code based on how it currently behaves, instead of it SHOULD behave.

Second, you may not test your code as thoroughly as if you wrote it tests-first.

Third, you may waste more time debugging, since you don't have your tests in place to help catch bugs.

The takeaway is that most of the industry prefers to operate this way because it's easier at first. The nagging doubt is whether this approach ends up costing more in the long run due to bugs creeping in.

#### Tests-Before-Code

The automated testing purists instead advocate the following workflow, which, I will admit, is highly rational:

1. Define Proper Behavior
2. Implement Behavior
3. Verify Behavior

After all, by creating a "specification" of each component before we implement it, we create a clear goal of what we want the final product to look like.

<center>
<a data-flickr-embed="true"  href="https://www.flickr.com/photos/12629613@N03/5426234946" title="pocket protector"><img src="https://farm6.staticflickr.com/5214/5426234946_41e9f571c5.jpg" width="333" height="500" alt="pocket protector"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
</center>
<center> *Tests first!*  </center>

In general, I would recommend this approach for any systems that are clearly specified ahead-of-time and unlikely to change during the development process.

##### Red, Green, Refactor

Where things become a bit contentious is the insistence on a workflow called, "Red, Green, Refactor."

<center>
<a data-flickr-embed="true"  href="https://www.flickr.com/photos/undailypower/6233815834" title="Lights"><img src="https://farm7.staticflickr.com/6105/6233815834_f6a37f185f.jpg" width="275" height="500" alt="Lights"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
</center> 
<center> *Red, green, refactor.*  </center>

The idea here is that when beginning work on a feature, we write ONE failing test case.
Then, we come back and write *JUST ENOUGH* code to make that test case pass.

We then repeat this process, writing a test and then writing the tiniest pieces of code, on, and on, until our code becomes a huge mess. At that point, we "refactor" the code, which is to clean up the code without changing the functionality. Since we have a nice test suite built up from our prior work, this actually is a very safe step.

Sounds nice, eh? Well, let me show you the three main faults I find in this approach:

*First*, I find that the practice of writing "just enough code to make the test pass" is often overly simplistic and is a very indirect path to the goal. I think that there's a certain counter-intuitiveness involved that ends up being an inefficient use of the programmer's brain.

*Second*, the rhythm of Red, Green, Refactor teaches the programmer to be overly reliant on the tests. And, just as "the map is not the territory," the [tests passing is NOT the same thing as the code being correct](https://youtu.be/ShEez0JkOFw?t=41m56s)!

*Third*, many programmers find that the constant need to emphasize testing testability takes a hit on productivity.

Still, strict observance of Red, Green, Refactor does work for *many institutions*. Even as a critic, my test-first development workflow is largely based on Red, Green, Refactor.

## Choose Your Difficulty Level

The good news is that, unless you are working on a life-critical system with zero tolerance for error, you can gradually adopt code correctness practices and arrive at a comfortable point for you and your organization.

<center> 
<img src="../images/2015/12/17/Difficulty.png" /> 
</center> 
<center> *No matter what an expert tells you, don't jump into "Nightmare" mode right away.*  </center>

After all, if you're working on a non-critical application like a diet tracker, it's OK to let a few bugs slip into production here and there, you may want to dial back the strictness, because everything is a tradeoff. A larger test suite, while a safeguard against bugs, is a burden on productivity. Make sure you choose the right approach for your system.

## How To Get Started

There are other options out there, but I'll direct you to a few safe picks to get you up and running.

### 1. Find a unit testing framework

For Java, there's [JUnit](http://junit.org/).

For Objective-C / Swift, there's [XCTest](https://developer.apple.com/library/ios/documentation/DeveloperTools/Conceptual/testing_with_xcode/chapters/01-introduction.html).

For Javascript, you have [QUnit](http://qunitjs.com/). 

### 2. Integrate it with your project

For Java, your IDE likely has a project template with JUnit built-in. In most cases, this will create a separate build/run target. To run it, you would need to invoke, for example, `ant test` instead of `ant run`.

For Objective-C / Swift, you'll want to create a new project with unit tests. It'll create a separate build target to house your tests. You'll need to select it in the top-left build target drop-down when you want to execute your tests.

For Javascript, you'll generally create a separate `index.html` file that loads your tests and executes them. The QUnit docs will show you how to do it.

### 3. Write your failing test

Now that we have our testing tools together, it's time to write our first test! Because of "Red, Green, Refactor," we should write a FAILING test first.

#### Java & JUnit

```java
@Test
public void testEquality() {
    assertEqual(1, 2);
}
```

#### Objective-C & XCUnit

```objc
- (void)testEquality {
    XCTAssertEqual(1, 2, @"Integer equality is not working as expected");
}
```

#### Javascript & QUnit

```js
QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == 2, "Passed!" );
});
```

### 4. Make it pass

Sweet! We should be able to run that test and get a failing notice back from our code. Let's correct it and get a beautiful green checkmark, instead.

#### Java & JUnit

```java
@Test
public void testEquality() {
    assertEqual(1, 1);
}
```

#### Objective-C & XCUnit

```objc
- (void)testEquality {
    XCTAssertEqual(1, 1, @"Integer equality is not working as expected");
}
```

#### Javascript & QUnit

```js
QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == 1, "Passed!" );
});
```

### 5. Celebrate

Congratulations! You've written your first test and made it pass. Go take a break and then come back and write a bigger, more meaningful test. The sky's the limit.

## Wrap

Tests are a great tool to help reduce bug count. In healthcare, bugs in our code can mean security breaches, failures to properly store/transmit information, or in the worst case, patient harm. Tests are thus highly valuable for the assurance that they provide.

However, tests are *NOT* a 100% solution. Just because the tests pass doesn't mean that the code is behaving properly. There are **many strategies** for achieving correct code and testing is only one part of the solution. 

In general, I advise that you find ways to reduce complexity and make sure that there are no opportunities for bugs to creep in.

> There are two ways to write code: write code so simple there are obviously no bugs in it, or write code so complex that there are no obvious bugs in it. - Sir Tony Hoare

<center> 
<img src="../images/2015/12/17/Hoare.jpg" /> 
<center> *Hoare: Bug killer*  </center>
<center> [Photo](https://en.wikipedia.org/wiki/Tony_Hoare#/media/File:Sir_Tony_Hoare_IMG_5125.jpg) by [Rama](//commons.wikimedia.org/wiki/User:Rama) / CC BY-SA 2.0 fr </center>
</center> 

So, in closing, tests are an excellent tool for **defining** *HOW* a module should work and **verifying** that it does work that way. But, as with any tool, garbage in, garbage out: your tests are only as strong as the work that went in to defining them. 

Chase down those edge cases and best of luck!

Please stay tuned for the next post, where we'll be looking at how to use **continuous integration** to keep your app in a continual state of readiness.

## Feedback

Let me know if you found this useful. Do you use automated testing right now? What pains are you having?

Would you like to see more about how to get started with automated testing?

Thanks for any and all feedback!
