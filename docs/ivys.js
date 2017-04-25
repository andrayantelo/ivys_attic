function IvyApp($grid) {
    this.$mainGrid = $('#mainGrid');
    this.$grid = $grid;
    
    this.$menuArrow = $('.toggle-arrow');
    this.$menuFooter = $('.menu-footer');
    
    
    // Click handlers
    this.$menuArrow.click(this.toggleFooterMenu);
};

IvyApp.prototype.addItem = function(imageFileName) {
    // adds an image to the masonry grid
    var $image =  $('<div class="grid-item"><a href="#"><div class="thumbnail">' +
    '<img src="images/' + imageFileName + '"class="img img-thumbnail"/></div></a>' +
    '</div>');
    
    this.$grid
      .append($image)
      .masonry( 'appended', $image)
};

IvyApp.prototype.removeItem = function() {
    // removes an image from masonry grid
    
};

// Footer menu arrow function 
IvyApp.prototype.toggleFooterMenu = function() {
    // Toggles footer menu
    $(this).parent().parent().children('.menu-footer').collapse('toggle');
}


// Product State and Product Class skeletons

var emptyProductState = function(params) {
    
    return {
        // seaWinds Id, SKU number?
        id: params.seaWindsId,
        // Product name
        name: params.name,
        // product tags
        tags: [],
        // Collection name
        collection: params.collection
    };
    
};

var Product = function(state) {
    
    var self = this;
    self.state = state;
};


Product.prototype.addTag = function() {
};

Product.prototype.removeTag = function() {
};


// Favorite (starred) items ?

var Favorites = function() {
    
    return {
        //id refers to the product id (SKU?)
        // array of products' tags
        id: []
    };
    
};

// Should I make favorites a class? with methods like addItem, removeItem
// and that's probably it.
