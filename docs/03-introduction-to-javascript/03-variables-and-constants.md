---
title: Variables and Constants
parent: Introduction to Javascript
nav_order: 3
---

<!--prettier-ignore-start-->
# Variables and Constants
{: .no_toc }

Variables are name storage for the data used by our applications. When this data isn't going to change we can mark the variable as a constant.

### Table of Contents
{: .no_toc }

1. TOC
{:toc}

<!--prettier-ignore-end-->

## Variables

Variables are defined in Javascript using the `let` keyword.

```javascript
let warning = "There are too many goats in the kitchen!";
```

Javascript is a dynamically typed language so we do not specify the data type when defining a variable.

```javascript
let number = 42;
let e = 2.71828;
let name = "Wally";
```

We can also separate the definition of a variable from its assignment.

```javascript
let greeting; // The greeting variable is current undefined.
// Let's assign greeting a value:
greeting = "Greetings and salutations.";
```

## Variable Names

Variable names in Javascript:

- Must only contain letters, numbers, or the symbols `$` and `_`.
- Must start with a letter, `$`, or `_`.
- Are case sensitive.
- Should be written in CamelCase if they comprise multiple words.

## Constants

Sometimes it is handy to mark a variable as "never changing". We do this in Javascript using the `const` keyword.

```javascript
const PI = 3.1415926;
```

The `const` keyword marks a variable as immutable. If we attempt to change the value of a constant our code will throw an error.

```javascript
PI = 3; // Uncaught TypeError: invalid assignment to const 'PI'
```

## Further Reading

- [Type Conversions in Javascript](https://javascript.info/type-conversions)
