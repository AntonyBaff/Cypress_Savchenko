describe('Тесты авторизации', () => {
  it('Успешный вход с правильными данными', () => {
    cy.login();
    
    // Проверка успешного входа, например:
    cy.url().should('include', 'https://qauto.forstudy.space/panel/garage');
  });
});