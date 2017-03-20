function IvyApp($grid) {
    this.$mainGrid = $('#mainGrid');
    this.$grid = $grid;
    
};

IvyApp.prototype.addItem = function(imageFileName) {
    var image =  '<div class="grid-item"><a href="#"><div class="thumbnail">' +
    '<img src="images/' + imageFileName + '"class="img img-thumbnail"/></div></a>' +
    '</div>';
    

    this.$grid.masonry()
      .append(image)
      .masonry( 'appended', image)
    
};

IvyApp.prototype.removeItem = function() {
};

IvyApp.prototype.addTag = function() {
};

IvyApp.prototype.removeTag = function() {
};

