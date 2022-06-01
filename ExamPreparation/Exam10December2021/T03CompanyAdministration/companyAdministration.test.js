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
    });
});