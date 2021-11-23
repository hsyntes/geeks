$(document).ready(function () {
    $("#btn-courses").click(function () {
        $("#btn-courses").addClass("btn-fragment-active");
        $("#btn-about, #btn-author").removeClass("btn-fragment-active");

        $("#courses").css("animation", "fragment-fade 0.5s ease-out");
        $("#courses").addClass("d-block");
        $("#courses").removeClass("d-none");

        $("#about, #author").addClass("d-none");
        $("#about, #author").removeClass("d-block");
    });

    $("#btn-about").click(function () {
        $("#btn-about").addClass("btn-fragment-active");
        $("#btn-courses, #btn-author").removeClass("btn-fragment-active");

        $("#about").css("animation", "fragment-fade 0.5s ease-out");
        $("#about").addClass("d-block");
        $("#about").removeClass("d-none");

        $("#courses, #author").addClass("d-none");
        $("#courses, #author").removeClass("d-block");
    });

    $("#btn-author").click(function () {
        $("#btn-author").addClass("btn-fragment-active");
        $("#btn-courses, #btn-about").removeClass("btn-fragment-active");

        $("#author").css("animation", "fragment-fade 0.5s ease-out");
        $("#author").addClass("d-block");
        $("#author").removeClass("d-none");

        $("#courses, #about").addClass("d-none");
        $("#courses, #about").removeClass("d-block");
    })
});