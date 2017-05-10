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

IvyApp.prototype.addItem = function (imageFileName) {
    // adds an image to the masonry grid
    "use strict";
    var $image =  $('<div id="' + imageFileName + '"class="grid-item"><a href="#"><div class="thumbnail">' +
        '<img src="images/' + imageFileName + '"class="img img-thumbnail"/></div></a>' +
        '</div>');
    
    this.$grid
        .append($image);
    
    $('.grid').imagesLoaded(function () {
        this.$grid.masonry('appended', $image);
    }.bind(this));
};

IvyApp.prototype.removeItem = function (imageFileName) {
    // removes an image from masonry grid
    "use strict";
    var imageElement = document.getElementById(imageFileName);
    
    this.$grid.masonry('remove', imageElement);
    
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
        // seaWinds Id, SKU number?
        id: params.seaWindsId,
        // Product name
        name: params.name,
        // product tags
        tags: {},
        // Collection name
        collection: params.collection
        // Should I also include the image in here? 
        // I mean the filename for the image of this product?
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
    self.all_products = {};
    self.favorite_products = {};
    self.all_tags = {};
    self.selected_tags = {};
    self.selected_products = {};
};
