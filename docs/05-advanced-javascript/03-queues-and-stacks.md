---
title: Queues and Stacks
parent: Advanced JS Techniques
nav_order: 3
---

<!--prettier-ignore-start-->
## Loop Da Loop
{: .no_toc }

TBD

## Table of Contents
{: .no_toc .text-delta }  

1. TOC
{:toc}

<!--prettier-ignore-end-->

## Arrays as Queues

We often use arrays as First-In-First-Out queues using `push` and `shift`.

A queue is like a line-up at a grocery store.

```javascript
let sportBalls = ["🏀", "⚽", "⚾"];

// Add football to the end of the queue:
sportBalls.push("🏈");

// sportBalls is now ["🏀", "⚽", "⚾", "🏈"]

// Remove and return basketball and soccer ball from the front of the queue;
let basketball = sportBalls.shift();
let soccerball = sportBalls.shift();

// sportBalls is now ["⚾", "🏈"]
```

## Arrays as Stacks

We often use arrays as Last-In-First-Out stacks using `push` and `pop`.

A stack is like a pile of dinner plates. (Except the end of the array is consider the top of the stack.)

```javascript
let sportBalls = ["🏀", "⚽", "⚾"];

// Add football to the end of the stack:
sportBalls.push("🏈");

// sportBalls is now ["🏀", "⚽", "⚾", "🏈"]

// Remove and return football and baseball from the end of the stack:
let football = sportBalls.pop();
let baseball = sportBalls.pop();

// sportBalls is now ["🏀", "⚽"];
```

🎵 Note:
{: .label .label-yellow}

`unshift` also exists to place elements at the start of an array, shifting existing elements over.
{: .d-inline-block}

## Further Reading

- [Treating Javascript Arrays like Stacks and Queues](https://javascript.info/array#methods-pop-push-shift-unshift) - More details on `push`, `pop`, `shift` and `unshift`.
