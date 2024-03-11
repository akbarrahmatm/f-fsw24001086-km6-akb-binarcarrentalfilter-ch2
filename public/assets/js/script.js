$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 32,
    startPosition: 2,
    dots: false,
    navText: [
      "<img class='icon-control-carousel' src='./assets/img/svg/left-button.svg' alt='Previous'>",
      "<img class='icon-control-carousel' src='./assets/img/svg/right-button.svg' alt='Next'>",
    ],
    responsiveClass: true,

    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      900: {
        items: 2,
        nav: true,
      },
      1300: {
        items: 3,
        nav: true,
        center: true,
        autoWidth: true,
      },
    },
  });
});
