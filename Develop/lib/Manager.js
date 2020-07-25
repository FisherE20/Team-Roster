// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
let Employee = require ("./Employee");


class Manager extends Employee{
    constructor(officeNumber, name, id, email){
        super(name, id, email);
        this.officeNumber = officeNumber;
        
    }
   
};

get officeNumber(){
    return("this.office.Number");
};

getRole(){
    return("Manager");
};

module.exports = Manager;