"use strict";
/** separatePositive is a function that accepts one array with non-zero
 * numbers. Returns the SAME array with all positive numbers on the left
 * and all neg numbers on the right. DOES NOT SORT the numbers, only seeprates
 * positive from negative.
 */
function separatePositive(nums) {
  // Use multiple pointers in a while loop
  // Declare startPointer and endPointer
  let startPointer = 0;
  let endPointer = nums.length-1;

  while(startPointer < endPointer) {
    // If number at startPointer is positive and number at endPointer is neg,
    if(nums[startPointer] > 0 && nums[endPointer] < 0) {
      // Do nothing and increment start and decrement end
      startPointer++;
      endPointer--;
      continue;
    }
    // If number at start is neg and number at end is positive, swap number positiions
    // and increment start and decrement end
    if(nums[startPointer] < 0 && nums[endPointer] > 0) {
      [nums[startPointer], nums[endPointer]] = [nums[endPointer], nums[startPointer]];
      startPointer++;
      endPointer--;
      continue;
    }
    // If both positive only increment start
    if(nums[startPointer] > 0 && nums[endPointer] > 0) {
      startPointer++;
    }
    // If both negative only decrement end
    else {
      endPointer--;
    }
  }
  // Return array
  return nums;
}
