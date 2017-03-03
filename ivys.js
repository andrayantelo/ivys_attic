$(document).ready(function() {
    
    var $grid = $('.grid').imagesLoaded( function() {
      // init Isotope after all images have loaded
      $grid.isotope({
        // options
        itemSelector: '.grid-item',
        layoutMode: 'masonry',
        percentPosition: true,
        masonry: {
            // use element for option
            columnWidth: 100
        }
      });
    });
   
});		 
