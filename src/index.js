// scripts
//-------------------------------------------------
import $ from 'jquery'; // must add $ and jQuery as global, read about in webpack docs in shimming section
window.jQuery = $; window.$ = $; // read about adding jquery in webpack in the issues section of webpack on github
import 'sidr/dist/jquery.sidr.min.js';
import 'jquery-parallax.js/parallax.min.js';
import './js/fade-in-navbar.js';
import './js/smooth-anchor-links.js';


// styles
//-------------------------------------------------
import 'sidr/dist/stylesheets/jquery.sidr.light.css';
import '@fortawesome/fontawesome-free/css/solid.min.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import './sass/index.sass';


// initializations
//-------------------------------------------------

// sidr menu init
$(document).ready(function() {
	$('#side-menu').sidr({
		source: '#sidr',
		displace: false,
		side: 'right'
	});
	$('#sidr-button').sidr({
		source: '#sidr',
		displace: false,
		side: 'right'
	});
}); 
function closeSidr() {
	$.sidr('close', 'sidr');
}
