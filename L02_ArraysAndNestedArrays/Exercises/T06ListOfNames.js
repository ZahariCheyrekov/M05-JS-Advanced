function solve(arr) {
    arr.sort((a, b) => a.localeCompare(b));

    let number = 1;

    arr.forEach(element => {
        console.log(`${number++}.${element}`);
    });
}

solve(["John", "Bob", "Christina", "Ema"]);