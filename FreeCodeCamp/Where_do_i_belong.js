function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    arr.sort((a,b) => a-b)
    if (arr.length === 0) return 0
    for (let i of arr) {
      if (i >= num) return arr.indexOf(i)
    }
    return arr.length  
  }
  
  getIndexToIns([40, 60], 50);
  getIndexToIns([10, 20, 30, 40, 50], 35);
  getIndexToIns([5, 3, 20, 3], 5);
  getIndexToIns([2, 5, 10], 15);
  getIndexToIns([], 1);