// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".

// Example 2:

// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".


const backspaceCompare = function(s, t) {
   let one = [], two = []

   for(let i = 0; i < s.length; i++) {
    s[i] !== "#" ? one.push(s[i]) : one.splice(one.length - 1, 1)
   }

   for(let i = 0; i < t.length; i++) {
    t[i] !== "#" ? two.push(t[i]) : two.splice(two.length - 1, 1)
   }

   const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b)

   console.log(equals(one, two))
};

backspaceCompare("xywrrmp", "xywrrmu#p")
