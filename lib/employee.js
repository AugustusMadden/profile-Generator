const inquirer = require("inquirer");

class EmployeeTask {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        const nameQuestion = 
            {
                type: 'input',
                name: 'userName',
                message: `What is the user's name?`,
            }
        
        return nameQuestion
        // inquirer
        //     .prompt(nameQuestion)
        //     .then((data) => {
        //         this.name = userName;
        //     })
        //     return Promise.resolve(this)
    };        
    }

//GET name, ID, email, github username

module.exports = EmployeeTask

