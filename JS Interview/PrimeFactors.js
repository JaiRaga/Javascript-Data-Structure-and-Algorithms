const factors = (num) => {
    let div = 2,
        f = [];

    while (num > div) {
        if (num % div === 0) f.push(div);
        div++;
    }

    console.log(f);
}

factors(25);
factors(169);
factors(69);