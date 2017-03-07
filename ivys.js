$(document).ready(function() {

    var $grid = $('.grid').imagesLoaded( function() {
      // init Isotope after all images have loaded
      $grid.masonry({
        // options
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
      });
    });
});
