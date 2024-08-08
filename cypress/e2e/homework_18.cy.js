describe('Find buttons in header and footer', () => {
  const {username, password} = Cypress.env;
  before(() => {
    cy.visit(`https://guest:welcome2qauto@qauto.forstudy.space/`, {
      failOnStatusCode: false,
    });
  });

  it('find buttons', () => {
    cy.get('div.hero-descriptor')
      .find("button.hero-descriptor_btn.btn.btn-primary")
      .should("be.visible");

    cy.get('a.socials_link').first().should('have.attr', 'href', 'https://www.facebook.com/Hillel.IT.School')
    cy.get('a.socials_link').eq(1).should('have.attr', 'href', 'https://t.me/ithillel_kyiv')
    cy.get('a.socials_link').eq(2).should('have.attr', 'href', 'https://www.youtube.com/user/HillelITSchool?sub_confirmation=1')
    cy.get('a.socials_link').eq(3).should('have.attr', 'href', 'https://www.instagram.com/hillel_itschool/')
    cy.get('a.socials_link').last().should('have.attr', 'href', 'https://www.linkedin.com/school/ithillel/')

    cy.get('a.contacts_link.display-4').should('have.attr', 'href', 'https://ithillel.ua')
    cy.get('a.contacts_link.h4').should('have.attr', 'href', 'mailto:developer@ithillel.ua')

  })



})