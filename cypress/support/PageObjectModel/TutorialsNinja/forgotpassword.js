class Password_po{

    clickonforgotPassword(){

        // click on forgotten password link
        cy.contains('Forgotten Password').click();

        // type your existing email-id to get reset password mail
        cy.xpath('//input[@placeholder="E-Mail Address"]').type('chaddhakanishk@gmail.com')

        // then click on continue button
        cy.get('[value="Continue"]').click().should('have.attr','type');
        
        

    }
    Assertthemsg(){

        
        // Asserting the confirmation message
        cy.contains('confirmation').should('have.text','An email with a confirmation link has been sent your email address.');

        // Note: The user didn't recieve any mail to reset the password
        // Note2: In case users forgot their password so, then they will stuck and unable to proceed further
        // This will impact the business workflow of the customer badly

    }
}
export default Password_po;