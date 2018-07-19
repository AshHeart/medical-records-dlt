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
Eg: ``` let new_order = "Something" ```
* Keep variable names concise and meaningful.
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