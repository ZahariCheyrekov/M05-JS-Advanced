function solve(arr) {
    let result = [];

    arr.map(num =>
       
            Number(num) < 0 ?
            result.unshift(Number(num)) :
            result.push(Number(num))
    );

    return result.join('\n');
}
 
console.log(solve([7, -2, 8, 9]));
console.log(solve([3, -2, 0, -1]));
