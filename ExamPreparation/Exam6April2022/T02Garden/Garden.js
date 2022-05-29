class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw new Error('Not enough space in the garden.');
        } else {
            this.plants.push({ plantName, spaceRequired, ripe: false, quantity: 0 });
            this.spaceAvailable -= spaceRequired;
            return `The ${plantName} has been successfully planted in the garden.`;
        }
    }

    ripenPlant(plantName, quantity) {
        const plant = this.findPlantByName(plantName);

        if (!plant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (plant.ripe) {
            throw new Error(`The ${plantName} is already ripe.`);
        }

        if (quantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.');
        }

        plant.ripe = true;
        plant.quantity += quantity;

        const message = quantity == 1
            ? `${quantity} ${plantName} has successfully ripened.`
            : `${quantity} ${plantName}s have successfully ripened.`;

        return message;
    }

    harvestPlant(plantName) {
        const plant = this.findPlantByName(plantName);

        if (!plant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (!plant.ripe) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }

        let plantIndex = this.plants.indexOf(plant);
        this.storage.push(`${plant.plantName} (${plant.quantity})`);
        this.plants.splice(plantIndex, 1);
        this.spaceAvailable += plant.spaceRequired;
        return `The ${plantName} has been successfully harvested.`;
    }

    generateReport() {
        let report = [];
        report.push(`The garden has ${this.spaceAvailable} free space left.`);

        const sortedPlants = this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName));
        let sorted = [];
        sortedPlants.forEach(p => sorted.push(p.plantName));

        report.push(`Plants in the garden: ${sorted.join(', ')}`);
        if (this.storage.length == 0) {
            report.push('Plants in storage: The storage is empty.');
        } else {
            report.push(`Plants in storage: ${this.storage.join(', ')}`);
        }

        return report.join('\n');
    }

    findPlantByName(name) {
        return this.plants.find(p => p.plantName == name);
    }
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());