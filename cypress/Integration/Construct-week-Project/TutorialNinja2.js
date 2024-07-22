///<reference types = "cypress"/>
///<reference types="cypress-xpath"/>
describe('Tutorial Ninja test suite', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })

    it('Login - test', () => {

        cy.visit('https://tutorialsninja.com/demo/');

        // click on My Account dropdown
        cy.contains('My Account').click();

        // then click on Login option
        cy.contains('Login').click()

        // enter your email-id
        cy.get('#input-email').type('chaddhakanishk@gmail.com')

        // enter your password
        cy.get('#input-password').type('kanish25')

        // click on login button
        cy.get('[value="Login"]').click();

         // Asserting the Warning message
         //cy.contains('exceeded').should('have.text','Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.');
        
    });
    it('Add to cart', () => {

    cy.visit('https://tutorialsninja.com/demo/');

    cy.contains('Desktops').click({force:true});
    //cy.contains('Laptops & Notebooks').click({force: true});
    //cy.xpath('(//a[@class="dropdown-toggle"])[2]').click({force:true}).should('be.visible');
    //cy.contains('Desktops').click();

    cy.contains('Show AllDesktops').click();
    //cy.xpath('(//a[@class="dropdown-toggle"])[2]').select().should('have.class','see-all');

    //cy.xpath('(//a[@class="dropdown-toggle"])[2]').select().should('have.text','Show AllDesktops');

    //click on image of ipod classic
    cy.get('[alt="iPod Classic"]').click();

    // click to see more images of iPod Classic
    cy.xpath('(//img[@title="iPod Classic"])[2]').click();

    // click on right arrow symbol until all the images
    cy.get('[title="Next (Right arrow key)"').click();

    // click on cross symbol to close the images page
    cy.get('[title="Close (Esc)"]').click();

    // change the quantity of iPod Classic from 1 to 3
    cy.get('#input-quantity').type('3');

    // then at last click on add to cart button
    cy.contains('Add to Cart').click();

    // click on cart icon in the top right corner
    cy.get('#cart-total').click();

    // then click on view cart option
    cy.contains('View Cart').click();
    //cy.screenshot();

    // click on checkout button
    cy.contains('Checkout').click();

    // Assert the message after clicking on checkout button
    //cy.contains('marked with ***').should('have.text',)
    cy.get('.alert-danger').should('have.class','alert alert-danger alert-dismissible');


        
    });
    it('Add to wishlist', () => {

        cy.visit('https://tutorialsninja.com/demo/');

        // click on link - Brand of the footer section
        cy.contains('Brands').click();
        // click on Sony brand
        cy.contains('Sony').click();
        // Add the Sony VAIO laptop to your wishlist
        cy.get('[data-original-title="Add to Wish List"]').click();
        
        
        // go back to the previous page
        //cy.go('back');

        // search for Nikon camera
        cy.get('[name="search"]').type('Nikon','{enter}');

        // click on product image
        cy.get('[alt="Nikon D300"]').click({force: true});
        cy.wait(3000);

        // once the product details page is loaded click on wishlist icon to add the item
        cy.get('[data-original-title="Add to Wish List"]').click()

        // click on Wishlist icon in the header section to check whether the item is added or not
        cy.get('.fa-heart').click()



        
    });
});