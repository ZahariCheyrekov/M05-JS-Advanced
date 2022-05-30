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

            const existingVegetable = this.availableProducts.find(p => p.type == type);

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

        return `Successfully added ${result.join(', ')}`
    }
}