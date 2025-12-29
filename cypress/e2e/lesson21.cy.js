import GaragePage from '../pageObjects/GaragePage';

describe('Garage and Expenses Tests', () => {
  beforeEach(() => {
    // Вхід через Basic Auth та логін
    cy.visit('/'); 
    cy.login(Cypress.env('email'), Cypress.env('password'));
  });

  it('Should add a car and fuel expenses', () => {
    // Додаємо машину
    GaragePage.addCar('BMW', 'X5', '100'); 
    
    // Додаємо витрати. Передаємо конкретні значення.
  
    GaragePage.addExpense('150', '10', '500'); 

    // Перевірка результату
    cy.get('.modal-content').should('not.exist'); // Модалка закрилася
    cy.url().should('include', '/expenses');      // Ми перейшли в розділ витрат
  });
});