// Example 1:

// Input: chars = ["a","a","b","b","c","c","c"]
// Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
// Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".

// Example 2:

// Input: chars = ["a"]
// Output: Return 1, and the first character of the input array should be: ["a"]
// Explanation: The only group is "a", which remains uncompressed since it's a single character.

// Example 3:

// Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
// Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
// Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".

const compress = function(chars) {
    let result = ''
    let i = 0;
    let j = 0;

    while (j <= chars.length) {

        if(chars[i] === chars[j]) {
            j++
        } else {
            const num = j - i
            if(num === 1) {
                result += chars[i]
            } else {
                result += chars[i] + num
            }

            i = j
        }
    }

    const resultNew = result.split("");
    console.log(resultNew)
    return resultNew.length;
};

compress(["a","a","b","b","c","c","c"])


// More complex solution

// var newArr = [];
// var count = 1;
// for(var i =0;i<chars.length;i++){
//     if (chars[i] !== chars[i+1]) {
//         newArr.push(chars[i]);
//         count += '';
//         count !== '1' && [].push.apply(newArr, count.length >=2 ? count.split('') : [count]);
//         count = 1;
//     }
//     else {
//         count ++;
//     }
// }
// chars.splice(0);
// [].push.apply(chars, newArr);
// return chars.length;