/// <reference types="cypress" />

import shopUSASteps from "../steps/shopUSA-steps";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("User logs in", () => {
  beforeEach("Go to dashboard page", () => {
    cy.visit("");
  });

  it("User logs in", () => {
    shopUSASteps.cookieHandling()
    shopUSASteps.login();
    cy.visit("https://www.shopusa.com/in/shopping/#sports_outdoor/");
    shopUSASteps.sidebarFashion();
    shopUSASteps.productAdding();
  });
});
