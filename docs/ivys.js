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
    this.$grid = $grid;
    
    this.$menuArrow = $('.toggle-arrow');
    this.$menuFooter = $('.menu-footer');
    
    
    // Click handlers
    this.$menuArrow.click(this.toggleFooterMenu);
}

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
        // product tags eg 'tag-id' : 'tag-name' ?
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
    // Add tag associated with product to product's state
    "use strict";
};

Product.prototype.removeTag = function () {
    // Remove tag associated with product from product's state
    "use strict";
};

// Product Collection Class

var ProductCollection = function () {
    "use strict";
    var self = this;
    self.all_products = {}; // sku number : 'product name'
    self.favorite_products = {}; // sku number : 'product name'
    self.all_tags = {}; // 'tag-id' : 'tag-name'
    self.selected_tags = {}; // 'tag-name' : true or false
    self.selected_products = {}; // 'product SKU number' : true or false
};

ProductCollection.prototype.generateAllTags = function () {
    // Goes through every product in all_products and adds their 
    // tags to all_tags. No duplicates
    "use strict";
};
