function rot13(str) { // LBH QVQ VG!
  
    let alpha  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        value  = 0,
        newStr = '';
  
    for (let i in str) {
        if (alpha.indexOf(str[i]) === -1) newStr += str[i];
        for (let j in alpha) {
            if (alpha[j] === str[i]) {
                value = j - 13;
                if (value < 0) {
                    value = value + 26;
                }
                newStr += alpha[value];
            }
        }
    }
  
    console.log(str,"->", newStr);
    return newStr;
  }
  
  // Change the inputs below to test
  rot13("SERR PBQR PNZC");