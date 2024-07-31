describe('Login test with HTTP AUTH', () => {
    it('should login with valid credentials using HTTP auth', () => {
      cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
      cy.contains('Guest log in', {timeout: 10000 }).should('be.visible');
    })
  })