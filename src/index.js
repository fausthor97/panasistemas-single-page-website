
// scripts
//-------------------------------------------------
import $ from 'jquery'; // must add $ and jQuery as global, read about in webpack docs in shimming section
window.jQuery = $; window.$ = $; // read about adding jquery in webpack in the issues section of webpack on github
import 'sidr/dist/jquery.sidr.min.js';
import 'jquery-parallax.js/parallax.min.js';
import './js/fade-in-navbar.js';
import './js/smooth-anchor-links.js';
import './js/side-menu.js';
import './js/multilevel-accordion.js';
import 'owl.carousel';
import 'lightslider/dist/js/lightslider.min.js';
import 'lightgallery/dist/js/lightgallery.min.js';
import 'lg-zoom/dist/lg-zoom.min.js';
import 'lg-fullscreen/dist/lg-fullscreen.min.js';
import 'ionicons/dist/ionicons.js';


// styles
//-------------------------------------------------
import 'sidr/dist/stylesheets/jquery.sidr.light.css';
import '@fortawesome/fontawesome-free/css/solid.min.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import 'lightslider/dist/css/lightslider.min.css';
import 'lightgallery/dist/css/lightgallery.min.css';
import 'ionicons/dist/css/ionicons.min.css';
import './sass/index.sass';


// vendor plugins initializations
//-------------------------------------------------
$(document).ready(function() {

	$('#sidr-button').sidr({ // sidr menu
		source: '#sidr',
		displace: false,
		side: 'right'
	});

    $('.owl-carousel').owlCarousel({ // owl carousel
        items: 1,
        loop: true,
        dots: true,
        autoplay: true
    });

    $('#lightSlider').lightSlider({ // lightSlider
        gallery: true,
        item: 1,
        controls: false,
        thumbItem: 5,
        onSliderLoad: function(el) {
            el.lightGallery();
        }

    });
}); 

function closeSidr() {
	$.sidr('close', 'sidr');
}
