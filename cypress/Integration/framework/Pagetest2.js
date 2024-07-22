import Login_po2 from "../../support/PageObjectModel/Tutorialsninja2ndApproach/Login";
import Logout_po from "../../support/PageObjectModel/Tutorialsninja2ndApproach/Logout";
import LoginAgain_po from "../../support/PageObjectModel/Tutorialsninja2ndApproach/LoginAgain";
import Cart_po from "../../support/PageObjectModel/Tutorialsninja2ndApproach/AddtoCart";
import wishlist_po from "../../support/PageObjectModel/Tutorialsninja2ndApproach/AddtoWishlist";

describe('Page object Model', () => {

    const login = new Login_po2();
    const logout = new Logout_po();
    const loginAgain = new LoginAgain_po();
    const cart = new Cart_po();
    const wishlist = new wishlist_po();

    it('Page tests', () => {

        // enter the url
        login.EnterUrl2();

        // login to the application
        login.login2();

        // change the password
        login.changePassword();

        // assert the confirmation message
        login.AssertConfirmationmsg();

        //Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.
        // the application is showing me this error when I tried to login with my new password
        // And because of that website is unable to proceed further
        // That's why it is showing assertion errors for rest of the functionalities
    });
    

    it('Logout-test', () => {

        // enter the url
        login.EnterUrl2();

        // logging out from the application
        logout.logout();

       
        
    });
    it('Login Again-test', () => {

        // enter the url
        login.EnterUrl2();
         // login again after resetting your password
        loginAgain.loginwithNewPassword();

        
        
    });

    it('Add to cart-test', () => {

        // enter the url
        login.EnterUrl2();

        // click on desktop and select Show All Desktops option
        cart.clickonDesktop();

        // change the quantity of iPod classic from 1 to 3
        cart.clickonimg();
 
        // click on add to cart button
        cart.clickonAddtoCart();
 
        // At last click on checkout button
        cart.clickonCheckout();

        
    });
    it('Add to wishlist-test', () => {

        // enter the url
        login.EnterUrl2();

        // 1st approach to add a item to wishlist
        wishlist.addtoWishlist();

        // 2nd approach to add a item to wishlist
        wishlist.addtowishlist2();

       
        
    });
});