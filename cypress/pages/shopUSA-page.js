import ShopUSA from "../selectors/shopUSA.json";

class PageObjects {
  getDenyCookies() {
    return cy.get(ShopUSA.denyCookies);
  }
  getLoginPage() {
    return cy.get(ShopUSA.loginPage.navigationLogIn);
  }

  getEmailInput() {
    return cy.get(ShopUSA.loginPage.emailInput);
  }

  getPasswordInput() {
    return cy.get(ShopUSA.loginPage.passwordInput);
  }

  getLoginButton() {
    return cy.get(ShopUSA.loginPage.loginButton);
  }

  getFashionSidebar() {
    return cy.get(ShopUSA.sidebarFashion);
  }

  getOfraFashion() {
    return cy.get(ShopUSA.ofraFashion);
  }

  getOfraMakeUp() {
    return cy.get(ShopUSA.ofraMakeUp);
  }

  getAcceptCookiesOfra() {
    return cy.get(ShopUSA.acceptCookiesOfra);
  }

  getOfraLogo() {
    return cy.get(ShopUSA.ofraLogo);
  }

  getHighlighterCloudNine() {
    return cy.get(ShopUSA.highlighterCloudNine);
  }

  getAddToCart() {
    return cy.get(ShopUSA.addToCart);
  }

  getCartButton() {
    return cy.get(ShopUSA.cartButton);
  }

  getProceedToCheckout() {
    return cy.get(ShopUSA.proceedToCheckout);
  }

  getNeedlessClick() {
    return cy.get(ShopUSA.needlessClick);
  }

  getTotalPriceCheckout() {
    return cy.get(ShopUSA.totalPriceCheckout);
  }
}

export default PageObjects;
