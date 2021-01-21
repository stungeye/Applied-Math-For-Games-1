---
title: Arrays
parent: Introduction to Javascript
nav_order: 11
---

<!--prettier-ignore-start-->
# Javascript Objects
{: .no_toc }

Arrays are a composite data type used to store ordered collections of information.

### Table of Contents
{: .no_toc }

1. TOC
{:toc}

<!--prettier-ignore-end-->

## Arrays

We can use arrays in Javascript to store collections information.

Javascript arrays are a special type of Object with auto-assigned number keys and a special `length` property.

## Array Literals

Arrays and their contents can be defined using square braces:

```javascript
let emptyArray = [];

let treats = ["🍩 Doughnut", "🍫 Chocolate Bar", "🍪 Cookie"];
```

## Array Length

```javascript
console.log(`There are ${treats.length} tasty treats available for our snack.`);
```

## Retrieving Array Values

We can retrieve array elements using `[]` square-braces and zero-based indexes:

```javascript
console.log(treats[0]); // 🍩 Doughnut
```

## Updating Array Elements

Elements can be overwritten using square braces too:

```javascript
treats[0] = "Green Apple 🍏"; // Overwrite the zero-th element.
```

## Looping over Array Elements

Here's how we can loop over the elements of an array using a plain old `for` loop:

```javascript
let fruitBasket = ["🍎", "🍓", "🍒", "🥝"];

for (let i = 0; i < fruitBasket.length; i++) {
  console.log(fruitBasket[i]);
}
```

## For Of Enumeration

Beyond the `for` loop, there are two other popular ways to loop through Arrays in Javascript.

The `for of` loop assigns each element in turn a loop variable:

```javascript
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
fruitBasket.forEach(function (fruit) {
  console.log(fruit);
});

// With forEach you can also get access to the index:
fruitBasket.forEach(function (fruit, i) {
  console.log(`${i}: ${fruit}`);
});

// 0: 🍎
// 1: 🍓
// 2: 🍒
// 3: 🥝
```

## Longer forEach Callbacks

Longer `forEach` callbacks are also possible.

Let's build a fruit pyramid:

```javascript
fruitBasket.forEach(function (fruit, i) {
  let length = fruitBasket.length;
  let row = " ".repeat(length - i) + fruit.repeat(i + 1);
  console.log(row);
});

//    🍎
//   🍓🍓
//  🍒🍒🍒
// 🥝🥝🥝🥝
```

## Further Reading

- [Arrays @ Javascript.info](https://javascript.info/array)
