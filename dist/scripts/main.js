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

// View

// Click burger menu to dropdown menu - sm-screen
var $headerNavBtn = $('#header-burger-menu-btn');
var $headerNavDropdown = $('#header-dropdown');

var $burgerMenuTopBar = $('.navbar-toggle .icon-bar-top');
var $burgerMenuBottomBar =$('.navbar-toggle .icon-bar-bottom');


// Click burger menu to dropdown menu - sm-screen
$headerNavBtn.on({
    'click' : function() {
        headerNavbarHandler(this);
        burgerMenuRotateBars(this);
    },

    'blur' : function() {
        headerNavbarHandler(this);
        burgerMenuRotateBars(this);
    }
});

// Controller

function headerNavbarHandler(selector) {
    //console.log('btn clicked');

    $headerNavDropdown.toggleClass('navbar-collapse--appear');
}

function burgerMenuRotateBars(selector) {

    $burgerMenuTopBar.toggleClass('icon-bar-top--rotate');
    $burgerMenuBottomBar.toggleClass('icon-bar-bottom--rotate');
}

});