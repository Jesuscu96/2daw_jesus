$(function () {
//$("div").append($("<p><p>Parrafo 2</p><p>Parrafo 3</p></p>"));
const texto = $("p:eq(0)").text() + " " + $("p:eq(1)").text();
const nuevoP = $("<p>").text(texto).insertAfter("div");


});