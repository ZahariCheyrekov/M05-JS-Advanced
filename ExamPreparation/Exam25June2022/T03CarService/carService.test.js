const { expect } = require('chai');
const carService = require('./carService.js');

describe('CarService Tests', () => {
    describe('Tests should check carService task function', () => {
        it('should return that the issue of the car will cost more money by value Engine', () => {
            expect(carService.isItExpensive('Engine'))
                .to
                .equal('The issue with the car is more severe and it will cost more money');
        });

        it('should return that the issue of the car will cost more money by value Transmission', () => {
            expect(carService.isItExpensive('Transmission'))
                .to
                .equal('The issue with the car is more severe and it will cost more money');
        });

        it('should return taht the overall price should be a bit cheaper', () => {
            expect(carService.isItExpensive('Something'))
                .to
                .equal('The overall price will be a bit cheaper');
        });
    });

    describe('Tests should check discount task function', () => {
        it('should throw error for invalid first param with value array', () => {
            expect(() => carService.discount([], 10)).to.throw('Invalid input');
        });

        it('should throw error for invalid second param with value array', () => {
            expect(() => carService.discount(10, [])).to.throw('Invalid input');
        });

        it('should throw error for invalid params with value array', () => {
            expect(() => carService.discount([], [])).to.throw('Invalid input');
        });

        it('should return that discount can\'t be applied for numberOfParts equal to 2', () => {
            expect(carService.discount(2, 10)).to.equal('You cannot apply a discount');
        });

        it('should return that discount can\'t be applied for numberOfParts equal to 1', () => {
            expect(carService.discount(1, 10)).to.equal('You cannot apply a discount');
        });

        it('should return that discount can\'t be applied for numberOfParts equal to 0', () => {
            expect(carService.discount(0, 10)).to.equal('You cannot apply a discount');
        });

        it('should return that the discount was applied successfully for numberOfParts 3 and totalPrice 100', () => {
            const savedMoney = (15 / 100) * 100;
            expect(carService.discount(3, 100)).to.equal(`Discount applied! You saved ${savedMoney}$`);
        });

        it('should return that the discount was applied successfully for numberOfParts 4 and totalPrice 100', () => {
            const savedMoney = (15 / 100) * 100;
            expect(carService.discount(4, 100)).to.equal(`Discount applied! You saved ${savedMoney}$`);
        });

        it('should return that the discount was applied successfully for numberOfParts 6 and totalPrice 100', () => {
            const savedMoney = (15 / 100) * 100;
            expect(carService.discount(6, 100)).to.equal(`Discount applied! You saved ${savedMoney}$`);
        });

        it('should return that the discount was applied successfully for numberOfParts 7 and totalPrice 100', () => {
            const savedMoney = (15 / 100) * 100;
            expect(carService.discount(7, 100)).to.equal(`Discount applied! You saved ${savedMoney}$`);
        });

        it('should return that the discount was applied successfully for numberOfParts 8 and totalPrice 100', () => {
            const savedMoney = (30 / 100) * 100;
            expect(carService.discount(8, 100)).to.equal(`Discount applied! You saved ${savedMoney}$`);
        });

        it('should return that the discount was applied successfully for numberOfParts 9 and totalPrice 100', () => {
            const savedMoney = (30 / 100) * 100;
            expect(carService.discount(8, 100)).to.equal(`Discount applied! You saved ${savedMoney}$`);
        });
    });

    describe('Tests should check partsToBuy task function', () => {
        it('should throw error for invalid type of first param with value number', () => {
            expect(() => carService.partsToBuy(-10, ['a', 'b', 'c'])).to.throw('Invalid input');
        });

        it('should throw error for invalid type of second param with value number', () => {
            expect(() => carService.partsToBuy(['a', 'b', 'c'], -10)).to.throw('Invalid input');
        });

        it('should throw error for invalid type input params with value number', () => {
            expect(() => carService.partsToBuy(-10, -10)).to.throw('Invalid input');
        });

        it('should return that the total sum of the partsToBuy is equal to 0', () => {
            expect(carService
                .partsToBuy([{ part: 'smth new chanxe', price: 99987 }], ['smth that is not here'])).to.equal(0);
        });

        it('should return that the total sum of the partsToBuy with input values of empty arrays is equal to 0', () => {
            expect(carService
                .partsToBuy([], [])).to.equal(0);
        });

        it('should return that the total sum of the partsToBuy is equal to 99987', () => {
            expect(carService
                .partsToBuy([{ part: 'smth new chanxe', price: 99987 }], ['smth new chanxe'])).to.equal(99987);
        });

        it('should return that the total sum of the partsToBuy is equal to 99999', () => {
            expect(carService
                .partsToBuy([{ part: 'smth new chanxe', price: 99987 }, { part: 'chanxeaffa', price: 12 }],
                    ['smth new chanxe', 'chanxeaffa'])).to.equal(99999);
        });
    });
});