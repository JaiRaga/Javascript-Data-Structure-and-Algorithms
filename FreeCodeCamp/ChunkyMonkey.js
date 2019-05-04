function chunkArrayInGroups(arr, size) {
    // Break it up.
    let a = [],
        g = [...arr];
  
    for (let i = 0; i < arr.length / size; i++) {
      a.push([...g.splice(0,size)]);
    }
  
    // console.log(arr, size, a);
    return a;
  }
  
let result = chunkArrayInGroups(["a", "b", "c", "d"], 2);
console.log(result);

result = chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
console.log(result);

result = chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
console.log(result);

result = chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
console.log(result);