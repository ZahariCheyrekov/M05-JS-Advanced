function solve(first, second, third) {
    const sumLength = first.length + second.length + third.length;
    const averageLength = Math.floor(sumLength / 3);

    console.log(sumLength);
    console.log(averageLength);
}

solve('chocolate', 'ice cream', 'cake');
solve('pasta', '5', '22.3');