function solve(arr) {
    arr.sort((a, b) => a - b);

    let result = [];

    while (arr.length !== 0) {
        let smaller = arr.shift();
        let bigger = arr.pop();

        result.push(smaller);
        result.push(bigger);
    }
    result = result.filter(x => x !== undefined);

    return result;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));