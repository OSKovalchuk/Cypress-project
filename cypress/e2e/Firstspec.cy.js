
import { HomePage } from "./Page Objects/HomePage";

describe('Block of first tests', () => {
   const homePage = new HomePage();
   const getPage= new GetPage();

  beforeEach(() => {
    homePage.navigate("/");
  });

  it('First test', () => { 

  homePage.listButton("get").click();
  cy.url().should ('contain', "/commands/querying");
  });

//it("Second test", () => {
  
  // cy.contains("contains").click();
//})
})