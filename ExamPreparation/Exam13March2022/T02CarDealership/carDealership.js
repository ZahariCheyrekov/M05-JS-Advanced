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

    currentCar() {
        if (!this.availableCars.length) {
            return 'There are no available cars';
        } else {
            let result = [];

            result.push('-Available cars:');
            this.availableCars.forEach(car =>
                result.push(`---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`));

            return result.join('\n');
        }
    }

    salesReport(criteria) {
        let sortedCars = null;

        if (criteria == 'horsepower') {
            sortedCars = this.soldCars.sort((c1, c2) => c2.horsepower - c1.horsepower);
        } else if (criteria == 'model') {
            sortedCars = this.soldCars.sort((c1, c2) => c1.model.localeCompare(c2.model));
        } else {
            throw new Error('Invalid criteria!');
        }

        let report = [];

        report.push(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`);
        report.push(`-${this.soldCars.length} cars sold:`);

        this.soldCars.forEach(car => report.push(`---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$`));

        return report.join('\n');
    }
}

let dealership = new CarDealership('SoftAuto');

console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
console.log(dealership.addCar('Audi A3', 120, 4900, 240000));
console.log(dealership.sellCar('Toyota Corolla', 230000));
console.log(dealership.sellCar('Mercedes C63', 110000));