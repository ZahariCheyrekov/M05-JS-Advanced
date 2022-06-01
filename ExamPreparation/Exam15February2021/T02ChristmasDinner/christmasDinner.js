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
}