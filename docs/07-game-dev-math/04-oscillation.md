---
title: Oscillation
parent: Game Dev Math
nav_order: 5
---

<!--prettier-ignore-start-->
# Oscillation and Trigonometry
{: .no_toc }

Trigonometry is the mathematics of right-angle triangles.

We can use trig to simulate waves, swinging motions, and springs.

## Table of Contents
{: .no_toc .text-delta }  

1. TOC
{:toc}

<!--prettier-ignore-end-->

## Objectives

By the end of this module you should be able to:

- Differentiate between radians and degrees for the measurement of angles.
- Use trigonometric functions to determine the missing lengths / angles of a right angle triangle.
- Differentiate between polar and cartesian coordinates.
- Use sin and cos to convert between polar and cartesian coordinates.
- Draw waves of varying complexity using sin within a p5js sketch.
- Combine knowledge of angular momentum with trigonometry to model pendulums in p5js.
- Add Hooke’s law to model systems of springs.

## Textbook Chapter

[Chapter 3 - Oscillation - Nature of Code](/Applied-Math-For-Games-1/assets/pdf/noc_chp3_2020_draft.pdf) [pdf]

**Attribution:** The textbook for this course is Daniel Shiffman's Nature of Code. The Java Processing version of the book is [available online](https://natureofcode.com/book/). PDF of the p5js version linked above is [under development](https://github.com/nature-of-code/noc-book-2) and is licensed under tbuhe [Creative Commons Attribution-NonCommercial 3.0 Unported License](http://creativecommons.org/licenses/by-nc/3.0/).

## Oscillation

![Pendulum by Eric Xue https://linktr.ee/xarchhh/](pendulum_eric_xue.webp){:class .medium .inline}

In physics, **oscillation** is defined as regular variation in magnitude or position **around a central point**.

Understanding oscillation will allow us to simulate physical systems such as:

- The swing of a pendulum.
- The motion of a wave.
- The bounce of a spring.
- The orbit of a planet.
- The vibration of a guitar string.

## Circular Logic

![Circle Parts - Source: https://bit.ly/piping-designer-dot-com](circle_talk.jpg){:class .medium .inline}

When talking about systems that involve **a central point**, we'll undoubtedly reference circles, so let's start there.

From [Simple English Wikipedia](https://simple.wikipedia.org/wiki/Circle):

A **circle** is a round, two-dimensional shape. All points on the edge of the circle are the same distance from the center.

The **radius** of a circle is a line from the centre of the circle to a point on the side. We'll often use the letter `r` for the length of a circle's radius.

A **chord** is a line segment whose endpoints lie on the circle.

The **diameter** of a circle is the chord that goes through the centre of the circle. We'll use the letter `d` for the length of this line.

The **circumference** of a circle is the line that goes around the centre of the circle. We'll use the letter `C` for the length of this line, and we'll call a portion of the circumference an **arc**.

A **tangent** is a line that only shares a single point with a circle. Tangent lines are perpendicular (form a 90° angle with) a circle's radius.

## Angles (Degrees)

Circular rotation can be measured using an **angle** that can range from 0 to 360 degrees.

![Rotations Measured Using Degrees - Source: Our Textbook](degrees.png)

A quarter rotation is 90 degrees, and is said to be a **right angle**. A half rotation is 180 degrees and a full rotation is 360 degrees.

We use the ° symbol to indicate that a value is measured in degrees. Example: A right angle is 90°.

## Why 360 Degrees?

The number 360 is arbitrary; we can segment a circle into as many arcs as we wish. [The gradian unit](https://en.wikipedia.org/wiki/Gradian), for example, divides a circle into 400 equal gons.

[A theory](https://betterexplained.com/articles/intuitive-guide-to-angles-degrees-and-radians/) on why there are 360 degrees:

- Humans noticed that star constellations moved in a full circle every year.
- Every day, they were off by a tiny bit (“a degree”).
- Since a year has about 360 days, a circle had 360 degrees.

360 is a nicer to work with number than 365.242199, the actual numbers of days in a year, especially since it has many whole number divisors.

A few of 360's 20+ divisors: 2, 3, 4, 5, 6, 8, 9, 10, 15, 20, 30, 40, 45, 60, 90, 120, 180.

## Angles (Radians)

![Degrees vs Radians - Source: betterexplained.com (Modified)](degrees_vs_radians.png){:class .medium .inline}

Degrees measure segments of a circle from an observer's point of view as degrees of rotation, but there are other ways to measure these segments.

Imagine standing in the middle of a circular track watching a runner.

As the observer, you can measure the runner's movement by how far (in degrees) you turned your head to watch the run, but this measurement means little to the runner. From their point of view, they've run a particular distance.

This is the basis for **Radians**, which reframes rotation as **distanced traveled around a circle**.

## Radians Related to Radius

![Radius Relate to Radius](radians_and_radius.png){:class .medium .inline}

The distance of an arc around a circle depends on the size of the circle, so radians are measured in terms of a circle's radius.

Specifically a radian is the ratio of a circle's arc to its radius. 1 radian is the angle at which this ratio equals 1.

In other words, a rotation of 1 radian occurs when the distance traveled around a circle is equal to its radius.

Angles measured in radians are said to be **rads**. For example: 180° = π rads

## A Slice of π

This is where pi (π) comes into the picture.

Pi is an [irrational number](/Applied-Math-For-Games-1/docs/06-numbers/01-number-family-tree.html) with the approximate value of `3.1415926535...`

Pi is _baked_ into radian measurements:

- A full circular rotation (360 degress) is 2 \* π radians.
- A half circle (180 degrees) is π radians.
- A quarter circle (90 degrees) is π/2 radians.

🎵 Note:
{: .label .label-yellow}

[But what about Tau](https://www.youtube.com/watch?v=jG7vhMMXagQ)?!
{: .d-inline-block}

## But What is PI?

Pi is defined as the ratio of a circle's circumference to its diameter.

You've likely seen it written in these forms:

```text
π = C / d
C = π * d
C = 2 * π * r
```

A circle with a diameter of 1 will have circumference of length pi.

![Pi Unrolled - Source: Wikipedia https://en.wikipedia.org/wiki/Pi](Pi-unrolled-720.gif)

Visualized another way:

![Pi Unrolled - Source: https://setosa.io/ev/pi/](unrolled_pi.gif)

⏳ Wait For It:
{: .label .label-blue}

Pi crops up throughout math and physics. We'll soon see how it relates to trigonometry.
{: .d-inline-block}

## Why Radians

Measuring rotation in radians can simplify our thinking. Here's an example from [betterexplained.com](https://betterexplained.com/articles/intuitive-guide-to-angles-degrees-and-radians/):

Imagine a monster truck with wheels that have a 2 meter radius.

If we know how fast the wheels are turning, how do we calculate the speed of the truck?

### Using Degrees

Let's say the wheels are turning 1080 degrees per second:

- That's `1080 / 360 = 3` rotations per second.
- Therefore the distance travelled per second will be three times the circumference of the wheels.
- `C = 2 * π * r = 2 * π * 2 = 4 * π`
- So the speed is `3 * C = 12 * π` meters per second.
- Which is????

### Using Radians

Next we're told the truck is moving at a different speed with the wheels turning 5 radians per second:

- For each radian the distance travelled is one radius (2 meters).
- At 5 radians per second the truck travels 2 meters 5 times, or 10 meters per second.

Much easier to think about and no pesky π.

## Processing Angles

p5.js has a number of helper functions and constants that will come in handing when working with angles:

- 📜 [`angleMode()`](https://p5js.org/reference/#/p5/) - Switch between radians (default) and degrees.
- 📜 [p5.Vector's `heading()`](https://p5js.org/reference/#/p5.Vector/heading) - Returns the angle of a vector.
- 📜 [`PI, TWO_PI, HALF_PI, QUARTER_PI, TAU`](https://p5js.org/reference/#group-Constants) - Handy constants for these irrational numbers.
- 📜 [`radians()`](https://p5js.org/reference/#/p5/radians) - Converts degrees to radians.
- 📜 [`degrees()`](https://p5js.org/reference/#/p5/degrees) - Converts radians to degrees.
- 📚 [`translate()` & `rotate()`](/Applied-Math-For-Games-1/docs/04-introduction-to-processing/02-drawing-shapes.html#translation-rotation-and-scaling) - Rotate the drawing canvas around a point.

## Angular Motion

Let's use `translate()` & `rotate()` to rotate rectangle using p5.js:

```javascript
let angle = 0; // Angle of the spinner.

function draw() {
  // Clear the canvas purple.
  background(146, 83, 161);

  // Draw rectangle rotated by current angle around canvas centre.
  translate(width / 2, height / 2);
  rotate(angle);
  rect(0, 0, width * 0.8, height * 0.1);

  // Increment the radian angle.
  angle += 0.01;
}
```

<iframe src="https://preview.p5js.org/stungeye/embed/1GLIrmVZD" scrolling="no" frameborder="no"  width="200" height="200"></iframe>

[Edit Code Using p5.js Web Editor](https://editor.p5js.org/stungeye/sketches/1GLIrmVZD)

## Angular Acceleration and Velocity

We can apply our knowledge of Newton's laws from the previous module to modify the angular motion using velocity, with acceleration based on mouse position:

```javascript
// Determine acceleration based on mouse position.
angularAcceleration = map(mouseX, 0, width, -0.01, 0.01);

// Forces 101: Acceleration changes veleocity.
angularVelocity += angularAcceleration;
angularVelocity = constrain(angularVelocity, -0.2, 0.2);

// Forces 101: Velocity changes angular rotation.
angle += angularVelocity;
```

Hover your mouse over the canvas. Angular acceleration is determined by the mouse's x position.

<iframe src="https://preview.p5js.org/stungeye/embed/j0jaVV_gj" scrolling="no" frameborder="no"  width="200" height="200"></iframe>

[Edit Code Using p5.js Web Editor](https://editor.p5js.org/stungeye/sketches/j0jaVV_gj)

## Spin It!

We could also simplify the user interaction using only velocity to let the user click and spin the rectangle:

```javascript
// Save the angle from the previous frame.
previousAngle = angle;

if (mouseIsPressed) {
  // Have spinner rotate using the mouse's heading.
  angle = createVector(mouseX - width / 2, mouseY - height / 2).heading();
  // Base spinner velocity on distance rotated since previous frame.
  // Bug here if angle crosses -PI and PI, where delta becomes a sum.
  angularVelocity = angle - previousAngle;
} else {
  // Apply the current velocity to the angle.
  angle += angularVelocity;
  // Simple linear friction.
  angularVelocity *= 0.98;
}
```

Click, drag, and release to spin the rectangle:

<iframe src="https://preview.p5js.org/stungeye/embed/ccrzVE85u" scrolling="no" frameborder="no"  width="200" height="200"></iframe>

[Edit Code Using p5.js Web Editor](https://editor.p5js.org/stungeye/sketches/ccrzVE85u)

## Noisy Rotation

Physical motion aside, knowledge of translation and rotation in p5.js can lead to some amazing results.

In this sketch by [Gene Kogan](https://twitter.com/genekogan) our old friend [Perlin Noise](/Applied-Math-For-Games-1/docs/07-game-dev-math/01-randomness.html#generating-noise) is being used here to control the inner and outer rotations, translations, and square sizes.

<iframe src="https://preview.p5js.org/stungeye/embed/1eKtSVITv" scrolling="no" frameborder="no"  width="400" height="400"></iframe>

[Edit Code Using p5.js Web Editor](https://editor.p5js.org/stungeye/sketches/1eKtSVITv)

🎵 Note:
{: .label .label-yellow}

The code also make clever use of nested rotation and translation using [push and pop](/Applied-Math-For-Games-1/docs/04-introduction-to-processing/02-drawing-shapes.html#translation-rotation-and-scaling).
{: .d-inline-block}

## Trigonometry

In the [Spin It! sketch](#spin-it) we used the `.heading()` method to get an angle from vector, but how exactly was that done "under the hood"?

The secret lies in trigonometry, the branch of mathematics that studies relationships between side lengths and angles of triangles.

Trigonometry also reveals the hidden concepts that relate circles to triangles.

We can use trigonometry to:

- Determine the rotation of a vector.
- Find the angle two given points. (Think simple AI steering and aiming.)
- Find the distance between two points. (Think simple collision detection.)
- Simulate physical systems that involve harmonic motion (waves, pendulums, springs).

## The Right Triangle

![The Right Triangle - Attribution: Our Textbook](soh-cah-toa.png){:class .inline .small}

A **triangle** is a 2D shape that has three sides and three angles that add up to 180 degrees (π radians).

A **right triangle** (right-angled or orthogonal triangle) has one angle that is 90 degrees (π/2 radians). The other two angles always add up to 90 degrees but can be different sizes.

## Which Side Are You On?

The **hypotenuse** is the longest side of a right triangle. It is always across from the right angle.

The other two sides are the **legs**, and are named in relation to one of the non-right angles.

Given one of the non-right angles, each leg will be either **opposite** that angle, or **adjacent** to it.

### Resources

The above definitions were sources from:

- 📚 [Right Triangle @ English Wikipedia](https://en.wikipedia.org/wiki/Right_triangle)
- 📚 [Triangle @ Simple English Wikipedia](https://simple.wikipedia.org/wiki/Right_triangle)

## SOH CAH TOA - Right Triangle Sides and Angles

Using the Pythagorean theorem (`a² + b² = c²`) we can determine the length of any side of a right triangle when given the other two sides.

The trigonometry functions **sine**, **cosine**, and **tangent** give us ways to determine the length of sides and angles of a right triangle.

- Sine: `sin = opposite / hypotenuse`
- Cosine: `cos = adjacent / hypotenuse`
- Tangent: `tan = opposite / adjacent`

Some people remember these relationships using the catch phrase: SOH CAH TOA

### Resources

- 📚 [Magnitude wit
  h Pythagoras in our Vector Modules](/Applied-Math-For-Games-1/docs/07-game-dev-math/02-vectors.html#vector-magnitude-with-pythagoras).

## The Triangle and The Circle

Let's return to the circle for a moment.

Any point along a circle's circumference also describes a right triangle attached to the origin.

![Right Triangles and Circles - Image made using GeoGebra.org](right_triangle_on_unit_circle.png){:class .large}

This means that SOH CAH TOA also applies to the x and y coordinate of the points of a circle!

## Trig and the Unit Circle

Any point along the circumference of a circle can be described by the angle made by a right triangle (as shown above).

Using trig we can determine the x and y coordinate of this point.

Finding the y coordinate:

```text
sin(angle) = opposite / hypotenuse
sin(angle) = y-coordinate / radius
y-coord = radius * sin(angle)
```

Finding the x coordinate:

```text
cos(angle) = adjacent / hypotenuse
cos(angle) = x-coordinate / radius
x-coord = radius * cos(angle)
```

## Visualizing The Trigonometry of Circles and Right Triangles

![Trig and the Circle](circle-two-sine-waves.gif)

## Polar vs Cartesian Coordinates

## Drawing Vectors Using Trig

## Simple Harmonic Motion

## Waves

## Pendulum Motion

## Spring Forces

## Resources

- 📚 [Intuitive Guide to Angles, Degrees and Radians @ Better Explained](https://betterexplained.com/articles/intuitive-guide-to-angles-degrees-and-radians/)
- 📚 [Prehistoric Calculus: Discovering Pi @ Better Explained](https://betterexplained.com/articles/prehistoric-calculus-discovering-pi/)
- 📚 [Intuitive Understanding of Sine Waves @ Better Explained](https://betterexplained.com/articles/intuitive-understanding-of-sine-waves/)
- 📚 [The Tau Manifesto by Michael Hartl](https://tauday.com/tau-manifesto)

```

```
