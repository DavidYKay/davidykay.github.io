---
layout: post
title: Why You Should Use Automated Testing For Healthcare App Development
---

*Welcome to my series on healthcare code quality! In this series of posts, I'll step you through some of the most common tools for improving code correctness and quality. Today, we'll begin with automated testing.*

## Intro

In healthcare software development, the stakes are often high.

A security breach can mean patient data leaked to the public.

Correctness failures in our code can mean a failure to properly treat or diagnose a patient. Sometimes 

Automated Testing can help with code correctness. 

My goal is to demonstrate to you that automated testing is a very beneficial tool and to give you some ideas about where to use it in your business.

### Code Examples

In this post, I will show some code examples. Don't panic. I've written them in such a way that non-programmers should be able to read them.
In fact, I expect you to NOT be a programmer and I hope that you will read them. So, give it a shot. Read it like English and I think they will make sense.
Or you can skip them and come back when you are ready. But I have faith in you!

Do me a favor? Let me know in the comments if they were too hard to follow.

## What is Automated Testing?

In essence, automated testing is the practice of letting a computer verify that our software is working correctly.



### Square Root

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

Clearly, though, we can see that something like `square_root` must work for all real numbers. And there's no possible way for us to write all the real numbers in our test case. So what do we do?

### Generative Testing

Luckily for us, there's a more modern approach to testing, known as generative testing.

The idea here is that we can implement this test in a way that is more similar to how a mathematician would define it, something like,

"For all integers, the square function takes a number, `k`, and returns `k*k`"

For the adventurous, it looks something like this:

```rb
def test_square_root
    generate_real_numbers.do |k|
        result = square_root(k)
        expect(result * result).to eq k
    end
end
```

### UI Testing

How about for UI Development? We may want to perform a complicated set of instructions and check the state before and after.

For example:

* Log into the app
* Post a new Tweet to Twitter
* Verify that my Twitter feed now contains that same Tweet that I posted

## Benefits

### External - Production Bugs

The worst of the problems are the ones that slip it past our detections into production.

#### Life and death concerns

In the healthcare field, we have the duty to "do no harm," but in the case that a major correctness bug slips into the wild, we'll need to 

#### Security concerns

There's been a lot of talk about security breaches lately. Testing won't solve this for you, unfortunately.

CI will help ensure that your code is doing what you think it's doing. But in order to plug security holes, you'll need to plan your system in advance.

#### Privacy concerns

Privacy, likewise, can't be solved by automated testing. Privacy concerns are a result of the design of your system. 

Correctness

## Drawbacks

### They Are a Burden

> Measuring software productivity by lines of code is like measuring progress on an airplane by how much it weighs. - Bill Gates

Yes, there is a burden in carrying around a large suite of tests, but they become your safeguard against incorrectness. As long as the tests are written correctly, they should guard against against obvious errors.


## How to Implement

### Know Your Requirements

1. Make sure your requirements are buttoned down before writing a bunch of tests. If your requirements shift, then your tests and your code will both need to shift.


### Automated Testing Workflow 

So this is all well and good, but how do we go about implementing testing in our organization?

The automated testing purists advocate the following workflow, which, I will admit, is highly rational:

1. Define Proper Behavior
2. Implement Behavior
3. Verify Behavior

#### Test-Driven Development

Where things become a bit contentious, is when they insist on something they call "Red, Green, Refactor."

The idea here is that anytime we begin work on a feature, we write ONE failing test case.
Then we come back and write barely enough code to make that test case pass.
Then we write another test case, and write *JUST* enough code to make that one pass.
And so on, and so on, until our code becomes a huge mess. At that point, we "refactor" the code, which is to clean up the code without changing the functionality. Since we have a nice test suite built up from our prior work, this actually is a very safe step.

Where I find fault in this approach is that it teaches the programmer to be overly reliant on the tests. And, as we know, just as "the map is not the territory," the tests passing is NOT the same thing as the code being correct!

[Tim Ewald - Programming With Hand Tools](https://www.youtube.com/watch?v=ShEez0JkOFw)

## They Don't Write Themselves

One point of clarification is that in automated testing, the tests don't write themselves! Computers aren't smart enough to know what is correct code and what is incorrect code on their own. 

Unfortunately, we must have a human sit down and define what correct and incorrect behavior look like for our program. 

And, as you may imagine, this becomes a larger and larger task as our project grows.

So, some quick tips about testing:

## Choose Your Difficulty Level

If you are working on any life-critical systems, it's likely that this you know all of the material in the post and then some. But I'll still address you folks just in case.

You'll want to throw everything you have at the correctness problem.

If, on the other hand, you're working on a non-critical application like a diet tracker, and it's OK to let a few bugs slip into production here and there, you may want to dial back the strictness, because everything is a tradeoff. A larger test suite, while a safeguard against bugs, is a burden on productivity. Make sure you choose the right approach for your system.


## Types of Testing

### Unit Tests

Take one small piece of functionality and test it on its own.

Example:

You can unit test just about anything, but mathematical formulas are a classic example for this.

For example, a piece of code that calculates the BMI of a patient. Or something that takes few analytes in the patient's blood and outputs a derived value.

### Integration Tests

Take two components and test that they work correctly when used together.

Example:

We have a module for fetching data from the server and another module for saving the data on the phone. 

We might run an integration test that tests that, without using any other pieces of the app, the data fetched from the server gets properly saved to the phone.

### End-to-end / "Black Box" Tests

Fire up the whole system, perform some actions from the outside, and verify that the result is correct.

Example:

Something we might usually have a QA person do. 

Launch the app, login, add a new food to our food diary, upload it, verify that it's now in our diary.

## Limitations


## How To Get Started

### 1. Find a unit testing framework

For Java, there's [JUnit](http://junit.org/)

For Objective-C / Swift, there's [XCTest](https://developer.apple.com/library/ios/documentation/DeveloperTools/Conceptual/testing_with_xcode/chapters/01-introduction.html)

For Javascript, you have [Jasmine](https://jasmine.github.io/) or [QUnit](http://qunitjs.com/).

### 2. Integrate it with your project

This one is a bit language-specific, b

### 3. Write your failing test

### 4. Make it pass

## Wrap

Tests are NOT a 100% solution. Just because the tests pass doesn't mean that the code is behaving properly. 
There are many strategies for achieving correct code and testing is but one of them.
In general, I advise that you find ways to reduce complexity and make sure that there are no opportunities for bugs to creep in.

Or, in the words of Tony Hoare,

> There are two ways to write code: write code so simple there are obviously no bugs in it, or write code so complex that there are no obvious bugs in it.

So, in closing, tests are an excellent tool for defining HOW a module should work and verifying that it does work that way. But, as with any tool, garbage in, garbage out. It's hard to cover every last edge case.

## Feedback

Let me know if you found this useful. Do you use automated testing right now? What pains are you having?

Would you like to see more about how to get started with automated testing?

Please stay tuned for the next post, where we'll be looking at how to use continuous integration to keep your app in a continual state of readiness.
