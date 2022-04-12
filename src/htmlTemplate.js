// Loop through Array
// Create Card for each teamMember
// Call getRole() for the teamMember to determine employee type
// if employee type is manager
// then generate manager card
// push manager card into array 



// if employee type is Intern
// then generate Intern card
// push Intern card into array 


// if employee type is Engineer
// then generate Engineer card
// push Engineer card into array 
// join Array of cards into our Html structure



function generateManagerCard (data) {
  return `<div class="card-header bg-secondary md-3">${data.name}</div>
                <div class="card-body">
                    <ul class="list-group ">
                        <li class="list-group-item">Position: Manager</li>
                        <li class="list-group-item">ID: ${data.id}</li>
                        <li class="list-group-item">Email: ${data.email}</li>
                        <li class="list-group-item">Office Number: ${data.office}</li>
                </div>`
  }
  function generateEngineerCard (data) {
    return `<div class="card-header bg-secondary md-3">${data.name}</div>
                <div class="card-body">
                    <ul class="list-group ">
                        <li class="list-group-item">Position: Engineer</li>
                        <li class="list-group-item">ID: ${data.id}</li>
                        <li class="list-group-item">Email: ${data.email}</li>
                        <li class="list-group-item">GitHub account: https://github.com/${data.git}</li>
                </div>`
    }
    function generateInternCard (data) {
        return `<div class="card-header bg-secondary md-3">${data.name}</div>
        <div class="card-body">
            <ul class="list-group ">
                <li class="list-group-item">Position: Intern</li>
                <li class="list-group-item">ID: ${data.id}</li>
                <li class="list-group-item">Email: ${data.email}</li>
                <li class="list-group-item">School: ${data.school}</li>
        </div>`
      
      }
  
  
  
  function generateHtml (teamList)  {
    const infoArray = []
    for (const teamMember of teamList) {

      const role = teamMember.getRole()
      
      if(role === "Manager") {
        infoArray.push(generateManagerCard(teamMember))
      }
      if(role === "Engineer") {
        infoArray.push(generateEngineerCard(teamMember))
      }
      if(role === "Intern") {
        infoArray.push(generateInternCard(teamMember))
      }
    }
     console.log(teamList);
  return`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <title>Example Template</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  
  </head>
  
  <body>
      <header class="jumbotron">
          <h1 class="display-3">Generated Team Profiles</h1>
      </header>
  
      <main class="container">
          <div class="row">
              <div class="col-12 col-md-4 col-lg-3 text-dark">
              ${infoArray.join("")}
                </div>
            </div>
      </main>
  
  
  </body>
 `
  
      
  } 
  
  module.exports = generateHtml;