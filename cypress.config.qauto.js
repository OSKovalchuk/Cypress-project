const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Базовий URL з Basic Auth для доступу до сайту
    baseUrl: 'https://guest:welcome2qauto@qauto.forstudy.space/',
    
    // Змінні оточення для тестів
    env: {
      email: 'olga_test_1@example.com', 
      password: 'Password123'
    },
    
    // Налаштування репортера Mochawesome
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: true
    },

    // Вказуємо шлях до специфікацій, якщо потрібно (опціонально)
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'
  }
});
  