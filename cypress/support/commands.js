Cypress.Commands.add('inventoryPage', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('input[name="user-name"]').type('standard_user');
    cy.get('input[name="password"]').type('secret_sauce');
    cy.get('div.login-box').find('input#login-button').click();
  
    // Сохранение куки после логина
    cy.getCookie('session-username').then((cookie) => {
      Cypress.env('session-username', cookie.value);
    });
  });
  
  Cypress.Commands.add('restoreSession', () => {
    cy.setCookie('session-username', Cypress.env('session-username'));
  });

