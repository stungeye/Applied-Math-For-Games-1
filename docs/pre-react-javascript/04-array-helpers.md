---
title: Hurray for Arrays
parent: React Prerequisites (Draft)
nav_order: 4
---

<!--prettier-ignore-start-->
## Hurray for Arrays 
{: .no_toc }

Javascript has lots of built in functions that make working with arrays a joy.

Let's explore the `find`, `map`, `filter`, `join`, `includes`, `every`, `some`, and `reduce` array helper functions. 

## Table of Contents
{: .no_toc .text-delta }  

1. TOC
{:toc}

<!--prettier-ignore-end-->

## Array Data To Work With

Imagine we have the following array of objects:

```javascript
const animals = [
  { name: "Monkey", emoji: "🐒", legs: 2, mana: 45, count: 3 },
  { name: "Dog", emoji: "🐕", legs: 4, mana: 89, count: 2 },
  { name: "Cow", emoji: "🐄", legs: 4, mana: 3, count: 5 },
  { name: "Gorilla", emoji: "🦍", legs: 2, mana: 56, count: 2 },
  { name: "Deer", emoji: "🦌", legs: 4, mana: 97, count: 5 },
  { name: "Kangaroo", emoji: "🦘", legs: 2, mana: 4387, count: 1 },
  { name: "Turkey", emoji: "🦃", legs: 2, mana: 17, count: 7 },
];
```

Let's use `find`, `map`, `filter`, `join`, `includes`, `every`, `some`, and `reduce` to make sense of this data.

📢 **Remember:** We'll be making heavy use of implicit-return arrow functions.

#### Resources

- [Learn more about all these Array methods and others at the Mozilla Developer Network (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

## Array Transformations - Map

The array `map` method creates a new array of the same size.

The provided callback is used to transform each element in the original array to the corresponding element in the new array.

`map` an array of animal emojis based on each animal's count:

```javascript
const emojiZoo = animals.map((animal) => animal.emoji.repeat(animal.count));

console.log(emojiZoo); // Display the new array of strings.

// [ "🐒🐒🐒", "🐕🐕", "🐄🐄🐄🐄🐄", "🦍🦍", "🦌🦌🦌🦌🦌", "🦘", "🦃🦃🦃🦃🦃🦃🦃" ]
```

## Array Transformations - Filter

The `filter` method returns a new array of elements selected from the original array.

Each element is tested using the callback function. The new array contains elements where the callback returned `true`.

`filter` for only four legged animals:

```javascript
const fourLegsGood = animals.filter((animal) => animal.legs == 4);

console.log(fourLegsGood); // Two legs baaaaaaaaad-🐑

// [ { name: 'Dog',  emoji: '🐕', legs: 4, mana: 89, count: 2 },
//   { name: 'Cow',  emoji: '🐄', legs: 4, mana: 3,  count: 5 },
//   { name: 'Deer', emoji: '🦌', legs: 4, mana: 97, count: 5 } ]
```

## Array Search - Find

Sometimes you want to `find` an array element based on its property values. The callback you provide must return a Boolean value.

`find` only the cow:

```javascript
const cow = animals.find((animal) => animal.name == "Cow");

console.log(cow.emoji);

// 🐄
```

If multiple elements match, only the first is returned.

## Array Tests - Includes

Sometimes you wish to know if your array contains a specific object.

Determine if the array `includes` a Gorilla:

```javascript
// Map to names and then test inclusion of 'Gorilla'.

if (animals.map((a) => a.name).includes("Gorilla")) {
  console.log("There are Gorillas in the mist.");
}

// There are Gorillas in the mist.
```

## Method Chaining

Calling a method on the result of a previous method is called "method chaining". In the above example `map` returns an array of strings and then `includes` looks through that array for a specific string.

## Array Tests - Some, Every

Sometime you wish to know if a specific Boolean condition occurs in `some` or `every` one of your array elements.

Are `some` animals ready for the rap battle?

```javascript
const manaNeededToBattle = 17;

const someAreReady = animals.some(
  (animal) => animal.mana >= manaNeededToBattle
); // true
```

Does `every` animal have enough mana for the rap battle?

```javascript
if (animals.every((animal) => animal.mana >= manaNeededToBattle)) {
  console.log("We can battle."); // Will not execute as Cow's mana is not sufficient.
}
```

## Array Reduction - Reduce

Sometimes we want to `reduce` an array down to a single value.

`reduce` the animal array down to a sum of all animal counts:

```javascript
// Sum animal counts into 'total' with a starting sum of zero.

const totalCount = animals.reduce((total, animal) => total + animal.count, 0);

console.log(`In total there are ${totalCount} animals.`);

// In total there are 25 animals.
```

## Reduce Explained

The `reduce` method takes a callback and a starting value. As it iterates through the array, the return value of the callback is assigned to an “accumulator” variable.

```javascript
const totalCount = animals.reduce((total, animal) => total + animal.count, 0);
```

Here, the callback’s first parameter `total` is the accumulator. It stays in scope across the entire array.

The callback’s second parameter `animal` is assigned each array element in turn.

In this example the accumulator's starting value is set to zero.

## Array Reduction - Join

Sometimes we want to `join` all array element together into a string.

First `map` to names and then `join` into a guest list:

```javascript
const guestList = animals.map((animal) => animal.name).join(", ");

console.log(guestList);

// Monkey, Dog, Cow, Gorilla, Deer, Kangaroo, Turkey
```

The `join` method takes a string value to use as "glue" between each element. You can use a empty string to go "glueless".
