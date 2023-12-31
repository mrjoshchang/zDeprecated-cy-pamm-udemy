import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { getElementLocator } from "util/web-element-helper";

Then(
  /^the "([^"]*)" should( not)? have the "([^"]*)" css value "([^"]*)"$/,
  function (
    elementName: string,
    negate: boolean,
    cssName: string,
    cssValue: string
  ) {
    getElementLocator(elementName);

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get<string>("@elementLocator").then((element: string) => {
      cy.get(element).should(
        `${negate ? "not." : ""}have.css`,
        cssName,
        cssValue
      );
    });
  }
);

Then(
  /^the "([^"]*)" should( not)? have the "([^"]*)" property value "([^"]*)"$/,
  function (
    elementName: string,
    negate: boolean,
    propertyName: string,
    propertyValue: string
  ) {
    getElementLocator(elementName);

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get<string>("@elementLocator").then((element: string) => {
      cy.get(element).should(
        `${negate ? "not." : ""}have.prop`,
        propertyName,
        propertyValue
      );
    });
  }
);

Then(
  /^the "(\d+(?:st|nd|rd|th))" "([^"]*)" should( not)? have the "([^"]*)" property value "([^"]*)"$/,
  function (
    ordinal: string,
    elementName: string,
    negate: boolean,
    propertyName: string,
    propertyValue: string
  ) {
    getElementLocator(elementName);
    const index = Number(ordinal.replace(/(st|nd|rd|th)/g, "")) - 1;

    cy.get("@elementLocator").should("exist", { timeout: 10000 });
    cy.get<string>("@elementLocator").then((element: string) => {
      cy.get(element)
        .eq(index)
        .should(
          `${negate ? "not." : ""}have.prop`,
          propertyName,
          propertyValue
        );
    });
  }
);
