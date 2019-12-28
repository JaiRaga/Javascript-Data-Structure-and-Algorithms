function harmlessRansomeNote(noteText, magazineText) {
  magazineText = magazineText.toLowerCase().split(" ");
  noteText = noteText.toLowerCase().split(" ");

  for (let i of noteText) {
    let ind = magazineText.indexOf(i);
    if (ind === -1) return false;
    else {
      magazineText.splice(ind, 1);
    }
  }
  return true;
}

console.log(
  harmlessRansomeNote("Some string here", "yup some text here as well")
);

console.log(
  harmlessRansomeNote("Some string here", "yup some text string here as well")
);

console.log(
  harmlessRansomeNote(
    "This note contains secret code for just you !",
    "Adding Element note at this end contains an Array. As array secret in JavaScript code are mutable object, we can easily add or remove elements from the Array. And it dynamically changes as you modify the elements for just the array. Required. An integer that specifies at what position to add/remove items, Use negative values to specify the position from the end of the array !"
  )
);
