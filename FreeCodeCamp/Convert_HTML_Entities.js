function convertHTML(str) {
    // &colon;&rpar;
    let s          = ''
    str.split('').forEach(l => {
      switch (l) {
        case '&':
          s += '&amp;';
          break
        case '<':
          s += '&lt;'
          break
        case '>':
          s += '&gt;'
          break
        case '"':
          s += '&quot;'
          break
        case "'":
          s += '&apos;'
          break
        case l:
          s += l
          break
      }
    })
    console.log(s)
    return s;
  }
  
  convertHTML("Dolce & Gabbana");
  convertHTML("Hamburgers < Pizza < Tacos");
  convertHTML("Sixty > twelve");
  convertHTML('Stuff in "quotation marks"');
  convertHTML("Schindler's List");
  convertHTML("<>");
  convertHTML("abc");