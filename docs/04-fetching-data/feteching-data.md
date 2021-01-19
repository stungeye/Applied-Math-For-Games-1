---
title: Fetching Data
nav_order: 6
---

<!-- prettier-ignore-start -->

# Fetching Data with the Fetch API 
{: .no_toc }

In this module we'll explore a client-side Javascript technique called AJAX that allows us to make our applications more dynamic by fetching data directly from an URL or an API. 

## Table of Contents
{: .no_toc }

1. TOC
{:toc}

<!-- prettier-ignore-end -->

## Objectives

Upon completion of this module, you should be able to:

- Explain the client-side programming technique called AJAX.
- Use the Javascript Fetch API to make HTTP requests from the browser.
- Use callback functions and promises to deal with the data returned by the Fetch API.
- Make GET and POST AJAX request using the Fetch API.

## Asynchronous Data Transfer

![Asynchronous Data Transfer](async.png)

When a computer program transfers data synchronously the program must halt (or block) while waiting for the data to arrive.

Asynchronous (or non-sequential) data transfer permits a program to continue running while waiting for data.

In Javascript this is accomplished by registering a data-handling function to execute once the data has arrived.

## The X Stands for JSON

AJAX stands for **A**synchronous **J**avaScript **A**nd **X**ML.

The term AJAX was first proposed in 2005 to describe the use of Javascript to load extra data from a server into an HTML document.

At the time, XML was the most common data-exchange format returned by web servers.

These days most APIs return data as JSON, so programmers often joke that the X in AJAX stands for JSON. :P

## But You Promised!

Promises are a recent addition to Javascript that represent the _eventual_ result of an asynchronous operation.

You ask for something and you get back a promise for that thing.

A promise can be in one of four states:

- **fulfilled** - Result is available.
- **rejected** - Failed to retrieve result.
- **pending** - Not yet fulfilled or rejected.
- **settled** - Fulfilled or rejected.

## And Then What?

We use `.then()` to register a callback to handle fulfilled promises. This callback will be called once the promise has fulfilled.

We can chain `.then()`s together to link together a series of async tasks.

We can also register an callback to handle rejected promises using `.catch()`.

All of this will make more sense with an example. So let's dive into fetching data using Javascript's Fetch API.

## The Fetch API

The Fetch API makes available a global `fetch()` function that we can use to request data from a URL using HTTP. This function returns a `Promise` we can use to eventually access the fetched data.

```javascript
fetch("https://dog.ceo/api/breeds/list/all").then(function (result) {
  console.log("HTTP Response Status: " + result.status);
});
```

This request will print to the console once the `Promise` is fulfilled:

```javascript
HTTP Response Status: 200
```

## Fetching JSON

If the data being `fetch`ed is JSON we can request another `Promise` for the de-serialized Javascript version of the JSON string.

```javascript
fetch("https://dog.ceo/api/breeds/list/all")
  .then(function (result) {
    return result.json(); // Promise for parsed JSON.
  })
  .then(function (data) {
    // Executed when promised JSON is ready.
    let breeds = Object.keys(data.message);
    for (let breed of breeds) {
      console.log(breed);
    }
  });
```

The reasons we set `breeds` to `Object.keys(data.message)` is because the API returns:

```javascript
{
  "status": "success",
  "message": {
    "affenpinscher": [],
    // skip a few
    "setter": [
      "english",
      "gordon",
      "irish"
    ],
    // skip a few more
    "wolfhound": [
      "irish"
    ]
  }
}
```

And for the example we only care about the keys of the `message` property.

## Ajax GET Request

Here's another example of an HTTP GET request for some JSON:

```javascript
fetch("https://www.reddit.com/r/javascript/top/.json?limit=5")
  .then(function (result) {
    return result.json(); // Promise for parsed JSON.
  })
  .then(function (retrieved) {
    let articles = retrieved.data.children;
    for (let article of articles) {
      console.log(article.data.title);
    }
  });
```

The relevant keys of the JSON returned by the Reddit API look like this:

```json
{
  "data": {
    "children": [
      {
        "data": {
          "title": "Title of the first article"
        }
      },
      {
        "data": {
          "title": "Title of the second article"
        }
      }
      // etc
    ]
  }
}
```

## POST AJAX Requests

If you wanted to use Javascript to asynchronously submit an HTML form:

```javascript
fetch("https://example.com/endpoint", {
  method: "post",
  body: new FormData(document.querySelector("form")),
}).then(function (response) {
  if (!response.ok) {
    console.log("POST failed. Status Code:  " + response.status);
  }
});
```

This will submit the data present in the first form on the page.

## AJAX POST with JSON

Some APIs will have endpoints that you can POST JSON data to:

```javascript
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({ title: "foo", body: "bar", userId: 1 }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
```

Note the use of the fat arrow functions in the `then`s.

## Handling Errors

Errors can be handled by chaining a `.catch` to your `fetch`, but this will only catch network errors. It won't catch bad HTTP status responses like 404 or 500.

To handle cases where the network request succeeded but the HTTP status code was bad:

```javascript
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

fetch("http://httpstat.us/500")
  .then(handleErrors) // Check for HTTP status failure.
  .then(function(response) { // Handle success. })
  .catch(function(error) { // Handle network or HTTP failure. })
```

## Then Chains

When working with promises we sometimes end up with a chain of `.then()` calls to resolve multiple nested asynchronous callbacks. These can be hard to read and reason about.

The dog breed API example from above generates two promises, one for the `fetch` and another for parsing the returned JSON string:

```javascript
fetch("https://dog.ceo/api/breeds/list/all") // Fetch returns a promise.
  .then(function (result) {
    // Then for promised fetch result.
    return result.json(); // JSON parsing also returns a promise.
  })
  .then(function (data) {
    // Then for promised JSON parsing.
    let breeds = Object.keys(data.message);
    for (let breed of breeds) {
      console.log(breed);
    }
  });
```

## Async / Await

Let's move the code from the last example into a `logAllBreeds` function. If we mark this function as `async` we can use the `await` keyword to write code that doesn't rely on callbacks:

```javascript
async function logAllBreeds() {
  let results = await fetch("https://dog.ceo/api/breeds/list/all");
  let data = await results.json();

  let breeds = Object.keys(data.message);
  for (let breed of breeds) {
    console.log(breed);
  }
}
```

The `async` keyword ensures that a function always returns a promise.

The `await` keyword makes Javascript wait until a promise is settled before the code continues executing.

## Further Reading

- [More Details on Async / Await @ javascript.info](https://javascript.info/async-await)
- [Axios](https://github.com/axios/axios) - Popular alternative to using Fetch.
- [httpstat.us](http://httpstat.us) - A simple service for generating different HTTP codes.
- [Can I Use Promises?](https://caniuse.com/#search=promises) - Current browser support for promises.
- [Can I Use the Fetch API](https://caniuse.com/#search=fetch) - Current browser support for the Fetch API.
