$(document).ready(function () {
  if (window.matchMedia("(max-width: 992px)").matches) {
    // $("nav .navbar-collapse a").attr("data-toggle", "dropdown");
    $(".dropdown-link").attr("data-toggle", "dropdown");
  }

  $("#browse").click(function () {
    $("#browse-dropdown").toggle();

    $("#landings-dropdown").hide();
    $("#pages-dropdown").hide();
    $("#accounts-dropdown").hide();
    $("#ellipsis-dropdown").hide();
  });

  $("#landings").click(function () {
    $("#landings-dropdown").toggle();

    $("#browse-dropdown").hide();
    $("#pages-dropdown").hide();
    $("#accounts-dropdown").hide();
    $("#ellipsis-dropdown").hide();
  });

  $("#pages").click(function () {
    $("#pages-dropdown").toggle();

    $("#browse-dropdown").hide();
    $("#landings-dropdown").hide();
    $("#accounts-dropdown").hide();
    $("#ellipsis-dropdown").hide();
  });

  $("#accounts").click(function () {
    $("#accounts-dropdown").toggle();

    $("#browse-dropdown").hide();
    $("#landings-dropdown").hide();
    $("#pages-dropdown").hide();
    $("#ellipsis-dropdown").hide();
  });

  $("#ellipsis").click(function () {
    $("#ellipsis-dropdown").toggle();

    $("#browse-dropdown").hide();
    $("#landings-dropdown").hide();
    $("#pages-dropdown").hide();
    $("#accounts-dropdown").hide();
  });

  $("#status").click(function () {
    $("#status-dropdown").toggle();

    $("#browse-dropdown").hide();
    $("#pages-dropdown").hide();
    $("#accounts-dropdown").hide();
  });

  $(".btn-user").click(function () {
    $(".user-dropdown").toggle();
  });

  $(".btn-bell").click(function () {
    $(".user-dropdown").hide();
  });

  $(document).click(function () {
    $("#browse-dropdown").hide();
  });

  $(document).click(function () {
    $("#pages-dropdown").hide();
  });

  $(document).click(function () {
    $("#accounts-dropdown").hide();
  });

  $(document).click(function () {
    $(".user-dropdown").hide();
  });

  $(document).click(function () {
    $("#ellipsis-dropdown").hide();
  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
});
