  class Password_po{

  changePassword(){

           // click on change your password option
           cy.contains('Change your password').click({force: true}).should('have.attr','href');

           // Type your new password
           cy.get('#input-password').type('kanish25');

           // confirm your new password
           cy.get('[placeholder="Password Confirm"]').type('kanish25');

           // click on continue button
           cy.get('[value="Continue"]').click({force: true});
      }
      AssertConfirmationmsg(){

          // assert the password changing confirmation message
           cy.contains('successfully updated.').should('have.text','Success: Your password has been successfully updated.')

      }
   }

   export default Password_po;