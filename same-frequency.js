"use strict";

/**Given two positive integers, find out if the two numbers have the same
 * frequency of digits.
 * sameFrequency(22, 222);    // false
 * sameFrequency(123, 321);   // true
 * */

function sameFrequency(num1, num2) {

  let stringifiedNum1 = `${num1}`;
  let stringifiedNum2 = `${num2}`;

  //evaluate lengths to check if keys must exist in both (ex: (34, 134) = false)
  if (stringifiedNum1.length !== stringifiedNum2.length){
    return false;
  }

  let num1Frequency = getFrequencyCounter(stringifiedNum1);
  let num2Frequency = getFrequencyCounter(stringifiedNum2);
  console.log(num1Frequency);
  console.log(num2Frequency);


  for (let key in num1Frequency){
    if (!(key in num2Frequency)){
      return false;
    }

    if (!(num1Frequency[key] === num2Frequency[key])){
      return false;
    }
  }

  return true;
}

// give two integers
// we need to split the numberinto a string?
//stringify
// then create frequency counter
//evaluate if keys in n1 exist in n2
//evalute if key values in n1 are same in n2






function getFrequencyCounter(items) {
  let obj = {};

  for (let item of items){
    if (obj[item]) {
      obj[item] += 1;
    } else {
      obj[item] = 1;
    }
  }

  return obj;
}
