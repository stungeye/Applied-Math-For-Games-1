---
title: Getting Started
parent: Introduction to Javascript
nav_order: 2
---

<!--prettier-ignore-start-->
# Getting Started 
{: .no_toc }

There are some basic things you need to know to start coding in Javascript. These topics include adding javascript to an HTML page, semicolon requirements, single and multi-line comments.

### Table of Contents
{: .no_toc }

1. TOC
{:toc}

<!--prettier-ignore-end-->

## Javascript in the Browser

Javascript can be executed in different environments. For this course we will be using Javascript attached to web pages executed by a web browser, specifically with the [P5.js creative coding library](https://p5js.org/).

This course will **not** cover using Javascript outside of the browser using runtimes like [NodeJs](https://nodejs.org/en/).

Javascript is adding to HTML webpages using the `<script>` tag. Javascript code can be embedded directly within a start and end `<script>` tag or it can be loaded from an external file using the `src` attribute:

```html
<script>
  console.log("Hello World!");
</script>
<script src="/path/to/script.js"></script>
<script src="http://example.com/url/to/script.js"></script>
```

Script tags can be placed in the HTML documents `<head>` but I prefer to place them at the end of the document right before the body close tag `</body>`. This placement ensures that the browser has fully parsed the HTML before it begins executing the Javascript.

## Statements and Semicolons

Javascript code is built from statements that are executed sequentially. Each statement is terminated with a semicolon.

You can actually write Javascript without semicolons since the language include provisions for [Automatic Semicolon Insertion](https://tc39.es/ecma262/#sec-automatic-semicolon-insertion) or ASI.

There are some rare cases where relying on ASI can lead to bugs, so the community has pretty much standardized on always using semicolons. That said, you'll sometimes come across tutorials and libraries that don't use semicolons.

## Code Comments

Javascript includes C-style single line and multi-line comments:

```javascript
// Single line comments start with two forward slashes.
console.log("This is some code."); // Comments can be placed on the same line as source code.
/* 
    Multi-line comments start with a forward-slash followed by an asterisk,
    and continue until they are terminated by an asterisk followed by a forward-slash. 
*/
/* Multiline syntax can also be used on a single line. */
```

## Further Reading

- [Semicolons in Javascript](https://flaviocopes.com/javascript-automatic-semicolon-insertion/) - A blog post that covers some of the circumstances where ASI will fail.
