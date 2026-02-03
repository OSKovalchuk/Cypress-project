
describe('Функціонал реєстрації та логіну', () => {
  // Використовуємо Date.now(), щоб email завжди був унікальним і тест не падав через дублікати
  const userEmail = `test_user_${Date.now()}@example.com`;
  const userPassword = 'Password123';

  beforeEach(() => {
    // Вхід через Basic Auth, щоб відкрити лендинг
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
  });

  it('Успішна реєстрація нового користувача', () => {
    cy.get('button').contains('Sign up').click();

    // Заповнення форми реєстрації
    cy.get('#signupName').type('Ivan');
    cy.get('#signupLastName').type('Testov');
    cy.get('#signupEmail').type(userEmail);
    
    // Використовуємо нашу кастомну опцію { sensitive: true }
    cy.get('#signupPassword').type(userPassword, { sensitive: true });
    cy.get('#signupRepeatPassword').type(userPassword, { sensitive: true });

    cy.get('.modal-footer .btn-primary').click();

    // Перевірка, що реєстрація пройшла і ми в кабінеті
    cy.url().should('include', '/panel/garage');
    cy.get('h1').should('contain', 'Garage');
  });

  it('Логін створеним користувачем через кастомну команду login()', () => {
    // Викликаємо команду, яку ми щойно додали в commands.js
    cy.login(userEmail, userPassword);

    // Перевірка успішного входу
    cy.url().should('include', '/panel/garage');
    cy.contains('button', 'My profile').should('be.visible');
  });
});