const services = document.querySelector("#services");
const sections = services.querySelectorAll(".h-screen");
const nav = services.querySelector("#navigation");
const navLi = nav.querySelectorAll("div");

services.onscroll = () => {
  const sectionScrolled = (services.scrollTop / services.scrollHeight) * 100;
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (services.scrollTop >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  nav.style.transform = `translateY(-${sectionScrolled}%)`;

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};
