class ChristmasDinner {
    constructor(budget) {
        this._budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    set _budget(budget) {
        if (budget < 0) {
            throw new Error('The budget cannot be a negative number');
        }

        this._budget = budget;
    }

    shopping([name, price]) {
        if (price > this._budget) {
            throw new Error('Not enough money to buy this product');
        }

        this.products.push(name);
        this._budget -= price;

        return `You have successfully bought ${name}!`;
    }

    recipes({ recipeName, productsList }) {
        if (!productsList.every(product => this.products.includes(product))) {
            throw new Error('We do not have this product');
        }

        this.dishes.push({ recipeName, productsList });

        return `${recipeName} has been successfully cooked!`;
    }
}