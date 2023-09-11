const blog = document.querySelectorAll("div.blog");

blog.forEach((el) => {
  var vid = el.querySelector("video");
  el.addEventListener("click", () => {
    if (vid.paused) {
      vid.play();
    } else {
      vid.pause();
    }
  });
});
