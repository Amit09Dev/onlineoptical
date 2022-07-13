function onClickMenu() {
  document.getElementById("hamburger").classList.toggle("icon");
  document.getElementById("nav").classList.toggle("change");
}

// owl carousel



$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    dots: false,
    // autoplay: true,
    navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      550: {
        items: 2,
        nav: false,
      },
      800: {
        items: 3,
        nav: true,
      },
      1000: {
        items: 4,
        nav: true,
      },
    },
  });
});

