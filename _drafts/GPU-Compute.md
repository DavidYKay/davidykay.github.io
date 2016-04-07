---
layout: post
title: What's the deal with GPU Compute?
---

It's a question that I was recently asking a friend.

It seems like the last few years, GPUs have shown up and taken over. But what's the big deal with GPUs?

## Parallel

Essentially, the issue is that CPUs have become more and more complex, and are running into physical limits. We used to sit back and enjoy watching clock speeds scream higher and higher, but it looks like we're at the speed limit and we need to look elsewhere for a performance boost.

Meanwhile, GPUs are inherently parallel, consisting of many small, simple cores. Thus

## Memory Bandwidth

![Memory Bandwidth Chart](http://i2.wp.com/timdettmers.com/wp-content/uploads/2014/08/memory-bandwidth.png)

Bandwidth is one of the main reasons why GPUs are faster for computing than CPUs are

## Success Stories

### Games

This is obvious, right?

### Video Editing

Many video editing tasks are inherently parallel. GPUs for the win.

### High Performance Computing / Scientific Computing

Some labs have seen speedups of XXX

Monte Carlo simulation
Random number generators
[Sorting algorithms](http://mgarland.org/files/papers/gpusort-ipdps09.pdf)

### Machine Learning

![Chart](http://www.nvidia.com/content/tesla/images/machine-learning/sgemm-performance.jpg)
Source: [Nvidia](http://www.nvidia.com/object/machine-learning.html)

GPUs turn out to be an excellent hit in machine learning as well.

I'm not a machine learning expert, but I do know that many machine learning tasks involve a lot of matrix math, a natural fit for the architecture of a GPU.

http://www.codeproject.com/Articles/336147/Large-Scale-Machine-Learning-using-NVIDIA-CUDA

facebook's hardware design
https://code.facebook.com/posts/1687861518126048/facebook-to-open-source-ai-hardware-design/

## Getting Started

Since this is a blind spot for me, I'm planning to dedicate some time on the side to become more familiar with GPU computing. In that vein, I picked up a copy of [CUDA by Example](http://amzn.to/1ULcXfl) from the local library. Why CUDA? I'd actually prefer to learn OpenCL for portability reasons, but this seems like a great text to get started with.

Want to join me in my learning journey?

Here are a few links to helpful resources to get up and running with general-purpose GPU computing:

### CUDA

If you're interested in CUDA, here's a set of links to a [CUDA tutorial series from Dr. Dobb's Journal](https://llpanorama.wordpress.com/cuda-tutorial/).
Nvidia also has published a set of [high-quality slide decks](http://www.nvidia.com/object/SC09_Tutorial.html) to get you started.

### OpenCL

If you prefer the vendor-neutrality of OpenCL, here's [AMD's OpenCL tutorial](http://developer.amd.com/tools-and-sdks/opencl-zone/opencl-resources/introductory-tutorial-to-opencl/).

### Mobile

Android developers, will want to look at [RenderScript](https://developer.android.com/guide/topics/renderscript/compute.html) and iOS developers, will want to look at [Metal](https://developer.apple.com/metal/).
