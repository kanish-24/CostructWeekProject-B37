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
        cy.get('#input-password').type('kanish25')

        // click on login button
        cy.get('[value="Login"]').click();

         // Asserting the Warning message
         //cy.contains('exceeded').should('have.text','Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.');
    
    }

}
export default Login_po2;