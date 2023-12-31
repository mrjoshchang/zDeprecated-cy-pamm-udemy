import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { getElementLocator } from "util/web-element-helper";

Then(
  /^in the "([^"]*)" iframe, the "([^"]*)" should( not)? contain the text "([^"]*)"$/,
  function (
    iframeName: string,
    elementName: string,
    negate: boolean,
    expectedText: string
  ) {
    getElementLocator(iframeName, "frameLocator");
    getElementLocator(elementName);

    cy.get("@frameLocator").should("exist", { timeout: 10000 });
    cy.get<string>("@frameLocator").then((frame: string) => {
      cy.get<string>("@elementLocator").then((element: string) => {
        cy.get(frame)
          .its("0.contentDocument")
          .its("body")
          .find(element)
          .should(`${negate ? "not." : ""}contain.text`, expectedText);
      });
    });
  }
);

Then(
  /^in the "([^"]*)" iframe, the "([^"]*)" should( not)? have the text "([^"]*)"$/,
  function (
    iframeName: string,
    elementName: string,
    negate: boolean,
    expectedText: string
  ) {
    getElementLocator(iframeName, "frameLocator");
    getElementLocator(elementName);

    cy.get("@frameLocator").should("exist", { timeout: 10000 });
    cy.get<string>("@frameLocator").then((frame: string) => {
      cy.get<string>("@elementLocator").then((element: string) => {
        cy.get(frame)
          .its("0.contentDocument")
          .its("body")
          .find(element)
          .should(`${negate ? "not." : ""}have.text`, expectedText);
      });
    });
  }
);

Then(
  /^in the "([^"]*)" iframe, the "([^"]*)" should( not)? contain the value "([^"]*)"$/,
  function (
    iframeName: string,
    elementName: string,
    negate: boolean,
    expectedText: string
  ) {
    getElementLocator(iframeName, "frameLocator");
    getElementLocator(elementName);

    cy.get("@frameLocator").should("exist", { timeout: 10000 });
    cy.get<string>("@frameLocator").then((frame: string) => {
      cy.get<string>("@elementLocator").then((element: string) => {
        cy.get(frame)
          .its("0.contentDocument")
          .its("body")
          .find(element)
          .should(`${negate ? "not." : ""}contain.value`, expectedText);
      });
    });
  }
);

Then(
  /^in the "([^"]*)" iframe, the "([^"]*)" should( not)? have the value "([^"]*)"$/,
  function (
    iframeName: string,
    elementName: string,
    negate: boolean,
    expectedText: string
  ) {
    getElementLocator(iframeName, "frameLocator");
    getElementLocator(elementName);

    cy.get("@frameLocator").should("exist", { timeout: 10000 });
    cy.get<string>("@frameLocator").then((frame: string) => {
      cy.get<string>("@elementLocator").then((element: string) => {
        cy.get(frame)
          .its("0.contentDocument")
          .its("body")
          .find(element)
          .should(`${negate ? "not." : ""}have.value`, expectedText);
      });
    });
  }
);
