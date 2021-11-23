$(document).ready(function () {
    $("#btn-description").click(function () {
        $("#btn-description").addClass("btn-fragment-active");
        $("#btn-content, #btn-reviews, #btn-transcript, #btn-faq").removeClass("btn-fragment-active");

        $("#description").removeClass("d-none");
        $("#description").addClass("d-block");
        $("#description").css("animation", "fragment-fade 0.5s ease-in");

        $("#reviews, #transcript, #faq").removeClass("d-block");
        $("#reviews, #transcript, #faq").addClass("d-none");
    });

    $("#btn-reviews").click(function () {
        $("#btn-reviews").addClass("btn-fragment-active");
        $("#btn-content, #btn-description, #btn-transcript, #btn-faq").removeClass("btn-fragment-active");

        $("#reviews").removeClass("d-none");
        $("#reviews").addClass("d-block");
        $("#reviews").css("animation", "fragment-fade 0.5s ease-in");

        $("#description, #transcript, #faq").removeClass("d-block");
        $("#description, #transcript, #faq").addClass("d-none");
    });

    $("#btn-transcript").click(function () {
        $("#btn-transcript").addClass("btn-fragment-active");
        $("#btn-content, #btn-description, #btn-reviews, #btn-faq").removeClass("btn-fragment-active");

        $("#transcript").removeClass("d-none");
        $("#transcript").addClass("d-block");
        $("#transcript").css("animation", "fragment-fade 0.5s ease-in");

        $("#description, #reviews, #faq").removeClass("d-block");
        $("#description, #reviews, #faq").addClass("d-none");
    });

    $("#btn-faq").click(function () {
        $("#btn-faq").addClass("btn-fragment-active");
        $("#btn-content, #btn-description, #btn-transcript, #btn-reviews").removeClass("btn-fragment-active");

        $("#faq").removeClass("d-none");
        $("#faq").addClass("d-block");
        $("#faq").css("animation", "fragment-fade 0.5s ease-in");

        $("#description, #reviews, #transcript").removeClass("d-block");
        $("#description, #reviews, #transcript").addClass("d-none");
    });
});