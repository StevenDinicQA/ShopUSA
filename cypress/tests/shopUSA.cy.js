/// <reference types="cypress" />

import ShopUSA from '../steps/shopUSA-steps'

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('User logs in', () => {

  beforeEach('Go to dashboard page', () => {
    cy.visit('')
})

it('User logs in', () => {
    ShopUSA.login();
    cy.visit('https://www.shopusa.com/blog/india/cosmetics/');
    ShopUSA.sidebarFashion();
    ShopUSA.productAdding()
  })

})