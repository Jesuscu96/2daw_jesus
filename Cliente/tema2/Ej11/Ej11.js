$(function () {
  $("li:first").clone().appendTo($(".avengers"));
  //$("li:first").attr({border: "solid 1px red" });
  $("p:first").css({
    border: "1px solid black",
    backgroundColor: "yellow",
  });
  $("li:first").remove();
  $("ul.avengers").empty();
  $(
    "<li>Marta Diaz</li> <li>El Churubel de Malaga</li> <li>Polispol</li> <li>Lola Lolita</li>"
  ).appendTo("ul.avengers");
  $(function () {
    const misP = 10 - $("p").length;
    for (let i = 0; i < misP; i++) {
      $("<p>Nuevo párrafo</p>").appendTo("body");
    }
  });
});
