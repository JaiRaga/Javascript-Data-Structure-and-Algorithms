function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    let c = []
    let collVal = []
    let srcVal = Object.keys(source).length
    let res = []
    let result = []
  
    for (let i in source) {
      for (let j of collection) {
        for (let k in j) {
          if (k === i && j[k] === source[i]) {
            c.push(collection.indexOf(j))
          }
        }
      }
    }
  
    for (let i in collection) {
      collVal.push(Number(i))
      res.push(0)
    }
    
    for (let i of collVal) {
      for (let j of c) {
        if (i === j) {
          res[i] += 1
        }
      }
    }
  
    for (let i = 0; i < res.length; i++) {
      if (res[i] === srcVal) {
        result.push(collection[i])
      }
    }
  
  
    console.log(res)
    // console.log(source, srcVal)
    console.log(source, result)
    
    // Only change code above this line
    return result;
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
  whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })
  whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})