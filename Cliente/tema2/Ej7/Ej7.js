$(function () {
    $("p").wrapAll("<div style='border: 3px solid red'></div>");
    $("p").wrap("<div style='border: 3px solid blue'></div>");
    $("p:first").replaceWith("Spider-man");
    $("p:first").replaceWith("ul.avengers>li:first");

})