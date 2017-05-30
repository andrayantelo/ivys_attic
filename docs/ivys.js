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
    
    this.$tagList = $('#tagList');
    
    
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

IvyApp.prototype.addTag = function (tagId, tagObject) {
    // Add a tag to the page by Id
    // tagObject is the object containing all the tags
    "use strict";
    var tagElement = '<li id="' + tagId + '"><a class="tag" href="#">' +
        tagObject[tagId] +
        '<i class="fa fa-times" aria-hidden="true"></i> \
        </a></li>';
    this.$tagList.append(tagElement);
};

IvyApp.prototype.removeTag = function (tagId) {
    // Remove a tag from the page
    "use strict";
    // Remove by tag Id
    this.tagList.find('#' + tagId).remove();
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
