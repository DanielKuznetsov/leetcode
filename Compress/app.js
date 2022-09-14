const compress = (s) => {
    let result = ''
    let i = 0;
    let j = 0;

    while(j < s.length) {
        if(s[j] === s[j + 1]) {
            j++
        } else {
            const num = (s.slice(i, j+1)).length

            if(num > 1) {
                result += num
            }

            result += s[i]

            j++
            i = j
        }
    }

    return result
};
compress("ssssbbz");