$(document).ready(function() {


// True parallax EFFECT, bg scolls slowly slightly up

    // cache the window object
    var $window = $(window);

    //parallax background effect
    $('section[data-type="background"]').each(function() {

        var $bgobj = $(this); // assigning the object

        $(window).scroll(function() {

            // scroll the background at var speed
            // the yPos is a negative value because we're scrolling up

            var yPos = -($window.scrollTop() / $bgobj.data('speed'));

            var coords = '50%' + yPos + 'px';

            $bgobj.css({ 'background-position' : coords });

        });
    });

});