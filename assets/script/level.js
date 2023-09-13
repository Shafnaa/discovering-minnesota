const services = document.querySelector("#services");
const sections = services.querySelectorAll(".h-screen");
const nav = services.querySelector("#navigation");
const navLi = nav.querySelectorAll("div.flex.items-center.gap-3");

services.onscroll = () => {
  // const sectionScrolled = (services.scrollTop / services.scrollHeight) * 100;
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (services.scrollTop >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  // nav.style.transform = `translateY(-${sectionScrolled}%)`;

  navLi.forEach((li) => {
    var symbol = li.querySelector(".symbol");
    symbol.classList.remove("current");
    li.classList.remove("active");
    li.querySelector(".absolute").classList.add("hidden");
    if (li.classList.contains(current)) {
      li.classList.add("active");
      symbol.classList.add("current");
      li.querySelector(".absolute").classList.remove("hidden");
    }
  });
};
