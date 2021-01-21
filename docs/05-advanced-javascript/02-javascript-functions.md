---
title: Anonymous Functions
parent: Advanced JS Techniques
nav_order: 2
---

<!--prettier-ignore-start-->
## Javascript Functions
{: .no_toc }

Functions are one of the key building blocks of Javascript applications. The can be used to modularize your code and can be passed to other function as [callbacks](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function).

In this section will look into three topics you'll run into when working with React:

* Anonymous functions 
* "Arrow" functions
* Functions as Object Properties

## Table of Contents
{: .no_toc .text-delta }  

1. TOC
{:toc}

<!--prettier-ignore-end-->

## Standard Functions

A standard function is defined like this:

```javascript
function snail() {
  console.log("Hello Snail! 🐌");
}

snail(); // And called by name.
```

## Anonymous Functions

Unnamed function are called anonymous\*:

```javascript
setTimeout(function(){ console.log("Hello Mail! 📨"; }, 500);
```

Anonymous functions can be assigned to variables:

```javascript
let nail = function () {
  console.log("Hello Nail! 💅");
};

nail(); // And called liked named functions.
```

_\*Anonymous, derived from the Greek word ἀνωνυμία, anonymia, meaning "without a name" or "namelessness"._

## Callback Functions

In Javascript functions can be passed as parameters to other functions. We call these "callback functions" as they aren't executed immediately.

Example: `setTimeout` takes a callback function and a time in milliseconds as arguments. The callback function is executed after the provided time elapses.

```javascript
function whale() {
  console.log("Hello Whale! 🐋");
}

let tail = function () {
  console.log("Hello Tail! 🦨");
};

setTimeout(whale, 500); // Named function as callback.

setTimeout(tail, 1500); // Variable-assigned anonymous function as callback.

// Inline anonymous callback functions are also handy:

setTimeout(function () {
  console.log("Hello Sail! ⛵");
}, 2000);
```

☝️ Callbacks can be named functions, anonymous functions, or anonymous functions assigned to variables.

## Arrow Functions

Another way to define anonymous function is with the "arrow operator" `=>`:

```javascript
let gale = () => {
  console.log("Hello Gale! 🌬️");
};

gale(); // Called by variable name.
```

Arrow functions can also be defined with parameters:

```javascript
let rail = (times) => {
  for (let i = 0; i < times; i++) {
    console.log("Hello Rail! 🚊");
  }
};

rail(5);
```

## Arrow Function Variants - No Braces

Arrow functions that contain a single statement can be written without curly braces.

These are called "implicit\* return" functions.

let implicit = (word, emoji) => `Hello ${word}! ${emoji}`;

Implicit return functions automatically return the value of the function statement.

```javascript
// Here, the implicit function returns a string which is then logged:
console.log(implicit("Trail", "🌠"));

// Hello Trail! 🌠
```

## Explicit\* Return

The above `implicit` function is equivalent to:

```javascript
let explicit = (word, emoji) => {
  return `Hello ${word} ${emoji}`; // Explicit Return Statement
};

console.log(explicit("trail", "🌠"));
```

_\*Implicit means something implied but not stated directly. Explicit means something made clear and stated plainly._

## Arrow Function Variants - Unadorned

One line, one argument, arrow functions can be written without parentheses or curly braces:

```javascript
let unadorned = (emoji) => `Hello Scale! ${emoji}`;

console.log(unadorned("⚖️"));

// Hello Scale! ⚖️
```

Unadorned arrows are also implicit return functions.

**⏳ Wait for it...** We'll use this style a lot in the coming sections on array helpers.

#### Resources

- [ES6 Arrow Functions: Fat and Concise Syntax in JavaScript](https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/)

## Anonymous Arrow Callbacks

Arrow functions are a nice way to define clear and concise callback functions.

Compare the readability of this regular callback:

```javascript
setTimeout(function () {
  console.log("Hello Veil! 👰");
}, 225);
```

With the arrow version:

```javascript
setTimeout(() => console.log("Hello Veil! 👰"), 225);
```

There's a lot less "punctuation noise", which makes the code easier to read for others.

## Functions as Object Properties

Functions can be added to objects too:

```javascript
const user = {
  username: "stungeye",
  age: 42,
  printInfo: function () {
    console.log(`${this.username} is ${this.age}.`);
  },
};

user.printInfo();

// "stungeye is 42."
```

Functions attached to objects are called methods.

**⚠️ Warning:** Arrow functions don't bind to the object's `this` so they don't work well as object properties:

```javascript
const brokenUser = {
  username: "stungeye",
  age: 42,
  printInfo: () => {
    console.log(`${this.username} is ${this.age}.`);
  },
};

user.printInfo(); // "undefined is undefined."
```

#### Resources

- [MDN Arrow Functions - No Separate This](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#No_separate_this)
