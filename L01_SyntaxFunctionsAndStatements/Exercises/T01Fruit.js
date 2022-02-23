function solve(fruit, weight, price) {
    const kilograms = weight / 1000;
    const moneyNeeded = kilograms * price;

    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80);
solve('apple', 1563, 2.35);