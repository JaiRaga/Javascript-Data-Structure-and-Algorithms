function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    let a = []
    arr.forEach(l => Boolean(l) ? a.push(l) : null)
    console.log(a)
    return a;
  }
  
bouncer([7, "ate", "", false, 9])
bouncer([false, null, 0, NaN, undefined, ""])