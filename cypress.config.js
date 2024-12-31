const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
e2e: {
  specPattern: "**/*.feature",
  baseUrl:`http://trello.com/`,
  screenshotsFolder: "My Screenshots",
  trashAssetsBeforeRuns: true,
  screenshotOnRunFailure: false,
  chromeWebSecurity: false,
  failOnStatusCode: false,
setupNodeEvents(on, config) {
on("file:preprocessor", cucumber());
},
},
});
