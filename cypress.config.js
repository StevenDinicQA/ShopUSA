const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 4500,
  chromeWebSecurity: false,
  reporter: "mochawesome",


  reporterOptions: {
    charts: true,
    overwrite: false,
    html: false,
    json: true,
    reportDir: "cypress/report/mochawesome-report",
  },

  e2e: {
    baseUrl: 'https://www.shopusa.com/in/',
    specPattern: 'cypress/tests/**/*.cy.{js,jsx,ts,tsx}',
    includeShadowDom: true,
    viewportHeight: 1080,
    viewportWidth: 1920,


    setupNodeEvents(on, config) {
      if (config.env.environment === "dev"){
        config.baseUrl = 'https://google.com'
      }
      return config
    },
  },
});
