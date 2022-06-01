class Bank {
    constructor(bankName) {
        this.bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        if (this.allCustomers.find(c => c.persnoalId === customer.personalId)) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        }
        this.allCustomers.push(customer);
        return customer;
    }
}
