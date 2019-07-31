let w = (collections, source) => {
    let srcArr = Object.keys(source);
    
    // console.log(collArr);
    for (let i of collections) {
        let collArr = Object.keys(i);
        for (let j of srcArr) {
            
        }
    }  
};

console.log(w([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
console.log(w([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }));
console.log(w([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));
console.log(w([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));
console.log(w([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}));