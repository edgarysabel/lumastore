Cypress.Commands.add("openURL", () => {
  cy.visit(Cypress.env("baseUrl"));
});
