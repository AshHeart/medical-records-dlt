# Official Style Guide for the project
The style guide should be strictly followed if you are planning on making a contribution to the project.

## Indenting
Only use 4 spaces for indenting all code.
Code found with any other indenting shall not be considered for review.

## Files and Folders
* File names should be strictly in camel case, excpet for markdown files.  
Eg: ``` client1.js or newOrder.js ```

* All makrdown files to be named in full caps only.  
Eg: ``` README.md ```

* Folders should be names in all lowercase and separates with a hyphen ie, -   
Eg: ``` blockchain or dlt-scripts ```

## Javascript
We honestly beleive that `ASR` or `Automatic Semiclon Removal` must be a tool for Javascript.   
We only accept javascript written without semicolons, if you find your C or Java self forcing you to add semicolons while you type, do a quick find and replace and remove all semicolons before submitting your code for review.

### JS Syntax
* Variable names will be in lowercase with words separated by _.   
  ``` javascript 
  let new_order = "Something" 
  ```
* Keep variable names concise and meaningful. Please ``don't`` name your variables:
  ``` javascript
  let this_one_does_this_thing_and_this_other_thing_too = "All those things.... I guess"
  
* Blocks within a block or global blocks must look like:
  ``` javascript 
  function add() {
    //Code..
  }
  ```
  or
  ``` javascript
  (arg1, arg2) => {
    //Code..
  }
  ```
  and
  ``` javascript
  if(cond) {
    //Code..
  } else if(cond2) {
    //Code..
  } else {
    //Code..
  }
  ```
* Functions within a class and the class itself must look like:
  ``` javascript
  class Thing extends OtherThing
  {
      constructor
      {
          //Code..
      }

      my_fn()
      {
          //Code..
      }
  }
  ```
* Function and method names must follow camel case starting with a lowercase letter.
  ``` javascript
  function addNewOrder() { 
    //Code.. 
  }
  ```
* Function chaining will be on a new line if chaining more than two functions:
  ``` javascript
  Thing.doSomething()
    .doSomethingElse()
      .doSomeOtherThing()
  ```
  or if it is just a sinlge dot, it can be on the same line:
  ``` javascript
  Thing.DoNewThing()
  ```
  promise.then and promise.catch should be on the next line and indented:
  ``` javascript
  somePromise('firstArg', SomeCallback)
    .then(SomeThing)
    .then(SomeThingElse)
    .catch(SomeOtherThing)
  ```
* Structure your objects neatly like:
  ``` javascript
  let myObj = {
    prop1:                  someDodad,
    prop2:                  someOtherDodad,
    prop3_has_a_large_name: 10000
  }
  ```
