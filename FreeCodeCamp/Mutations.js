function mutation(arr) {
    let c = 0;
    arr[0] = arr[0].toLowerCase();
    arr[1] = arr[1].toLowerCase();
  
    for (let i = 0; i < arr[1].length; i++) {
      for (let j = 0; j < arr[0].length; j++) {
        if (arr[1][i] === arr[0][j]) {
          c += 1;
          break;
        }
      }
    }
  
    if (c === arr[1].length) return true;
    return false;
    
  }
  
let result = mutation(["hello", "hey"]);
console.log(result);
  
result = mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
console.log(result);

result = mutation(["Mary", "Aarmy"]);
console.log(result);