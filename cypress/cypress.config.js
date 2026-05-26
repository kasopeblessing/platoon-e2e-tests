// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     specPattern: "cypress/e2e/**/*.cy.js", // This tells Cypress to look in your e2e folder
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// }); 



const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', 
  },
});