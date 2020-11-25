---
layout: post
title: HIPAA-Friendly User IDs for Consumer Mobile Apps
---

A friend and I recently were discussing HIPAA and what it means for his [blood pressure app](http://www.heartbpapp.com/) to be HIPAA-compliant. And whether it needs to be.

His question was on identifying his users and the HIPAA implications of storing data on the device versus on a server.

My response was that storing the data on the device should be no problem, but storing data on a server, whether it be iCloud or a self-hosted server, could run afoul of HIPAA.

The HIPAA Privacy Rule is primarily concerned with PHIs, or "Protected health information," which are pieces of information which can potentially compromise a user's anonymity.

With that in mind, we looked over the [official list of PHIs](http://www.hhs.gov/hipaa/for-professionals/privacy/special-topics/de-identification/index.html) (more readable version on [Wikipedia](https://en.wikipedia.org/wiki/Protected_health_information)), asking what ARE we allowed to employ to identify a user?

## Official PHIs

> 1: Names  
> 4: Phone Numbers  
> 6: Email Addresses  

No names, email, or phone numbers. That rules out most conventional forms of user login.

But it goes on! Check these two out:

> 10: Account numbers  
> 18: Any other unique identifying number, characteristic, or code except the unique code assigned by the investigator to code the data

### Account Number

Now, I'm not a HIPAA expert, but one could conceivably argue that using a database ID constitutes an "account number."

### Unique Identifying Number

That may be a bit of a stretch, but check out number 18: "any other unique identifying number... except the code assigned by the investigator."


Number 18 is particularly striking, as any database ID or UUID that has a 1-to-one relationship with a given patient is clearly a unique identiying number.

## UUID

As far as server-side storage of data was concerened, my original intuition said that it'd be fine to use a UUID to identify each user, as there's nothing identifiable about a UUID on its own.

However, close reading of HIPAA has made me skeptical that even a UUID is properly compliant.

## Aggregation

Still, in any case that you are looking to release patient data to another party, I suggest that you anonymize it.

One of the most foolproof ways to anonymize data is to group users (patients, in this case) into buckets of size n, say 5.

### Open-source Code

Here's some example open source code that I wrote in Clojure that implements a basic aggregator.

All you do is call the endpoint with a POST request and you'll get back a UUID from the service.

We use PostgreSQL to track all of the open UUIDs / Group IDs that you have in the system.

#### Deployment

This can easily be hosted on Heroku for free.

Give it a shot and let me know what you think.
