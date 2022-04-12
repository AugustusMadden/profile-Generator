const EmployeeTask = require("../lib/employee");

describe("employee", () => {
    describe("Initialization", () => {
      it(`should return an object with "name", "ID", and "Email" properties when called with the 'new' keyword`, () => {
        const obj = new EmployeeTask();
  
        expect("name" in obj).toEqual(true);
        expect("id" in obj).toEqual(true);
        expect("email" in obj).toEqual(true);
      });
    })
  });