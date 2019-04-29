const rev = (str) => {
    let arr = [],
        a = [];

    arr = str.split(' ');
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr[i].length - 1; j >= 0; j--) {
            a.push(arr[i][j]);
        }
        if (i === arr.length-1) break;
        a.push(" ");        
    }
    a = a.join(' ');
    return a;
}

let result = rev("you are a nice dude");

console.log(result);