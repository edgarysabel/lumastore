///<reference types="cypress"/>

import NavBar from "../../support/pageObjects/navbar";
const navbar = new NavBar();

//Use FalsoJS/FakerJS library or anything likewise to generate random user information
context("Sign Up", () => {
  before(function () {
    cy.openURL();
  });

  it("Create an account", () => {
    navbar.createAnAccountBTN().click();
  });
});