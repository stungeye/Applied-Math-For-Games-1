---
title: Vectors
parent: Numbers
nav_order: 3
---

<!--prettier-ignore-start-->
# Vectors 
{: .no_toc }

A **vector** is a quantity fully described by its magnitude and its direction. 

## Table of Contents
{: .no_toc .text-delta }  

1. TOC
{:toc}

<!--prettier-ignore-end-->

## Objectives

By the end of this module you should be able to:

- Define a vector and differentiate it from a scalar value.
- Describe how vectors are used to define both a point in 2D space and a magnitude with direction.
- Calculate the result of 2D vector addition, subtraction, and multiplication.
- Calculate the length/magnitude of a given 2D vector.
- Calculate the normalized unit vector from a given 2D vector.

## The Vector

The main building block for the math in this course is **the vector**, specifically the 2-dimensional vector.

In linear algebra, when we use the word vector we mean a **Euclidean Vector**, a mathematical entity that has both a magnitude and a director.

## Scalars vs Vectors by Example

A **scalar** is a quantity fully described by its magnitude (or size).

Speed, for example, is a scalar. _I was traveling at 50km per hour._

The magnitude of my speed is 50km per hour.

A **vector** is a quantity fully described by both its magnitude and its direction.

Velocity, for example, is a vector. _I was traveling north at 50km per hour._

The magnitude of my velocity is 50km per hour and the direction of my velocity is north.

## Representing Vectors

Visually, you can think of a vector as points or arrows in space. In this course we'll be sticking to two dimensions (think height and width), so our vectors can be seen as points on a 2D Cartesian coordinate grid, or as arrows from one point to another on this grid.

Let's take the pair of numbers (5, 3). We can think of this as representing two things:

- The point on a 2D Cartesian grid 5 units to the right along the x-axis and 3 units up the y-axis.
- An arrow on this same grid, with the _tail_ of the arrow at the origin, and the _tip_ of the arrow at the point described above.

We're using the word "tail" here to mean the start of the vector, and the word "tip" to mean the end of the vector (the tip of the arrow).

![Vector as Arrow](vector_as_arrow.png)

🎵 Note:
{: .label .label-yellow}

The Cartesian grid is named after philosopher and mathematician [René Descartes](https://plato.stanford.edu/entries/descartes/).
{: .d-inline-block}

Descartes famously proposed that all truth begins with "cogito, ergo sum", or "I think, therefore I am".

## Vector Components

A vector is written as an ordered pair of **components**. A two-dimensional (2D) vector has two component.

```
Order pair of components: (x, y)
Example of a particular vector: (5, 3)
```

The first number in a 2D vector represents the vector's `x` component and the second number represents the vector's `y` component.

## Vectors in Math Textbooks

In math textbooks you'll often see 2D vectors written in square braces, with the top number representing the x displacement and the bottom number representing the y displacement. You'll also see placeholders for vectors written as single letters with arrows above them.

So if we called our example vector (5,3) "c" it might be written in a textbook as:

![Math Vector](math_vector.png)

When talking about vectors in this modules we won't be using this arrow notion, but it is used in [our textbook](https://natureofcode.com/).

## Interactive 2D Vector Grid

<iframe src="https://editor.p5js.org/stungeye/embed/wFj8pPBGe" scrolling="no" frameborder="no"  width="400" height="442"></iframe>

☝️ _Hover your mouse over this grid to explore vectors on a 2D cartesian grid. If you're curious you can [check out how this was coded here](https://editor.p5js.org/stungeye/sketches/wFj8pPBGe)._

## Vector Mathematics

Some common operations we'll be performing on vectors in this course:

- Addition - Adding two vectors together results in a new vector.
- Subtraction - Subtracting one vector from another results in a vector.
- Multiplication - We can scale the length of a vector by multiplying it by a scalar.
- Division - We can also scale the length of a vector by dividing it by a scalar.
- Calculating Magnitude - Determining the scalar length of a vector.
- Normalization - Scaling a vector to a length of 1 while preserving its direction.

## Vector Addition

Adding two vectors together (regardless of the number of dimensions) is as simple as separately adding together their components.

```
vector e: (2, 1)
vector f: (3, 5)

vector g = e + f
vector g = (2 + 3, 1 + 5)
vector g = (5, 6)
```

## Visual Vector Addition

Adding vectors can also be performed visually on a 2D plane. We can add two vectors by drawing them "tip to tail", where tip means the tip of the arrow and tail means the start of the vector.

To visually add to vectors, we draw our first vector starting at the origin.

**Example: e = (2,1)**

![Vector e](sum_part1.png)

Next, the second vector's "tail" (starting place) is drawn at the "tip" (end) of the first vector.

**Example: f = (3,5)**

![Vectors e and f](sum_part2.png)

The resulting visual sum can be seen by connecting the origin to the tip of the second vector.

**Example: g = e + f = (5, 6)**

![Vectors e + f = g](sum_part3.png)

## Properties of Vector Addition

Just like the addition of regular numbers, vector addition follows the commutative and associative rules:

**Cummutative Rule:** a + b = b + a

Regular Numbers Example:

`3 + 5 = 5 + 3 = 8`

Vector Example:

`(2, 1) + (3, 5) = (3, 5) + (2, 1) = (5, 6)`

**Associative Rule:** u + (v + w) = (u + v) + w

Regular Numbers Example:

(3 + 2) + 1 = 3 + (2 + 1) = 6

Vector Example:

`(2, 1) + ((3, 5) + (4, 4)) = ((2, 1) + (3, 5)) + (4, 4) `

## Vector Negation

## Vector Subtraction

## Vector Multiplication

## Vector Division

## Vector Magnitude with [Pythagoras](https://plato.stanford.edu/entries/pythagoras/)

Every vector can be thought of as a the hypotenuse of a [right-angle triangle](/Applied-Math-For-Games-1/docs/07-game-dev-math/04-oscillation.html#the-right-triangle). Therefore, we can calculate the length of a vector by returning to high school math class and rediscovering the Pythagorean theorem.

If we return to our example vector at (5, 3) then the length of the vector is:

![Vector as Right Triangle](vector_as_triangle.png)

```
c² =  a² + b²
c  =  √(a² + b²)
c  =  √(5² + 3²)
c  =  √(25 + 9)
c  =  √34
c  ≅  5.83095189
```

⏳ Wait For It:
{: .label .label-blue}

We'll dig deeper into [the trigonometry of right triangles in our Oscillation module](/Applied-Math-For-Games-1/docs/07-game-dev-math/04-oscillation.html#the-right-triangle).
{: .d-inline-block}

## Vector Normalization

## Dot Product
