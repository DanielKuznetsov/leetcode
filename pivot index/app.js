// Example 1:

// Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11

const pivotIndex = function(nums) {
    let left = 0;
    let right = 0;
    
    for (let i = 0; i < nums.length; i++) {
        // summing the entire array
        right += nums[i];
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (i === 0 ) {
            right -= nums[i];

            // console.log(left, right, i)
        } else {
          left += nums[i-1];
          right -= nums[i];

        //   console.log(left, right, i)
        }
        if (left === right) return i;
    }
    
    return -1;
};

pivotIndex([1,7,3,6,5,6])