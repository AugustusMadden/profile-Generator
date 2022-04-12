const EngineerTask = require("../lib/engineer");

describe("engineer", () => {
    describe("Initialization", () => {
        it(`should return an object with "name", "ID", "Email", and "git" properties when called with the 'new' keyword`, () => {
            const obj = new EngineerTask();
  
        expect("name" in obj).toEqual(true);
        expect("id" in obj).toEqual(true);
        expect("email" in obj).toEqual(true);
        expect("git" in obj).toEqual(true);
      });
    })
  });