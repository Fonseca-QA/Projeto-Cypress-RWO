describe('CT 001 - Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {
  cy.visit('http://localhost:3000')
  cy.get('#username').type('Fonsick')
  cy.get('#password').type('12345')
  cy.get('[data-test="signin-submit"]').click()
  cy.get('[data-test="user-onboarding-dialog-title"]')
  });
});

describe('CT 002- Tentar fazer login com credenciais inválidas', () => {
  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    cy.visit('http://localhost:3000')
  cy.get('#username').type('Testusername')
  cy.get('#password').type('12345')
  cy.get('[data-test="signin-submit"]').click()
  });
});


describe('CT 003 -Registro de novo usuário com sucesso', () => {
  it('Deve registrar um novo usuário com informações válidas', () => {
    cy.visit('http://localhost:3000')
    cy.get("[data-test='signup']").click()
    cy.get('#firstName').type('Primary')
    cy.get('#lastName').type('Tester')
    cy.get('#username').type('Fonsick')
    cy.get('#password').type('12345')
    cy.get('#confirmPassword').type('12345')
    cy.get('[data-test="signup-submit"]').click()
    cy.get('.MuiContainer-maxWidthXs')
  });
});

describe('CT004 - Tentar registrar um novo usuário com informações incompletas', () => {
  it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
    cy.visit('http://localhost:3000')
    cy.get("[data-test='signup']").click()
    cy.get('#lastName').type('Tester')
    cy.get('#username').type('Fonsick')
    cy.get('#password').type('12345')
    cy.get('#confirmPassword').type('12345')
  });
});