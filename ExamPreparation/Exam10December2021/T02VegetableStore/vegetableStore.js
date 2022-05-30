class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        let result = [];

        for (const element of vegetables) {
            let [type, quantity, price] = element.split(' ');
            quantity = Number(quantity);
            price = Number(price);

            const existingVegetable = this.findVegetableByType(type);

            if (existingVegetable) {
                existingVegetable.price += price;

                if (existingVegetable.quantity < quantity) {
                    existingVegetable.quantity = quantity;
                }
            } else {
                const vegetable = {
                    type,
                    quantity,
                    price
                };

                this.availableProducts.push(vegetable);
                result.push(type);
            }
        }

        return `Successfully added ${result.join(', ')}`;
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0.00;

        for (const element of selectedProducts) {
            let [type, quantity] = element.split(' ');

            const existingVegetable = this.findVegetableByType(type);

            if (!existingVegetable) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);

            } else if (quantity > existingVegetable.quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);

            } else {
                const price = quantity * existingVegetable.price;
                existingVegetable.quantity -= quantity;
                totalPrice += price;
            }
        }

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }

    rottingVegetable(type, quantity) {

    }

    findVegetableByType(type) {
        return this.availableProducts.find(v => v.type == type);
    }
}