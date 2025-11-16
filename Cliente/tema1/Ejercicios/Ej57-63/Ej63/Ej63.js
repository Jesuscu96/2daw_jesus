document.addEventListener('DOMContentLoaded', () => {
    
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

        // const newFrom = () => {
        //     0
        // }   
    const cleanBody = () => {
        container.textContent = "";
    }

    const remove = (Bulls, id) => {
        let playerIndex = Bulls.findIndex((player) => player.id == id);
        Bulls.splice(playerIndex, 1);
    }

    
    //let miBody = document.body;
    let body = document.querySelector("body");
    let container = document.createElement("div");
    container.className = "container";
    body.appendChild(container);
    let edBtn = document.createElement("button");
    let rmBtn = document.createElement("button");
    const createPlayers = (jugadoresBulls) =>{
        for (let i = 0; i < jugadoresBulls.length; i++) {
            let divPlayerCard = document.createElement("div");
            divPlayerCard.classList.add("player-card");
            //id
            let pId = document.createElement("p");
            pId.classList.add("pId");
            pId.textContent = jugadoresBulls[i].id;
            pId.style.display = "none";
            divPlayerCard.appendChild(pId);
            container.appendChild(divPlayerCard);
            //img
            let imgPlayer = document.createElement("img");
            imgPlayer.classList.add("player-img");
            imgPlayer.src = `img/${jugadoresBulls[i].image}`;
            divPlayerCard.appendChild(imgPlayer);
            //
            let divPlayerInfo = document.createElement("div");
            divPlayerInfo.classList.add("player-info");
            divPlayerCard.appendChild(divPlayerInfo);
            //name
            let h2Name = document.createElement("h2");
            h2Name.classList.add("player-name");
            h2Name.textContent = jugadoresBulls[i].name;
            divPlayerInfo.appendChild(h2Name);
            
            //position
            let pPosittion = document.createElement("p");
            let strongPosittion = document.createElement("strong");
            strongPosittion.textContent = "Position ";
            pPosittion.appendChild(strongPosittion);
            pPosittion.textContent += jugadoresBulls[i].position;
            divPlayerInfo.appendChild(pPosittion);

            //age
            let pAge = document.createElement("p");
            let strongAge = document.createElement("strong");
            strongAge.textContent = "Age  ";
            pAge.appendChild(strongAge);
            pAge.textContent += jugadoresBulls[i].age;
            divPlayerInfo.appendChild(pAge);

            //points
            let pPoint = document.createElement("p");
            let strongPoint = document.createElement("strong");
            strongPoint.textContent = "Points ";
            pPoint.appendChild(strongPoint);
            pPoint.textContent += jugadoresBulls[i].pointsPerGame;
            divPlayerInfo.appendChild(pPoint);

            rmBtn.classList.add("but");
            rmBtn.textContent = "Remove";
            divPlayerInfo.appendChild(rmBtn);
            edBtn.classList.add("but");
            edBtn.textContent = "Edit";
            divPlayerInfo.appendChild(edBtn);
            
            

            rmBtn.addEventListener("click", () => {
                let playerID = pId.textContent;
                remove(players,playerID);
                cleanBody();
                createPlayers(players);
            });
        
        }
    }
    createPlayers(players);


  





  

    edBtn.addEventListener("click", () => {
        let playerID = edBtn.parentElement.id;
        let player = players.find((player) => player.id == playerID);
        document.getElementsByName("pname")[0].value = player.name;
        player.name = "Jose Socuellamos"


        console.log(player);
        
        cleanContainer();
        drawAllPlayers(players);
    });
  


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
