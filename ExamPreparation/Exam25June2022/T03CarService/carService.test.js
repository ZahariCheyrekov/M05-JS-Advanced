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

    });

    describe('Tests should check discount task function', () => {

    });

    describe('Tests should check partsToBuy task function', () => {

    });
});