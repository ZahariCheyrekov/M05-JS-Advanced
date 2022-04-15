function solve(input) {
    const catalogue = {};

    for (const line of input) {
        const [product, price] = line.split(' : ');
        catalogue[product] = Number(price);
    }

    let currentCatalogue = '';
    Object.keys(catalogue)
        .sort((a, b) => a.localeCompare(b))
        .forEach(x => {

            if (currentCatalogue !== x[0]) {
                currentCatalogue = x[0];
                console.log(currentCatalogue);
            }

            console.log(`  ${x}: ${catalogue[x]}`);
        });
}

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);

solve(['Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']);