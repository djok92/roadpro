var $ = jQuery.noConflict();

$(document).ready(function() {
    $('#galleryContainer').masonry({
        itemSelector: '.galleryItem',
        columnWidth: 320,
        isFitWidth: true,
    });

    /**
     * Open modal on click
     */

    $('.inner-item > a, .inner-item h5 a').click(function(e) {
        e.preventDefault();
        $("#modal").fadeIn();
    });

    /**
     * Close modal
     */

    $(".modal-close").click(function(e) {
        e.preventDefault();
        $("#modal").fadeOut();
    });

    /**
     * Close modal on outside click
     */

    $(document).on("click touchstart", function(event) {
        if ($(event.target).has(".modal-container").length) {
            $("#modal").fadeOut();
        }
    });
});