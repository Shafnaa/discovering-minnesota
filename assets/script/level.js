const services = document.querySelector("#services");
const sections = services.querySelectorAll(".h-screen");
const navLi = services.querySelector("#navigation").querySelectorAll("div");
console.log(navLi);

services.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (services.scrollTop >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};
