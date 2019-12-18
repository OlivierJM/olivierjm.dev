---
date: 2019-02-19T17:16:07.430Z
title: An Introduction to tests in Javascript
author: Olivier JM
hero_image: "/content/images/example-sc.png"
---

This article is going to show you the basic of writing tests in Javascript, If you are interested in testing an Expressjs server, check out this [article](https://medium.com/developer-circles-lusaka/how-to-write-an-express-js-server-using-test-driven-development-921dc55aec07) from [Mbuyu](https://github.com/makayi) that explains on **TDD**(Test Driven Development).  
At BongoHive we use tests in most of the code written and this is the effort to share with the community the basic approach

### Introduction

As Mbuyu explained in his article, sometimes you find yourself in a situation where your code isn't working as expected because of small or big changes you made, now imagine you had this feature it was working perfectly and when demoing it to the client it just crashes 🥺 unexpectedly.

As developers our job isn't just to develop features that work but to ensure that those features will still work even in the future when other changes are made to the codebase.

**We don't write tests to check if our code works. We write tests to be able to change it in the future with certain degree of confidence that we don't break anything**

In this introduction we are going to write **unit tests**, these are basic tests to make sure an individual function is working as expected. we will use [**Jest**](https://jestjs.io/) a testing framework from facebook.

a typical example would look like this.

```javascript
function add(a, b) {
  return a + b
}
// test if the add really adds two numbers
it("should add two given numbers", () => {
  expect(add(2, 5)).toBe(7)
})
```

### What we are going to build

We are going to use a functional approach to build small pure functions, remember a function should only do one thing and do it well, this makes it easy to test as you will see in the following examples.

**Problem** We have an input field and we expected the users to type any kind of phone number, but let's say we want to do an internal validation, we could give the user feedback that their phone numbers are wrong but for the sake of this exercise, let's just format the given value and test if our functions are working.

The numbers we expect from the users can be in this format, **+2609XXXXXX, 09XXXXXXXX, 9XXXXXXXX** the format we are looking for is this **260 9XXXXXXXX**

> Let's start with making sure there is no (+) in the given number

#### remove Symbol

```javascript
function removeSymbol(number) {
  // make sure we are getting a string
  if (typeof number !== "string") throw new TypeError("Expected string")
  // check if the number has the + sign and remove it
  if (number.includes("+")) {
    return number.replace(/\+/gi, "")
  }
  return number
}

// using flat arrows
const removeSymbol = number =>
  number.includes("+") ? number.replace(/\+/gi, "") : number

// usage for the above
removeSymbol("+260972342432") // would give us this "260972342432"
removeSymbol("260972342432") // "260972342432"
```

The function above basically does one thing, it checks if the given value contains a "+" and removes if it's there or it will just return the given value as it was.

Now let's write a simple for this function using **Jest**

```javascript
it("should remove the + symbol if it exists", () => {
  expect(removeSymbol("+260")).toBe("260")
})

it("should return the given value if not + symbol found", () => {
  expect(removeSymbol("500")).toBe("500")
})
// since the argument should be a string, let's test that as well
```

So far the tests we have written are only functional and logical tests just to check if our functions work as expected, now we could also test how our function behaves even we give it a wrong type, check out [jest matchers](https://jestjs.io/docs/en/using-matchers#common-matchers) there are many you can use for different cases of your tests.

#### remove Prefix

We need to write another function that checks if the user typed in the number with a country code, this could be something like this `260934334` since our goal is to properly format the number, we can get rid of the country code and append it later on.
Let's do that

```javascript
// zambian mobile numbers start with 09x in case the user typed it start with a 2
// then its a country code prefixed

// es6
const removePrefix = num =>
  num[0] == 2 ? num.substring(3) : num[0] == 0 ? num.substring(1) : num

// es5
function removePrefix(num) {
  if (num[0] == 2) {
    // check if it starts with a 2
    return num.substring(3) // remove numbers up to index 2 of the value
  } else if (num[0] == 0) {
    // check if the value starts with a zero
    return num.substring(1) // remove the o
  }
  return num
}
```

If you are wondering why I didn't use the "===" It is because of type **coersion** if you compare 2 as a number with a "2" as a string, in **Javascript** if both types are not the same it will try and convert one to an equivalent value of the other. so if we do `2 == "2"` we end up with `2 == 2` which is true, however if you use "===" the case will be different.

Let's write unit tests for our removePrefix function, we will simply provide our function with different values to see if it will work as expected.

```javascript
it("removes the zm country code", () => {
  expect(removePrefix("260923423")).toBe("923423")
})
it("removes the starting zero", () => {
  expect(removePrefix("0923423")).toBe("923423")
})

// in the above tests you can see that the end result is all the same.
// you can add more tests here, like checking if the function was actually called, etc ...
```

So far we have written 2 functions that we will use to clean up the input we will get from the user.

- removeSymbol()
- removePrefix()

If you are wondering why we separated the 2 functions, the reason is that we want to be able to test these functions independently from each other.  
If we wanted we can use our functions this way `removePrefix(removeSymbol(value))` but we will look at a better way of doing this.

#### append the correct country code

Now that we have cleaned the input value from the user, we can append it with a correct country code and the desired space, remember that our number should be formatted like this `260 97139798`

There are many ways we could do this, but I will go through a simpler approach which is more functional and I will explain the implementation.  
we are going to use a library called **ramdajs** which provides easy to use helpers for functional data manupilation, and we just need 2(`compose and curry`).
You can check here for the finished code https://codesandbox.io/s/github/OlivierJM/number-formatter

```javascript
import * as R from "ramda"

const appendCountryCode = R.curry((number, code) => `${code} ${number}`)
```

The above function will be used partially in our next compose function we are going to create, this is to allow us to partially pass arguments and return a function that we can pass to the compose with one argument, after the input has been cleaned. 😉

**currying** is a method of returning a function if the passed arguments didn't satisfy the function in question, as Dr. Axel explained

> _The idea is as follows: If you don't provide all parameters for a function, it returns a function whose input are the remaining parameters and whose output is the result of the original function._ read more on this [here](https://ramdajs.com/docs/#curry)

**compose** or functional composition is a way of combining two or more functions intro a new function, one important thing to keep in mind is that it runs from right to left. ← ← ← ← ←

```javascript
import * as R from "ramda"

const formatNumber = R.compose(
  appendCountryCode,
  removePrefix,
  removeSymbol
)

// the above function can be called like this
formatNumber(numberToformat)(countryCode)
```

our final function is a combination of 3 functions we created above, but since this is a **compose** function it runs from right to left, so in this case it will start with `removeSymbol`, then `removePrefix` then finally with our `appendCountryCode` since the function will be curried, you will need to pass with a final argument therefore `formatNumber(numberToformat)(countryCode)` .

Now we can write unit tests for either the formatNumber or appendCountryCode, if you want to can test both, I am going to test the **formatNumber** since it makes use of the **appendCountryCode** curried function.

```javascript
it("should add the country when number starts with 9", () => {
  expect(formatNumber("943434")("260")).toEqual("260 943434")
})

it("should format even if the code existed", () => {
  expect(formatNumber("+260943434")("260")).toEqual("260 943434")
})

it("should format even if number is spaced out", () => {
  expect(formatNumber("+260 943434")("260")).toEqual("260 943434")
})
```

Our tests should be passing now

#### Conclusion

In this article we only demonstrated writing simple functions and testing them using jest matchers, we also got introduced to the bits of the functional programming using **ramdajs**.  
**Jest** is a javascript testing framework that provides you with all the tools you need to get up and running with your tests.
In the next article we will look at how to test the DOM in react and we will use Test Driven Development.
