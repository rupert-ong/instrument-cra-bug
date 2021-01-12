/// <reference types="cypress" />

context("App", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders splash page and opens react homepage on link click", () => {
    cy.get("header.App-header").within(() => {
      cy.get("p").should("have.text", "Edit src/App.js and save to reload.");
      cy.get(".App-link").invoke("removeAttr", "target").click();
      cy.url().should("eq", "https://reactjs.org/");
    });
  });
});
