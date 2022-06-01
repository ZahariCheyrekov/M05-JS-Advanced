class Bank {
    constructor(bankName) {
        this.bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        if (this.findCustomerById(customer.persnoalId)) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        }
        this.allCustomers.push(customer);
        return customer;
    }

    depositMoney(personalId, amount) {
        const customer = this.findCustomerById(personalId);

        if (!customer) {
            throw new Error('We have no customer with this ID!')
        }

        if (!customer.hasOwnProperty('totalMoney')) {
            customer.totalMoney = 0;
        }

        if (!customer.hasOwnProperty('transactions')) {
            customer.transactions = [];
        }

        customer.transactions.push(`${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`);
        customer.totalMoney += amount;
        
        return `${customer.totalMoney}$`;
    }

    findCustomerById(id) {
        return this.allCustomers.find(c => c.personalId == id);
    }
}

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({ firstName: 'Gii', lastName: 'Goo', personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: 'Bii', lastName: 'Boo', personalId: 4151596 }));

// bank.depositMoney(6233267, 250);
// console.log(bank.depositMoney(6233267, 250));
// bank.depositMoney(4151596, 555);

// console.log(bank.withdrawMoney(6233267, 125));

// console.log(bank.customerInfo(6233267));

