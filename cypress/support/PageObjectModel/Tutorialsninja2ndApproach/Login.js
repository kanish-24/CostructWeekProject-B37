class Login_po2{

    EnterUrl2(){

        cy.visit('https://tutorialsninja.com/demo/');

    }
    login2(){

        // click on My Account dropdown
        cy.contains('My Account').click();

        // then click on Login option
        cy.contains('Login').click()

        // enter your email-id
        cy.get('#input-email').type('chaddhakanishk@gmail.com')

        // enter your password
        cy.get('#input-password').type('kanish26')

        // click on login button
        cy.get('[value="Login"]').click();

         // Asserting the Warning message
         //cy.contains('exceeded').should('have.text','Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.');
    
    }
    changePassword(){

          
        // click on change your password option
        cy.xpath("//a[contains(text(),'Change your password')]").click({force: true});

        // Type your new password
        cy.get('#input-password').type('kanish24');

        // confirm your new password
        cy.get('[placeholder="Password Confirm"]').type('kanish24');

        // click on continue button
        cy.get('[value="Continue"]').click({force: true});
   }
   AssertConfirmationmsg(){

       // assert the password changing confirmation message
        cy.contains('successfully updated.').should('have.text','Success: Your password has been successfully updated.')

   }


}
export default Login_po2;