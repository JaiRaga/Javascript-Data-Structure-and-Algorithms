const merge = (a,b) => {
    let arr = [], 
        count = 0,
        c = [],
        d = [];

        for (let i = 0; i < a.length; i++) {
            if (c.length === 0) c.push(a[i]);
            else {
                for (let j = 0; j < c.length; j++) {
                    if (c[j] !== a[i] && j === c.length - 1) c.push(a[i]);
                }
            }
        }

        for (let i = 0; i < b.length; i++) {
            if (d.length === 0) d.push(b[i]);
            else {
                for (let j = 0; j < d.length; j++) {
                    if (d[j] !== b[i] && j === d.length - 1) d.push(b[i]);
                }
            }
        }
    

    arr.push(...c);

    for (let i = 0; i < d.length; i++) {
        for (let j = 0; j < c.length; j++) {
            if (c[j] !== d[i]) count += 1;
            else break;

            if (count === c.length) arr.push(d[i]);
        }
        count = 0;
    }

    return arr;
}

let result = merge([1,2,2,3,3,3,4,4,4], [5,5,5,6]);

console.log(result);