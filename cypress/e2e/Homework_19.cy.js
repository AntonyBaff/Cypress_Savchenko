describe("Check Registration pop-up", () => {
    const { namep, passwordp } = Cypress.env(); 
    

    beforeEach(() => {
        if (!Cypress.env('skipBeforeEach')) {
        cy.visit(`https://${namep}:${passwordp}@qauto.forstudy.space/`, {
            failOnStatusCode: false,
        });
        // Знайти і натиснути кнопку "Sign In"
        cy.get('button.btn.btn-outline-white.header_signin').click();
        
        // Знайти і натиснути кнопку "Registration" через текст
        cy.get('button.btn.btn-link').contains('Registration').click();
    }
});

    it('Check Name field', () => {
        // Empty field
        cy.get('input#signupName').click();
        cy.get('input#signupLastName').click();
        cy.get('div.invalid-feedback').should('contain.text', 'Name required');
        cy.get('input#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        // Wrong data
        cy.get('input#signupName').type('1');
        cy.get('input#signupLastName').click();
        cy.get('div.invalid-feedback').should('contain.text', 'Name is invalid');
        cy.get('div.invalid-feedback').should('contain.text', 'Name has to be from 2 to 20 characters long');
        cy.get('input#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        // Wrong length 1
        cy.get('input#signupName').clear();
        cy.get('input#signupName').type('a');
        cy.get('div.invalid-feedback').should('contain.text', 'Name has to be from 2 to 20 characters long');
        cy.get('input#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        // Wrong length 21
        cy.get('input#signupName').clear();
        cy.get('input#signupName').type('aaaaaaaaaaaaaaaaaaaaG');
        cy.get('div.invalid-feedback').should('contain.text', 'Name has to be from 2 to 20 characters long');
        cy.get('input#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        // Positive scenario
        cy.get('input#signupName').clear();
        cy.get('input#signupName').type('Antony');
        cy.get('input#signupLastName').click();
        cy.get('div.invalid-feedback').should('not.contain.text', 'Name required');
        cy.get('div.invalid-feedback').should('not.contain.text', 'Name is invalid');
        cy.get('div.invalid-feedback').should('not.contain.text', 'Name has to be from 2 to 20 characters long');
    });
    it('Check Last Name field', () => {
        // Empty field
        cy.get('input#signupLastName').click();
        cy.get('input#signupName').click();
        cy.get('div.invalid-feedback').should('contain.text', 'Last name required');
        cy.get('input#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        // Wrong data
        cy.get('input#signupLastName').type('1');
        cy.get('input#signupName').click();
        cy.get('div.invalid-feedback').should('contain.text', 'Last name is invalid');
        cy.get('div.invalid-feedback').should('contain.text', 'Last name has to be from 2 to 20 characters long');
        cy.get('input#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        // Wrong length 1
        cy.get('input#signupLastName').clear();
        cy.get('input#signupLastName').type('a');
        cy.get('div.invalid-feedback').should('contain.text', 'Last name has to be from 2 to 20 characters long');
        cy.get('input#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        // Wrong length 21
        cy.get('input#signupLastName').clear();
        cy.get('input#signupLastName').type('aaaaaaaaaaaaaaaaaaaaG');
        cy.get('div.invalid-feedback').should('contain.text', 'Last name has to be from 2 to 20 characters long');
        cy.get('input#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        // Positive scenario
        cy.get('input#signupLastName').clear();
        cy.get('input#signupLastName').type('Baff');
        cy.get('input#signupName').click();
        cy.get('div.invalid-feedback').should('not.contain.text', 'Last name required');
        cy.get('div.invalid-feedback').should('not.contain.text', 'Last name is invalid');
        cy.get('div.invalid-feedback').should('not.contain.text', 'Last name has to be from 2 to 20 characters long');
        
    });
    it('Check Email field', () => {
        // For empty field and border color red
        cy.get('input#signupEmail').click();
        cy.get('input#signupName').click();
        cy.get('div.invalid-feedback').should('contain.text', 'Email required');
        cy.get('input#signupEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        //Wrong data and border color red
        cy.get('input#signupEmail').type('111');
        cy.get('input#signupName').click();
        cy.get('div.invalid-feedback').should('contain.text', 'Email is incorrect');
        cy.get('input#signupEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        // Positive scenario
        cy.get('input#signupEmail').clear();
        cy.get('input#signupEmail').type('111@ga.com');
        cy.get('input#signupName').click();
        cy.get('div.invalid-feedback').should('not.contain.text', 'Email required');
        cy.get('div.invalid-feedback').should('not.contain.text', 'Email is incorrect');
        cy.get('input#signupEmail').should('not.have.css', 'border-color', 'rgb(220, 53, 69)');
    });
    it('Check Password field', () => {
        // For empty field
        cy.get('input#signupPassword').click();
        cy.get('input#signupName').click();
        cy.get('div.invalid-feedback').should('contain.text', 'Password required');
        cy.get('input#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        // Wrong data minimum symbols -1
        cy.get('input#signupPassword').type('123456');
        cy.get('input#signupName').click();
        cy.get('div.invalid-feedback').should('contain.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        cy.get('input#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        // Wrong data with maximum symbols +1
        cy.get('input#signupPassword').clear();
        cy.get('input#signupPassword').type('12345678901234aQ');
        cy.get('input#signupName').click();
        cy.get('div.invalid-feedback').should('contain.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        cy.get('input#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        // Wrong data only numbers
        cy.get('input#signupPassword').clear();
        cy.get('input#signupPassword').type('123456789012345');
        cy.get('input#signupName').click();
        cy.get('div.invalid-feedback').should('contain.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        cy.get('input#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        // Wrong data only small letters
        cy.get('input#signupPassword').clear();
        cy.get('input#signupPassword').type('qwertyuiop');
        cy.get('input#signupName').click();
        cy.get('div.invalid-feedback').should('contain.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        cy.get('input#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        // Wrong data only BIG letters
        cy.get('input#signupPassword').clear();
        cy.get('input#signupPassword').type('QWERTYUIOP');
        cy.get('input#signupName').click();
        cy.get('div.invalid-feedback').should('contain.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        cy.get('input#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        // Positive scenarios
        cy.get('input#signupPassword').clear();
        cy.get('input#signupPassword').type(Cypress.env('loginPassword'), {log: false});
        cy.get('input#signupName').click();
        cy.get('div.invalid-feedback').should('not.contain.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        cy.get('input#signupPassword').should('not.have.css', 'border-color', 'rgb(220, 53, 69)');
    });
    it('Check Re-enter Password field', () => {
        // For empty field
        cy.get('input#signupPassword').type('Qwerty24');
        cy.get('input#signupRepeatPassword').click();
        cy.get('input#signupPassword').click();
        cy.get('div.invalid-feedback').should('contain.text', 'Re-enter password required');
        cy.get('input#signupRepeatPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        // Wrong data minimum symbols -1
        cy.get('input#signupRepeatPassword').type('123456');
        cy.get('input#signupName').click();
        cy.get('div.invalid-feedback').should('contain.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        cy.get('input#signupRepeatPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        // Wrong data with maximum symbols +1
        cy.get('input#signupRepeatPassword').clear();
        cy.get('input#signupRepeatPassword').type('12345678901234aQ');
        cy.get('input#signupName').click();
        cy.get('div.invalid-feedback').should('contain.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        cy.get('input#signupRepeatPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        // Wrong data only numbers
        cy.get('input#signupRepeatPassword').clear();
        cy.get('input#signupRepeatPassword').type('123456789012345');
        cy.get('input#signupName').click();
        cy.get('div.invalid-feedback').should('contain.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        cy.get('input#signupRepeatPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        // Wrong data only small letters
        cy.get('input#signupRepeatPassword').clear();
        cy.get('input#signupRepeatPassword').type('qwertyuiop');
        cy.get('input#signupName').click();
        cy.get('div.invalid-feedback').should('contain.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        cy.get('input#signupRepeatPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        // Wrong data only BIG letters
        cy.get('input#signupRepeatPassword').clear();
        cy.get('input#signupRepeatPassword').type('QWERTYUIOP');
        cy.get('input#signupName').click();
        cy.get('div.invalid-feedback').should('contain.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        cy.get('input#signupRepeatPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        // Passwords do not match
        cy.get('input#signupRepeatPassword').clear();
        cy.get('input#signupRepeatPassword').type('Qwerty23');
        cy.get('input#signupName').click();
        cy.get('div.invalid-feedback').should('contain.text', 'Passwords do not match');
        cy.get('input#signupRepeatPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        // Positive scenarios
        cy.get('input#signupRepeatPassword').clear();
        cy.get('input#signupRepeatPassword').type('Qwerty24');
        cy.get('input#signupName').click();
        cy.get('div.invalid-feedback').should('not.contain.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        cy.get('input#signupRepeatPassword').should('not.have.css', 'border-color', 'rgb(220, 53, 69)');
    });
    it('Check Register button', () => {
        // All fields empty
        cy.get('div.modal-footer').find('button.btn.btn-primary').should('be.disabled');
        // Name field filled
        cy.get('input#signupName').type('Antony');
        cy.get('div.modal-footer').find('button.btn.btn-primary').should('be.disabled');
        // Name and Last Name filled
        cy.get('input#signupLastName').type('Baff');
        cy.get('div.modal-footer').find('button.btn.btn-primary').should('be.disabled');
        // Name, Last Name and Email filled
        cy.get('input#signupEmail').type('111@ga.com');
        cy.get('div.modal-footer').find('button.btn.btn-primary').should('be.disabled');
        // Name, Last Name, Email and Password filled
        cy.get('input#signupPassword').type('Qwerty24');
        cy.get('div.modal-footer').find('button.btn.btn-primary').should('be.disabled');
        // Name, Last Name, Email, Password and Re-enter Password filled
        cy.get('input#signupRepeatPassword').type('Qwerty24');
        cy.get('div.modal-footer').find('button.btn.btn-primary').should('not.be.disabled');
    });
    it('Registration new user', () => {
        // Name
        cy.get('input#signupName').type('Antonyy');
        // Last Name
        cy.get('input#signupLastName').type('Bafff');
        // Email
        cy.get('input#signupEmail').type('AntonyBaff3.doe@example.com');
        // Password
        cy.get('input#signupPassword').type('Password123!');
        // Re-enter password
        cy.get('input#signupRepeatPassword').type('Password123!');
        // Click Register button
        cy.get('div.modal-footer').find('button.btn.btn-primary').click();
        // Check that user successfully registered
        cy.url().should('include', 'https://qauto.forstudy.space/panel/garage');

    });
    it('Sign In', () => {
        Cypress.env('skipBeforeEach', true);
        cy.login();
        Cypress.env('skipBeforeEach', false);
    });
});