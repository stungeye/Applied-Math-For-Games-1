---
title: Callback Functions
parent: Advanced JS Techniques
nav_order: 1
---

<!--prettier-ignore-start-->
## Callback Functions
{: .no_toc }

Javascript functions are often passed to other functions as [callbacks](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function).


This section covers callback functions, anonymous functions (also known as closures), and the arrow function syntax.

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

Unnamed function are called anonymous\* functions:

```javascript
setTimeout(function(){ console.log("Hello Mail! 📨"); }, 500);
```

Anonymous functions can be assigned to variables:

```javascript
let nail = function () {
  console.log("Hello Nail! 💅");
};

nail(); // And called like named functions.
```

_\*Anonymous, derived from the Greek word ἀνωνυμία, anonymia, meaning "without a name" or "namelessness"._

## Callback Functions

In Javascript, functions can be passed as arguments to other functions. We call these "callback functions" as they aren't executed immediately.

For example, `setTimeout` takes a callback function and a time in milliseconds as arguments. The callback function is executed after the provided time elapses.

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

Another way to define an anonymous function is with the "arrow operator" `=>`:

```javascript
let gale = () => {
  console.log("Hello Gale! 🌬️");
};

// Called by variable name.
gale(); // Hello Gale 🌬️
```

Arrow functions can also be defined with parameters:

```javascript
let rail = (times) => {
  for (let i = 0; i < times; i++) {
    console.log("Hello Rail! 🚊");
  }
};

rail(5); // 5 times: Hello Rail! 🚊
```

## Arrow Function Variants - Implicit Return (No Brace)

Arrow functions that contain a single statement can be written without curly braces.

These are called "implicit\* return" functions.

```javascript
let implicit = (word, emoji) => `Hello ${word}! ${emoji}`;
```

Implicit return functions automatically return the value of the function statement.

```javascript
// Here, the implicit function returns a string which is then logged:
console.log(implicit("Trail", "🌠")); // Hello Trail! 🌠
```

_\*Implicit means something implied but not stated directly._

## Explicit Return

The above `implicit` function is equivalent to this arrow function with an explicit\* return:

```javascript
let explicit = (word, emoji) => {
  return `Hello ${word} ${emoji}`; // Explicit Return Statement
};

console.log(explicit("trail", "🌠")); // Hello Trail! 🌠
```

_\*Explicit means something made clear and stated plainly._

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

⏳ Wait For It:
{: .label .label-blue}

We'll use implicit-return arrows a lot in the next [section on array helpers](/Applied-Math-For-Games-1/docs/05-advanced-javascript/02-array-helpers.html).
{: .d-inline-block }

## Further Reading

- [ES6 Arrow Functions: Fat and Concise Syntax in JavaScript](https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/)
- [Arrow Function Basics @ Javascript.info](https://javascript.info/arrow-functions-basics)
- [Arrow Functions Revisted @ Javascript.info](https://javascript.info/arrow-functions)
- [MDN Arrow Functions - No Separate This](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#No_separate_this)
