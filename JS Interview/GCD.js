const findGcd = (a, b) => {
    let arr = [1];
    if (a <= 2 || b <= 2) return 1;
    else {
        for (let i = 2; i <= a && i <= b; i++) {
            if (a % i === 0 && b % i === 0) arr.push(i);
        }
    }
    
    return arr[arr.length - 1];
}

let result = findGcd(69, 169);
console.log(result);