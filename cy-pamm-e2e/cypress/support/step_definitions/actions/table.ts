import { When } from "@badeball/cypress-cucumber-preprocessor";

When(/^I click the "([^"]*)" table header$/, function (thName: string) {
  cy.get("table").find("th").contains(thName).click();
});
