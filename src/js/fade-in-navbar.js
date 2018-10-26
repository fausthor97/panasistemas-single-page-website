// fade in navbar
var navbarState = false;
var navbarBreakpoint = 210;

if (this.scrollY > navbarBreakpoint) {
	navbarState = true;
	$(".ps-navbar").fadeIn();
}
window.addEventListener("scroll", function (event) {
    if (this.scrollY > navbarBreakpoint && navbarState == false) {
		navbarState = true;
		$(".ps-navbar").fadeIn();
		return;
	}
	if (this.scrollY < (navbarBreakpoint - 30) && navbarState == true) {
		navbarState = false;
		$(".ps-navbar").fadeOut();
		return;
	}
});
