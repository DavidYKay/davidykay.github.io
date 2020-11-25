---
layout: post
title: Fizzbuzz
---

Now that you've learned Hello World, you're probably eager to learn something more substantial.

Classically, the next step up from Hello World is a program known as "Fizzbuzz."

This program will exercise several fundamental programming skills. In fact, many believe that you are only a programmer once you can write "Fizzbuzz!"

Many software hiring processes use FizzBuzz as a screening device -- if you can't write FizzBuzz, you're out!

I ran into this when I applied to The Recurse Center, known as Hacker School at the time. They didn't take me, but at least I made it to the next step of the interview. So I know that at least my FizzBuzz implementation was on the level.

```py
for i in range(1, 101):
    if i % 15 == 0:
        print("FizzBuzz")
    elif i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)
```
