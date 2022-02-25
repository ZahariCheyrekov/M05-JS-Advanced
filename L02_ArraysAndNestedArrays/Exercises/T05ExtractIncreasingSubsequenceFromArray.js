function solve(array) {
    let max = Number.MIN_SAFE_INTEGER;
    let result = [];
    array.filter(filterMaxNum);

    function filterMaxNum(num) {
        if (num >= max) {
            max = num;

            result.push(num);
            return true;
        }
        return false;
    }

    return result;
}

console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(solve([1, 2, 3, 4]));
console.log(solve([20, 3, 2, 15, 6, 1]));