
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "bengpg",
  e2e: {
    setupNodeEvents(on, config) { 
    },
    specPattern: 'cypress/e2e/**/*.cy.js', 
  },
});