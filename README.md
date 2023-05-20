Lotide a Lodash Clone

An exersize and utility library thats MIT licenced

## Purpose

**_WARNING:_ This library is published for learning purposes. It is _not_ intended for use in production-grade software.**

Thank you for checking out this project.

## Usage

**Install it:**

`npm install @liuprestin/lotide`

**Require it:**

`const _ = require('@liuprestin/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => 3`

## Documentation

The following functions are currently implemented:

- head : return the 1st value of an array
- tail : return the last value of an array
- middle : return the middle values of an array 
- flatten : given arrays in arrays --> return an array with no nested arrays
- joinList : take two arrays and join them together
- findKeyByValue :Given an object and a string of a value - find the related key
- letterPositions : letterPositions(string) take in a sentence and return collection of each index of a letter 
- map : re-create a copy of an original array modified by a callback function
- min : determine the smallest number in an array
- takeUntil : slice out elements of an array starting from the beginning of the array
- without : given an array and another array of target values - remove target values from original array
- countOnly : given an array of strings and a target string 
- countLetters : tabulate each unique letter in a string 