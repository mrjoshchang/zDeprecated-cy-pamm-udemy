import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { getElementLocator } from "util/web-element-helper";

Then(
  /^the "([^"]*)" (radio button|checkbox) should( not)? be checked$/,
  function (elementName: string, elementType: string, negate: boolean) {
    getElementLocator(elementName);

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get<string>("@elementLocator").then((element: string) => {
      cy.get(element).should(`${negate ? "not." : ""}be.checked`);
    });
  }
);
