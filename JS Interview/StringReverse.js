const reverse = (str) => {
    let arr = [];
    let a = str.split(' ');

    for (let i = a.length - 1; i >= 0; i--) {
        arr.push(a[i]);
    }

    let s = '';
    s = arr.join(' ');
    return s;
}

let result = reverse('you are a nice dude');
console.log(result);