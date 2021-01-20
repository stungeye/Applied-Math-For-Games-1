---
title: Conventions and RTFM
nav_order: 2
---

<!-- prettier-ignore-start -->

# Conventions and The Friendly Manual(s)
{: .no_toc }

The conventions you can expect and the reference materials you can count on.

## Table of Contents
{: .no_toc }

1. TOC
{:toc}

<!-- prettier-ignore-end -->

## RTFM

_"Learning to program is an iterative, systematic process of eliminating magic."_ -- [source](https://sigpwned.com/2012/04/12/learning-to-program/)

And how does one eliminate magic? By learning to **R**ead **T**he **F**riendly **M**anual.

These notes are to be considered the manual for this course. You should come here to search for your answers before attempting turning to Google or Stack Overflow.

These secondary sources should also be considered manuals you should consult before Goolging:

- [Modern Javascript Ebook @ Javascript.info](https://javascript.info)
- [Javascript Reference @ Mozilla Developers Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- [P5.js Reference API](https://p5js.org/reference/)
- [P5.js Code Cookbook](https://p5js.org/examples/)
- [Official P5.js Tutorials](https://p5js.org/learn/)

## Help Improve These Notes

You can help improve these notes in three ways:

1. If there are topics you feel are missing from these notes please inform your instructor.
2. Anytime you come here looking for an answer that you then cannot find, email <a href="mailto:kgeske@rrc.ca">kgeske@rrc.ca</a>.
3. You can submit a pull request to fix typos, debug code samples, and update explanations using the "Edit this page on Github" link at the bottom of every page.

## Documentation Conventions

Through the notes you will see the following three types of labels.

🎵 Note:
{: .label .label-yellow}

Notes add important information you don't want to miss.

⚡ Warning:
{: .label .label-red}

Warnings are provided to prepare you for common bugs and "gotchas".

💡 Best Practice:
{: .label .label-green }

Best practices used in industry will also be highlighted.

## Code Conventions

All source code in the notes will be syntax highlighted like so:

```javascript
const ghost_quota = 37;
const caught_ghost = 12;

if (caughtGhosts > ghostQuota) {
  console.log("You are done for the day.");
} else {
  const ghostsRequired = ghostQuota - caughtGhosts;
  console.log(`You need to find ${ghostsRequired} more ghosts.`);
}
```
