const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Базовий URL для другої версії сайту (з багами)
    baseUrl: 'https://guest:welcome2qauto@qauto2.forstudy.space/',
    
    // Змінні оточення для другого користувача
    env: {
      email: 'olga_test_2@example.com', // Використовуйте інший email, ніж у першому конфігу
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

    // Шлях до ваших тестів
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'
  }
});