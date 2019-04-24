let binarySearch = (arr, num) => {
    let left = 0, 
        right = arr.length-1, 
        middle = Math.floor((left+right) / 2);

        while (arr[middle] !== num && left <= right) {
            if (arr[middle] > num) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
            middle = Math.floor((left+right) / 2);
            console.log(left, right, middle);
        }

    return arr[middle] === num ? middle : -1

}




let answer = binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 50);

console.log("The index is ", answer);