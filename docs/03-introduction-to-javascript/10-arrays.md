---
title: Arrays
parent: Introduction to Javascript
nav_order: 10
---

<!--prettier-ignore-start-->
# Javascript Objects
{: .no_toc }

Objects are composite data type used to store collections of key/value pairs.

### Table of Contents
{: .no_toc }

1. TOC
{:toc}

<!--prettier-ignore-end-->

## Objects

We can use objects in Javascript to store collections of key-value pairs.

They are similar to what other languages call dictionaries, maps, hashes, or associative arrays.

Javascript programmers will often refer to objects keys as object properties.

## Object Literals

Object literals are defined using curly braces. Keys and their associated values are assigned in comma-delimited pairs separated by semicolons:

```javascript
let emptyObject = {};
let hero = {
  name: "Wally Glutton",
  hitPoints: 45,
  mana: 120,
  weirdingFactor: 1.4,
};
```

## Retrieving Object Values by Key

Object values can be retrieved using key using `[]` square-brace indices or `.` dot properties:

```javascript
console.log(`${hero["name"]} has ${hero.hitPoints}.`);
```

## Updating Values and Adding Key/Value Pairs

New values can be over-written and new key/value pairs can be added using both `[]` and `.` style access:

```javascript
hero["name"] = "Walter S. Glutton"; // Change the value associated with the name key.
hero.hitPoints--; // Change the decrement the value associated with the hitPoints key.

// Add new key value pairs to the hero object:
hero.grinsPerHour = 14;
hero["pets"] = 3;
```

## Deleting Key/Value Pairs

The `delete` keyword is used to remove key/value pairs from an object.

```javascript
delete hero.grinsPerHour;
delete hero["pets"];
```

## Testing for Keys

The `in` keyword can be used to test if a property exists in an object:

```javascript
// The property name needs to be quoted.
if ("grinsPerHour" in hero) {
  console.log("The hero flashes a grin.");
}
```

## Looping over Key/Value Pairs

Here's how we can loop over the key/value pairs of an object:

```javascript
const games = { soccer: "⚽", baseball: `⚾` };
for (const [game, ball] of Object.entries(games)) {
  console.log(`We use a ${ball} to play ${game}.`);
}

// We use a ⚽ to play soccer.
// We use a ⚾ to play baseball.
```

This works because `Object.entries(games)` returns an array of arrays:

```json
[
  ["soccer", "⚽"],
  ["baseball", "⚾"],
];
```

We’ll learn other similar techniques when we get to "Destructuring" in a later module.

## Further Reading

- (Objects in Details @ Javascript.info)[https://javascript.info/object-basics]
-
