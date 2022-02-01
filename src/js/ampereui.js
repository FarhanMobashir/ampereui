// *   js for alerts

const alertDismiss = document.querySelectorAll(".alert-action");

alertDismiss.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.target.parentNode.style.display = "none";
  });
});
