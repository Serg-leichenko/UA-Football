const slider = tns({
  container: '.sliderNew',
  loop: true,
  items: 1,
  slideBy: 'page', 
  autoplay: false,
  speed: 400,
  autoplayButtonOutput: false,
  mouseDrag: true,
  lazyload: true,
  controlsContainer: '#customize-controls',
  // navContainer: '.slider-dots'
});

const sliderTop = tns({
  container: '.sliderTop',
  loop: true,
  gutter: 6,
  items: 6,
  autoplay: false,
  speed: 200,
  mouseDrag: true,
  lazyload: true,
  controlsContainer: '#controlsArrows',
  responsive: {
    320: {
      items: 2,
    },
    480: {
      items: 3,
    },
    640: {
        items: 3,
    },
    768: {
        items: 4,
    },
    850: {
      items: 5,
    },
    1024: {
      items: 6,
    }
  }
});

function btnBurger() {
  var menuTopNav = document.getElementById("menuTopNav");
  if (menuTopNav.style.display === "block") {
    menuTopNav.style.display = "none";
  } else {
    menuTopNav.style.display = "block";
  }
}