import "../styles/docs.css";
import "../styles/global.css";
import "../components/buttons.css";

const menuIcon = document.querySelector(".menu-icon");
const drawer = document.querySelector(".drawer");
const drawerIcon = document.querySelector(".drawer-icon");
const drawerLink = document.querySelectorAll(".component-link-drawer");

menuIcon.addEventListener("click", function () {
  drawer.classList.toggle("drawer-show");
  // menuIcon.classList.toggle("uil-bars");
  // menuIcon.classList.toggle("uil-times");
});

drawerIcon.addEventListener("click", function () {
  drawer.classList.toggle("drawer-show");
});

drawerLink.forEach((linkItem) =>
  linkItem.addEventListener("click", function () {
    drawer.classList.remove("drawer-show");
    // linkItem.classList.add("link-active");
  })
);
