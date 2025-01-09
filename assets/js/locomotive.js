/*
document.addEventListener("DOMContentLoaded", function () {
  const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true
  });

  window.addEventListener("load", () => {
      scroll.update();
  });
});*/

document.addEventListener("DOMContentLoaded", function () {
    const scroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
    });

    window.addEventListener("load", () => {
        scroll.update();
    });
});