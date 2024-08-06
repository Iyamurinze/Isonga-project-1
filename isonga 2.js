document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const navbar = document.getElementById('navbar');
    const responsiveNavbar = document.getElementById('responsive-nav-bar');
    menuToggle.addEventListener('click', function () {
        navbar.classList.toggle('menu-active');
       
        if(responsiveNavbar.style.display == "block"){
            responsiveNavbar.style.display ="none";
            }
            else{
            responsiveNavbar.style.display = "block";
            }
    });
});