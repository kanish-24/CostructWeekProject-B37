 class Logout_po{

 logout(){

    //cy.xpath('(//li[@class="dropdown"])[1]').click({force: true}).should('be.visible');
    // click on My Account dropdown
    cy.get('[title="My Account"]').click({force: true}).should('be.visible');
    //cy.get('.caret').click();


    // then click on logout option
    // here select function is not working to select the options from the dropdown
    //cy.get('.dropdown-menu-right').select().should('have.text','Logout');
    //cy.get('.dropdown-menu-right').select().should('have.length',5);

    cy.contains('Logout').click({force: true}).should('be.visible');

}

}

export default Logout_po;