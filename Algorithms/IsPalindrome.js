function palindrome(str) {
  let newStr = "",
    oldStr = "";

  str
    .toLowerCase()
    .split("")
    .forEach(s => {
      if (s === " ") oldStr += "";
      else oldStr += s;
    });
  oldStr = oldStr.toLowerCase().split("");
  for (let i of oldStr) {
    newStr = i + newStr;
  }
  oldStr = oldStr.join("");
  return oldStr === newStr;
}

console.log(palindrome("race Car"));
console.log(palindrome("madam im Adam"));
console.log(palindrome("gkngnn"));
