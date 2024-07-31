const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    viewportWidth: 1280,
    viewportHeight: 720,
    //video: true,
    //videosFolder: 'videos',
    //screenshotsFolder: 'screenshots',
    retries: {
      runMode: 2,
      openMode: 0
    },
    // baseUrl: 'https://example.cypress.io',
    // env: {
    //   username: "test",
    //   password: "123",
    // }
    // component: {
    //   specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}'
    //}

  },
});
