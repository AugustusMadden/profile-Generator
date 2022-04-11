EmployeeTask = require('./Employee')

class InternTask extends EmployeeTask {
    constructor() {
        super();
        this.schoolName = "schoolName";
    }
    getSchool() {
        const schoolQuestion = 
            {
                type: 'input',
                name: 'school',
                message: `What is the name of the intern's school?`,
            }
        
        return schoolQuestion
    
    }

    getRole() {
        return "Intern"
    }
}
//GET school

module.exports = InternTask