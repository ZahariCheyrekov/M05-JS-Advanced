function solve(a, b) {
    let firstNum = Number(a);
    let secondNum = Number(b);

    while (firstNum !== secondNum) {
        if (firstNum > secondNum) {
            firstNum -= secondNum;
        } else {
            secondNum -= firstNum;
        }
    }

    console.log(firstNum);
}

solve(15, 5);
solve(2154, 458);