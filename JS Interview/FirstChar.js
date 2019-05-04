let firstNonRepeatChar = (str) => {
    let s = '',
        arr = [],
        char = '',
        count = 0;

    s = str.slice(0,);
    arr = s.split('');
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                continue;
            } else {
                count += 1;
            }

            if (count === arr.length - 1 && j === arr.length - 1) {
                char = arr[i];
                console.log(char, j, i, count);
                break;
            }
        }
    }
    console.log(char);
}

firstNonRepeatChar("the quick brown fox jumps then quickly blow air");