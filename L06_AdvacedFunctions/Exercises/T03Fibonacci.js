function getFibonator() {
    let first = 0;
    let second = 0;

    return () => {
        const result = first + second || 1;
        first = second;
        second = result;

        return result;
    }
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13