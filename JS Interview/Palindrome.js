let palindrome = (str) => {
    let arr = [],
        s = '';
    
    arr = str.toLowerCase().split('');

    for (let i = arr.length - 1; i >= 0; i--) {
        s += arr[i];
    }

    str = arr.join('');

    if (s === str) return true;
    return false;

}

let result = palindrome('madam');
console.log(result);

result = palindrome('Raga');
console.log(result);