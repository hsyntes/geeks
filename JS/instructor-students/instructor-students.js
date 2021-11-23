$(document).ready(function () {
    $("#btn-category").click(function () {
        $("#btn-category").addClass("fragment-active");
        $("#category-instructors").css("animation", "fragment-fade 0.5s ease-out");
        $("#category-instructors").addClass("d-block");
        $("#category-instructors").removeClass("d-none");

        $("#btn-list").removeClass("fragment-active");
        $("#list-instructors").addClass("d-none");
        $("#list-instructors").removeClass("d-block");
    });

    $("#btn-list").click(function () {
        $("#btn-list").addClass("fragment-active");
        $("#list-instructors").css("animation", "fragment-fade 0.5s ease-out");
        $("#list-instructors").addClass("d-block");
        $("#list-instructors").removeClass("d-none");

        $("#btn-category").removeClass("fragment-active");
        $("#category-instructors").addClass("d-none");
        $("#category-instructors").removeClass("d-block");
    });
});