const InternTask = require("../lib/intern");

describe("intern", () => {
    describe("Initialization", () => {
        it(`should return an object with "name", "ID", "Email", and "school" properties when called with the 'new' keyword`, () => {
            const obj = new InternTask();
  
        expect("name" in obj).toEqual(true);
        expect("id" in obj).toEqual(true);
        expect("email" in obj).toEqual(true);
        expect("school" in obj).toEqual(true);
      });
    })
  });