const menuIcon = document.querySelector(".menu-icon");
const drawer = document.querySelector(".drawer");
const drawerIcon = document.querySelector(".drawer-icon");
const drawerLink = document.querySelectorAll(".component-link-drawer");

const header = document.querySelector("#header");

const mainContainer = document.querySelector("#main");

// event listeners
menuIcon.addEventListener("click", function () {
  drawer.classList.toggle("drawer-show");
});

drawerIcon.addEventListener("click", function () {
  drawer.classList.toggle("drawer-show");
});

drawerLink.forEach((linkItem) =>
  linkItem.addEventListener("click", function () {
    drawer.classList.toggle("drawer-show");
  })
);
