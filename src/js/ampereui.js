// * -----   js for alerts ----- //

const alertDismiss = document.querySelectorAll(".alert-action");

alertDismiss.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.target.parentNode.style.display = "none";
  });
});

// * -----   js for toast ----- //
const toastCloseButton = document.querySelectorAll(".close-btn");
toastCloseButton.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.target.parentNode.parentNode.style.display = "none";
  });
});
