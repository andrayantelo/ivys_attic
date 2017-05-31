/*jslint devel: true, es5: true, nomen: true*/
/*global
    browser:true, Promise, firebase, $, jQuery, alert, moment, Spinner, LocalCalendarStorage, FirebaseCalendarStorage
*/

// Helper functions for IvyApp, Product, and ProductCollection classes
var generateUniqueId = function () {
    // Unique Ids for tags
    "use strict";
    var uniqueId = (Math.floor((Math.random() + Date.now()) * 10e4)).toString();
    return uniqueId;
};

function IvyApp($grid) {
    "use strict";
    this.$mainGrid = $('#mainGrid');
    //this.$grid = $grid;
    
    this.$menuArrow = $('.toggle-arrow');
    this.$menuFooter = $('.menu-footer');
    
    this.$brandLink = $('#brand-link');
    
    // Footer links
    this.$aboutUsLink = $('#about-us-link');
    this.$hoursLocationLink = $('#hours-location-link');
    this.$contactUsLink = $('#contact-us-link');
    this.$homeLink = $('#home-link');
    
    this.$contentWrapper = $('#content-wrapper');
    
    // Page sections
    this.$mainContent = $('#main-content');
    this.$storeInfoContent = $('#about-us-content');
    this.$contactUsContent = $('#contact-us-content');
    
    // Click handlers
    this.$menuArrow.click(this.toggleFooterMenu);
    // About Us link
    this.$aboutUsLink.click(function () {
        this.hideContent();
        this.showDiv(this.$storeInfoContent);
    }.bind(this));
    
    // Hours & Location link
    this.$hoursLocationLink.click(function () {
        this.hideContent();
        this.showDiv(this.$contactUsContent);
    }.bind(this));
    
    // Contact Us Link
    this.$contactUsLink.click(function () {
        this.hideContent();
        this.showDiv(this.$contactUsContent);
    }.bind(this));
    
    // Home Link (Ivy's Attic Brand Link TODO add Home link in //footer)
    
    this.$homeLink.click(function () {
        this.hideContent();
        this.showDiv(this.$mainContent);
    }.bind(this));
    
    this.$brandLink.click(function () {
        this.hideContent();
        this.showDiv(this.$mainContent);
    }.bind(this));
    
}

IvyApp.prototype.hideContent = function () {
    // Hide all content divs
    "use strict";
    var div;
    $('.content-div').each(function () {
        $(this).hide();
    });
};

IvyApp.prototype.showDiv = function (divToShow) {
    "use strict";
    divToShow.show();
};

IvyApp.prototype.hideDiv = function (divToHide) {
    "use strict";
    divToHide.hide();
};

IvyApp.prototype.initFirebase = function () {
    "use strict";
    // Shortcuts to Firebase SDK features.
    this.auth = firebase.auth();
    this.storage = firebase.storage();
    this.storageRef = this.storage.ref();
    
    // Logs debugging information to the console.
    firebase.database.enableLogging(false);
    
    // Initiates Firebase auth and listen to auth state changes.
    this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));

};

IvyApp.prototype.signIn = function () {
    // Sign in Firebase using popup auth and Google as the identity provider.
    "use strict";
    
    this.auth.signInAnonymously().catch(function (error) {
        var errorCode = error.code,
            errorMessage = error.message;
        
    });
};

IvyApp.prototype.onAuthStateChanged = function (user) {
    "use strict";
    if (user) {
        // User is signed in.
        var isAnonymous = user.isAnonymous,
            uid = user.uid;
        console.log("user is signed in " + uid);
        // Fill favorites with user's favorites
    } else {
        // User is signed out.
        // Clear favorites
        console.log("User is signed out");
    }
};

IvyApp.prototype.addToFavorites = function () {
    // Add a product to favorite's list
    // sign in user anonymously
    "use strict";
    this.signIn();
};

IvyApp.prototype.addItem = function (imageId, imagePath) {
    // adds an image to the masonry grid
    "use strict";
    var $image =  $('<div id="' + imageId + '"class="grid-item"><a href="#"><div class="thumbnail">' +
        '<img src="' + imagePath + '"class="img img-thumbnail"/></div></a>' +
        '</div>');
    
    this.$grid
        .append($image);
    
    // Re-layout the images on the page
    $('.grid').imagesLoaded(function () {
        this.$grid.masonry('appended', $image);
    }.bind(this));
};

IvyApp.prototype.removeItem = function (imageId) {
    // removes an image from masonry grid
    "use strict";
    var imageElement = document.getElementById(imageId);
    
    this.$grid.masonry('remove', imageElement);
    
    // Re-layout the images on the page
    $('.grid').imagesLoaded(function () {
        this.$grid.masonry('layout');
    }.bind(this));
};

IvyApp.prototype.removeCollection = function () {
    // Removes images based on if they are a Product 
    // from a certain collection, or they have a certain tag
    "use strict";
};

IvyApp.prototype.addCollection = function () {
    // Add images based on if they are a Product from
    // a certain collection, or they have a certain tag
    "use strict";
};

// Footer menu arrow function 
IvyApp.prototype.toggleFooterMenu = function () {
    // Toggles footer menu
    "use strict";
    $(this).parent().parent().children('.menu-footer').collapse('toggle');
};

// Product State and Product Class skeletons

var emptyProductState = function (params) {
    "use strict";
    return {
        // SKU number
        id: params.skuNumber,
        // Product name
        name: params.name,
        // product tags eg 'tag-id' : 'tag-name'
        tags: {},
        // Collection name
        collection: params.collection,
        // Image link
        imgLink: params.link
    };
    
};

var Product = function (state) {
    "use strict";
    var self = this;
    self.state = state;
};


Product.prototype.addTag = function (tagId, tagName) {
    // Add tag associated with product to product's state
    "use strict";
    var self = this;
    self.state.tags[tagId] = tagName;
};

Product.prototype.removeTag = function (tagId) {
    // Remove tag associated with product from product's state
    "use strict";
    var self = this;
    if (self.state.tags[tagId]) {
        delete self.state.tags[tagId];
    }
};

// Product Collection Class
// Example Maui-Collection, Milan Collection, etc

// Should ProduceCollection have a State the way the Product class does? TODO

var ProductCollection = function () {
    "use strict";
    var self = this;
    
    // All products in this Collection
    self.all_products = {}; // sku number : 'product name'
    // Products in the collection the user favorited
    self.favorite_products = {}; // sku number : 'product name'
    // All tags associated with all the products in this collection
    self.all_tags = {}; // 'tag-id' : 'tag-name'
    // The currently selected tags that are displayed on the webpage
    self.selected_tags = {}; // 'tag-name' : true or false
    // The products associated with the selected_tags
    self.selected_products = {}; // 'product SKU number' : true or false
};

ProductCollection.prototype.generateAllTags = function () {
    // Goes through every product in all_products and adds their 
    // tags to all_tags. No duplicates
    "use strict";
};
