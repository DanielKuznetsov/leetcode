// You are given an integer array nums where the largest integer is unique.

// Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.

// Example 1:

// Input: nums = [3,6,1,0]
// Output: 1
// Explanation: 6 is the largest integer.
// For every other number in the array x, 6 is at least twice as big as x.
// The index of value 6 is 1, so we return 1.

const dominantIndex = function(nums) {
    const newArr  = []

    for(let i = 0; i < nums.length; i++) {
        const doubled = nums[i] * 2;

        if(!nums.some(el => el >= doubled)) {
            newArr.push([doubled, i])
        }
    }

    if(newArr.length >= 2) {
        // console.log(-1)
        return -1
    } else {
        // console.log(newArr[0][1])
        return newArr[0][1]
    }
};

dominantIndex([3,6,1,0])
dominantIndex([1,2,3,4])