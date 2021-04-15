---
title: Numeric Representation
parent: Game Dev Math
nav_order: 1
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

## A Family Tree of Numbers

![Subsets of Numbers from https://en.wikipedia.org/wiki/Number](numbers.png){: .inline .small}

Let's start by defining the different categories of numbers:

- **Natural Numbers**: Also known as the counting numbers, these are the positive integers starting at 1. ℕ = {1, 2, 3, 4, ...}
- **Whole Numbers:** The natural numbers, but including zero. 𝕎 = {0, 1, 2, 3, 4, ...}
- **Integers:** The whole numbers, but including all negative versions. ℤ = { ..., -3, -2, -1, 0, 1, 2, 3, ...}
- **Rational Numbers:** Any number that can be written as a _ratio_ of two numbers in the form p/q, where both p and q are natural numbers. **ℚ** is used represent the rationals.
- **Irrational Numbers**: Any number that cannot be expressed as the ratio of one over another. These numbers where their fractional component extends forever in a non-repeating sequence. ℝ-ℚ is sometimes used to represent the irrationals. Examples include [π](https://en.wikipedia.org/wiki/Pi) and the square root of 2.
- **Real Numbers:** Any number that can represent a distance on a number line. The reals (ℝ) include all integer, rational, and irrational numbers.
- **Imaginary Numbers:** Numbers that are the product of a real number and the imaginary unit _i_, where _i_ is defined to be the square root of -1.
- **Complex Numbers:** Number of the form a+b*i* where “a and b” are real numbers and “i” is the imaginary unit defined above. The set of all complex numbers is represented by ℂs.

## Number Types Videos

<iframe width="560" height="315" src="https://www.youtube.com/embed/QUGmwPwtbpg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

A slightly different way of looking at this (without the inclusion of the imaginary numbers):

<iframe width="560" height="315" src="https://www.youtube.com/embed/5TkIe60y2GI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Numeral Systems

Numbers are represented using numeral systems.

- A _numeral system_ represents numbers using symbols known as _numerals_.

- The _numerals_ you are accustomed to using are known as _hindu-arabic, hindu,_ or _arabic numerals_: (0,1,2,3,4,5,6,7,8,9)

- All numeral systems have what is called a _base_ or a _radix_, which denotes how many _numerals_ are used in a particular numeral system.

- The numeral system you are most used to is the decimal (base-10) numeral system.

## Face Value and Place Value

In positional numeral systems every numeral has a _face value_ (a specific number it represents) and a _place value_, based on its position in the number.

In the number 333, each numeral has a _face value_ of three, but the _place value_ of each is different:

`333 = 300 + 30 + 3`

## Place Value Table

An easy way to expand a number is to use a _Place Value Table_. As an example, we will use the decimal number 34,125:

| Numeral Position   | 4              | 3              | 2              | 1              | 0              |
| ------------------ | -------------- | -------------- | -------------- | -------------- | -------------- |
| Place Value Weight | 10<sup>4</sup> | 10<sup>3</sup> | 10<sup>2</sup> | 10<sup>1</sup> | 10<sup>0</sup> |
| Decimal Number     | 3              | 4              | 1              | 2              | 5              |

To expand the number, we work through the columns from left to right, multiplying the _face-value_ of each numeral with its _place-value-weight_. We then add all those products together.

34,125 = (3 \* 10<sup>4</sup>) + (4 \* 10<sup>3</sup>) + (1 \* 10<sup>2</sup>) + (2 \* 10<sup>1</sup>) + (5 \* 10<sup>0</sup>)

34,125 = (3 _ 10,000) + (4 _ 1,000) + (1 _ 100) + (2 _ 10) + (5 \* 1)

34,125 = 30,000 + 4,000 + 100 + 20 + 5

Obvious, right? But what about numeral systems with other bases?

## Binary (Base-2)

The binary numeral system is the base-2 system; it uses only two symbols: 0 and 1 (in Hindu-Arabic numerals)

- A single **b**inary dig**it** is known as a _bit_
- Four bits is called a _nibble_, i.e. 1010
- Eight bits is a _byte_, i.e. 11001010

The place value weight table for binary is:

| Numeral Position   | 4             | 3             | 2             | 1             | 0             |
| ------------------ | ------------- | ------------- | ------------- | ------------- | ------------- |
| Place Value Weight | 2<sup>4</sup> | 2<sup>3</sup> | 2<sup>2</sup> | 2<sup>1</sup> | 2<sup>0</sup> |
| Place Value Weight | 16            | 8             | 4             | 2             | 1             |

The place-value-weights double as move column to column from right to left.

Note: The bottom two rows of the table represent the same information in different ways.

## Binary to Decimal Conversion

Let’s use the binary place value weight table to convert the binary number 11001 into decimal:

| Numeral Position   | 4             | 3             | 2             | 1             | 0             |
| ------------------ | ------------- | ------------- | ------------- | ------------- | ------------- |
| Place Value Weight | 2<sup>4</sup> | 2<sup>3</sup> | 2<sup>2</sup> | 2<sup>1</sup> | 2<sup>0</sup> |
| Place Value Weight | 16            | 8             | 4             | 2             | 1             |
| Binary Number      | 1             | 1             | 0             | 0             | 1             |

Now we work our way left to right (just like we did when we expanded our decimal number) multiplying the _face-values_ of our binary numerals with their _place-value-weights_. Finally, we sum all those products.

- 101101 \[binary\] = (16 x 1) + (8 x 1) + (4 x 0) + (2 x 0) + (1 x 1) \[decimal\]
- 101101 \[binary\] = (16) + (8) + (0) + (0) + (1) \[decimal\]
- 101101 \[binary\] = 25 \[decimal\]

**Note:** _If our binary number contained more numerals we would have to add extra columns to the left-side of our chart. Can you figure out the_ place-value-weights _of the next three columns to the left?_

## Decimal to Binary Conversion

We can also use the binary place value weight able to convert from decimal to binary. We'll expand our table to include the 5th numeral position with a place value weight of 32.

Let's try the decimal number 54.

We start with the left-most column and ask if we can use each weight to build the number 54. Each time we say yes, we'll subtract that weight from our number.

| Question         | Answer | Reason                         |
| :--------------- | :----: | :----------------------------- |
| Do we need a 32? |  yes!  | That leaves us with 54-32 = 22 |
| Do we need a 16? |  yes!  | That leaves us with 22-16 = 6  |
| Do we need an 8? |  no!   | We only have 6 remaining.      |
| Do we need a 4?  |  yes!  | That leaves us with 6-4 = 2    |
| Do we need a 2?  |  yes!  | That leaves us with 2-2 = 0    |
| Do we need a 1?  |  no!   | We have no more left.          |

So that's (yes,yes,no,yes,yes,no) or if we replace yes by 1 and no by 0: 110110

## Hexadecimal (Base-16)

Another numeral system we'll see now and again in game dev is hexadecimal or base-16:

- Hex has 16 symbols: 0 to 9 and A to F
- Each hex digit represents a _nibble_, which is 4 binary digits (bits) - half a byte
- It is used to easily represent binary (base-2) values in a more-human readable form
- It is used to represent colors in HTML

The place value weight table for hex is:

| Numeral Position   | 4              | 3              | 2              | 1              | 0              |
| ------------------ | -------------- | -------------- | -------------- | -------------- | -------------- |
| Place Value Weight | 16<sup>4</sup> | 16<sup>3</sup> | 16<sup>2</sup> | 16<sup>1</sup> | 16<sup>0</sup> |
| Place Value Weight | 65536          | 4096           | 256            | 16             | 1              |

## Hexadecimal to Decimal

Let's use this table to convert the hexadecimal number 3D2A into decimal:

| Numeral Position   | 4              | 3              | 2              | 1              | 0              |
| ------------------ | -------------- | -------------- | -------------- | -------------- | -------------- |
| Place Value Weight | 16<sup>4</sup> | 16<sup>3</sup> | 16<sup>2</sup> | 16<sup>1</sup> | 16<sup>0</sup> |
| Place Value Weight | 65536          | 4096           | 256            | 16             | 1              |
| Hex Number         |                | 3              | D              | 2              | A              |

Now we work our way left to right multiplying the _face-values_ of our hexadecimal numerals with their _place-value-weights_. Finally, we sum all those products.

- 3D2A \[hex\] = (4096 x 3) + (256 x D) + (16 x 2) + (1 x A) \[decimal\]
- 3D2A \[hex\] = (4096 x 3) + (256 x 13) + (16 x 2) + (1 x 10) \[decimal\]
- 3D2A \[hex\] = (12,288) + (3,328) + (32) + (10) \[decimal\]
- 3D2A \[hex\] = 15,658 \[decimal\]

## Decimal to Hexadecimal

We can also use our hex place value weight table to convert from decimal to hex.

Let's try the decimal number 6082.

We start with the left most column. For each column we ask how many of that weight can _evenly_ fit into our number. We then subtract the remainder from our number.

| Question                       | Answer | Reason                                       |
| :----------------------------- | :----: | :------------------------------------------- |
| How many 1048576s fit in 6082? |  none  | That still leaves us with 6082               |
| How many 65536s fit in 6082?   |  none  | That still leaves us with 6082               |
| How many 4096s fit in 6082?    |   1    | That leaves us with 6082 - (4096 x 1) = 1986 |
| How many 256s fit in 1986?     |   7    | That leaves us with 1986 - (256 x 7) = 194   |
| How many 16s fit in 194        | 12 (C) | That leaves us with 194 - (16 x 12) = 2      |
| How many 1s fit in 2           |   2    | That leaves us with 2 - (1 x 2) = 0          |

So that's 17C2 [hexadecimal].

## Hex to Binary and Back Again

It's simple to convert Hexadecimal to Binary (and vis-versa) as each Hexadecimal numeral represents a group of four binary bits. You just need to remember that the hex numerals 0 through F are represented by the binary numbers 0000 through 1111.

The Hex numer E30A converted to binary:

- First convert each numeral to a four bit binary number: E = (1110) 3 = (0011) 0 = (0000) A = (1010)
- Then string those numbers together: E30A [hex] = 1110001100001010 [binary]

Let's work in reverse and convert the binary numeral 110011110101 into hexadecimal.

- Group the bits into groups of four from right to left: (1100)(1111)(0101)
- Convert each group of bits into a hex numeral: (C)(F)(5)
- 110011110101 [binary] = CF5 [hexadecimal]

**Note:** _If the left-most group does contain enough bits you can pad it with zeros. For example:_

- 11011 [binary] = ? [hex]
- (0001)(1011) [binary] = (1)(B) [hex]
- 11011 [binary] = 1B [hex]

## Real Number Conversion

So far we've only looked at whole number conversion. Real numbers can be converted between bases too but extending the place value weight table across the decimal point.

Let's consider binary again:

| Numeral Position   | -1             | -2             | -3             | -4             | -5             |
| ------------------ | -------------- | -------------- | -------------- | -------------- | -------------- |
| Place Value Weight | 2<sup>-1</sup> | 2<sup>-2</sup> | 2<sup>-3</sup> | 2<sup>-4</sup> | 2<sup>-5</sup> |
| Place Value Weight | 1 / 2          | 1 / 4          | 1 / 8          | 1 / 16         | 1 / 32         |
| Place Value Weight | 0.5            | 0.25           | 0.125          | 0.0625         | 0.03125        |

## Real Decimal to Binary

Let's take the number decimal number 23.59375. To start we could convert the whole number component, 23, into binary using our existing method described above.

23 [decimal] = 2<sup>4</sup> + 2<sup>2</sup> + 2<sup>1</sup> + 2<sup>0</sup> = 10111 [binary]

Then to convert the value to the right of the decimal place, there's a bit of a shortcut.

| Doubled It!          | Can We Subtract 1? |
| -------------------- | ------------------ |
| 0.59375 x 2 = 1.1875 | YES                |
| 0.1875 x 2 = 0.375   | NO                 |
| 0.375 x 2 = 0.75     | NO                 |
| 0.75 x 2 = 1.5       | YES                |
| 0.5 x 2 = 1          | YES                |
| 0 _DONE_             |                    |

Reading YES/NO values from the top: YNNYY or 10011

So, 23.59375 [decimal] = 10111.10011

To convert back to decimal we multiple each numeral by it's binary place value weight from our newly expanded table.

## Numeric Representation

It's important to remember that all numbers we work with in a game development context are stored in memory and processed by the CPU in binary.

Further, it's important to be aware of:

- How precisely those numbers are being represented.
- The limits imposed by their binary representation.
- The potential errors that result from their binary representation.

## Whole Numbers Represented by Computers

_How precisely are whole numbers stored by a computer?_

Computers can represent whole numbers with 100% accuracy. As we've seen above, there's a direct one-to-one mapping between decimal and binary whole numbers.

_Are there limits imposed on the computer representation of whole numbers?_

Yes. As we discussed above, the integers extend infinitely in the negative and positive directions. So unless our computer has infinite memory there's an limit on the maximum positive/negative numbers we can store. Many programming languages will store a whole number in binary with 32 to 64 bits. If we reserve one bit to specify the sign, that's 31 or 63 bits for storage.

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

For this course we're using Javascript, which has a [BigInt primitive](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) that allows for integers with a maximum size only limited by the about of memory available.

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

Because computer's store real numbers as approximations all real numbers have a built-in relative error. Take the real number pi, for example:

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

- The **mantissa** is a binary number decimal number of the form: `1.######...`
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

## IEEE 754 Example: The Number One (Almost!)

Let's try to represent 1.0 using the IEEE 754 binary format:

**num = -1<sup>sign</sup> \* mantissa \* 2<sup>exponent</sup>**  
**1.0 = -1<sup>0</sup> \* 1.0 \* 2<sup>0</sup>**

```
[0][00000000][00000000000000000000000]
 ▲         ▲                        ▲
 └──Sign   └──Exponent              └──Mantissa
```

🎵 Note:
{: .label .label-yellow}

Because the mantissa is always normalized to 1.# we don't need to store the leading zero.
{: .d-inline-block}

## IEEE 754 Example: The Number One (Actual!)

⚡ Warning:
{: .label .label-red}

But wait! Intuitively, shouldn't an all zero bitmask mean decimal zero?
{: .d-inline-block}

Let's add 127 to the exponent when we store it. This allows for:

- Storage of exponent values from -127 to 127 using 00000000 to 11111111.
- Special case when for zero: 0.0 = 0.0 \* 2<sup>-127</sup> (All Zeros!)

So using IEEE 754, the decimal number 1.0 is actually stored as:

```
[0][01111111][00000000000000000000000]
 ▲         ▲                        ▲
 └──Sign   └──Exponent              └──Mantissa
```

## Another Example: -0.09375

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
 └──Sign   └──Exponent              └──Mantissa
```

## The "Next" Number After 1.0

So which number comes after 1.0 in the available 32-bit floating point numbers?

Let's add one to the mantissa:

```
[0][01111111][00000000000000000000001]
 ▲         ▲                        ▲
 └──Sign   └──Exponent              └──Mantissa
```

**nextNum = -1<sup>0</sup> \* 1.00000000000000000000001 \* 2<sup>0</sup>**  
**nextNum = 1.00000000000000000000001 [binary]**
**nextNum = 1.00000011920928955078125 [decimal]** _Divide 1 in half 23 times for the delta._

⚡ Warning:
{: .label .label-red}

This doesn't mean a constant step value of 0.00000011920928955078125 between all floats!
{: .d-inline-block}

## Float Density

Because float precision is based on its mantissa, and the mantissa is always the same size regardless of the size of the number being store, **there's an uneven distribution floats inside the range of possible real numbers**!

Approximately half of all possible floats can be found in the -1.0 to +1.0 range!

## Special Floats

| Exponent | Mantissa      | Represents             |
| -------- | ------------- | ---------------------- |
| 11111111 | All Zeros     | Infinity               |
| 11111111 | Not All Zeros | NAN                    |
| 00000000 | All Zeros     | Zero                   |
| 00000000 | Not All Zeros | Subnormal (very small) |

Which means that with the sign bit we can store +Infinity, -Infinity, and strangely +Zero, and -Zero.

## SubNormal Numbers

Denormalized Number??? Solution to sweep hole at zero?

## Assignment Questions

- Create your own UUID with a custom numeral system.
- Determine # of floats in difference ranges of real numbers.
- Plot float density across valid numeric range.

## Further Reading

- [Binary Game ](https://learningcontent.cisco.com/games/binary/index.html) - Like a super nerdy Tetris!
- [Floating Point Guide](https://floating-point-gui.de/) - FAQ, Formats, Errors, Language Cheat Sheets.
- [What Every Computer Scientist Should Know About Floating-Point Arithmetic](https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html) - Deep dive!
- [IEEE 754 @ Wikipedia](https://en.wikipedia.org/wiki/IEEE_754)
- [CppCon 2015: John Farrier “Demystifying Floating Point"](https://www.youtube.com/watch?v=k12BJGSc2Nc) - 50 Minute Conference Talk
- [Decimal to IEEE 754 Binary Format Video](https://www.youtube.com/watch?v=RuKkePyo9zk)
