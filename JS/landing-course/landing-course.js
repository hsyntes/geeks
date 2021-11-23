$(document).ready(function () {
    if ($("#all-categories-fragment").hasClass("d-flex")) {
        $("#btn-all-categories").addClass("btn-fragment-active");
    }

    if ($("#design-fragment").hasClass("d-flex")) {
        $("#btn-design").addClass("btn-fragment-active");
    }

    if ($("#javascript-fragment").hasClass("d-flex")) {
        $("#btn-javascript").addClass("btn-fragment-active");
    }

    if ($("#web-development-fragment").hasClass("d-flex")) {
        $("#btn-web-development").addClass("btn-fragment-active");
    }

    $("#btn-all-categories").click(function () {
        $("#all-categories-fragment").css("animation", "fragment-fade 0.5s ease-in");

        $("#all-categories-fragment").addClass("d-flex");
        $("#btn-all-categories").addClass("btn-fragment-active");

        $("#design-fragment, #javascript-fragment, #web-development-fragment").addClass("d-none");
        $("#design-fragment, #javascript-fragment, #web-development-fragment").removeClass("d-flex");
        $("#btn-design, #btn-javascript, #btn-web-development").removeClass("btn-fragment-active");
    });

    $("#btn-design").click(function () {
        $("#design-fragment").css("animation", "fragment-fade 0.5s ease-in");

        $("#design-fragment").addClass("d-flex");
        $("#btn-design").addClass("btn-fragment-active");

        $("#all-categories-fragment, #javascript-fragment, #web-development-fragment").addClass("d-none");
        $("#all-categories-fragment, #javascript-fragment, #web-development-fragment").removeClass("d-flex");
        $("#btn-all-categories, #btn-javascript, #btn-web-development").removeClass("btn-fragment-active");
    });

    $("#btn-javascript").click(function () {
        $("#javascript-fragment").css("animation", "fragment-fade 0.5s ease-in");

        $("#javascript-fragment").addClass("d-flex");
        $("#btn-javascript").addClass("btn-fragment-active");

        $("#all-categories-fragment, #design-fragment, #web-development-fragment").addClass("d-none");
        $("#all-categories-fragment, #design-fragment, #web-development-fragment").removeClass("d-flex");
        $("#btn-all-categories, #btn-design, #btn-web-development").removeClass("btn-fragment-active");
    });

    $("#btn-web-development").click(function () {
        $("#web-development-fragment").css("animation", "fragment-fade 0.5s ease-in");

        $("#web-development-fragment").addClass("d-flex");
        $("#btn-web-development").addClass("btn-fragment-active");

        $("#all-categories-fragment, #design-fragment, #javascript-fragment").addClass("d-none");
        $("#all-categories-fragment, #design-fragment, #javascript-fragment").removeClass("d-flex");
        $("#btn-all-categories, #btn-design, #btn-javascript").removeClass("btn-fragment-active");
    });
});