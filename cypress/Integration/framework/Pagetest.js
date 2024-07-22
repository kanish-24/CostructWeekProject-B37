import Login_po from "../../support/PageObjectModel/TutorialsNinja/login";
import Password_po from "../../support/PageObjectModel/TutorialsNinja/forgotpassword";

describe('Test suites', () => {

    const login = new Login_po();
    const changePW = new Password_po();


    it('Login', () => {

        // enter the url
        login.EnterUrl();
        // login to the application
        login.login();

        //click on forgot password
        changePW.clickonforgotPassword();
        // Assert the confirmation message after clicking on continue button
        changePW.Assertthemsg();
        
    });

});