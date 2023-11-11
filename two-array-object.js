"use strict";

/**Takes two arrays of varied length. The first array consists
//of keys and the second one consists of values. The function
// returns an object created from the keys and values. If there
// are not enough values, the rest of the keys will have a value
// of null. If there are not enough keys, the values are ignored
// twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4]) --> {'a': 1, 'b': 2, 'c': 3} */

function twoArrayObject(keys, values) {
  const object = {};

  for (let i = 0; i < keys.length; i++){
    const objectKey = keys[i];
    const objectValue = values[i];

    if (objectValue === undefined){
      object[objectKey] = null;
    } else {
      object[objectKey] = objectValue;

    }
  }
  return object;
}


//inputs: keysArray and valuesArray
//variable: object
//for loop that puts keys into object and assigns values from valuesArray
//how to evalaute different lengths
//if statement that if valuesArray[x] is undefined set equal to null
//return object