///<reference types="cypress"/>

describe('Another approach to change the password', () => {
    it('Test cases to change the password and Login to the application', () => {

        cy.visit('https://tutorialsninja.com/demo/');

        // This approach will work if the user remember his/her email-id and password
        // the user is able to change the password after logging in to the application

         // Click on My Account dropdown in the header section
         cy.contains('My Account').click();

         // click on login option from My Account Dropdown
         cy.contains('Login').click();
 
         // Type email-address
         cy.get('[name="email"]').type('kanishch1999@gmail.com');
 
         // Type Password
         cy.get('#input-password').should('be.visible').type('kanish24')
 
         // Click on login button
         cy.get('[value="Login"]').click();

         // click on change your password link
         cy.contains('Change your password').click();

         // Type your new password
         cy.get('#input-password').type('kanish123');

         // confirm your password by typing it again
         cy.get('[placeholder="Password Confirm"]').type('kanish123');

         // click on continue button
         cy.get('[value="Continue"]').click();

         // Click on My Account dropdown in the header section
         //cy.contains('My Account').click();

         // click on logout option from the My account dropdown
         //cy.contains('Logout').click();
 


        
    });
});