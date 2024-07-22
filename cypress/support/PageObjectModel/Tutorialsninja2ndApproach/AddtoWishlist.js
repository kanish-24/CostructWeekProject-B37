class wishlist_po{

    addtoWishlist(){

        // click on link - Brand of the footer section
        cy.contains('Brands').click();
        // click on Sony brand
        cy.contains('Sony').click();
        // Add the Sony VAIO laptop to your wishlist
        cy.get('[data-original-title="Add to Wish List"]').click();
        
        // click on Wishlist icon in the header section to check whether the item is added or not
        cy.get('.fa-heart').click()
    }
    addtowishlist2(){
        // search for Nikon camera
        cy.get('[name="search"]').type('Nikon','{enter}');

        // click on product image
        cy.get('[alt="Nikon D300"]').click();

        // once the product details page is loaded click on wishlist icon to add the item
        cy.get('[data-original-title="Add to Wish List"]').click()

        // click on Wishlist icon in the header section to check whether the item is added or not
        cy.get('.fa-heart').click()

    }
}
export default wishlist_po;