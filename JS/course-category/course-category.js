$(document).ready(function () {
  if ($("#most-popular-fragment").hasClass("d-flex")) {
    $("#btn-most-popular").addClass("btn-fragment-active");
  }

  if ($("#trending-fragment").hasClass("d-flex")) {
    $("#btn-trending").addClass("btn-fragment-active");
  }

  $("#btn-most-popular").click(function () {
    $("#most-popular-fragment").addClass("d-flex");
    $("#btn-most-popular").addClass("btn-fragment-active");

    $("#trending-fragment").addClass("d-none");
    $("#trending-fragment").removeClass("d-flex");
    $("#btn-trending").removeClass("btn-fragment-active");

    $("#most-popular-fragment").css("animation", "fragment-fade 0.5s ease-in");
  });

  $("#btn-trending").click(function () {
    $("#trending-fragment").addClass("d-flex");
    $("#trending-fragment").removeClass("d-none");
    $("#btn-trending").addClass("btn-fragment-active");

    $("#most-popular-fragment").addClass("d-none");
    $("#most-popular-fragment").removeClass("d-flex");
    $("#btn-most-popular").removeClass("btn-fragment-active");

    $("#trending-fragment").css("animation", "fragment-fade 0.5s ease-in");
  });
});
