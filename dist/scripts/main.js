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

// HEADER DROPDOWN
var $headerNavBtn = $('#header-burger-menu-btn');
var $headerNavDropdown = $('#header-dropdown');

// HEADER BURGER MENU
var $burgerMenuTopBar = $('.navbar-toggle .icon-bar-top');
var $burgerMenuBottomBar =$('.navbar-toggle .icon-bar-bottom');

// EXCERPT GALLERY MODAL
var $excerptGalleryModal = $('#excerpt-gallery-modal');
var $excerptGalleryModalCancel = $('#excerpt-gallery-modal .icon-delete-1');
var $excerptGalleryThumbnail = $('.gallery-excerpt__thumbnail');


//------ TEMPLATES ---------//

//------ EVENTS ----------//

$headerNavBtn.on({
// CLICK the burger menu to toggle icon and dropdown class change.

    'click' : function() {
        headerNavbarHandler(this);
        burgerMenuRotateBars(this);
    },

// UNFOCUS the burger menu to toggle icon and dropdown class change.
    //'blur' : function() {
        //headerNavbarHandler(this);
        //burgerMenuRotateBars(this);
    //}
});


$excerptGalleryThumbnail.on({

    'click' : function() {
        excerptModalShowHandler();
    }
})

$excerptGalleryModalCancel.on({

    'click' : function() {
        excerptModalCancelHandler();
    }
})

/*===========================

        CONTROLLER

=============================*/

//------- FUNCTIONS ----------//

// Toggles class on dropdown menu in header.
function headerNavbarHandler(selector) {

    $headerNavDropdown.toggleClass('navbar-collapse--appear');
}

// Toggles class on burger menu icon in header.
function burgerMenuRotateBars(selector) {

    $burgerMenuTopBar.toggleClass('icon-bar-top--rotate');
    $burgerMenuBottomBar.toggleClass('icon-bar-bottom--rotate');
}

function excerptModalShowHandler(selector) {

    $excerptGalleryModal.addClass('gallery-show');
}

function excerptModalCancelHandler(selector) {

    $excerptGalleryModal.removeClass('gallery-show');
}

//------- FUNCTION CALLS ----------//



/*===========================

        CODE SNIPPETS
* code taken from previous projects.

=============================*/


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
        } else {
            $element.removeClass('in-view');
        }
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