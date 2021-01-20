---
title: Spread and Rest Syntax
parent: Advanced JS Techniques
nav_order: 6
---

<!--prettier-ignore-start-->
## Spread and Rest Syntax 
{: .no_toc }

There's syntax in Javascript that allows us to "spread out" and "gather in" lists of data.

## Table of Contents
{: .no_toc .text-delta }  

1. TOC
{:toc}

<!--prettier-ignore-end-->

## Array Spreading into Function Arguments

We sometimes need to "spread out" the contents of an array or a string into the arguments of a function call.

We can do this with the `...` spread syntax.

For example, the `Math.max` method takes any number of arguments.

```javascript
console.log(Math.max(42, 56, 102, 12, 15)); // 102
```

But what if the numbers are in an array?

```javascript
const numbers = [42, 56, 102, 12, 15];

console.log(Math.max(...numbers)); // 102
```

## Array Spreading in Array Literals

The `...` spread syntax can also be used to "spread out" an array within a new array literal.

Array concatenation\* without `concat()`:

```javascript
const litanyStart = ["Fear", "is", "the"];
const litanyEnd = ["mind", "killer"];
const litanyFull = [...litanyStart, ...litanyEnd];

console.log(litanyFull);

// [ 'Fear', 'is', 'the', 'mind', 'killer' ]
```

Or even:

```javascript
const middle = ["is", "the"];
const litany = ["Fear", ...middle, "mind", "killer"];

console.log(litany);

// [ 'Fear', 'is', 'the', 'mind', 'killer' ]
```

\*In the coding world, _concatentation_ means gluing collections together.

## Spread Syntax - Array Destructuring

We can also involve the `...` spread syntax in our destructuring:

```javascript
const sentence = ["this", "is", "the", "house", "that", "🦆", "built"];
const [first, second, ...theRest] = sentence;

console.log(first);
console.log(second);
console.log(theRest);

// this
// is
// [ 'the', 'house", "that", "🦆", "built" ]
```

## Spread Syntax: Objects Literals

The spread syntax can also be used to merge objects.

```javascript
const userSome = { fullName: "Wally Glutton", age: 42 };
const moarUser = { username: "stungeye", friend: "Daisy" };

const userFull = { ...userSome, ...moarUser };

// { fullName: "Wally Glutton", age: 42, username: "stungeye", friend: "Daisy" }
```

If a key appears in more than one of the objects it's the last pair that gets to set the value.

```javascript
let book = { name: "Anathem", quote: "Boredom is a mask frustration wears." };

// Book already contains a 'quote' key but not an 'author' key.
book = { ...book, author: "Neal Stephenson", quote: "Topology is destiny." };

// { name: "Anathem", quote: "Topology is destiny.", author: "Neal Stephenson" }
```

#### Resources

- [MDN Documentation on Spread Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

## Rest Parameters

Rest parameters use the same `...` syntax as spread, but here we use it to create functions that can take any number of arguments.

```javascript
function sayGoodnight(...names) {
  const nameList = names.join(", ");
  console.log(`Goodnight ${nameList}!`);
}

sayGoodnight("Wally");
sayGoodnight("Wally", "Daisy");
sayGoodnight("Wally", "Daisy", "Sammy", "June");

// Goodnight Wally!
// Goodnight Wally, Daisy!
// Goodnight Wally, Daisy, Sammy, June!
```

#### Resources

- [MDN Documentation on Rest Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
