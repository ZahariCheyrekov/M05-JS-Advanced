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
        it('should throw error for invalid hours of type string', () => {
            expect(() => companyAdministration.calculateSalary('salary')).to.throw('Invalid hours');
        });

        it('should throw error for invalid hours of type null', () => {
            expect(() => companyAdministration.calculateSalary(null)).to.throw('Invalid hours');
        });

        it('should throw error for invalid hours less than zero', () => {
            expect(() => companyAdministration.calculateSalary(-3)).to.throw('Invalid hours');
        });

        it('should throw error for invalid hours undefined', () => {
            expect(() => companyAdministration.calculateSalary(undefined)).to.throw('Invalid hours');
        });

        it('should return the totalAmount for zero hours', () => {
            expect(companyAdministration.calculateSalary(0)).to.equal(0);
        });

        it('should return the totalAmount for 160 hours', () => {
            expect(companyAdministration.calculateSalary(160)).to.equal(2400);
        });

        it('should return the totalAmount for 161 hours', () => {
            expect(companyAdministration.calculateSalary(161)).to.equal(3415);
        });
    });

    describe('Tests should check firedEmployee function', () => {
        it('should throw error for invalid index value', () => {
            expect(() => companyAdministration.firedEmployee(['Sam', 'Mark', 'Emma'], 'really'))
                .to.throw('Invalid input');
        });

        it('should throw error for array value not array', () => {
            expect(() => companyAdministration.firedEmployee(10, 10)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee()).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(NaN, 'str')).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(NaN)).to.throw('Invalid input');
        });

        it('should throw error for index not integer value', () => {
            expect(() => companyAdministration.firedEmployee(['Sam', 'Mark', 'Emma'], 5.42324))
                .to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['Sam', 'Mark', 'Emma'], 0.42324))
                .to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['Sam', 'Mark', 'Emma'], -5.42324))
                .to.throw('Invalid input');
        });

        it('should throw error for invalid index value less than zero', () => {
            expect(() => companyAdministration.firedEmployee(['Sam', 'Mark', 'Emma'], -10))
                .to.throw('Invalid input');
        });

        it('should throw error for invalid index value equal to array length', () => {
            expect(() => companyAdministration.firedEmployee(['Sam', 'Mark', 'Emma'], 3))
                .to.throw('Invalid input');
        });

        it('should throw error for invalid index value bigger than array length', () => {
            expect(() => companyAdministration.firedEmployee(['Sam', 'Mark', 'Emma'], 9))
                .to.throw('Invalid input');
        });

        it('should remove employee at the given index 0', () => {
            expect(companyAdministration.firedEmployee(['Sam', 'Mark', 'Emma'], 0))
                .to.equal('Mark, Emma');
        });

        it('should remove employee at the given index 1', () => {
            expect(companyAdministration.firedEmployee(['Sam', 'Mark', 'Emma'], 1))
                .to.deep.equal('Sam, Emma');
        });

        it('should remove employee at the given index 2', () => {
            expect(companyAdministration.firedEmployee(['Sam', 'Mark', 'Emma'], 2))
                .to.equal('Sam, Mark');
        });
    });
});