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

      
    });

    describe('Tests should check partsToBuy task function', () => {

    });
});