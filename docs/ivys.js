/*jslint devel: true, es5: true, nomen: true*/
/*global
    browser:true, Promise, firebase, $, jQuery, alert, moment, Spinner, LocalCalendarStorage, FirebaseCalendarStorage
*/

function IvyApp($grid) {
    "use strict";
    this.$mainGrid = $('#mainGrid');
    this.$grid = $grid;
    
    this.$menuArrow = $('.toggle-arrow');
    this.$menuFooter = $('.menu-footer');
    
    
    // Click handlers
    this.$menuArrow.click(this.toggleFooterMenu);
}

IvyApp.prototype.initFirebase = function () {
    "use strict";
    // Shortcuts to Firebase SDK features.
    this.auth = firebase.auth();
    this.storage = firebase.storage();
    
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

IvyApp.prototype.onAuthStateChanged(function (user) {
    "use strict";
    if (user) {
        // User is signed in.
        var isAnonymous = user.isAnonymous,
            uid = user.uid;
        // Fill favorites with user's favorites
    } else {
        // User is signed out.
        // Clear favorites
    }
});

IvyApp.addToFavorites = function () {
    // Add a product to favorite's list
    // sign in user anonymously
    "use strict";
    this.signIn();
};

IvyApp.prototype.addItem = function (imageFileName) {
    // adds an image to the masonry grid
    "use strict";
    var $image =  $('<div class="grid-item"><a href="#"><div     class="thumbnail">' +
        '<img src="images/' + imageFileName + '"class="img img-thumbnail"/></div></a>' +
        '</div>');
    
    this.$grid
        .append($image)
        .masonry('appended', $image);
};

IvyApp.prototype.removeItem = function () {
    // removes an image from masonry grid
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
        // seaWinds Id, SKU number?
        id: params.seaWindsId,
        // Product name
        name: params.name,
        // product tags eg 'tag-name' : 'tag-name' ?
        tags: {},
        // Collection name
        collection: params.collection
    };
    
};

var Product = function (state) {
    "use strict";
    var self = this;
    self.state = state;
};


Product.prototype.addTag = function () {
    "use strict";
};

Product.prototype.removeTag = function () {
    "use strict";
};

// Product Collection Class

var ProductCollection = function () {
    "use strict";
    var self = this;
    self.all_products = {}; // sku number : 'product name' ?
    self.favorite_products = {}; // sku number : 'product name' ?
    self.all_tags = {}; // 'tag-name' : 'tag-name' ?
    self.selected_tags = {}; // 'tag-name' : true or false ?
    self.selected_products = {}; // 'product name' : true or false ?
};
