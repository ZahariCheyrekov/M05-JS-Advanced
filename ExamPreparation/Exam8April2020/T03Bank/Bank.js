class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        if (this.allCustomers.find(c => c.personalId === customer.personalId)) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        }
        this.allCustomers.push(customer);
        return customer;
    }

    depositMoney(personalId, amount) {
        const customer = this.findCustomerById(personalId);

        if (!customer) {
            throw new Error('We have no customer with this ID!');
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

    withdrawMoney(personalId, amount) {
        const customer = this.findCustomerById(personalId);

        if (customer.totalMoney < amount) {
            throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`);
        }

        customer.transactions.push(`${customer.firstName} ${customer.lastName} withdrew ${amount}$!`);
        customer.totalMoney -= amount;
        return `${customer.totalMoney}$`;
    }

    customerInfo(personalId) {
        const customer = this.findCustomerById(personalId);

        let info = [];
        info.push(`Bank name: ${this._bankName}`);
        info.push(`Customer name: ${customer.firstName} ${customer.lastName}`);
        info.push(`Customer ID: ${customer.personalId}`);
        info.push(`Total Money: ${customer.totalMoney}$`);
        info.push('Transactions:');

        for (let i = customer.transactions.length - 1; i >= 0; i--) {
            info.push(`${i + 1}. ${customer.transactions[i]}`);
        }

        return info.join('\n');
    }

    findCustomerById(id) {
        const customer = this.allCustomers.find(c => c.personalId === id);

        if (!customer) {
            throw new Error('We have no customer with this ID!');
        }

        return customer;
    }
}

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({ firstName: 'Gii', lastName: 'Goo', personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: 'Bii', lastName: 'Boo', personalId: 4151596 }));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));