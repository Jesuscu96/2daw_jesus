document.addEventListener('DOMContentLoaded', () => {
    const Exercise44 = () => {
        
        const playersBulls = [
            {
                id: 10,
                imagen: "./img/bull1.webp",
                nombre: "Coby White",
                posicion: "Base (PG)",
                edad: 24,
                puntosPorPartido: 19.1
            },
            {
                id:12,
                imagen: "./img/bull2.webp",
                nombre: "Emanuel Miller",
                posicion: "Alero (SF)",
                edad: 24,
                puntosPorPartido: 7.3
            },
            {
                id: 31,
                imagen: "./img/bull3.webp",
                nombre: "Josh Giddey",
                posicion: "Escolta (SG)",
                edad: 22,
                puntosPorPartido: 12.3
            },
            {
                id: 45,
                imagen: "./img/bull4.webp",
                nombre: "Jevon Carter",
                posicion: "Base (PG)",
                edad: 29,
                puntosPorPartido: 5.0
            },
            {
                id: 50,
                imagen: "./img/bull5.webp",
                nombre: "Dalen Terry",
                posicion: "Escolta/Alero (SG/SF)",
                edad: 22,
                puntosPorPartido: 4.0
            }
        ];
        
        const cleanBody = () => {
            miBody.textContent = "";
        }

        const remove = (Bulls, id) => {
            let playerIndex = Bulls.findIndex((player) => player.id == id);
            Bulls.splice(playerIndex, 1);
        }

        //console.log(jugadoresBulls);
        let miBody = document.body;
        const createPlayers = (jugadoresBulls) =>{
            for (let i = 0; i < jugadoresBulls.length; i++) {
                let divPlayerCard = document.createElement("div");
                divPlayerCard.classList.add("player-card");
                let pId = document.createElement("p");
                pId.classList.add("pId");
                pId.textContent = jugadoresBulls[i].id
                divPlayerCard.appendChild(pId)
                miBody.appendChild(divPlayerCard);

                let imgPlayer = document.createElement("img");
                imgPlayer.classList.add("player-img");
                imgPlayer.src = jugadoresBulls[i].imagen;
                divPlayerCard.appendChild(imgPlayer);
                
                let divPlayerInfo = document.createElement("div");
                divPlayerInfo.classList.add("player-info");
                divPlayerCard.appendChild(divPlayerInfo);
                
                let h2Name = document.createElement("h2");
                h2Name.classList.add("player-name");
                h2Name.textContent = jugadoresBulls[i].nombre;
                divPlayerInfo.appendChild(h2Name);
                
                //position
                let pPosittion = document.createElement("p");
                let strongPosittion = document.createElement("strong");
                strongPosittion.textContent = "Position ";
                pPosittion.appendChild(strongPosittion);
                pPosittion.textContent += jugadoresBulls[i].posicion;
                divPlayerInfo.appendChild(pPosittion);

                //age
                let pAge = document.createElement("p");
                let strongAge = document.createElement("strong");
                strongAge.textContent = "Age  ";
                pAge.appendChild(strongAge);
                pAge.textContent += jugadoresBulls[i].edad;
                divPlayerInfo.appendChild(pAge);

                //points
                let pPoint = document.createElement("p");
                let strongPoint = document.createElement("strong");
                strongPoint.textContent = "Points ";
                pPoint.appendChild(strongPoint);
                pPoint.textContent += jugadoresBulls[i].puntosPorPartido;
                divPlayerInfo.appendChild(pPoint);

                let button = document.createElement("button");
                button.classList.add("but");
                button.textContent = "Remove";
                divPlayerInfo.appendChild(button);

               

                button.addEventListener("click", () => {
                    let playerID = pId.textContent;
                    remove(playersBulls,playerID);
                    cleanBody();
                    createPlayers(playersBulls);
                });
            
            }
        }
        createPlayers(playersBulls);
        
        
      
        
        
            
        

         
        
    }
    Exercise44();
})