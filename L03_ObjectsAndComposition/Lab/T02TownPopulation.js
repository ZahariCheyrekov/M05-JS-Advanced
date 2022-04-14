function solve(input) {
    const towns = {};

    for (const town of input) {
        let [name, population] = town.split(' <-> ');
        population = Number(population);

        if (towns[name] != undefined) {
            population += towns[name];
        }

        towns[name] = population;
    }

    for (const town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }
}

solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);

solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);