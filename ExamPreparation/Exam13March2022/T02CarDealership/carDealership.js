class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (model == '' || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error('Invalid input!');
        }

        const car = {
            model,
            horsepower,
            price,
            mileage
        };

        this.availableCars.push(car);
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    
    sellCar(model, desiredMileage) {
        const availableCar = this.availableCars.find(c => c.model == model);

        if (!availableCar) {
            throw new Error(`${model} was not found!`);
        }

        const mileageDiff = availableCar.mileage - desiredMileage;

        if (availableCar.mileage <= desiredMileage) {
            availableCar.price = availableCar.price;
        } else if (mileageDiff <= 40000) {
            availableCar.price *= 0.95;
        } else if (mileageDiff > 40000) {
            availableCar.price *= 0.90;
        }

        const carIndex = this.availableCars.indexOf(availableCar);
        this.availableCars.splice(carIndex, 1);

        this.soldCars.push({
            model: availableCar.model,
            horsepower: availableCar.horsepower,
            soldPrice: availableCar.price
        });

        this.totalIncome += availableCar.price;
        return `${model} was sold for ${availableCar.price.toFixed(2)}$`;
    }

    
}

let dealership = new CarDealership('SoftAuto');

console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
console.log(dealership.addCar('Audi A3', 120, 4900, 240000));
console.log(dealership.sellCar('Toyota Corolla', 230000));
console.log(dealership.sellCar('Mercedes C63', 110000));