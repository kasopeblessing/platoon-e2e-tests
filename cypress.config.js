const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
  },
  viewportWidth: 1280,
  viewportHeight: 800,
})