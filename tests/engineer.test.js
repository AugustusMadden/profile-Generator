const engineer = require("../lib/engineer");

describe("engineer", () => {
    describe("Initialization", () => {
        it(`should return an object with "name", "ID", and "Email" property when called with the 'new' keyword`, () => {
            const obj = new Engineer();
  
        expect("name" in obj).toEqual(true);
        expect("id" in obj).toEqual(true);
        expect("email" in obj).toEqual(true);
        expect("github" in obj).toEqual(true);
      });
    })
  });