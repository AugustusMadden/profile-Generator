EmployeeTask = require('./Employee')

class InternTask extends EmployeeTask {
    constructor() {
        super();
        this.schoolName = "schoolName";
    }
    getSchoolName() {
        const schoolNameQuestion = 
            {
                type: 'input',
                name: 'school',
                message: `What is the name of the intern's school?`,
            }
        
        return schoolNameQuestion
    
    }

    getRole() {
        return "Intern"
    }
}
//GET school

module.exports = InternTask