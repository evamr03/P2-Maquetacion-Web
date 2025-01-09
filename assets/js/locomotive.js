const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    direction: "horizontal",
  });

  window.addEventListener("load", () => {
    scroll.update();
  });