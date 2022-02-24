function solve(arr) {
    let firstSum = 0;
    let secondSum = 0;

    for (let row = 0; row < arr.length; row++) {
        firstSum += arr[row][row];
        secondSum += arr[row][arr.length - row - 1];
    }

    console.log(`${firstSum} ${secondSum}`);
}

solve([[20, 40], [10, 60]]);
solve([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);