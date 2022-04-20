function solve(arr, type) {
    switch (type) {
        case 'asc':
            return arr.sort((a, b) => a - b);
        case 'desc':
            return arr.sort((a, b) => b - a);
    }
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));
console.log(solve([14, 7, 17, 6, 8], 'desc'));