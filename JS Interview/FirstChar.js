// Returns the first non repeating char in a string

let firstNonRepeatChar = (str) => {
    let char = '',
        s = [],
        count = 0;

    s = str.toLowerCase().split('');
    
    for (let i = 0; i < s.length; i++) {
        char = s[i];
        for (let j = 0; j < s.length; j++) {
            if (i !== j && char === s[j]) {
                count += 1;
                // console.log(char);
                break;
            }
        }

        if (count === 0) return char;
        count = 0;
    }
    return 'Nope';
}

let result = firstNonRepeatChar("the quick brown fox jumps then quickly blow air"); // answer: 'f'
console.log(result);