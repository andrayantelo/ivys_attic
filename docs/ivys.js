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
    
    // Footer links
    this.$aboutUsLink = $('#about-us-link');
    this.$hoursLocationLink = $('#hours-location-link');
    this.$contactLink = $('contact-link');
    
    this.$contentWrapper = $('#content-wrapper');
    
    // Page sections
    this.$mainContent = $('#main-content');
    this.$storeInfoContent = $('#store-info-content');
    this.$contactUsContent = $('#contact-us-content');
    
    // Click handlers
    this.$menuArrow.click(this.toggleFooterMenu);
    // About Us link
    this.$aboutUsLink.click(function () {
        this.hideContent();
        this.showDiv(this.$storeInfoContent);
    }.bind(this));
    
    // Hours & Location link
    
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
        // product tags
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
    self.all_products = {};
    self.favorite_products = {};
    self.all_tags = {};
    self.selected_tags = {};
    self.selected_products = {};
};
