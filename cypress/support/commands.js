Cypress.Commands.add('login', () => {
    cy.visit(`https://guest:welcome2qauto@qauto.forstudy.space/`)

    cy.get('button.btn.btn-outline-white.header_signin').click();

    cy.get('input#signinEmail').type(Cypress.env('loginEmail'));
    cy.get('input#signinPassword').type(Cypress.env('loginPassword'), { log: false });

    cy.get('div.modal-footer.d-flex.justify-content-between')
      .find('button.btn.btn-primary').click();

  });

