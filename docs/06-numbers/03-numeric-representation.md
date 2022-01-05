---
title: Numeric Representation
parent: Numbers
nav_order: 3
---

<!--prettier-ignore-start-->
# Numeric Representation
{: .no_toc }

TBW

## Table of Contents
{: .no_toc .text-delta }  

1. TOC
{:toc}

<!--prettier-ignore-end-->

## Representation Matters

It's important to remember that all numbers we work with in a game development context are stored in memory and processed by the CPU in binary.

Further, it's important to be aware of:

- How precisely those numbers are being represented.
- The limits imposed by their binary representation.
- The potential errors that result from their binary representation.

## Whole Numbers Represented by Computers

_How precisely are whole numbers stored by a computer?_

Computers can represent whole numbers with 100% accuracy. As we've seen above, there's a direct one-to-one mapping between decimal and binary whole numbers.

_Are there limits imposed on the computer representation of whole numbers?_

Yes. As we discussed above, the integers extend infinitely in the negative and positive directions. So unless our computer has infinite memory there's a limit on the maximum positive/negative numbers we can store. Many programming languages will store a whole number in binary with 32 to 64 bits. If we reserve one bit to specify the sign, that's 31 or 63 bits for storage.

| Number of Bits | Whole Number Decimal Range                               |
| -------------- | -------------------------------------------------------- |
| 32 bits        | -2,147,483,648 to +2,147,483,647                         |
| 52 bits\*      | -9,007,199,254,740,991 to +9,007,199,254,740,991         |
| 64 bits        | -9,223,372,036,854,775,808 to +9,223,372,036,854,775,807 |

\*Javascript stores whole numbers using a floating point data type, which makes only 52 bits accessible to integers.

_Are there potential errors inherent in a computer's representation of whole numbers?_

Due to the range limits, whole numbers will often "rollover" when they exceed either side of their maximum range.

Here's an example in a C++ context:

```cpp
int main() {
  int bigNumber = 2'147'483'647; // Max Positive 32 bit integer.
  bigNumber++; // Add one and it's negative! -2147483648
}
```

For this course we're using Javascript, which has a [BigInt primitive](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) that allows for integers with a maximum size only limited by the amount of memory available.

## Real Numbers Represented By Computers

_How precisely are real numbers stored by a computer?_

Between any two whole numbers there are an infinite number of real numbers. This makes the real numbers _uncountable_ and hence most real numbers cannot be precisely represented by a computer. Instead we need to make do with either _fixed-point_ or _floating-point_ approximations. When we go into the details later we'll see that for floating-point numbers that precision decreases as the numbers increase in size. And actually, much of the precision lies in the 0.0 to 0.1 range!

_Are there limits imposed on the computer representation of real numbers?_

Like integers, each real number will be represented by either 32 or 64 bits. By sacrificing precision we can cram in a much larger range than whole numbers.

| Number of Bits | Approximate Real Number Decimal Range                 |
| -------------- | ----------------------------------------------------- |
| 32 bits        | ±1.17 x 10<sup>-38</sup> to ±3.40 x 10<sup>38</sup>   |
| 64 bits        | ±2.22 x 10<sup>-308</sup> to ±1.79 x 10<sup>308</sup> |

_Are there potential errors inherent in a computer's representation of whole numbers?_

Because computer's store real numbers as approximations, all real numbers have a built-in relative error. Take the real number pi, for example:

| pi                                  | value                                                                                    |
| ----------------------------------- | ---------------------------------------------------------------------------------------- |
| Actual Value                        | 3.141592653589793238462643383279502884197169399375105...                                 |
| 32 bit Floating Point Approximation | 3.141592<span style="color:red;">741012573242187500000000000000000000000000000</span>... |
| 64 bit Floating Point Approximation | 3.141592653589793<span style="color:red;">115997963468544185161590576171875000</span>... |

You can determine the relative error in this approximation using: `(actualPi - floatPi) / actualPi`

This problem extends beyond irrational numbers like pi. Take this example in Javascript:

```javascript
let zeroPointOne = 0.1;
let zeroPointTwo = 0.2;
console.log(zeroPointOne + zeroPointTwo); // 0.30000000000000004
```

## Scientific Notation

Scientific notation is a nice and concise way of representing very large and very small numbers.

With scientific notation we write all numbers in the form m \* 10<sup>n</sup>:

| number          | scientific notation     | e-form  |
| --------------- | ----------------------- | ------- |
| 698,000,000,000 | 6.98 \* 10<sup>11</sup> | 6.98e11 |
| 350             | 3.5 \* 10<sup>2</sup>   | 3.5e2   |
| 0.051           | 5.1 \* 10<sup>-2</sup>  | 5.1e-2  |

🎵 Note:
{: .label .label-yellow}

We restrict the number of digits to the left of the decimal point to one.
{: .d-inline-block}

## IEEE 754 Floating Point Format

So how exactly are real numbers represented by a computer?

They use a form of binary scientific notation, that's how!

Most programming languages use [the IEEE 754 standard](https://en.wikipedia.org/wiki/IEEE_754), which has 32-bit single-precision "floats" and 64-bit double-precision "doubles".

## Why a Standard

Before float standards existed different hardware manufacturers and languages all used their own quirky formats.

IEEE 754 not only specifies the format, but also the algorithms for arithmetic, the rounding rules, and the tests implementations must pass, like:

```
x + y == y + x
x + 0 == x
if (x == y) then x - y == 0
```

## IEEE 754 Binary Format

In IEEE 754 a number is represented in binary scientific notation. So instead of **m \* 10<sup>n</sup>** it's:

**number = m \* 2<sup>n</sup>**

Or more specifically:

**num = -1<sup>sign</sup> \* mantissa \* 2<sup>exponent</sup>**

Where:

- The **mantissa** is a binary number of the form: `1.######...`
- The **exponent** is also a binary number.
- The **sign** bit allows for positive (0) and negative numbers (1).

|     Bit Size     | Common Name |  Sign Bit  |     Exponent     |     Mantissa     |
| :--------------: | :---------: | :--------: | :--------------: | :--------------: |
| 32-bit (4 bytes) |    float    | 1 sign bit | 8 exponent bits  | 23 mantissa bits |
| 64-bit (8 bytes) |   double    | 1 sign bit | 11 exponent bits | 52 mantissa bits |

🎵 Note:
{: .label .label-yellow}

There's a trade-off between precision (large mantissa) and range (large exponent).
{: .d-inline-block}

## IEEE 754 32-bit Float Example: The Number One (Almost!)

Let's try to represent 1.0 using the IEEE 754 binary format:

**num = -1<sup>sign</sup> \* mantissa \* 2<sup>exponent</sup>**  
**1.0 = -1<sup>0</sup> \* 1.0 \* 2<sup>0</sup>**

```
[0][00000000][00000000000000000000000]
 ▲         ▲                        ▲
 └──Sign   └──Exponent              └──Mantissa right of decimal point
```

🎵 Note:
{: .label .label-yellow}

Because the mantissa is normalized to 1.# we don't need to store the leading zero.
{: .d-inline-block}

⚡ Warning:
{: .label .label-red}

But wait! Intuitively, shouldn't an all zero bitmask mean decimal zero?
{: .d-inline-block}

## IEEE 754 32-bit Float Example: The Number One (Actual!)

Let's add 127 to the exponent when we store it. This allows for storage of exponent values from -126 to 127 using 00000001 to 11111110. (For 64-bit numbers, the offset used is 1023.)

So using 32-bit IEEE 754, the decimal number 1.0 is actually stored as:

```
[0][01111111][00000000000000000000000]
 ▲       ▲                          ▲
 └──Sign └──Exponent shifted by 127 └──Mantissa right of the decimal point
```

⏳ Wait For It:
{: .label .label-blue}

Later we'll talk about the special cases when the exponent is all zeros or all ones.
{: .d-inline-block}

## Another 32-bit Float Example: -0.09375

**Step 1:** Determine Sign Bit

Sign Bit = 1 (Negative)

**Step 2:** Convert decimal number to binary:

0.09375 [decimal] = 0.00011 [binary]

**Step 3:** Normalize the mantissa

Mantissa = 0.00011 = 1.1 \* 2<sup>-4</sup>

**Step 4:** Bias the exponent by adding 127 and convert to binary:

Exponent = -4 + 127 = 123 [decimal] = 01111011 [binary]

**Step 5:** Remove the leading one from the mantissa:

Mantissa = 1.10000000000000000000000 = 10000000000000000000000

**Step 6:** The full IEEE 754 binary representation of -0.09375

```
[1][01111011][10000000000000000000000]
 ▲         ▲                        ▲
 └──Sign   └──Exponent              └──Mantissa right of the decimal point
```

## The "Next" Number After 1.0

So which number comes after 1.0 in the available 32-bit floating point numbers?

Let's add a one to the smallest fractional bit of mantissa:

```
[0][01111111][00000000000000000000001]
 ▲         ▲                        ▲
 └──Sign   └──Exponent              └──Mantissa right of the decimal point
```

**nextNum = -1<sup>0</sup> \* 1.00000000000000000000001 \* 2<sup>0</sup>**  
**nextNum = 1.00000000000000000000001 [binary]**  
**nextNum = 1.00000011920928955078125 [decimal]** _Divide 1 in half 23 times for the delta._

⚡ Warning:
{: .label .label-red}

This doesn't mean there's a constant delta of 0.0000001192... between all floats!
{: .d-inline-block}

## Float Density

Because float precision is based on its mantissa, and because the mantissa is the same number of bits regardless of the size of the number being stored, **there's an uneven distribution of floats inside the range of possible real numbers**!

Approximately half of all possible floats can be found in the -1.0 to +1.0 range!

| Range                            | Fixed Step Between Decimal Numbers |
| -------------------------------- | ---------------------------------- |
| 1 to 2                           | 2<sup>-23</sup>                    |
| 2 to 4                           | 2<sup>-22</sup>                    |
| 4 to 8                           | 2<sup>-21</sup>                    |
| 8 to 16                          | 2<sup>-20</sup>                    |
| 2<sup>n</sup> to 2<sup>n+1</sup> | 2<sup>n-23</sup>                   |

## Special Floats

| Exponent | Mantissa      | Represents             |
| -------- | ------------- | ---------------------- |
| 11111111 | All Zeros     | Infinity               |
| 11111111 | Not All Zeros | NAN                    |
| 00000000 | All Zeros     | Zero                   |
| 00000000 | Not All Zeros | Subnormal (very small) |

Which means that with the sign bit we can store +Infinity, -Infinity, and strangely +Zero, and -Zero.

## Subnormal or Denormalized Numbers

With a mantissa of the form `1.#...` we get a gap between 0.0 and the first representable number. This gap is present on the positive and negative side of 0, and is called "the hole at zero".

To remove this gap, the standard represents the smallest non-zero numbers in a denormalized form denoted by an all zero exponent. For these denormalized numbers the exponent is still considered to be it's smallest value of (-126 for 32-bit and -1022 for 64-bit) but the mantissa is now assumed to be of the form `0.#...`

You will sometime hear this denormalization strategy referred to as _gradual underflow_. In other words as floats in this denormalized range get closer and closer to zero they lose precision.

## Extremes - 32-bit Examples

Assuming just positive values:

| IEEE 754 32-Bits                   | Explanation        | Value                                                                                         |
| ---------------------------------- | ------------------ | --------------------------------------------------------------------------------------------- |
| 0 00000000 00000000000000000000001 | Smallest Subnormal | 2<sup>−126</sup> \* 2<sup>-23</sup> = 2<sup>-149</sup> <br>≈ 1.4012984643 \* 10<sup>-45</sup> |
| 0 00000000 11111111111111111111111 | Largest Subnormal  | 2<sup>−126</sup> \* (1 - 2<sup>-23</sup>) = <br>≈ 1.1754942107 \* 10<sup>-38</sup>            |
| 0 00000001 00000000000000000000000 | Smallest Normal    | 2<sup>-126</sup> <br>≈ 1.1754943508 \* 10<sup>-38</sup>                                       |
| 0 11111110 11111111111111111111111 | Largest Normal     | 2<sup>127</sup> \* (2 − 2<sup>-23</sup>) <br>≈ 3.4028234664 \* 10<sup>38</sup>                |

## Further Reading

- [Floating Point Guide](https://floating-point-gui.de/) - FAQ, Formats, Errors, Language Cheat Sheets.
- [How Floating Point Numbers Work](https://towardsdatascience.com/how-floating-point-numbers-work-1429907b6d1d) - Detailed blog post.
- [What Every Computer Scientist Should Know About Floating-Point Arithmetic](https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html) - Deep dive!
- [IEEE 754 @ Wikipedia](https://en.wikipedia.org/wiki/IEEE_754)
- [CppCon 2015: John Farrier “Demystifying Floating Point"](https://www.youtube.com/watch?v=k12BJGSc2Nc) - 50 Minute Conference Talk
- [Decimal to IEEE 754 Binary Format Video](https://www.youtube.com/watch?v=RuKkePyo9zk) - 15 Minute Step-By-Step Conversion Demo
- [Kahan Summation Algorithm](https://en.wikipedia.org/wiki/Kahan_summation_algorithms) - Compensated summation algorithm that reduces errors when summing floating point numbers.
- [Binary Hand Dance](https://www.youtube.com/watch?v=OCYZTg3jahU) 🤘
