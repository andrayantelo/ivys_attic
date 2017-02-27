var $grid = $('.grid').imagesLoaded( function() {
  // init Masonry after all images have loaded
    $('.grid').masonry({
        // options
        itemSelector: '.grid-item',
        columnWidth: 200
    });
});
