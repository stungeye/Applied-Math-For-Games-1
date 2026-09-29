---
title: User Input
parent: p5.js Basics
nav_order: 3
---

<!-- prettier-ignore-start -->

# User Input
{: .no_toc }

p5.js includes an event-driven system for responding to mouse and keyboard input, along with a number of global variables for querying the state of the mouse and keyboard.

## Table of Contents
{: .no_toc }

1. TOC
{:toc}

<!-- prettier-ignore-end -->

## Mouse Position

The current x/y location of the mouse can be retrieved using the special 📜 [`mouseX`](https://p5js.org/reference/p5/mouseX/) and 📜 [`mouseY`](https://p5js.org/reference/p5/mouseY/) variables:

```javascript
circle(mouseX, mouseY, 50);
```

The state of the mouse buttons is available via 📜 [`mouseIsPressed`](https://p5js.org/reference/p5/mouseIsPressed/) and 📜 [`mouseButton`](https://p5js.org/reference/p5/mouseButton/).

In p5.js v2, `mouseButton` is an object with `left`, `right`, and `center` Boolean properties:

```javascript
if (mouseIsPressed) {
  if (mouseButton.left) {
    circle(50, 50, 50);
  }
}
```

Because each button has its own Boolean property, multiple mouse buttons can be detected at the same time.

There are also:

* 📜 [`pmouseX`](https://p5js.org/reference/p5/pmouseX/) and 📜 [`pmouseY`](https://p5js.org/reference/p5/pmouseY/) - Previous positions of the mouse in the last frame.
* 📜 [`movedX`](https://p5js.org/reference/p5/movedX/) and 📜 [`movedY`](https://p5js.org/reference/p5/movedY/) - Pixel distance moved since the last frame.
* 📜 [`winMouseX`](https://p5js.org/reference/p5/winMouseX/) and 📜 [`winMouseY`](https://p5js.org/reference/p5/winMouseY/) - Mouse position in the entire browser window, not just the p5 canvas.
* 📜 [`pwinMouseX`](https://p5js.org/reference/p5/pwinMouseX/) and 📜 [`pwinMouseY`](https://p5js.org/reference/p5/pwinMouseY/) - Previous browser window positions.

## Mouse Events

There are a number of functions you can define that will be called for particular mouse events:

* 📜 [`mouseMoved()`](https://p5js.org/reference/p5/mouseMoved/) - Called anytime the mouse moves.
* 📜 [`mouseDragged()`](https://p5js.org/reference/p5/mouseDragged/) - Called anytime the mouse moves while a button is pressed.
* 📜 [`mousePressed()`](https://p5js.org/reference/p5/mousePressed/) - Called when any mouse button is pressed.
* 📜 [`mouseReleased()`](https://p5js.org/reference/p5/mouseReleased/) - Called when any mouse button is released.
* 📜 [`mouseClicked()`](https://p5js.org/reference/p5/mouseClicked/) - Called after a mouse button has been pressed and then released.

### Resources

* 🔰 [Conditionals and Interactivity Tutorial](https://p5js.org/tutorials/conditionals-and-interactivity/)
* 🚂 [Variables in p5.js - mouseX and mouseY - Coding Train Video](https://www.youtube.com/watch?v=RnS0YNuLfQQ) (12m23s)
* 🚂 [Mouse Interaction with Objects - Coding Train Video](https://www.youtube.com/watch?v=TaN5At5RWH8) (14m57s)
* 🏷️ [Drawing Lines Example](https://p5js.org/examples/Animation-And-Variables-Drawing-Lines/)
* 🏷️ [Animation with Events Example](https://p5js.org/examples/Animation-And-Variables-Animation-With-Events/)
* 🏷️ [Circle Clicker Example](https://p5js.org/examples/Games-Circle-Clicker/)

## Mapping Mouse Input

When using positional mouse values, we often wish to map the screen positions to a range of values that are more useful for our sketch. For example, imagine a sketch where the mouse position controls the background color, with the red component of the color controlled by `mouseX` and the blue component of the color controlled by `mouseY`.

A naive approach would be:

```javascript
function draw() {
  background(mouseX, 0, mouseY);
}
```

Because the color components need to be in the range of 0 to 255, this would only work as intended for a sketch with a 255x255 canvas. This is where the 📜 [`map()`](https://p5js.org/reference/p5/map/) function comes into play. With `map()` we can re-map a number from one range of values to another:

```javascript
let redValue = map(mouseX, 0, width, 0, 255);
```

The first argument is the value being remapped, the next two arguments are the initial range (in our case `mouseX` goes from 0 to the width of the canvas), and the final two arguments are the range we want to map to (in our case 0 to 255).

### Resources

* 🚂 [The Map() Function - Coding Train Video](https://www.youtube.com/watch?v=nicMAoW6u1g)
* 🏷️ [Map Example](https://p5js.org/examples/Calculating-Values-Map/)

## Constraining Mouse Input

The mouse can move outside the canvas, so `mouseX` and `mouseY` can return values outside the canvas dimensions. We can use the 📜 [`constrain()`](https://p5js.org/reference/p5/constrain/) function to set minimum and maximum limits:

```javascript
let xPos = constrain(mouseX, 0, width); // Constrain xPos to the canvas width.
let redValue = map(xPos, 0, width, 0, 255); // Map xPos to the 0 to 255 range.
```

`map()` also supports an optional sixth argument that can constrain the mapped result to its target range. For example:

```javascript
let redValue = map(mouseX, 0, width, 0, 255, true);
```

### Resources

* 📺 [map() and constrain() in p5.js - Golan Levin Tutorial](https://www.youtube.com/watch?v=xMZX7uJtF5Q)
* 🏷️ [Constrain Example](https://p5js.org/examples/Calculating-Values-Constrain/)

## Map and Constrain Example

The `map()` and `constrain()` functions are useful beyond just mouse position, but here's a full demo of using them with the mouse:

```javascript
function setup() {
  createCanvas(200, 300);
  textSize(32);
  fill(255);
}

function draw() {
  let xPos = constrain(mouseX, 0, width); // Constrain xPos to 0 to 200.
  let redValue = map(xPos, 0, width, 0, 255); // Map xPos to 0 to 255 range.

  let yPos = constrain(mouseY, 0, height); // Constrain yPos to 0 to 300.
  let blueValue = map(yPos, 0, height, 0, 255); // Map yPos to 0 to 255 range.

  background(redValue, 0, blueValue);
  text(`red: ${redValue}\nblue: ${blueValue}`, 10, 40);
}
```

[Edit Using p5.js Web Editor](https://editor.p5js.org/stungeye/sketches/lA2pKfmpt)

The Result:

<iframe src="https://editor.p5js.org/stungeye/embed/lA2pKfmpt" scrolling="no" frameborder="no" width="200" height="342"></iframe>

## Keyboard Variables

There are several variables related to the state of keys pressed on the keyboard:

* 📜 [`keyIsPressed`](https://p5js.org/reference/p5/keyIsPressed/) - Boolean that is `true` if any key is currently pressed.
* 📜 [`key`](https://p5js.org/reference/p5/key/) - String containing the value of the most recently typed key. This is most useful for printable characters.
* 📜 [`keyCode`](https://p5js.org/reference/p5/keyCode/) - Numeric code for the last key pressed.

p5.js also provides constants for common special keys, including `BACKSPACE`, `DELETE`, `ENTER`, `RETURN`, `TAB`, `ESCAPE`, `SHIFT`, `CONTROL`, `OPTION`, `ALT`, `UP_ARROW`, `DOWN_ARROW`, `LEFT_ARROW`, and `RIGHT_ARROW`.

In p5.js v2, the recommended way to check whether a particular key is currently held down is 📜 [`keyIsDown()`](https://p5js.org/reference/p5/keyIsDown/):

```javascript
if (keyIsDown(UP_ARROW)) {
  // Move up.
}
```

This also makes it easy to check for multiple keys at the same time:

```javascript
if (keyIsDown(LEFT_ARROW) && keyIsDown(UP_ARROW)) {
  // Move diagonally up and left.
}
```

In p5.js v2, `keyIsDown()` accepts p5.js key constants or string values such as `"x"` and `"ArrowLeft"`. Numeric keycodes are no longer supported by `keyIsDown()`.

## Keyboard Events

Like with the mouse, there are special functions you can define to respond to keyboard events:

* 📜 [`keyPressed()`](https://p5js.org/reference/p5/keyPressed/) - Called when any key is pressed.
* 📜 [`keyReleased()`](https://p5js.org/reference/p5/keyReleased/) - Called when any key is released.
* 📜 [`keyTyped()`](https://p5js.org/reference/p5/keyTyped/) - Called when a key that produces a printable character is pressed.

For continuous input, such as moving a game character while a key is held down, use 📜 [`keyIsDown()`](https://p5js.org/reference/p5/keyIsDown/) rather than testing `key` inside `draw()`:

```javascript
function draw() {
  if (keyIsDown(LEFT_ARROW)) {
    // Move left.
  }

  if (keyIsDown(RIGHT_ARROW)) {
    // Move right.
  }
}
```

### Resources

* 🔰 [Conditionals and Interactivity Tutorial](https://p5js.org/tutorials/conditionals-and-interactivity/)
* 🔰 [Organizing Code with Functions Tutorial](https://p5js.org/tutorials/organizing-code-with-functions/)
* 🏷️ [Animation with Events Example](https://p5js.org/examples/Animation-And-Variables-Animation-With-Events/)
