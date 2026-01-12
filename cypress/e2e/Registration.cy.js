describe('Реєстрація користувачів для обох середовищ', () => {

    it('Реєстрація на першому сайті (qauto)', () => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
        cy.get('button').contains('Sign up').click();
        cy.get('#signupName').type('Olga');
        cy.get('#signupLastName').type('Tester');
        cy.get('#signupEmail').type('olga_test_1@example.com'); // Вкажіть свій email з конфігу
        cy.get('#signupPassword').type('Password123');
        cy.get('#signupRepeatPassword').type('Password123');
        cy.get('.modal-footer .btn-primary').click();
        cy.url().should('include', '/panel/garage');
    });

    it('Реєстрація на другому сайті (qauto2)', () => {
        cy.visit('https://guest:welcome2qauto@qauto2.forstudy.space/');
        cy.get('button').contains('Sign up').click();
        cy.get('#signupName').type('Olga');
        cy.get('#signupLastName').type('Tester');
        cy.get('#signupEmail').type('olga_test_2@example.com'); // Інший email для другого сайту
        cy.get('#signupPassword').type('Password123');
        cy.get('#signupRepeatPassword').type('Password123');
        cy.get('.modal-footer .btn-primary').click();
        cy.url().should('include', '/panel/garage');
    });
});