function reverse(str) {
  let s = str.split(" "),
    word = "";
  words = [];
  for (let i of s) {
    i = i.split("");
    for (let j of i) {
      word = j + word;
    }
    words.push(word);
    word = "";
  }
  words = words.join(" ");
  return words;
}

console.log(reverse("Reverse this"));
console.log(reverse("This is a reversed string."));
