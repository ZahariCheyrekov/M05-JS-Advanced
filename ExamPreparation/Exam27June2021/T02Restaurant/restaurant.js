class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        for (const product of products) {
            let [productName, productQuantity, productTotalPrice] = product.split(' ');
            productQuantity = Number(productQuantity);
            productTotalPrice = Number(productTotalPrice);

            if (productTotalPrice <= this.budgetMoney) {
                if (this.stockProducts[productName]) {
                    this.stockProducts[productName.productQuantity] += productQuantity;
                } else {
                    const product = {
                        productName,
                        productQuantity
                    };

                    this.budgetMoney -= productTotalPrice;
                }

                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        }

        return this.history.join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        if (!this.menu[meal]) {
            this.menu[meal] = {
                products: {},
                price: Number(price)
            }

            for (const current of neededProducts) {
                let [productName, productQuantity] = current.split(' ');
                productQuantity = Number(productQuantity);

                this.menu[meal].products[productName] = productQuantity;

                const numberOfMeals = Object.keys(this.menu).length;
                return numberOfMeals == 1
                    ? `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
                    : `Great idea! Now with the ${meal} we have ${numberOfMeals} meals in the menu, other ideas?`;
            }
        } else {
            return `The ${meal} is already in the our menu, try something different.`;
        }
    }
}