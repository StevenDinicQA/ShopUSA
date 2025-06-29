import PageObjects from "../pages/shopUSA-page";
import * as testData from "../fixtures/testData.json";

const pageObjects = new PageObjects();

class shopUSASteps {
  cookieHandling() {
    cy.wait(1000);
    pageObjects.getDenyCookies().click();
    cy.wait(1000);
  }

  login() {
    pageObjects.getLoginPage().should("be.visible");
    pageObjects.getLoginPage().click();
    pageObjects.getEmailInput().should("be.visible");
    pageObjects.getEmailInput().type(testData.inputEmail);
    pageObjects.getPasswordInput().type(testData.inputPassword);
    cy.wait(1000);
    pageObjects.getLoginButton().click();
  }

  sidebarFashion() {
    pageObjects.getFashionSidebar().scrollIntoView();
    pageObjects.getFashionSidebar().should("be.visible");
    pageObjects.getFashionSidebar().click();
  }

  productAdding() {
    pageObjects.getOfraFashion().click();
    pageObjects.getOfraMakeUp().invoke("removeAttr", "target").click();
    pageObjects.getAcceptCookiesOfra().should("be.visible");
    pageObjects.getAcceptCookiesOfra().click();
    pageObjects.getOfraLogo().should("be.visible");
    pageObjects.getHighlighterCloudNine().click();
    pageObjects.getAddToCart().click();
    pageObjects.getCartButton().click();
    cy.wait(500);
    pageObjects.getNeedlessClick().then(($button) => {
      if ($button.is(":visible")) {
        pageObjects.getNeedlessClick().click();
      }
    });
    pageObjects.getProceedToCheckout().click();
    pageObjects.getTotalPriceCheckout().contains(testData.totalPrice);
  }
}

module.exports = new shopUSASteps();
