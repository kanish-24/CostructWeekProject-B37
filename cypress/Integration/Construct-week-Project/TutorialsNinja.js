///<reference types = "cypress"/>


describe('Tutorials Ninja - Forgot Password functionality', () => {
    it('Testcases - To verify forgotten password functionality is working fine or not', () => {

        cy.visit('https://tutorialsninja.com/demo/');

        // Asserting the url
        cy.url().should('include','demo')

        // Click on My Account dropdown in the header section
        cy.contains('My Account').click();

        // click on login option from My Account Dropdown
        cy.contains('Login').click();

        // Type email-address
        cy.get('[name="email"]').type('chaddhakanishk@gmail.com');

        //Click on 'Forgotten Password' link from Login page
        cy.contains('Forgotten Password').click();

        // 4. Check the registered email address for which the password got reset (Validate ER-3)
        // 5. Click on the link for resetting the password from the received email body (Validate ER-4)
        
        // **email is not recievied after clicking on forgotten password,providing a valid email-id and getting the confirmation message


        // 2. Enter the email address of an existing account for which you have forgot the password 
        cy.get('#input-email').type('chaddhakanishk@gmail.com');

        //3. Click on continue button to have a password reset link e-mailed to you.
        cy.get('[value="Continue"]').click();

        // Asserting confirmation message
        cy.on('window:confirm',(confirmmsg)=>{

            expect(confirmmsg).to.equal('An email with a confirmation link has been sent your email address.');
  
            return true;
  
  
        })
        // email is not recieved then I typed a new password by my own to check the functionality
        //cy.get('#input-password').type('#kanish23!');

        // enter the existing email address
        //cy.get('#input-email').type('kanishchaddha1999@gmail.com');

 
         
    });

});

