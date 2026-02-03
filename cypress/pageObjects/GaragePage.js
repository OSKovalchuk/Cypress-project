class GaragePage {
    // Селектори
    get addCarButton() { return cy.get('button').contains('Add car'); }
    get brandSelect() { return cy.get('#addCarBrand'); }
    get modelSelect() { return cy.get('#addCarModel'); }
    get mileageInput() { return cy.get('#addCarMileage'); }
    get submitButton() { return cy.get('.modal-footer .btn-primary'); }
    
    // Метод для додавання машини
    addCar(brand, model, mileage) {
        this.addCarButton.click();
        this.brandSelect.select(brand);
        this.modelSelect.select(model);
        this.mileageInput.type(mileage);
        this.submitButton.click();
    }

    // Метод для додавання витрат (Expenses)
    addExpense(mileage, liters, cost) {
        // 1. Чекаємо, поки список машин завантажиться і знайдемо кнопку за текстом
        // Це замінить непрацюючий .btn-add-expense
        cy.contains('button', 'Add fuel expense').should('be.visible').click(); 
        
        // 2. Заповнюємо поля у модальному вікні
        cy.get('#addExpenseMileage').clear().type(mileage);
        cy.get('#addExpenseLiters').clear().type(liters);
        cy.get('#addExpenseTotalCost').clear().type(cost);
        
        // 3. Підтверджуємо додавання
        cy.get('.modal-footer .btn-primary').click();
    }
    
    }


export default new GaragePage();