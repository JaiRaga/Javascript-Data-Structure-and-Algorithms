function revInPlace(arr) {
  let temp;
  for (let i = 0; i < arr.length / 2; i++) {
    temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}

console.log(revInPlace(["q", "w", "e", "r", "t", "y"]));
console.log(revInPlace([1, 2, 3, 4, 5]));
