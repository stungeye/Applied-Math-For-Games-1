---
title: Destructuring
parent: React Prerequisites (Draft)
nav_order: 5
---

<!--prettier-ignore-start-->
## Destructuring 
{: .no_toc }

Destructuring is a way of teasing apart collections and assigning the component values to variables.

## Table of Contents
{: .no_toc .text-delta }  

1. TOC
{:toc}

<!--prettier-ignore-end-->

## Destructuring Arrays

Instead of indexed array assignment:

```javascript
const hearts = ["🖤", "❤️", "💛"];

const black = hearts[0];
const red = hearts[1];
const yellow = hearts[2];

console.log(yellow); // 💛
```

With destructuring syntax we can write:

```javascript
const hearts = ["🖤", "❤️", "💛"];

const [black, red, yellow] = hearts;

console.log(yellow); // 💛
```

## Destructuring Function Return Values

Let's say you a function named `weather` that returns an array of three temperatures.

```javascript
const temperatures = weather(); // [10, 15, 22]
```

And you know that the forecasted low, high, and average temperature appear in that order in the array.

You can destructure the returned array into the variables `low`, `high`, and `average`:

```javascript
const [low, high, average] = weather(); // [10, 15, 22]

console.log(`Average: ${average} Low: ${low} High: ${high} `);

// Average: 22 Low: 10 High: 15
```

## Destructuring Objects

We can also promote object keys to variables using destructuring:

```javascript
const adventures = { mountain: "⛰️", desert: "🏜️" };
const { mountain, desert } = adventures;

console.log(mountain); // ⛰️
console.log(desert); // 🏜️
```

We can also name the variables sometime different from the object keys:

```javascript
const { mountain: everest, desert: sahara } = adventures;

console.log(sahara); // 🏜️
console.log(everest); // ⛰️
```

## Destructuring Nested Data

Destructuring can also be used to pluck data out of nested data structures, like an array of objects:

```javascript
const animalFriends = [
  { name: "Monkey", emoji: "🐒" },
  { name: "Dog", emoji: "🐕" },
  { name: "Cow", emoji: "🐄" },
];

// - Skip the zeroth position in the array with a comma.
// - Grab the emoji out of the object at first position.
// - Skip the object in the final position of the array.
const [, { emoji: dogEmoji }] = animalsFriends;

console.log(dogEmoji); // 🐕
```

## Complex Nested Data

This example from [the MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Nested_object_and_array_destructuring) shows the destructuring of the kind of object you might get back from an API:

```javascript
// Let's pretend this data came from an API.
const apiResponse = {
  title: "JS Environment",
  translations: [
    {
      locale: "de - Germany",
      last_edit: "2014-04-14T08:43:37",
      title: "JS Umgebung",
    },
  ],
};

// Pluck the English and German title from the data.
let {
  title: englishTitle,
  translations: [{ title: localeTitle }],
} = apiResponse;

console.log(englishTitle); // "JS Environment"
console.log(localeTitle); // "JS Umgebung"
```

#### Resources

- [MDN Documentation on Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
