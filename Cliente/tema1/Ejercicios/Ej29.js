window.onload = function () {
  const Exercise29 = () => {
    const myHome = {
      address: "C: Pizarro Nº5",
      rooms: 4,
      squareMeters: 90,
      extras: [["microondas", true], ["lavadora", false]]
    };

    document.write("<p> Sin ascensor.</p>");
    for(const i in myHome) {
      document.write("<p>"+ i + ": " + myHome[i] +"</p>");
    }

    myHome.ascensor = true;
    document.write("<p> Con ascensor.</p>");
    for(const i in myHome) {
      document.write("<p>"+ i + ": " + myHome[i] +"</p>");
    }

    delete myHome.squareMeters;
    document.write(`<p>Existe squareMeters? ${myHome.hasOwnProperty("squareMeters")}</p>`);

    document.write(`<p>Existe rooms? ${myHome.hasOwnProperty("rooms")}</p>`);
    
  }
  Exercise29();
}  
 