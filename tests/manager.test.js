const manager = require("../lib/manager");

describe("manager", () => {
    describe("Initialization", () => {
        it(`should return an object with "name", "ID", and "Email" property when called with the 'new' keyword`, () => {
            const obj = new Manager();
  
        expect("name" in obj).toEqual(true);
        expect("id" in obj).toEqual(true);
        expect("email" in obj).toEqual(true);
        expect("officeNumber" in obj).toEqual(true);
      });
    })
  });