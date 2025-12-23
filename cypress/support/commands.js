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
// Перевизначення команди type для маскування паролів у логах Cypress
Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
  if (options && options.sensitive) {
    // вимикаємо оригінальний лог
    options.log = false
    // створюємо власний лог із замаскованим повідомленням (зірочками)
    Cypress.log({
      $el: element,
      name: 'type',
      message: '*'.repeat(text.length),
    })
  }

  return originalFn(element, text, options)
})

// Кастомна команда для логіну через UI
Cypress.Commands.add('login', (email, password) => {
  cy.visit('/') // Перехід на головну (базову) сторінку
  cy.get('button').contains('Guest log in').click() // Натискаємо Guest log in (або іншу кнопку для входу)
  
  // Якщо потрібно залогінитися саме через форму входу (Sign In):
  // cy.get('.header_signin').click()
  // cy.get('#signinEmail').type(email)
  // cy.get('#signinPassword').type(password, { sensitive: true })
  // cy.get('.modal-footer .btn-primary').click()
})
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