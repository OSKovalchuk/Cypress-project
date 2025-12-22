describe('Перевірка елементів інтерфейсу на головній сторінці', () => {
  
  beforeEach(() => {
    // Вхід через Basic Auth
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
  });

  it('Тест 1: Перевірка хедера та центральної кнопки', () => {
    cy.get('header').should('be.visible').within(() => {
      cy.get('.header_logo').should('be.visible');
      cy.get('button').contains('Guest log in').should('be.visible');
    });
    cy.get('button').contains('Sign up').should('be.visible');
  });

  it('Тест 2: Перевірка футера (соцмережі та контакти)', () => {
    // 1. Скролимо до футера
    cy.scrollTo('bottom');

    // 2. Перевірка 5-ти соціальних мереж
    
    cy.get('a.socials_link', { timeout: 10000 })
      .should('have.length', 5)
      .each(($el) => {
        cy.wrap($el).should('be.visible');
      });

    // 3. ПЕРЕВІРКА КОНТАКТІВ 
    cy.get('a.contacts_link').contains('ithillel.ua').should('be.visible');
    
    
    cy.contains('a.contacts_link', /support/i).should('be.visible');

    // 4. Перевірка лого та копірайту
    cy.get('.footer_logo').should('be.visible');
    cy.get('footer').should('contain', '© 2021 Hillel IT school');
  });
});