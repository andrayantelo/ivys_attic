function IvyApp($grid) {
    this.$mainGrid = $('#mainGrid');
    this.$grid = $grid;
    
    this.$menuArrow = $('.toggle-arrow');
    
    
    // Click handlers
    this.$menuArrow.click(function() {
        this.toggleMenu();
    }.bind(this));
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

IvyApp.prototype.addTag = function() {
};

IvyApp.prototype.removeTag = function() {
};

// Footer menu arrow function 
IvyApp.prototype.toggleMenu = function() {
    console.log("Toggle menu!");
}
