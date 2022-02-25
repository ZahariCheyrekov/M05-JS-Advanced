function solve(arr, times) {

    for (let index = 0; index < times; index++) {
        let element = arr.pop();
        arr.unshift(element);
    }

    return arr.join(' ');
}

console.log(solve(['1', '2', '3', '4'], 2));
console.log(solve(['Banana', 'Orange', 'Coconut', 'Apple'], 15));