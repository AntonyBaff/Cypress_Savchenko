const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://qauto.forstudy.space', 
    viewportWidth: 1280,
    viewportHeight: 720,
    //video: false,
    //videosFolder: 'videos',
    //screenshotsFolder: 'screenshots',
    retries: {
      runMode: 2,
      openMode: 0
    },
    supportFile: 'cypress/support/index.js',
    env: {
      skipBeforeEach: false,
    },
  },
});