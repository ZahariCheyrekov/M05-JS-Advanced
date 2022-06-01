const { assert, expect } = require('chai');
const companyAdministration = require('./companyAdministration');

describe('CompanyAdministration Tests', () => {
    describe('Tests dhould check hiringEmployee function', () => {
        // hiringEmployee(name, position, yearsExperience) {
        //     if (position == "Programmer") {
        //         if (yearsExperience >= 3) {
        //             return `${name} was successfully hired for the position ${position}.`;
        //         } else {
        //             return `${name} is not approved for this position.`;
        //         }
        //     }
        //     throw new Error(`We are not looking for workers for this position.`);
        // },
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
    });
});