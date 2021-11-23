$(document).ready(function () {
    $("#btn-content").click(function () {
        $("#btn-content").addClass("btn-fragment-active");
        $("#btn-description, #btn-reviews, #btn-transcript, #btn-faq").removeClass("btn-fragment-active");

        $("#accordion").removeClass("d-none");
        $("#accordion").addClass("d-block");
        $("#accordion").css("animation", "fragment-fade 0.5s ease-in");

        $("#description, #reviews, #transcript, #faq").removeClass("d-block");
        $("#description, #reviews, #transcript, #faq").addClass("d-none");
    });

    $("#btn-description").click(function () {
        $("#btn-description").addClass("btn-fragment-active");
        $("#btn-content, #btn-reviews, #btn-transcript, #btn-faq").removeClass("btn-fragment-active");

        $("#description").removeClass("d-none");
        $("#description").addClass("d-block");
        $("#description").css("animation", "fragment-fade 0.5s ease-in");

        $("#accordion, #reviews, #transcript, #faq").removeClass("d-block");
        $("#accordion, #reviews, #transcript, #faq").addClass("d-none");
    });

    $("#btn-reviews").click(function () {
        $("#btn-reviews").addClass("btn-fragment-active");
        $("#btn-content, #btn-description, #btn-transcript, #btn-faq").removeClass("btn-fragment-active");

        $("#reviews").removeClass("d-none");
        $("#reviews").addClass("d-block");
        $("#reviews").css("animation", "fragment-fade 0.5s ease-in");

        $("#accordion, #description, #transcript, #faq").removeClass("d-block");
        $("#accordion, #description, #transcript, #faq").addClass("d-none");
    });

    $("#btn-transcript").click(function () {
        $("#btn-transcript").addClass("btn-fragment-active");
        $("#btn-content, #btn-description, #btn-reviews, #btn-faq").removeClass("btn-fragment-active");

        $("#transcript").removeClass("d-none");
        $("#transcript").addClass("d-block");
        $("#transcript").css("animation", "fragment-fade 0.5s ease-in");

        $("#accordion, #description, #reviews, #faq").removeClass("d-block");
        $("#accordion, #description, #reviews, #faq").addClass("d-none");
    });

    $("#btn-faq").click(function () {
        $("#btn-faq").addClass("btn-fragment-active");
        $("#btn-content, #btn-description, #btn-transcript, #btn-reviews").removeClass("btn-fragment-active");

        $("#faq").removeClass("d-none");
        $("#faq").addClass("d-block");
        $("#faq").css("animation", "fragment-fade 0.5s ease-in");

        $("#accordion, #description, #reviews, #transcript").removeClass("d-block");
        $("#accordion, #description, #reviews, #transcript").addClass("d-none");
    });
});