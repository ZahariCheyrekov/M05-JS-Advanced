function solve(num) {
    const number = num.toString();

    let allAreSame = true;
    let numLength = number.length;

    let numbersSum = 0;
    let firstNum = Number(number[0]);

    for (i = 1; i < numLength; i++) {
        let currentNumber = Number(number[i]);
        numbersSum += currentNumber;

        if (currentNumber !== firstNum) {
            allAreSame = false;
        } else {
            allAreSame = true;
        }
    }

    numbersSum += firstNum;
    
    console.log(allAreSame);
    console.log(numbersSum);
}

solve(2222222);
solve(1234);