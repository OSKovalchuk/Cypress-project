describe("My tests", ()=>{
    it("cy get +contains", () =>{
cy.visit("https://example.cypress.io/")
cy.contains("get").click()
cy.url().should ('contain', "/commands/querying")
cy.get("#query-btn").should("contain", "Button");
    });

});