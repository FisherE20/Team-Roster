// TODO: Write code to define and export the Employee class
class Employee{
    constructor(name, id, email) {
        this.name= name,
        this.id = id,
        this.email = email
    }
}

//Create a new employee
let employee = new Employee({data.name}, {data.id}, {data.email});


module.exports = Employee;
