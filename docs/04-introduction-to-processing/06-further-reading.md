---
title: Examples and Resources
parent: p5.js Basics
nav_order: 6
---

<!-- prettier-ignore-start -->

# Further Reading
{: .no_toc }

We've only just scratched the surface of what is possible using p5.js. This section includes information about 3rd party p5.js libraries and links to all sorts of example code.

## Table of Contents
{: .no_toc }

1. TOC
{:toc}

<!-- prettier-ignore-end -->

## Community Libraries

The p5js.org website [includes a section on all the community libraries you can use with p5.js](https://p5js.org/libraries/). There are libraries for animation, geolocation, speech synthesis, GUI toolkits, machine learning, and so much more. 

### Resources 

* 🧰 [p5.js Community Libraries](https://p5js.org/libraries/)
* 🔰 [Making Your Own p5.js Library Guide](https://github.com/processing/p5.js/blob/main/contributor_docs/creating_libraries.md)

## Installing Libraries (Local Dev)

Although you can manually download libraries to your project folder, the easiest way to install community libraries is using the 🧰 [p5.vscode extension](https://marketplace.visualstudio.com/items?itemName=samplavigne.p5-vscode).

With your project open in a workspace in VS Code:

- Open the command pallet (CTRL-SHIFT-P)
- Then type: `Install p5.js Contributor Library` and hit enter
- Select the library you wish to install

The library will be downloaded to the `libraries` folder and a new `<script>` tag will be added to your `index.html` file to load the library.

⚡ Warning:
{: .label .label-red}

This only seems to work if you have a single project folder in your VS Code Workspace.
{: .d-inline-block}

## Installing Libraries (Web Editor)

When using the [p5.js Web Editor](https://editor.p5js.org) you can install libraries by manually uploading the library's javascript file(s) and adding the appropriate `<script>` tag(s) to the `index.html`. 

  Some libraries might also provide you with a way to load the script from a content delivery network (CDN). Library readyoume provides you with a script tag that points to a CDN version of the library, then you need only add that script tag to your `index.html` file.

⚡ Warning:
{: .label .label-red}

The new script tags should come after the main `p5.js` script tag. 
{: .d-inline-block}

## Learning Examples

Throughout these notes I've linked to a number of example sketches on the official p5js.org website. 

The site includes 🏷️ [many many more amazing examples](https://p5js.org/examples/) you can learn from.

[Dan Shiffman's Coding Train channel on YouTube](https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw) (also linked to in these notes) is also a great source of p5.js examples and inspiration. He also has [a Coding Train website](https://thecodingtrain.com) that embeds all his videos with links to the source.

## Other Important Links

- 🔍 [Processing Forums - p5.js Category](https://discourse.processing.org/c/p5js) - Sign up today. :)
- 📜 [API Documentation @ p5js.org](https://p5js.org/reference/)
- 🔰 [All p5.js Learning Guides](https://p5js.org/learn/) 
- 📦 [p5.js Repository on GitHub](https://github.com/processing/p5.js) 
