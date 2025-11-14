document.addEventListener('DOMContentLoaded', () => {
    const Exercise63 = () => {
        
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
        // const newFrom = () => {
        //     0
        // }   
        const cleanBody = () => {
            miBody.textContent = "";
        }

        const remove = (Bulls, id) => {
            let playerIndex = Bulls.findIndex((player) => player.id == id);
            Bulls.splice(playerIndex, 1);
        }

        //console.log(jugadoresBulls);
        //let miBody = document.body;
        let container = document.createElement("div");
        container.className = "container";
        const createPlayers = (jugadoresBulls) =>{
            for (let i = 0; i < jugadoresBulls.length; i++) {
                let divPlayerCard = document.createElement("div");
                divPlayerCard.classList.add("player-card");
                let pId = document.createElement("p");
                pId.classList.add("pId");
                pId.textContent = jugadoresBulls[i].id
                divPlayerCard.appendChild(pId)
                container.appendChild(divPlayerCard);

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

                let rmBtn = document.createElement("button");
                rmBtn.classList.add("but");
                rmBtn.textContent = "Remove";
                divPlayerInfo.appendChild(rmBtn);
                let edBtn = document.createElement("button");
                edBtn.classList.add("but");
                edBtn.textContent = "Edit";
                divPlayerInfo.appendChild(edBtn);
                
               

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
    Exercise63();
})
document.addEventListener("DOMContentLoaded", () => {
    const players = [
        {
            id: 10,
            image: "bull1.webp",
            name: "Coby White",
            position: "Base (PG)",
            age: 24,
            pointsPerGame: 19.1
        },
        {
            id:12,
            image: "bull2.webp",
            name: "Emanuel Miller",
            position: "Alero (SF)",
            age: 24,
            pointsPerGame: 7.3
        },
        {
            id: 31,
            image: "bull3.webp",
            name: "Josh Giddey",
            position: "Escolta (SG)",
            age: 22,
            pointsPerGame: 12.3
        },
        {
            id: 45,
            image: "bull4.webp",
            name: "Jevon Carter",
            position: "Base (PG)",
            age: 29,
            pointsPerGame: 5.0
        },
        {
            id: 50,
            image: "bull5.webp",
            name: "Dalen Terry",
            position: "Escolta/Alero (SG/SF)",
            age: 22,
            pointsPerGame: 4.0
        }
    ];


  let body = document.querySelector("body");

  let container = document.createElement("div");
  container.className = "container";

  body.appendChild(container);

  function cleanContainer() {
    container.innerHTML = "";
  }

  function deletePlayer(players, id) {
    let playerIndex = players.findIndex((player) => player.id == id);
    players.splice(playerIndex, 1);
  }

  function drawPlayer(player) {
    let myCard = document.querySelector("template").content.cloneNode(true);
    let card = myCard.querySelector("div");
    card.id = player.id;
    let img = myCard.querySelector("img");
    img.src = "img/" + player.image;
    let name = myCard.querySelector("h2");
    name.innerText = player.name;
    let p = myCard.querySelectorAll("p");
    let p1 = p[0];
    let p2 = p[1];
    let p3 = p[2];
    p1.innerText += player.position;
    p2.innerText += player.age + " years";
    p3.innerText += player.pointsPerGame + " points per game";
    // let rmBtn = myCard.querySelector(".but");
    // let edBtn = myCard.querySelector(".edt");

    container.appendChild(myCard);
    rmBtn.addEventListener("click", () => {
      let playerID = rmBtn.parentElement.id;
      deletePlayer(players, playerID);
      cleanContainer();
      drawAllPlayers(players);
    });

    edBtn.addEventListener("click", () => {
      let playerID = edBtn.parentElement.id;
      let player = players.find((player) => player.id == playerID);
      document.getElementsByName("pname")[0].value = player.name;
      player.name = "Jose Socuellamos"


      console.log(player);
      
      cleanContainer();
      drawAllPlayers(players);
    });
  }

  function drawAllPlayers(players) {
    for (const player of players) {
      drawPlayer(player);
    }
  }

  drawAllPlayers(players);

  // let myPlayerName = prompt(
  //   "Enter the jersey number of the player you want to rename: "
  // );
  // let newName = prompt("Enter the new name of the player: ");
  // let playerIndex = players.findIndex((player) => player.name == myPlayerName);
  // players[playerIndex].name = newName;
  // cleanContainer();
  // drawAllPlayers(players);

  let addPlayerBtn = document.querySelector("#showForm");

  let formDiv = document.querySelector("#newPlayerForm");

  addPlayerBtn.addEventListener("click", function () {
    if (addPlayerBtn.textContent == "Show Form") {
      formDiv.style.display = "block";
      addPlayerBtn.textContent = "Hide Form";
    } else {
      formDiv.style.display = "none";
      addPlayerBtn.textContent = "Show Form";
    }

    let submitBtn = document.querySelector("#submitForm");
    submitBtn.addEventListener("click", (e) => {
      e.preventDefault();
      let idInput = document.getElementsByName("pid")[0].value;
      let nameInput = document.getElementsByName("pname")[0].value;
      let surnameInput = document.getElementsByName("psurname")[0].value;
      let posInput = document.getElementsByName("position")[0].value;
      let ageInput = document.getElementsByName("age")[0].value;
      let ppgInput = document.getElementsByName("ppg")[0].value;

      console.log(idInput);

      let newPlayer = {
        id: idInput,
        image: "default.jpg",
        name: nameInput + " " + surnameInput,
        position: posInput,
        age: ageInput,
        pointsPerGame: ppgInput,
      };

      players.push(newPlayer);
      document.querySelector("form").reset();
      formDiv.style.display = "none";
      addPlayerBtn.innerText = "Show Form";
      cleanContainer();
      drawAllPlayers(players);
    });
  });
});
