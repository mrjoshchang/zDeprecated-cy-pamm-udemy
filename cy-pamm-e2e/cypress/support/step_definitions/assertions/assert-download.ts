import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then(
  /^the download "([^"]*)" should contain the text "([^"]*)"$/,
  function (filename: string, expectedText: string) {
    cy.readFile(`cypress/downloads/${filename}`).should(
      "contain",
      expectedText
    );
  }
);

Then(/^the download "([^"]*)" should exist$/, function (filename: string) {
  cy.readFile(`cypress/downloads/${filename}`).should("exist");
});
