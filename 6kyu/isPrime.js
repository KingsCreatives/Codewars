const isPrime = n => {
    if (/prime/i.test(n)) return true;
    for (let e of (n.match(/\d+/g) || [])) {
      e = +e;
      let x = false;
      for (let i = 2; i < e; i++) {
        x = e % i;
        if (!x) break;
      }  
      if (x) return true;
    };
    return false;
  }