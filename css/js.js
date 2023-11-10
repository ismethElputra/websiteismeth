document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('navToggle');
    const navList = document.querySelector('header ul');

    navToggle.addEventListener('click', function () {
        navList.classList.toggle('active');
    });
});
function toggleMenu() {
    var menu = document.getElementById("menuItems");
    menu.classList.toggle("show");
}