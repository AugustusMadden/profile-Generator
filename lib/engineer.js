EmployeeTask = require('./Employee')

class EngineerTask extends EmployeeTask {
        constructor() {
        super();
        this.git = "git";
    }

    getGitHub() {
        const gitHubQuestion = 
            {
                type: 'input',
                name: 'git',
                message: `What is the name of the engineer's github account?`,
            }
        
        return gitHubQuestion
    
    }

    getRole() {
        return "Engineer"
    }
}
//GET github username
//extend from employee.js from Employee = require('./Employee')

module.exports = EngineerTask