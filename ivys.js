
 -$('.grid').isotope({		 +$(document).ready(function() {
	
    $grid = $('.grid').isotope({
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

});		  });
