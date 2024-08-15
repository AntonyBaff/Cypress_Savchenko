class LoginPage{
    visit() {
        cy.visit('https://www.saucedemo.com/')
    }
    getUsernameInput() {
        return cy.get('input[name="user-name"]');
      }
    
    getPasswordInput() {
        return cy.get('input[name="password"]');
      }
    
    getLoginButton() {
        return cy.get('div.login-box').find('input#login-button');
      }
    
    login(username, password) {
        this.getUsernameInput().type(username);
        this.getPasswordInput().type(password, { log: false }); // Скрытие пароля в логах
        this.getLoginButton().click();
      }
    }
    
    export default LoginPage;


