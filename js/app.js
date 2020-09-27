let checkbox = document.getElementById("navi-toggle");
let navItems = document.querySelectorAll(".navigation__item");

navItems.forEach(item => {
    item.addEventListener("click", () => {
        checkbox.checked = false;
    });
});