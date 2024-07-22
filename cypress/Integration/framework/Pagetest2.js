import Login_po2 from "../../support/PageObjectModel/Tutorialsninja2ndApproach/Login";
//import Password_po from "../../support/PageObjectModel/Tutorialsninja2ndApproach/ChangePassword";
//import Logout_po from "../../support/PageObjectModel/Tutorialsninja2ndApproach/Logout";
//import LoginAgain_po from "../../support/PageObjectModel/Tutorialsninja2ndApproach/LoginAgain";
import Cart_po from "../../support/PageObjectModel/Tutorialsninja2ndApproach/AddtoCart";
//import wishlist_po from "../../support/PageObjectModel/Tutorialsninja2ndApproach/AddtoWishlist";

describe('Page object Model', () => {

    const login = new Login_po2();
    //const changePW = new Password_po();
    //const logout = new Logout_po();
    //const loginAgain = new LoginAgain_po();
    const cart = new Cart_po();
    //const wishlist = new wishlist_po();

    it('Page tests', () => {

        // enter the url
        login.EnterUrl2();

        // login to the application
        login.login2();
        // change the password
        //changePW.changePassword();

        // assert the confirmation message
        //changePW.AssertConfirmationmsg();

         // logging out from the application
         //logout.logout();

         // login again after resetting your password
        //loginAgain.loginwithNewPassword();

        // click on desktop and select Show All Desktops option
        cart.clickonDesktop();


        // change the quantity of iPod classic from 1 to 3
        cart.changeQty();

        // click on add to cart button
        cart.clickonAddtoCart();

        // At last click on checkout button
        cart.clickonCheckout();

         // 1st approach to add a item to wishlist
         //wishlist.addtoWishlist();

         // 2nd approach to add a item to wishlist
         //wishlist.addtowishlist2();

    });
    

    it.skip('Logout-test', () => {

       
        
    });
    //it('Login Again-test', () => {

        
        
    //});

    it('Add to cart-test', () => {

        

        
        
    });
    it.skip('Add to wishlist-test', () => {

       
        
    });
});