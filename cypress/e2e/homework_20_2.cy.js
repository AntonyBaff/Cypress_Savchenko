import InventoryPage from '../support/pageObjects/InventoryPage';

describe('Мои тесты', () => {
    const inventoryPage = new InventoryPage();

    beforeEach(() => {
        inventoryPage.visit();
});


  it('Check UI elements', () => {
    // Burger menu
    cy.get('div.bm-burger-button').find('button#react-burger-menu-btn').should('be.visible');
    //Basket icon
    cy.get('div.shopping_cart_container').find('a.shopping_cart_link').should('be.visible');
    //Dropdown menu
    cy.get('select.product_sort_container').should('be.visible');
    cy.get('select.product_sort_container')
        .find('option')
        .should('have.length', 4);
});
  it('Check Items Pages', () => {
    inventoryPage.itemPage(0);
        cy.go('back');
    inventoryPage.itemPage(1);
        cy.go('back');
    inventoryPage.itemPage(2);
        cy.go('back');
    inventoryPage.itemPage(3);
        cy.go('back');
    inventoryPage.itemPage(4);
        cy.go('back');
    inventoryPage.itemPage(5);
});


});