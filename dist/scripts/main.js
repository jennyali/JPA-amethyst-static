$(document).ready(function() {

/*===========================

            MODEL

=============================*/

//------- ARRAYS ----------//

// ------ OBJECTS -----------------//

//------- FUNCTION CONSTRUCTORS ----------//

//------- ARRAY UPDATERS VIA FUNCTION CONSTRUCTORS -----//


/*===========================

            VIEW

=============================*/

//------- SELECTORS/VARIABLES ----------//

// BODY
var $body = $('body');

// NAVBAR DROPDOWN
var $navbarCollapse = $('.navbar-collapse');

// HEADER DROPDOWN
var $headerNavBtn = $('#header-burger-menu-btn');
var $headerNavDropdown = $('#header-dropdown');

// HEADER BURGER MENU
var $burgerMenuTopBar = $('.navbar-toggle .icon-bar-top');
var $burgerMenuBottomBar =$('.navbar-toggle .icon-bar-bottom');
var $burgerMenuMidBar = $('.navbar-toggle .icon-bar-mid');


//------ TEMPLATES ---------//

//------ EVENTS ----------//


$headerNavBtn.on({
// CLICK the burger menu to toggle icon and dropdown class change.

    'click' : function(event) {

        headerNavbarHandler(this);
        burgerMenuRotateBars(this);
    },

    'touchstart' : function(event) {

        headerNavbarHandler(this);
        burgerMenuRotateBars(this);
    }
});


/*===========================

        CONTROLLER

=============================*/

//------- FUNCTIONS ----------//

// Toggles class on dropdown menu in header.
function headerNavbarHandler(selector) {

    //$headerNavDropdown.toggleClass('navbar-collapse--appear');

    $body.toggleClass('menu-open');
    $navbarCollapse.toggleClass('open');
}

// Toggles class on burger menu icon in header.
function burgerMenuRotateBars(selector) {

    $burgerMenuTopBar.toggleClass('icon-bar-top--rotate');
    $burgerMenuBottomBar.toggleClass('icon-bar-bottom--rotate');
    $burgerMenuMidBar.toggleClass('icon-bar-mid--fade');
}


//------- FUNCTION CALLS ----------//



/*===========================

        CODE SNIPPETS
* code taken from previous projects.

=============================*/

// --------     IE FIX FOR JITTER PARALLAX BACKGROUNDS      -----//

if(navigator.userAgent.match(/Trident\/7\./)) { // if IE
        $('body').on("mousewheel", function () {
            // remove default behavior
            event.preventDefault(); 

            //scroll without smoothing
            var wheelDelta = event.wheelDelta;
            var currentScrollPosition = window.pageYOffset;
            window.scrollTo(0, currentScrollPosition - wheelDelta);
        });
}

// --------     PARALLAX SLIGHT SCROLL UP EFFECT    --------//

$('section[data-type="background"]').each(function() {

    var $window = $(window);

    var $bgobj = $(this); // assigning the object

    $(window).scroll(function() {

        // scroll the background at var speed
        // the yPos is a negative value because we're scrolling up

        var yPos = ($window.scrollTop() / $bgobj.data('speed'));

        var coords = '50%' + yPos + 'px';

        $bgobj.css({ 'background-position' : coords });

    });
 });


//----------    BOOTSTRAP CAROUSEL FADE IN ANIMATION -------------//

$('.carousel').carousel();


//----------    INTO VIEW SCROLL EFFECTS --------------------------//

var $window = $(window);

$window.on('scroll', check_if_in_view); //---- scroll event 

function check_if_in_view(){
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($('section[data-scroll="in-view-animation"]'), function(){
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)){
            $element.addClass('in-view');
        } 
        /*else {
            $element.removeClass('in-view');
        }*/
    });
}

//------------ Change a CSS class's height to match the current screens height ----------//

$(window).on("load resize", function() {
    $(".fill-screen").css("height", window.innerHeight);
});

$(window).on("load resize", function() {
    $(".half-screen").css("height", window.innerHeight / 2 );
});

$(window).on("load resize", function() {
    $(".third-screen").css("height", window.innerHeight / 3 );
});

//-------------------------

//console.log($('.site-header').height);


});