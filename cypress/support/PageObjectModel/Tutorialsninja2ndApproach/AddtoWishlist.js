class wishlist_po{

    addtoWishlist(){

        // click on link - Brand of the footer section
        cy.contains('Brands').click();
        // click on Sony brand
        cy.contains('Sony').click();
        // Add the Sony VAIO laptop to your wishlist
        cy.get('[data-original-title="Add to Wish List"]').click();
        
        // click on Wishlist icon in the header section to check whether the item is added or not
        cy.xpath('(//span[@class="hidden-xs hidden-sm hidden-md"])[4]').click({force: true});
    }
    addtowishlist2(){
        // search for Nikon camera
        cy.get('[name="search"]').type('Nikon')
        // click on search icon
        cy.get('.fa-search').click({force:true});

        // click on product image
        cy.contains('Nikon D300').click({force:true});

        // once the product details page is loaded click on wishlist icon to add the item
        cy.get('[data-original-title="Add to Wish List"]').click()

        // click on Wishlist icon in the header section to check whether the item is added or not
        cy.xpath('(//span[@class="hidden-xs hidden-sm hidden-md"])[4]').click({force: true});

    }
}
export default wishlist_po;