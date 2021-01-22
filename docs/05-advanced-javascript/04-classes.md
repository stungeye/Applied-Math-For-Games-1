---
title: Classes
parent: Advanced JS Techniques
nav_order: 4
---

<!--prettier-ignore-start-->
# Classes
{: .no_toc }

If functions are the verbs of computer programming, then classes let us define the nouns.

### Table of Contents
{: .no_toc }

1. TOC
{:toc}

<!--prettier-ignore-end-->

## Object Literals

In Javascript we can create objects without classes using the object literal syntax.

We can even attach functions to these objects.

```javascript
let mySpaceShip = {
  fuelAvailable = 1000;
  move: function () {
    this.fuelAvailable--;
  },
};

mySpaceShip.move(); // The fuelAvailable property is now 999.
```

## Classes are New(ish)

For the first twenty years Javascript had no `class` keyword. Writing object-oriented code was still possible, but we had to use object literals (as seen above) and [prototypal inheritance](https://javascript.info/prototype-inheritance).

Classes were added to Javascript in 2015 as part of version 6 of the ECMAScript standard (ES6). They are still a moving target with new features and refinements being added today.

## Defining a Class

Let's create a `SpaceShip` class. We'll give it a `constructor` to set our initial fuel level and a `move` method to decrease the fuel amount.

Object properties must be attached to `this`, which is an object's reference to itself.

```javascript
class SpaceShip {
  // Constructors are always named: constructor
  constructor(initialFuel) {
    this.fuelAvailable = initialFuel;
  }
  // Methods are defined with optional parameters.
  move() {
    this.fuelAvailable--;
  }
}
```

🎵 Note:
{: .label .label-yellow}

We don't use the `function` keyword to define methods in our classes.
{: .d-inline-block }

## Instantiating a Class

We can now instantiate multiple objects of type `SpaceShip` and call their `move` methods.

```javascript
let myShip = new SpaceShip(1000);
let yourShip = new SpaceShip(5000);

myShip.move(); // myShip.fuelAvailable is now 999.
yourShip.move(); // yourShip.fuelAvailable is now 4999.
```

## Static Properties

It can sometimes be helpful to store data directly in a class, rather than in the instances of the class.

```javascript
class Goat {
  static goatsMade = 0;
  constructor(name) {
    this.name = name;
    Goat.goatsMade++;
  }
}

console.log(Goat.goatsMade); // 0
let myGoat = new Goat("Bert");
console.log(Goat.goatsMade); // 1
```

## Static Methods

Attaching helper methods or factories to the class can also be helpful.

```javascript
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.hypot(dx, dy); // Use built-in math helper to find the distance.
  }
}

let pointOne = new Point(3, 9);
let pointTwo = new Point(14, 2);
let distanceBetweenPoints = Point.distance(pointOne, pointTwo);
```

## Sub-Classing with Extends

We can use the `extends` keyword to create a subclass, along with `super()` to call the parent's constructor:

```javascript
class Student {
  constructor(name) {
    this.name = name;
  }
}

class CollegeStudent extends Student {
  constructor(name, debt) {
    super(name);
    this.debt = debt;
  }
}

let joe = new Student("Joe");
let daisy = new CollegeStudent("Daisy", 2342);
```

## Method Overriding

Subclasses can override the methods of their parent classes by defining a method of the same name. The parent's version of the method can be executed using `super.methodName()`.

```javascript
class Student {
  constructor(name) {
    this.name = name;
  }
  toString() {
    return `Name: ${this.name}`;
  }
}

class CollegeStudent extends Student {
  constructor(name, debt) {
    super(name);
    this.debt = debt;
  }
  toString() {
    return super.toString() + `, Debt: ${this.debt}`;
  }
}

let joe = new Student("Joe");
let daisy = new CollegeStudent("Daisy", 2342);
console.log(joe.toString()); // Name: Joe
console.log(daisy.toString()); // Name: Daisy, Debt: 2342
```

## Properties Are Public

One of the key tenents of object-oriented programming is that of "data hiding" or "encapsulation". Unfortunately we don't get that in Javascript objects, yet. Currently all properties attached to `this` are publicly gettable and settable.

Using the `daisy` object of type `CollegeStudent` from above:

```javascript
console.log(daisy.debt);
daisy.debt = 0;
console.log(`That was easy. Daisy now owes ${daisy.debt} dollars`);
```

Private properties prefixed by the `#` symbol are being added the ECMAScript specification but [aren't yet widely supported](https://caniuse.com/mdn-javascript_classes_private_class_fields).
