function palindrome(str) {
    // Good luck!
    str = str.toLowerCase();
    let ch = /[a-z0-9]/g;
    let s = str.match(ch);
    // console.log(s);
    let reversedStr = s.reduce((rev, char) => char + rev, "");
    s = s.join('');
    console.log(reversedStr, s);
    return reversedStr === s;
  }
  
  
  
  palindrome("eye");
  palindrome("_eye");
  palindrome("not a palindrome");
  palindrome("0_0 (: /-\ :) 0-0");
  palindrome("five|\_/|four");