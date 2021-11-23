$(document).ready(function () {
    $("#btn-bookmarked").click(function () {
        $("#btn-bookmarked").addClass("btn-fragment-active");
        $("#btn-learning, #btn-path").removeClass("btn-fragment-active");

        $("#bookmarked").css("animation", "fragment-fade 0.5s ease-out");

        $("#bookmarked").addClass("d-block");
        $("#bookmarked").removeClass("d-none");

        $("#learning, #path").addClass("d-none");
        $("#learning, #path").removeClass("d-block");
    });

    $("#btn-learning").click(function () {
        $("#btn-learning").addClass("btn-fragment-active");
        $("#btn-bookmarked, #btn-path").removeClass("btn-fragment-active");

        $("#learning").css("animation", "fragment-fade 0.5s ease-out");

        $("#learning").addClass("d-block");
        $("#learning").removeClass("d-none");

        $("#bookmarked, #path").addClass("d-none");
        $("#bookmarked, #path").removeClass("d-block");
    });

    $("#btn-path").click(function () {
        $("#btn-path").addClass("btn-fragment-active");
        $("#btn-bookmarked, #btn-learning").removeClass("btn-fragment-active");

        $("#path").css("animation", "fragment-fade 0.5s ease-out");

        $("#path").addClass("d-block");
        $("#path").removeClass("d-none");

        $("#bookmarked, #learning").addClass("d-none");
        $("#bookmarked, #learning").removeClass("d-block");
    });
});