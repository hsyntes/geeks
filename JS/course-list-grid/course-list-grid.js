$(document).ready(function () {
    $("#btn-category").click(function () {
        $("#btn-category").addClass("btn-fragment-category-list-active");
        $("#category-courses").css("animation", "fragment-fade 0.5s ease-in");
        $("#category-courses").addClass("d-block");
        $("#category-courses").removeClass("d-none");

        $("#list-courses").addClass("d-none");
        $("#list-courses").removeClass("d-block");
        $("#btn-list").removeClass("btn-fragment-category-list-active");
    });

    $("#btn-list").click(function () {
        $("#btn-list").addClass("btn-fragment-category-list-active");
        $("#list-courses").css("animation", "fragment-fade 0.5s ease-in");
        $("#list-courses").addClass("d-block");
        $("#list-courses").removeClass("d-none");

        $("#category-courses").addClass("d-none");
        $("#category-courses").removeClass("d-block");
        $("#btn-category").removeClass("btn-fragment-category-list-active");
    });
});