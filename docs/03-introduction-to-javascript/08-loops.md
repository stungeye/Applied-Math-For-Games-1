---
title: Loops
parent: Introduction to Javascript
nav_order: 8
---

<!--prettier-ignore-start-->
# Loops
{: .no_toc }

Loops allow us to automate repetition. In this section we'll review `while`, `do while`, and `for` loops.

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

## Data Validation

While loops can be helpful when validating user input:

```javascript
let temperature;
do {
  temperature = Number(prompt("Enter a temperature"));
} while (temperature == NaN);
```

## Loop Da Loop - For

Standard C-style for loops are also available. These loops are best used for counting tasks:

```javascript
for (let apples = 10; apples <= 20; apples++) {
  console.log(`${apples}: How to you like them apples?`);
}
```

## Loops for Arrays and Objects

⏳ Wait For It:
{: .label .label-blue}

There are special loops for traversing array elements and object key/value pairs.
{: .d-inline-block }

These are covered in the sections on Objects and Arrays:

- [Looping Over Array Elements with `for of` Loops](/Applied-Math-For-Games-1/docs/03-introduction-to-javascript/11-arrays.html#for-of-enumeration)
- [Looping Over Array Elements with `forEach` Callbacks](/Applied-Math-For-Games-1/docs/03-introduction-to-javascript/11-arrays.html#foreach-callback-loop)
- [Looping Over an Object's Key/Value Pairs](/Applied-Math-For-Games-1/docs/03-introduction-to-javascript/10-objects.html#looping-over-keyvalue-pairs)

## Further Reading

- [Breaking and skipping loop using `break` and `continue`](https://javascript.info/while-for#breaking-the-loop)
