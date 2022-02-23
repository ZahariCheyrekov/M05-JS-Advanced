function sumNumbers(n, m) {
    const first = Number(n);
    const second = Number(m);

    let result = 0;

    for (let index = first; index <= second; index++) {
        result += index;
    }

    console.log(result);
}

sumNumbers('1', '5');
sumNumbers('-8', '20');