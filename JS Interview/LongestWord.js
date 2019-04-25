const longest = (str) => {
    let count = [];
    let alpha = 'qwertyuiopasdfghjklzxcvbnm';
    let arr = str.toLowerCase().split(' ');
    let a = [];
    arr.forEach(elem => {
        elem = elem.split('');
        a.push(elem);
    });

    for (let i = 0; i < a.length; i++) {
        count[i] = 0;
        for (let j = 0; j < arr[i].length; j++) {
            if (alpha.indexOf(arr[i][j]) !== -1) count[i] += 1;
        }
    }

    let h = 0,j = 0;
    count.forEach((c,i) => {
        if (c > h) {
            h = c;
            j = i;
        }
    })

    console.log(arr[j]);


}

longest("Fun;&, love");