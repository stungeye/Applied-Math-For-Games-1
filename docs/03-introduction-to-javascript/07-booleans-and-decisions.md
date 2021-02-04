---
title: Booleans and Decisions
parent: Introduction to Javascript
nav_order: 7
---

<!--prettier-ignore-start-->
# Booleans and Decisions
{: .no_toc }

Boolean expressions and flow control statements are how we instructor computers to make decisions.

### Table of Contents
{: .no_toc }

1. TOC
{:toc}

<!--prettier-ignore-end-->

## Boolean Expressions

A boolean expression is a mathematical expression that results in either `true` or `false`.

Boolean expressions in Javascript can contain the following operators (and more):

|      Symbol      |         Meaning         |
| :--------------: | :---------------------: |
|       ===        |   equal (no coercion)   |
|       !==        | not equal (no coercion) |
|        >         |      greater than       |
|        <         |        less than        |
|        >=        |  greater than or equal  |
|        <=        |   less than or equal    |
|        &&        |      Boolean 'and'      |
| &brvbar;&brvbar; |      Boolean 'or'       |

⚡ Warning:
{: .label .label-red}

Use the "really equals" `===` and "really not equals" `!==` operators for comparisons.
{: .d-inline-block }

The regular `==` and `!=` will perform type coercion, which means they may not work as expected.

```javascript
2 == "2"; // true, due to type coercion.
2 === "2"; // false
```

## Decision Statements

The `if` and `else` keywords allow us to control the flow of execution in our programs.

```javascript
let grinStrength = 45;

if (grinStrength > 30) {
  console.log("You defeat the evil wizard with a grin.");
} else if (grinStrength < 10) {
  console.log("Your grin fails you. The wizard steals your beard.");
} else {
  console.log("You are unsure how to proceed.");
}
```

## Ternary Operator

The ternary operator, sometimes called a conditional or question mark operator, allows you to replace `if`/`else` statements that guard assignments with a single statement.

Ternary assignments are structured like this:

```javascript
let variable = boolean ? value1 : value2;
```

☝️ The `variable` will be assigned `value1` if `boolean` is true, otherwise it will be assigned `value2`.

A more detailed example:

```javascript
let rubiesInPocket = 0;
let isBirthday = prompt("Is today your birthday (y/n)");

// Assignment using if/else:
if (isBirthday === "y") {
  rubiesInPocket = 50;
} else {
  rubiesInPocket = 5;
}

// Using a ternary statement instead:
rubiesInPocket = isBirthday === "y" ? 50 : 5;
```

🎵 Note:
{: .label .label-yellow}

We aren't validating the user input here, so any value entered other than `y` means no.
{: .d-inline-block }

## Nullish Coalescing Operator

The `??` operator allows us to pick between a potentially undefined value and a fall-back value.

```javascript
let variable = value1 ??? value2;
```

☝️ If `value1` is defined, `variable` will be assigned `value1`. If `value1` is `undefined` or `null`, `variable` will be assigned `value2`.

This is most commonly used to assign a default value to a variable:

```javascript
catName ??= "Mr. Mistoffelees"; // Only perform this assignment if catName is undefined or null.
```

## Further Reading

- [Long If/Else Chains Can be Replaced By Switch Statements](https://javascript.info/switch)
