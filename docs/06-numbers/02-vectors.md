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

Visually, you can think of a vector as points or arrows in space. In this course we'll be sticking to two dimensions, so our vectors can be seen as points on a 2D Cartesian coordinate grid, or as arrows from one point to another on this grid.

Let's take the pair of numbers (5, 3). We can think of this as representing two things:

- The point on a 2D Cartesian grid 5 units to the right along the x-axis and 3 units up the y-axis.
- An arrow on this same grid, with the _tail_ of the arrow at the origin, and the _tip_ of the arrow at the point described above.

![Vector as Arrow](vector_as_arrow.png)

🎵 Note:
{: .label .label-yellow}

The Cartesian grid is named after philosopher and mathematician [René Descartes](https://plato.stanford.edu/entries/descartes/).
{: .d-inline-block}

Descartes famously proposed that all truth begins with "cogito, ergo sum", or "I think, therefore I am".

## Vectors in Math Textbooks

I've written the above vector as the pair of number in parenthesis. In math textbooks you'll often see 2D vectors written in square braces, with the top number representing the x displacement and the bottom number representing the y displacement. You'll also see placeholders for vectors written as single letters with arrows above them.

So if we called the above example vector "c" it might be written in a textbook as:

![Math Vector](math_vector.png)

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
