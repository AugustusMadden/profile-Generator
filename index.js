const fs = require("fs");
const inquirer = require("inquirer");
const {
    inherits
} = require("util");

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const htmlTemplate = require('./src/htmlTemplate');

const teamList = []


function getManager(position) {
    position = "Manager"
    const manager = new Manager();

    inquireArray = [];
    inquireArray.push(manager.getName(), manager.getId(), manager.getEmail(), manager.getOffice())

    inquirer
        .prompt(inquireArray)
        .then((data) => {
            manager.name = data.userName;
            manager.id = data.id;
            manager.email = data.email;
            manager.office = data.office;
            teamList.push(manager);
            getMember();
        })
}

function getAdditional(position) {

    if (position === "Engineer") {
        position = "Engineer"
        const engineer = new Engineer();

        inquireArray = [];
        inquireArray.push(engineer.getName(), engineer.getId(), engineer.getEmail(), engineer.getGitHub())
        inquirer
            .prompt(inquireArray)
            .then((data) => {
                engineer.name = data.userName;
                engineer.id = data.id;
                engineer.email = data.email;
                engineer.git = data.git;
                teamList.push(engineer);
                getMember();
            })
    } else if (position === "Intern") {
        position = "Intern"
        const intern = new Intern();

        inquireArray = [];
        inquireArray.push(intern.getName(), intern.getId(), intern.getEmail(), intern.getSchool())
        inquirer
            .prompt(inquireArray)
            .then((data) => {
                intern.name = data.userName;
                intern.id = data.id;
                intern.email = data.email;
                intern.school = data.school;
                teamList.push(intern);
                getMember();
            })
    } else if (position === "No further team members to add.") {
        writeToFile(htmlTemplate(teamList));
        return
    }
}

function getMember() {
    const memberQuestion = [{
        type: 'list',
        message: 'Which additional team member do you wish to add?',
        name: 'position',
        choices: ['Engineer', 'Intern', "No further team members to add."]
    }]
    inquirer
        .prompt(memberQuestion)
        .then((data) => {
            getAdditional(data.position)
            console.log(data.position);
        })
}

function writeToFile(data) {
    fs.writeFile("./dist/index.html", data, (err) => err ? console.log(err) : console.log('Success!'));
}

getManager();
//Create function that contains if statements cycling thru above four categories, followed by inquire prompt/resolve. Send result to array
//getTeamMember function
//writeTo using fs (send to the dist folder)
//init

/* GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated */