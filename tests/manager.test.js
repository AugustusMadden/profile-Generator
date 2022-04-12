const ManagerTask = require("../lib/manager");

describe("manager", () => {
    describe("Initialization", () => {
        it(`should return an object with "name", "ID", "Email", and "office" properties when called with the 'new' keyword`, () => {
            const obj = new ManagerTask();
  
        expect("name" in obj).toEqual(true);
        expect("id" in obj).toEqual(true);
        expect("email" in obj).toEqual(true);
        expect("office" in obj).toEqual(true);
      });
    })
  });