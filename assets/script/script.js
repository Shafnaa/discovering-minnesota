const navbarButton = document.querySelector("#navbar-button");
const navbarDefault = document.querySelector("#navbar-default");

var navbarState = false;

navbarButton.addEventListener("click", () => {
  if (!navbarState) {
    navbarDefault.classList.remove("hidden");
  } else {
    navbarDefault.classList.add("hidden");
  }
  navbarState = !navbarState;
});
