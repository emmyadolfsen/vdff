// Hamburger-menu function - toggle button animation
function hamburger(hamburger_menu) {
    hamburger_menu.classList.toggle("change");
}

// Hamburger-menu toggle menu animation
$(document).ready(function() {
    $(".button").click(function() {
        $("#main-nav ul").slideToggle("fast");
    });
});