---
title: Arrays
parent: Introduction to Javascript
nav_order: 10
---

<!--prettier-ignore-start-->
# Javascript Objects
{: .no_toc }

Arrays are a composite data type used to store ordered collections of information.

### Table of Contents
{: .no_toc }

1. TOC
{:toc}

<!--prettier-ignore-end-->

## Arrays

We can use arrays in Javascript to store collections information.

Javascript arrays are a special type of Object with auto-assigned number keys and a special `length` property.

## Array Literals

Arrays and their contents can be defined using square braces:

```javascript
let emptyArray = [];

let fruitBasket = ["Apple 🍎", "Cherries 🍒", "Grapes 🍇"];
```

## Array Length

```javascript
console.log(`There are ${fruitBasket.length} fruit in the basket.`);
```

## Retrieving Array Values

We can retrieve array elements using `[]` square-braces and zero-based indexes:

```javascript
console.log(fruitBasket[0]); // Apple 🍎
```

## Updating Array Elements

Elements can be overwritten using square braces too:

```javascript
fruitBasket[0] = "Green Apple 🍏"; // Overwrite the zero-th element.
```

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

## Looping over Array Elements

Here's how we can loop over the key/value pairs of an object:

```javascript

```

## Further Reading

- [Treating Javascript Arrays like Stacks and Queues](https://javascript.info/array#methods-pop-push-shift-unshift) - More details on `push`, `pop`, `shift` and `unshift`.
