function uniteUnique(arr) {
    let a = [...arr]
    for (let i of arguments) {
      for (let j of i) {
        if (a.indexOf(j) === -1) {
          a.push(j)
        }
      }
    }
    console.log(a)
    return a;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
  uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);