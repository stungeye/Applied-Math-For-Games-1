---
title: Data Types
parent: Introduction to Javascript
nav_order: 3
---

<!--prettier-ignore-start-->
# Data Types
{: .no_toc }

Javascript has eight main data types. We'll quickly explore these types in this section.

### Table of Contents
{: .no_toc }

1. TOC
{:toc}

<!--prettier-ignore-end-->

## Data Types in Javascript

The eight types of data we can use in our Javascript programs:

- Number
- BigInt
- String
- Boolean
- Null
- Undefined
- Object
- Symbol

Note:
{: .label .label-yellow}

Arrays, functions, dates, and regular expressions are all special types of objects.
{: .d-inline-block }

## Numbers

By default, all numbers in Javascript are [double-precision 64-bit IEEE 754 values](https://en.wikipedia.org/wiki/Double-precision_floating-point_format), or in other words "doubles". This means that there are no integers in Javascript unless variables are specifically marked as BigInts.

Which means your math will never default to "integer math":

```javascript
const threePointFive = 7 / 2; // The variable will be assigned 3.5, not 1 as you might expect.
```

IEEE 64-bit doubles can represent whole and floating point numbers from -(2^53 - 1) to (2^53 - 1), or in other words from -9,007,199,254,740,991 to +9,007,199,254,740,991.

## Safe Math

Javascript math operations will never cause your program to crash.

Instead, your variables will be assigned special placeholder values:

```javascript
// Dividing by zero causes many programming languages to crash.
console.log(1 / 0); // The placeholder value "Infinity" will be returned.

// Performing a mathematical operation on a non-numeric value won't crash your programs either.
console.log("wat" / 42); // The placeholder vaule "NaN" will be returned, which stands for "Not a Number".
```

## BigInt

If you need a whole number larger than the maximum supported double you can use the new `BigInt` data type.

Numbers are flags as `BigInt`s by putting an `n` at the end of the number:

```javascript
const reallyBigNumber = 999888777666555444333222111n;
```

## String

Plain old strings in Javascript can be defined using single or double quotes:

```javascript
let doubleQuotedString = "Double Quoted String";
let singleQuotedString = "Single Quoted String";
```

## Template String Literals

We can also use backticks to delimit our strings, which gives us the added ability to perform string interpolation:

```javascript
let goatsInTheKitchen = 12;
let message = `There are ${goatsInTheKitchen} in this here kitchen.`;
```

## Working with Strings

A quick overview of a few handy string properties and functions:

```javascript
let msg = "Learn to Question.\nQuestion to Learn."; // The \n represents a "new line" character.
console.log(`The message is ${msg.length} characters in long.`); // Strings all have a length property.
console.log(`The first character in our message: ${msg.charAt(0)}`); // charAt retrieves characters by position.
console.log(`The last character in our message: ${msg[msg.length - 1]}`); // Square braces work for this too.
console.log(`Let's shout our message: ${msg.toUpperCase()}`); // There is also a .toLowerCase() function.
let newMessage = msg.replaceAll("Question", "Sing"); // "Learn to Sing.\nSing to Learn."
```

For more handy string function see [the MDN Javascript docs for String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String).

## Boolean

Boolean variables can contain one of two possible values `true` and `false`.

Non-boolean values can all be converted to booleans according to the following rules:

- 0, empty strings, `NaN`, `null`, and `undefined` are all falsy.
- Everything else is considered truth.

We'll take a closer look at booleans when we look at decision structures in a later section.

## Null & Undefined

A variable that has not yet been assigned any data has a value of `undefined`.

On the other hand, if you wish to purposefully mark a variable's value as "empty" or "unknown" you can assign a value of `null`.

```javascript
let theAnswerToLifeTheUniverseAndEverything; // undefined
let theSoundOfOneHandClapping = null; // Defined, but null.
theAnswerToLifeTheUniverseAndEverything = 42; // No longer undefined.
```

## Objects & Symbols

As opposed to the other types of variables defined above, objects are used to store collections of information. Arrays and functions are special types of objects. Symbols are special types of unique identifiers for objects.

We'll look at all of these in more detail in later sections.
