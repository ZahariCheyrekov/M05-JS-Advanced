class ChristmasDinner {
    constructor(budget) {
        this._budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    set _budget(num) {
        if (num < 0) {
            throw new Error('The budget cannot be a negative number');
        }
        this.budget = num;
    }

    shopping([name, price]) {
        if (price > this.budget) {
            throw new Error('Not enough money to buy this product');
        }

        this.products.push(name);
        this.budget -= price;
        return `You have successfully bought ${name}!`;
    }

}
