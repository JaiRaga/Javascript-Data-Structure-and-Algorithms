function pairElement(str) {
    let a = str.split(''), arr = []
    for (let i of a) {
      switch (i) {
        case 'A':
          arr.push(["A","T"])
          break
        case 'T':
          arr.push(["T","A"])
          break
        case 'C':
          arr.push(["C","G"])
          break
        case 'G':
          arr.push(["G","C"])
          break
      }
    }
  
    console.log(a,str,arr)
    return arr;
  }
  
  pairElement("GCG");
  pairElement("TTGAG");
  pairElement("CTCTA");