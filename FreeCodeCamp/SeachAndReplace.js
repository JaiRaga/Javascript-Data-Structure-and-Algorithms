function myReplace(str, before, after) {
    let arr = str.split(' ')
    let b = before.split('')
    let a = after.split('')
    
    if (b[0] === b[0].toUpperCase()) {
      a[0] = a[0].toUpperCase()
    }
  
    before = b.join('')
    after = a.join('')
  
    for (let i of arr) {
      if (i === before) {
        let ind = arr.indexOf(i)
        arr[ind] = after
      }
    }
    // console.log(arr)
    str = arr.join(' ')
    console.log(str)
    return str;
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
  myReplace("This has a spellngi error", "spellngi", "spelling")
  myReplace("His name is Tom", "Tom", "john")