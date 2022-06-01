const { assert, expect } = require('chai');
const companyAdministration = require('./companyAdministration');

describe('CompanyAdministration Tests', () => {
    describe('Tests dhould check hiringEmployee function', () => {
        it('should throw error for invalid position Dog', () => {
            expect(() => companyAdministration.hiringEmployee('Doggy', 'Dog', 10)).to.throw('We are not looking for workers for this position.');
        });

        it('should throw error for invalid position Cat', () => {
            expect(() => companyAdministration.hiringEmployee('Cats', 'Cat', 10)).to.throw('We are not looking for workers for this position.');
        });

        it('should return that employee is approved for the position with 3 years of experience', () => {
            expect(companyAdministration.hiringEmployee('Prog1234', 'Programmer', 3))
                .to.equal('Prog1234 was successfully hired for the position Programmer.');
        });

        it('should return that employee is approved for the position with 4 years of experience', () => {
            expect(companyAdministration.hiringEmployee('Prog1234', 'Programmer', 4))
                .to.equal('Prog1234 was successfully hired for the position Programmer.');
        });

        it('should return that employee was not approved for the position with 2 years of experience', () => {
            expect(companyAdministration.hiringEmployee('Prog1234', 'Programmer', 2))
                .to.equal('Prog1234 is not approved for this position.');
        });

        it('should return that employee was not approved for the position with 0 years of experience', () => {
            expect(companyAdministration.hiringEmployee('Prog1234', 'Programmer', 0))
                .to.equal('Prog1234 is not approved for this position.');
        });
    });

    describe('Tests should check calculateSalary function', () => {
        // calculateSalary(hours) {
        //     let payPerHour = 15;
        //     let totalAmount = payPerHour * hours;

        //     if (typeof hours !== "number" || hours < 0) {
        //         throw new Error("Invalid hours");
        //     } else if (hours > 160) {
        //         totalAmount += 1000;
        //     }
        //     return totalAmount;
        // },
        it('should throw error for invalid hours of type string', () => {
            expect(() => companyAdministration.calculateSalary('salary', 3)).to.throw('Invalid hours');
        });
    });
});