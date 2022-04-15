function solve(input) {
    const products = {};

    for (const line of input) {
        const [town, product, price] = line.split(' | ');

        if (!products.hasOwnProperty(product)) {
            products[product] = {};
        }

        if (!products[product].hasOwnProperty(town)) {
            products[product][town] = Number.MAX_SAFE_INTEGER;
        } else {
            products[product][town] = Number(price);
        }

        const oldPrice = Object.values(products[product])[0];

        if (oldPrice >= Number(price)) {
            products[product][town] = Number(price);
        }
    }

    Object.keys(products).forEach(el => {
        const sorted = Object.entries(products[el]).sort((a, b) => a[1] - b[1]);
        const city = sorted[0][0];
        const price = sorted[0][1];
        console.log(`${el} -> ${price} (${city})`);
    });
}

solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);