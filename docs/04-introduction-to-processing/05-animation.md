---
title: Animation
parent: p5.js Basics
nav_order: 5
---

<!-- prettier-ignore-start -->

# Animation
{: .no_toc }

This section will demonstrate how to create frame-based animations using 2D shapes and images.

## Table of Contents
{: .no_toc }

1. TOC
{:toc}

<!-- prettier-ignore-end -->

## Moving Pictures

Animation is an optical illusion. When presented with a sequence of images in quick succession our brains interpret the sequence as one continuous moving scene. While modern games are animated at 60 frames per second, classic hand-drawn animation used 24 frames per second, and even 10 frames per second is enough to trick the brain.

<iframe src="https://player.vimeo.com/video/401140696" width="480" height="270" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

## Shape-Based Animation in P5.js

P5 was created with animation in mind. The `draw()` function is executed 60 times per second. (Although we can decrease the frame using the `frameRate()` function.)

We can create animations using the `draw()` function by clearing the background and redrawing shapes a small distance from their previous positions.

```javascript
function draw() {
  // Clear the canvas:
  background(220);

  // Calculate the new x position of the circle:
  let position = frameCount % width;

  // Draw circle in its new position:
  ellipse(position, height / 2, 30, 30);

  // Output the current frame rate:
  text("Frame Rate: " + int(getFrameRate()), 5, height - 10);
}
```

[Edit Code Using p5.js Web Editor](https://editor.p5js.org/stungeye/sketches/WOBPTOtAM)

<iframe src="https://editor.p5js.org/stungeye/embed/WOBPTOtAM" scrolling="no" frameborder="no"  width="300" height="142"></iframe>

## Sprite-Based Animation in P5.js

We can also make the programmatic equivalent of animated GIFs by sequentially displaying images one after the other.

```javascript
let numFrames = 12; // The number of frames in the animation.
let currentFrame = 0;
let images = [];

// Preload images with filename format: PT_anim####.png (#### is 0000 through 0011)
function preload() {
  for (let i = 0; i < numFrames; i++) {
    // nf() formats the number to be 4 digits using zeros for padding:
    images[i] = loadImage("assets/PT_anim" + nf(i, 4) + ".png");
  }
}

function draw() {
  // Frame rate depends on the mouse X position.  (1 to 30 FPS from left to right.)
  let newFrameRate = map(mouseX, 0, width, 1, 30);
  frameRate(newFrameRate);

  // Determine the next frame and display it.
  currentFrame = frameCount % numFrames;
  image(images[currentFrame], 0, 0);

  // Output the current frame rate:
  text("Frame Rate: " + int(getFrameRate()), 10, height - 10);
}
```

[Edit Full Code Using p5.js Web Editor](https://editor.p5js.org/stungeye/sketches/zEMpTwHvu)

<iframe src="https://editor.p5js.org/stungeye/embed/zEMpTwHvu" scrolling="no" frameborder="no"  width="200" height="242"></iframe>

☝️ _Hover your mouse over the canvas to change the frame rate. Images by [James Paterson](https://twitter.com/presstube)._
