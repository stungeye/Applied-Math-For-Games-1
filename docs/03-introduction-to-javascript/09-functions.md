---
title: Functions
parent: Introduction to Javascript
nav_order: 9
---

<!--prettier-ignore-start-->
# Functions
{: .no_toc }

A function is a named, independent section of code that performs a specific task and optionally returns a computed value.

### Table of Contents
{: .no_toc }

1. TOC
{:toc}

<!--prettier-ignore-end-->

## Functions

Functions are the verbs of computer programming. They do things.

They increase:

- **Modularity**, by allowing us to break down large programs into smaller parts.
- **Reusability**, by allowing us to reuse code without having to retype or copy/paste it.
- **Readability**, by allowing us to give descriptive names to specific parts of our program.

## Function Definition and Execution

Functions are defined in Javascript using the `function` keyword:

```javascript
function sayGoodnight() {
  console.log("So Long");
  console.log("Farewell");
}

// To execute this function:
sayGoodnight();
```

## Function Arguments

Functions can be defined to take one or more arguments by way of a parameter list.

Default values for the parameters can also be specified.

```javascript
function sayGoodnightRepeatedly(name, numberOfTimes = 1) {
  // Default value for numberOfTimes
  for (let i = 0; i < numberOfTimes; i++) {
    console.log(`Goodnight ${name}`);
  }
}

sayGoodnightRepeatedly("Wally", 12);
sayGoodnightRepeatedly("Wally"); // Second argument defaults to 1.
```

## Return Values

Functions can optionally return a value to the caller.

```javascript
function pizzaMessage(piecesLeft, hungryPeople) {
  if (piecesLeft < people) {
    return "Sorry we don't have enough pizza.";
  } else {
    return "Let's share! Any leftovers go to the dog.";
  }
}

console.log(pizzaMessage(13, 7));
```

## Variable Scope

Variables defined with `let` are scoped to the function or the block in which they were defined.

```javascript
function gemFactory(numberOfGems) {
  let gems = "💎".repeat(numberOfGems); // The gems variable is a local variable.
  return gems;
}

console.log(gemFactory(5));
console.log(gems); // Error. Variable is out of scope.

let requestedGems = Number(prompt("How many gems to you want?")); // Converts the user's string to a number.
f (requestedGems > 0) {
  let yourGems = gemFactory(requestedGems); // yourGems is only scoped to this block.
}

console.log(yourGems); // Error. The yourGems variable is out of scope.
```
