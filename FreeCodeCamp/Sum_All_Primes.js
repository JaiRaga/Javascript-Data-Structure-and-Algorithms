function sumPrimes(num) {
    let primes = [2,3,5,7], count = 0, sum = 0
    for (let i = 8; i <= num; i++) {
      for (let j of primes) {
        if (i % j !== 0) {
          count++
        }
      }
      if (count === primes.length) primes.push(i)
      count = 0
    }
  
    for (let i of primes) {
      sum += i
    }
    // console.log(num, primes)
    console.log(sum)
    return sum;
  }
  
  sumPrimes(10);
  sumPrimes(977);