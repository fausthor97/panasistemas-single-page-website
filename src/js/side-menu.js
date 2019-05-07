
window.addEventListener("load", function() {

    var toggleButtons  =   document.querySelectorAll(".ps-side-menu-toggle");
    var sideMenu       =   document.querySelector(".ps-side-menu");
    
    if (toggleButtons) {
        for (var i = 0; i < toggleButtons.length; i++) {
            toggleButtons[i].addEventListener("click", sideMenuToggle);
        }
    }

    function sideMenuToggle() {
        sideMenu.classList.toggle("ps-side-menu-open");
    }
});

