EmployeeTask = require('./Employee')

class ManagerTask extends EmployeeTask {
    constructor() {
        super();
        this.office = "office";
    }
    getOffice() {
        const managerQuestion = 
            {
                type: 'input',
                name: 'office',
                message: `What is the office number of the employer?`,
            }
        
        return managerQuestion
    
    }

    getRole() {
        return "Manager"
    }
}
//GET office number

module.exports = ManagerTask