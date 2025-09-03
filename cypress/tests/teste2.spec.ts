describe('Enviar dinheiro com saldo suficiente', () => {
  it('Deve enviar dinheiro com sucesso', () => {
  cy.visit('http://localhost:3000')
  cy.get('#username').type('Fonsick')
  cy.get('#password').type('12345')
  cy.get('[data-test="signin-submit"]').click()
  cy.get('[data-test="nav-top-new-transaction"]').click()
  cy.get('[data-test="user-list-item-uBmeaz5pX"]').click()
  cy.get('#amount').type('350')
  cy.get('#transaction-create-description-input').type('Payment')
  cy.get('[data-test="transaction-create-submit-payment"]').click()
  cy.get('.MuiAlert-message')
  });
});