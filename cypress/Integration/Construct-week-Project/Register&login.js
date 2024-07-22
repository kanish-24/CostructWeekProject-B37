///<reference types = "cypress"/>
///<reference types="cypress-xpath"/>

describe('Tutorials Ninja', () => {
    it.skip('Register test', () => {

        // Enter the url of the given web application
        cy.visit('https://tutorialsninja.com/demo/');

        // Click on My Account dropdown in the header section
        cy.contains('My Account').click();

        // Then click on Register option
        cy.contains('Register').click();

        // Enter your first name
        cy.get('[name="firstname"]').type('Kanish');

        // Enter your last name
        cy.get('[name="lastname"]').type('Chaddha');

        // Enter an invalid email-id
        cy.get('#input-email').type('kanishch20@gmail.com');
        // a message is displayed saying email-address is already registered

        // Enter your telephone number
        cy.get('#input-telephone').type('1100-8696-8899');

        // Create password for your account
        cy.get('[name="password"]').type('#kanish23!');

        // After creating confirm your password
        cy.get('[placeholder="Password Confirm"]').type('#kanish23!');

        // for subcribing to the newsletter
        cy.get('[value="1"]').check({force:true}).should('be.visible')

        // for not subcribing to the newsletter
        cy.get('[value="0"]').check().should('be.visible');

        // Click on privacy policy link to read the privacy policy
        //cy.get('.agree').click();

        // And then check the privacy policy checkbox
        cy.get('[name="agree"]').check();

        // At last click on continue button
        cy.get('[value="Continue"]').click();
        
    });
    it('Login Test', () => {

        cy.visit('https://tutorialsninja.com/demo/');

        // Click on My Account dropdown in the header section
        cy.contains('My Account').click();

        // click on login option from My Account Dropdown
        cy.contains('Login').click();

        // Type email-address
        cy.get('[name="email"]').type('chaddhakanishk@gmail.com');

        // Type Password
        cy.get('#input-password').type('kanish25')

        // Click on login button
        cy.get('[value="Login"]').click().should('be.visible');

    });
    it.skip('add to cart', () => {

    // cypress is not able to find cameras also because of unstability of the application
    cy.contains('Cameras').click({force: true});
    cy.get('[alt="Nikon D300"]').click()
    cy.get('#input-quantity').type('3');
    cy.contains('Add to Cart').click();


    //cy.get('[alt="Canon EOS 5D"]').click()

    //cy.xpath('(//a[@class="dropdown-toggle"])[2]').click({force:true}).should('be.visible');
    
    //cy.contains('Desktops').click({force:true});
    //cy.wait(5000);
    
    
    // cy.contains('Show AllDesktops').click();

    //  //click on image of ipod classic
    //  cy.get('[alt="iPod Classic"]').click();

    //  // click to see more images of iPod Classic
    //  cy.xpath('(//img[@title="iPod Classic"])[2]').click();
 
    //  // click on right arrow symbol until all the images
    //  cy.get('[title="Next (Right arrow key)"').click();
 
    //  // click on cross symbol to close the images page
    //  cy.get('[title="Close (Esc)"]').click();

    //   // change the quantity of iPod Classic from 1 to 3
    // cy.get('#input-quantity').type('3');

    // // then at last click on add to cart button
    // cy.contains('Add to Cart').click();

    // // click on cart icon in the top right corner
    // cy.get('#cart-total').click();

    // // then click on view cart option
    // cy.contains('View Cart').click();

    // // click on checkout button
    // cy.contains('Checkout').click();

    // // Assert the message after clicking on checkout button
    // //cy.contains('marked with ***').should('have.text',)
    // cy.get('.alert-danger').should('have.class','alert alert-danger alert-dismissible');
    
        
    });
});