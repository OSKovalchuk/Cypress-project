describe('Car and Expenses Test Suite', () => {
  let carId;
  const carData = {
    brand: 'BMW',
    model: 'X5',
    mileage: 122
  };

 
  before(() => {
    cy.visit('/');
    cy.get('.header_signin').click();
    cy.get('#signinEmail').type('olga_test_1@example.com');
    cy.get('#signinPassword').type('Password123');
    cy.get('.btn-primary').contains('Login').click();
    cy.url().should('include', '/panel/garage');
  });

  it('should complete the full flow: Create Car -> API Expense -> UI Verify', () => {
 
    cy.intercept('POST', '/api/cars').as('createCar');
    cy.get('.btn-primary').contains('Add car').click();
    cy.get('#addCarBrand').select(carData.brand);
    cy.get('#addCarModel').select(carData.model);
    cy.get('#addCarMileage').clear().type(carData.mileage);
    cy.get('.modal-footer .btn-primary').click();

    cy.wait('@createCar').then((xhr) => {
      carId = xhr.response.body.data.id;
      expect(carId).to.be.a('number');

  
      cy.createExpenseApi(carId, 50, 150, '2026-01-12').then((res) => {
        expect(res.status).to.eq(200);
      });

 
      cy.visit('/panel/expenses');
      cy.get('#carSelectDropdown').should('be.visible').click();
      
     
      cy.get('.dropdown-menu li').contains(`${carData.brand} ${carData.model}`)
        .first()
        .click({ force: true });
   
      cy.get('.table td', { timeout: 10000 }).contains('150').should('be.visible');
    });
  });
});