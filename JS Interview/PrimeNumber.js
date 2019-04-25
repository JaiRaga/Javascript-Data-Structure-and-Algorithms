const prime = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            console.log(num, false);
            return false;
        }
    }
    console.log(num, true);
    return true;
}

prime(137);
prime(99);