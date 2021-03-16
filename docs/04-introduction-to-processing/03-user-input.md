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

The current x/y location of the mouse can be retrieved using the special 📜 [`mouseX`](https://p5js.org/reference/#/p5/mouseX) and 📜 [`mouseY`](https://p5js.org/reference/#/p5/mouseY) variables:

```javascript
circle(mouseX, mouseY, 50, 50);
```

The state of the mouse button is available via 📜 [`mouseIsPressed`](https://p5js.org/reference/#/p5/mouseIsPressed) and 📜 [`mouseButton`](https://p5js.org/reference/#/p5/mouseButton):

```javascript    
 if (mouseIsPressed) {
    if (mouseButton === LEFT) { // RIGHT and CENTER are available too.
      ellipse(50, 50, 50, 50);
    }
 }
```

There are also:

* 📜 [`pmouseX`](https://p5js.org/reference/#/p5/pmouseX) and 📜 [`pmouseY`](https://p5js.org/reference/#/p5/pmouseY) - Previous positions of mouse in last frame.
* 📜 [`movedX`](https://p5js.org/reference/#/p5/movedX) and 📜 [`movedY`](https://p5js.org/reference/#/p5/movedY) - Pixel distance moved since last frame.
* 📜 [`winMouseX`](https://p5js.org/reference/#/p5/winMouseX) and 📜 [`winMouseY`](https://p5js.org/reference/#/p5/winMouseY) - Mouse position in entire browser window, not just p5 canvas.
* 📜 [`pwinMouseX`](https://p5js.org/reference/#/p5/pwinMouseX), and 📜 [`pwinMouseY`](https://p5js.org/reference/#/p5/pwinMouseY) - Previous browser window positions.

## Mouse Events

There are a number of function you can define that will be called for particular mouse events:

* 📜 [`mouseMoved()`](https://p5js.org/reference/#/p5/mouseMoved) - Called anytime the mouse moves.
* 📜 [`mouseDragged()`](https://p5js.org/reference/#/p5/mouseDragged) - Called anytime the mouse moves while a button is pressed.
* 📜 [`mousePressed()`](https://p5js.org/reference/#/p5/mousePressed) - Called when any mouse button is pressed.
* 📜 [`mouseReleased()`](https://p5js.org/reference/#/p5/mouseReleased) - Called when any mouse button is released.
* 📜 [`mouseClicked()`](https://p5js.org/reference/#/p5/mouseClicked) - Called after a mouse button has been pressed and then released.

### Resources

* 🔰 [Interactivity Guide - See Mouse Section](https://p5js.org/learn/interactivity.html)
* 🚂 [Variables in p5.js - mouseX and mouseY - Coding Train Video](https://www.youtube.com/watch?v=RnS0YNuLfQQ) (12m23s)
* 🚂 [Mouse Interaction with Objects - Coding Train Video](https://www.youtube.com/watch?v=TaN5At5RWH8) (14m57s)
* 🏷️ [Mouse 1D Example](https://p5js.org/examples/input-mouse-1d.html)
* 🏷️ [Mouse 2D Example](https://p5js.org/examples/input-mouse-2d.html)
* 🏷️ [Mouse Press Example](https://p5js.org/examples/input-mouse-press.html)
* 🏷️ [Drag and Drop Example](https://p5js.org/examples/input-mouse-functions.html)

## Keyboard Variables

There are three variables related to the state of keys pressed on the keyboard:

* 📜 [`keyIsPressed`](https://p5js.org/reference/#/p5/keyIsPressed) - Boolean to test if any key is pressed.
* 📜 [`key`](https://p5js.org/reference/#/p5/key) - Which key is pressed case insensitive. (Only for printable keyboard characters.)
* 📜 [`keyCode`](https://p5js.org/reference/#/p5/keyCode) - Integer code for the key being pressed. 

To determine which key related to a specific `keyCode` see: 📚 [keycode.info](https://keycode.info)

There are also constants for special keys: `BACKSPACE`, `DELETE`, `ENTER`, `RETURN`, `TAB`, `ESCAPE`, `SHIFT`, `CONTROL`, `OPTION`, `ALT`, `UP_ARROW`, `DOWN_ARROW`, `LEFT_ARROW`, and `RIGHT_ARROW`

## Keyboard Events

Like with the mouse, there are special functions you can define to respond to keyboard events:

* 📜 [`keyPressed()`](https://p5js.org/reference/#/p5/keyPressed) - Called when any key is pressed.
* 📜 [`keyReleased()`](https://p5js.org/reference/#/p5/keyReleased) - Called when any key is released.
* 📜 [`keyTyped()`](https://p5js.org/reference/#/p5/keyTyped) - Like `keyPressed()` but only for printable characters.
* 📜 [`keyIsDown()`](https://p5js.org/reference/#/p5/keyIsDown) - Tests if a particular key is pressed.

### Resources

* 🔰 [Interactivity Guide - See Keyboard Section](https://p5js.org/learn/interactivity.html)
* 🏷️ [Keyboard Example](https://p5js.org/examples/input-keyboard.html)
