function aggregate(array) {
    const numbersArray = array.map(Number);
    const sum = numbersArray.reduce((a, b) => a + b);
 
    let inverseValuesSum = 0;
 
    for (let i = 0; i < numbersArray.length; i++) {
        inverseValuesSum += 1 / numbersArray[i];
    }
 
    const stringConcat = numbersArray.join('');
 
    console.log(sum);
    console.log(inverseValuesSum);
    console.log(stringConcat);
}

aggregate([1, 2, 3]);
aggregate([2, 4, 8, 16]);