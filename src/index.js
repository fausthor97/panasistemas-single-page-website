// scripts
//-------------------------------------------------
import $ from 'jquery'; // must add $ and jQuery as global, read about in webpack docs in shimming section
window.jQuery = $; window.$ = $; // read about adding jquery in webpack in the issues section of webpack on github
import 'sidr/dist/jquery.sidr.min.js';
import 'jquery-parallax.js/parallax.min.js';
import './js/fade-in-navbar.js';
import './js/smooth-anchor-links.js';
import 'owl.carousel';


// styles
//-------------------------------------------------
import 'sidr/dist/stylesheets/jquery.sidr.light.css';
import '@fortawesome/fontawesome-free/css/solid.min.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import './sass/index.sass';


// initializations
//-------------------------------------------------

$(document).ready(function() {

	$('#sidr-button').sidr({ // sidr menu
		source: '#sidr',
		displace: false,
		side: 'right'
	});

    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        autoplay: true
    }); // owl carousel

}); 

function closeSidr() {
	$.sidr('close', 'sidr');
}
