function closure() {

    const ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }

    const recipes = {
        apple: parseRecipeData(0, 1, 0, 2),
        lemonade: parseRecipeData(0, 10, 0, 20),
        burger: parseRecipeData(0, 5, 7, 3),
        eggs: parseRecipeData(5, 0, 1, 1),
        turkey: parseRecipeData(10, 10, 10, 10),
    }

    function parseRecipeData(protein, carbohydrate, fat, flavour) {
        return {
            protein,
            carbohydrate,
            fat,
            flavour,
        }
    }

    function restock(ingr, x) {
        ingredients[ingr] += x
        return "Success";
    }

    function prepare(required, quantity) {
        const parsedData = Object.entries(required).map(x => [
            x[0],
            x[1] * quantity,
        ])

        for (let i = 0; i < parsedData.length; i++) {
            const [name, amount] = parsedData[i]
            if (ingredients[name] - amount < 0) {
                return `Error: not enough ${name} in stock`;
            }
        }

        parsedData.forEach(([name, amount]) => (ingredients[name] -= amount))
        return "Success";
    }

    const report = () =>
        Object.entries(ingredients)
            .map(([key, value]) => `${key}=${value}`)
            .join(" ");

    const actions = {
        prepare: (r, q) => prepare(recipes[r], q),
        restock,
        report,
    }

    return s => {
        const [command, a, b] = s
            .split(" ")
            .map(x => (isNaN(x) ? x : Number(x)));

        return actions[command](a, b);
    }
}

let manager = solution();
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock 