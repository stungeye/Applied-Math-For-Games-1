---
title: Debugging
parent: p5.js Basics
nav_order: 6
---

<!-- prettier-ignore-start -->

# Debugging
{: .no_toc }

There are four main ways to debug a p5.js application.

## Table of Contents
{: .no_toc }

1. TOC
{:toc}

<!-- prettier-ignore-end -->

## Syntax Errors

Before we get to debugging, let's talk briefly about syntax errors.

If you are using the Web Editor your syntax errors will receive yellow or red squiggly underlines in the editor. When running your code you'll get specific syntax error messages with line numbers in the `Console` area below your code.

If you are developing locally, VS Code may flag some of your errors in the editor but you may also need to check the `Console` tab of your browser's developer console. You can open the dev console in most browsers by hitting CTRL-SHIFT-I. 

## `console.log` Debugging

The easiest way to quickly debug a sketch is to use `console.log()` to output the state of your variables. If you are using the Web Editor the output will be displayed below your sketch code. If you are developing locally the output goes to your web browser's developer console (CTRL-SHIFT-I). 

_Downsides: The output can be overwhelming and will slow down your sketch._

## `text()` Debugging

This is similar to `console.log` debuggging, but instead you use the `text()` function to draw the state of certain variables to the screen.

_Downsides: Variables state output in this way will be overwritten every frame._

## Developer Console Debugging

If you are developing your sketch locally you can query and modify the state of any global variables using the developer console.

Just open the console (CTRL-SHIFT-I) and type in the name of a global variable and hit enter to see it's current state. 

To change a variable's state you can enter an assignment statement into the dev console.

_Downsides: You can only monitor / change the state of global variable. Local function variables cannot be accessed in this manner. This technique is also only available if you are developing your sketch locally._

## Breakpoint Debugging

If you are developing your sketch locally you can add one or more breakpoints by clicking in the breakpoint column to the left of your code in the `Sources / Debugger` tab. The breakpoints will show as red circles or blue arrows (depending on your browser) and can be clicked again to be removed.

The execution of your code will now pause when a breakpoint is reached. You can then step into (F11), step over (F10), and step out (Shift-F11) to walk through your code line by line. 

Once a breakpoint is triggered you can hover over a variable to see it's state, or add local variables as "Watch Expressions". 

_Downsides: Be cautious. An overreliance on the step debugger might indicate that you don't fully understand the code you've written. Step back from the step debugger and take some time to think through how you might simplify your code._

### Resources

- 🚂 [Errors and Console - Coding Train Video](https://www.youtube.com/watch?v=LuGsp5KeJMM)
- 📚 [Getting Started with Debugging in Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/javascript)
- 📚 [The Firefox Javascript Debugger](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools#the_javascript_debugger)