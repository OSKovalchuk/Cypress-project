// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
// ***********************************************
// 1. Перевизначення команди 'type' для маскування паролів у логах
// ***********************************************
//Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
 // if (options && options.sensitive) {
    // Вимикаємо стандартний лог
    //options.log = false;
    
    // Створюємо власний лог, де замість тексту будуть зірочки
    //Cypress.log({
    //  $el: element,
    //  name: 'type',
     // message: '*'.repeat(text.length),
    //});
  //}

  //return originalFn(element, text, options);
//});

// ***********************************************
// 2. Кастомна команда 'login' для входу через UI
// ***********************************************
//Cypress.Commands.add('login', (email, password) => {
  // Перехід на головну сторінку (baseUrl підтягнеться з конфігу)
 // cy.visit('/');
  
  // Натискаємо кнопку Sign In у хедері
  //cy.get('button').contains('Sign In').click();
  
  // Заповнюємо Email
  //cy.get('#signinEmail').type(email);
  
  // Заповнюємо пароль із маскуванням
 // cy.get('#signinPassword').type(password, { sensitive: true });
  
  // Натискаємо кнопку Login у модальному вікні
 // cy.get('.modal-footer .btn-primary').contains('Login').click();
//}); 

// Натискаємо Guest log in (або іншу кнопку для входу)
  
  // Якщо потрібно залогінитися саме через форму входу (Sign In):
  // cy.get('.header_signin').click()
  // cy.get('#signinEmail').type(email)
  // cy.get('#signinPassword').type(password, { sensitive: true })
  // cy.get('.modal-footer .btn-primary').click()

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('createExpenseApi', (carId, amount, mileage, date) => {
  return cy.request({
      method: 'POST',
      url: '/api/expenses', // Тільки шлях, без guest:password@...
      body: {
          carId: Number(carId),
          reportedAt: date,
          mileage: Number(mileage),
          liters: 10,
          totalCost: Number(amount)
      }
  });
});