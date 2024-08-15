class InventoryPage{
    visit() {
        cy.inventoryPage();
    }
    itemPage(id) {
        cy.get(`a#item_${id}_title_link`).find('div.inventory_item_name').click();
        cy.url().should('include', `https://www.saucedemo.com/inventory-item.html?id=${id}`);
    }
}

export default InventoryPage;