function fearNotLetter(str) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    let index = alpha.indexOf(str[0])
    console.log(str, index)
    while (index < alpha.length) {
      if (str.indexOf(alpha[index]) === -1) return alpha[index]
      index++
    }
    return undefined;
  }
  
  fearNotLetter("abce");
  fearNotLetter("stvwx");
  fearNotLetter("abcdefghijklmnopqrstuvwxyz")
  