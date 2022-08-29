---
title: Numeral Systems
parent: Numbers
nav_order: 2
---

<!--prettier-ignore-start-->
# Numeral Systems 
{: .no_toc }

TBW

## Table of Contents
{: .no_toc .text-delta }  

1. TOC
{:toc}

<!--prettier-ignore-end-->

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

34,125 = (3 x 10<sup>4</sup>) + (4 x 10<sup>3</sup>) + (1 x 10<sup>2</sup>) + (2 x 10<sup>1</sup>) + (5 x 10<sup>0</sup>)

34,125 = (3 x 10,000) + (4 x 1,000) + (1 x 100) + (2 x 10) + (5 x 1)

34,125 = 30,000 + 4,000 + 100 + 20 + 5

Obvious, right? But what about numeral systems with other bases?

## Binary (Base-2)

The binary numeral system is the base-2 system; it uses only two symbols: 0 and 1

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

🎵 Note:
{: .label .label-yellow}

The weights double as we go left and halve as we go right.
{: .d-inline-block}

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

## Further Reading

- [Numeral System @ Wikipedia](http://en.wikipedia.org/wiki/Numeral_system)
- [Hindu-Arabic Numerals @ Wikipedia](https://en.wikipedia.org/wiki/Arabic_numerals)
- [Binary Numbers and Base Systems As Fast As Possible](https://www.youtube.com/watch?v=LpuPe81bc2w) - 3m47s Video (Remaing 2 minutes = Ad)
- [Binary Game ](https://learningcontent.cisco.com/games/binary/index.html) - Like a super nerdy Tetris!
