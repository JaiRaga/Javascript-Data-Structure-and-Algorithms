const dup = (arr) => {
    let a = [];
    for (let i = 0; i < arr.length; i++) {
        if (a.length === 0) a.push(arr[i]);
        else {
            for (let j = 0; j < a.length; j++) {
                if (a[j] !== arr[i] && j === a.length-1) {
                    a.push(arr[i]);
                }
            }
        }
    }
    return a;
}


let result = dup([1,2,2,3,4,4,4,5,6,0,0,0]);
console.log(result);