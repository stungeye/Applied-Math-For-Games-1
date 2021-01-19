---
title: Basic Math
parent: Introduction to Javascript
nav_order: 6
---

<!--prettier-ignore-start-->
# Basic Math
{: .no_toc }

TBD

### Table of Contents
{: .no_toc }

1. TOC
{:toc}

<!--prettier-ignore-end-->

## Available Math Operators

Like most programming languages Javascript using the following symbols for the basic math operations:

- Addition: `+`
- Subtractions: `-`
- Multiplication: `*`
- Division: `\`
- Exponent (To The Power Of): `**`
- Remainder (Modulus): `%`
- Grouping Parenthese: `()`

## Order of Operations

PEMMDAS order of operations rules are applied:

- P: **P**arenthese First
- E: **E**xponents Next
- MMD: **M**odulus, **M**ultiplication, **D**ivision (From Left to Right)
- AS: **A**ddition and **S**ubstraction (From Left to Right)

🎵 Note:
{: .label .label-yellow}

This is a highly simplified precedence table. [See the complete table here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table).
{: .d-inline-block }

## Exponents

Exponents are used to multiply a number with itself any number of times.

For example, `2 * 2 * 2 * 2` could be written `2**4`.

Remember we also have a special syntax that represents powers of ten:

We can write `3 * 10**23` as `3e23` using scientific notation.

## Negative Exponents

Negative exponents are used to perform the reciprocal of an exponent.

Meaning that `a**-b` is another way of writing `1 / a**b`.

For example, `2**-4` is a short-form for `1 / (2 * 2 * 2 * 2)`.

## Fractional Exponents (Roots)

We can use fractional exponents to calculate roots.

```javascript
let squareRootOfTen = 10 ** (1 / 2); // Square root of 10
let cubeRootofEight = 8 ** (1 / 3); // Cube root of 8
```

## Modify-and-Assign Operators

The equals operator can be paired all the math operators we've seen so far to modify and assign the result back to a variable.

```javascript
let dreams = 4;
dreams += 3; // Same as: dreams = dreams + 3
dreams -= 1; // Same as: dreams = dreams - 1
dreams /= 2; // Same as: dreams = dreams / 2
dreams *= 5; // Same as: dreams = dreams * 5
dreams **= 1 / 2; // Same as: dreams = dreams**(1/2)
```

## Unary Increment and Decrement

Like other C-influenced languages we have increment (`++`) and decrement (`--`) operators:

```javascript
let milesFromHome = 14333; // Miles away from everything you hold dear.
milesFromHome++; // Up to 14334. Sames as: milesFromHome += 1
milesFromHome--; // Back to 14333. Same as: milesFromHome -= 1
milesFromHome--; // Down to 14332
```
