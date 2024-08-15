import LoginPage from '../support/pageObjects/LoginPage';

describe('Test login page',() => {
    const loginPage = new LoginPage();

  it('Успешный вход с правильными данными', () => {
    loginPage.visit();
    loginPage.login('standard_user', 'secret_sauce');

    // Проверка успешного входа
    cy.url().should('include', 'https://www.saucedemo.com/inventory.html');
  });

  it('Ошибка при неправильном пароле', () => {
    loginPage.visit();
    loginPage.login('standard_user', 'wrong-password');

    // Проверка появления сообщения об ошибке
    cy.get('div.error-message-container.error').find('h3').should('have.text', 'Epic sadface: Username and password do not match any user in this service');
  });

  it('Ошибка при неправильном логине', () => {
    loginPage.visit();
    loginPage.login('standard_use', 'secret_sauce');

    // Проверка появления сообщения об ошибке
    cy.get('div.error-message-container.error').find('h3').should('have.text', 'Epic sadface: Username and password do not match any user in this service');
  });

  it('Ошибка при невведенном логине', () => {
    loginPage.visit();
    loginPage.login('111', 'secret_sauce');

    cy.get('input[name="user-name"]').clear();
    cy.get('div.login-box').find('input#login-button').click();
    // Проверка появления сообщения об ошибке
    cy.get('div.error-message-container.error').find('h3').should('have.text', 'Epic sadface: Username is required');
  });

  it('Ошибка при невведенном пароле', () => {
    loginPage.visit();
    loginPage.login('standard_user', '111');

    cy.get('input[name="password"]').clear();
    cy.get('div.login-box').find('input#login-button').click();
    // Проверка появления сообщения об ошибке
    cy.get('div.error-message-container.error').find('h3').should('have.text', 'Epic sadface: Password is required');
  });

});