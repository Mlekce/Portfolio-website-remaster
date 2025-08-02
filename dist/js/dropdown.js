document.addEventListener("DOMContentLoaded", function () {
    let dropdown_toggler = document.querySelector(".header__menu-btn");
    let dropdown_menu = document.querySelector(".header__dropdown");

    if (dropdown_toggler && dropdown_menu) {
        dropdown_toggler.addEventListener("click", function () {
            dropdown_menu.classList.toggle("active");
        });
    }

    AOS.init();
});

