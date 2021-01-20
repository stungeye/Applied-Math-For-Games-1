---
title: Loop Da Loop
parent: Advanced JS Techniques
nav_order: 3
---

<!--prettier-ignore-start-->
## Loop Da Loop
{: .no_toc }

There's more to looping in Javascript than the standard `for` and `while` loops. The `for of` syntax and the `forEach` function are two ways to automatically "visit" every element in a collection of data.

## Table of Contents
{: .no_toc .text-delta }  

1. TOC
{:toc}

<!--prettier-ignore-end-->

## For Of Enumeration

Beyond the standard `for` loop, there are two other popular ways to loop through Arrays in Javascript.

The `for of` loop assigns each element in turn a loop variable:

```javascript
let fruitBasket = ["🍎", "🍓", "🍒", "🥝"];

// for-of: Concise loop when you don't need the index value.

for (const fruit of fruitBasket) {
  console.log(fruit);
}
```

The `fruit` variable is scoped to the curly-braced code block.

💡 Best Practice:
{: .label .label-green }
Loop variables set as `const` prevent accidental modification of array elements.
{: .d-inline-block }

## forEach Callback Loop

The array `forEach` method passes each element in turn as an argument to a provided callback:

```javascript
// Print every element using an arrow function:

fruitBasket.forEach((fruit) => console.log(fruit));

// With forEach you can also get access to the index:

fruitBasket.forEach((fruit, i) => console.log(`${i}: ${fruit}`));

// 0: 🍎
// 1: 🍓
// 2: 🍒
// 3: 🥝
```

## Longer forEach Callbacks

Longer `forEach` callbacks are also possible.

Let's build a fruit pyramid:

```javascript
fruitBasket.forEach((fruit, i) => {
  let length = fruitBasket.length;
  let row = " ".repeat(length - i) + fruit.repeat(i + 1);
  console.log(row);
});

//    🍎
//   🍓🍓
//  🍒🍒🍒
// 🥝🥝🥝🥝
```

## Looping Over Object Key/Value Pairs

We can access object values by way of keys:

```javascript
const games = { soccer: "⚽", baseball: `⚾` };

// Bracket notation using a string index:
console.log(games["soccer"]);

// Dot notation using a period:
console.log(games.baseball);
```

We can loop over an object's key/value pairs using the `Object.entries` method.

```javascript
for (const [game, ball] of Object.entries(games)) {
  console.log(`We use a ${ball} to play ${game}.`);
}

// We use a ⚽ to play soccer.
// We use a ⚾ to play baseball.
```

This works because `Object.entries(games)` returns an array of arrays:

```javascript
[
  ["soccer", "⚽"],
  ["baseball", "⚾"],
];
```

We'll learn other similar techniques in the "Destructuring" section of this module.
