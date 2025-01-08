/*
const scroll = new LocomotiveScroll({
  el: document.querySelector("container-scroll"),
  smooth:true,
  lerp: 0.1
});

document.addEventListener("DOMContentLoaded", function() {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });
  });

window.addEventListener('load', () =>{
    scroll.update();
})
*/

const scroll = new LocomotiveScroll({
  el: document.querySelector("scroll-container"),
  smooth:true,
  lerp: 0.1
});

document.addEventListener("DOMContentLoaded", function() {
  const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      lerp: 0.1
  });

  window.addEventListener('load', () => {
      scroll.update();
  });
});