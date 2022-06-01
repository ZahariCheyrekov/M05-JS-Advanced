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

  

    findCustomerById(id) {
        return this.allCustomers.find(c => c.personalId == id);
    }
}
