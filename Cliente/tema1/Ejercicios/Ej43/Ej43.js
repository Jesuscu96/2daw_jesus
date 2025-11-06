document.addEventListener('DOMContentLoaded', () => {
    const Exercise43 = () => {
        
        const jugadoresBulls = [
            {
                id: 10,
                imagen: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629632.png",
                nombre: "Coby White",
                posicion: "Base (PG)",
                edad: 24,
                puntosPorPartido: 19.1
            },
            {
                id:12,
                imagen: "https://cdn.nba.com/headshots/nba/latest/1040x760/1641703.png",
                nombre: "Emanuel Miller",
                posicion: "Alero (SF)",
                edad: 24,
                puntosPorPartido: 7.3
            },
            {
                id: 31,
                imagen: "https://cdn.nba.com/headshots/nba/latest/1040x760/1630581.png",
                nombre: "Josh Giddey",
                posicion: "Escolta (SG)",
                edad: 22,
                puntosPorPartido: 12.3
            },
            {
                id: 45,
                imagen: "https://cdn.nba.com/headshots/nba/latest/1040x760/1628976.png",
                nombre: "Jevon Carter",
                posicion: "Base (PG)",
                edad: 29,
                puntosPorPartido: 5.0
            },
            {
                id: 50,
                imagen: "https://cdn.nba.com/headshots/nba/latest/1040x760/1631096.png",
                nombre: "Dalen Terry",
                posicion: "Escolta/Alero (SG/SF)",
                edad: 22,
                puntosPorPartido: 4.0
            }
        ];

        //console.log(jugadoresBulls);
        let miBody = document.createElement("body")

        //todo esto dentro de un bucle
        let divPlayerCard = document.createElement("div");
        divPlayerCard.class = "player-card";
        miBody.appendChild(divPlayerCard)

        let imgPlayer = document.createElement("img");
        imgPlayer.src = "el link de la imagen";
        divPlayerCard.appendChild(imgPlayer)
        
        let divPlayerInfo = document.createElement("div");
        divPlayerInfo.class = "player-info";
        divPlayerCard.appendChild(divPlayerInfo)
        
        let h2Name = document.createElement("h2");
        h2.class = "player-name";
        h2.textContent = "namepleyer"
        divPlayerInfo.appendChild(h2)
        
        //position
        let pPosittion = document.createElement("p");
        let strongPosittion = document.createElement("strong");
        strongPosittion.textContent = "variable ";
        pPosittion.appendChild(strongPosittion);
        pPosittion.textContent += "variable";
        divPlayerInfo.appendChild(pPosittion)

        //age
        let pAge = document.createElement("p");
        let strongAge = document.createElement("strong");
        strongAge.textContent = "variable ";
        pAge.appendChild(strongAge);
        pAge.textContent += "variable";
        divPlayerInfo.appendChild(pAge);

        //points
        let pPoint = document.createElement("p");
        let strongPoint = document.createElement("strong");
        strongPoint.textContent = "variable ";
        pPoint.appendChild(strongPoint);
        pPoint.textContent += "variable";
        divPlayerInfo.appendChild(pPoint)        
        

         
        
    }
    Exercise43();
})