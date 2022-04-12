const intern = require("../lib/intern");

describe("intern", () => {
    describe("Initialization", () => {
        it(`should return an object with "name", "ID", and "Email" property when called with the 'new' keyword`, () => {
            const obj = new Intern();
  
        expect("name" in obj).toEqual(true);
        expect("id" in obj).toEqual(true);
        expect("email" in obj).toEqual(true);
        expect("school" in obj).toEqual(true);
      });
    })
  });