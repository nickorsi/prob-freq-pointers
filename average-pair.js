"use strict"

/** averagePair takes in an arry and a target average, determines if
 * any pair of numbers in nums result in target average, returns boolean
 */

function averagePair(nums, targetAvg) {
  // Use multiple pointers to target multiple elements in a single loop
  // Declare startPointer and endPointer
  let startPointer = 0;
  let endPointer = nums.length-1;
  // Use while loop to iterate while startPointer<endPointer
  while (startPointer < endPointer) {
    // Declare avg = element[startPointer] + element[endpointer]/2
    const avg = (nums[startPointer] + nums[endPointer]) / 2;
    // if avg === targetAvg return true
    if(avg === targetAvg) return true;
    // if avg > targetAvg decrement endPointer
    if(avg > targetAvg) {
      endPointer--;
    } else {
      // else increment startPointer
      startPointer++;
    }
  }
  // Return false
  return false;
}

