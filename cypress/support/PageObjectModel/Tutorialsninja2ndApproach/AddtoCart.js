class Cart_po{

clickonDesktop(){

    cy.contains('Desktops').click({force:true});
    //cy.contains('Laptops & Notebooks').click({force: true});
    //cy.xpath('(//a[@class="dropdown-toggle"])[2]').click({force:true}).should('be.visible');
    //cy.contains('Desktops').click();

    cy.contains('Show AllDesktops').click();
    //cy.xpath('(//a[@class="dropdown-toggle"])[2]').select().should('have.class','see-all');

    //cy.xpath('(//a[@class="dropdown-toggle"])[2]').select().should('have.text','Show AllDesktops');
}
clickonimg(){

    //click on image of ipod classic
    cy.get('[alt="iPod Classic"]').click();

    // click to see more images of iPod Classic
    cy.xpath('(//img[@title="iPod Classic"])[2]').click();

    // click on right arrow symbol until all the images
    cy.get('[title="Next (Right arrow key)"').click();

    // click on cross symbol to close the images page
    cy.get('[title="Close (Esc)"]').click();

}
changeQty(){

    // change the quantity of iPod Classic from 1 to 3
    cy.get('#input-quantity').type('3',{force:true});
}
clickonAddtoCart(){

    // then at last click on add to cart button
    cy.contains('Add to Cart').click();

    // click on cart icon in the top right corner
    cy.get('#cart-total').click();

    // then click on view cart option
    cy.contains('View Cart').click();
    //cy.screenshot();
}
clickonCheckout(){

    // click on checkout button
    cy.contains('Checkout').click();

    // Assert the message after clicking on checkout button
    //cy.contains('marked with ***').should('have.text',)
    cy.get('.alert-danger').should('have.class','alert alert-danger alert-dismissible');


}

}
export default Cart_po;