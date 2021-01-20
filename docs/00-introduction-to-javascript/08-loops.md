---
title: Loops
parent: Introduction to Javascript
nav_order: 8
---

<!--prettier-ignore-start-->
# Loops
{: .no_toc }

Loops allow us to automate repetition. In this sections we'll review `while`, `do while`, and `for` loops.

### Table of Contents
{: .no_toc }

1. TOC
{:toc}

<!--prettier-ignore-end-->

## Loop Da Loop - While and Do While

Javascript contains standard `while` and `do while` loops. They work as you might expect:

```javascript
while (booleanCondition) {
  // Loop body will execute over and over while booleanCondition remains true.
}

do {
  // Loop body executes at least once, and then repeatedly while booleanCondition remains true.
} while (booleanCondition);
```

## Loop Da Loop - For

Standard C-style for loops are also available:

```javascript
for (let apples = 10; apples <= 20; apples++) {
  console.log(`${apples}: How to you like them apples?`);
}
```

## Other Types of For Loops

Javascript includes other types of `for` loops like `for of`, `for in`, and `forEach` loops.

We won't review these special case loops until after we cover objects and arrays.

## Further Reading

- [Breaking and skipping loop using `break` and `continue`](https://javascript.info/while-for#breaking-the-loop)
