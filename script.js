] const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

// Open mobile menu
menuOpenButton.addEventListener("click", () => {
    document.body.classList.add("show-mobile-menu");
});

// Close mobile menu
menuCloseButton.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
});
