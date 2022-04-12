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

    }
    getId() {
        const idQuestion = 
            {
                type: 'input',
                name: 'id',
                message: `What is the user's id?`,
            }
        
        return idQuestion

    }
    getEmail() {
        const emailQuestion = 
            {
                type: 'input',
                name: 'email',
                message: `What is the user's email?`,
            }
        
        return emailQuestion

    }
    getRole() {
        return "Manager"
    }
    }

//GET name, ID, email

module.exports = EmployeeTask

