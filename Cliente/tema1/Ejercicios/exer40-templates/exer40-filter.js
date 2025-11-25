window.onload = function () {

    const players = [
        {
            id: 7,
            image: 'chris_jones.jpg',
            name: 'Chris',
            surname: 'Jones',
            position: 'Point Guard',
            dateOfBirth: '1993-04-10',
            pointsPerGame: 12.5,
        },
        {
            id: 16,
            image: 'stefan_jovic.jpg',
            name: 'Stefan',
            surname: 'Jovic',
            position: 'Point Guard',
            dateOfBirth: '1990-11-03',
            pointsPerGame: 8.3,
        },
        {
            id: 5,
            image: 'sergio_de_larrea.jpg',
            name: 'Sergio',
            surname: 'De Larrea',
            position: 'Point Guard',
            dateOfBirth: '2004-02-18',
            pointsPerGame: 4.0,
        },
        {
            id: 8,
            image: 'jean_montero.jpg',
            name: 'Jean',
            surname: 'Montero',
            position: 'Shooting Guard',
            dateOfBirth: '2003-07-05',
            pointsPerGame: 11.5,
        },
        {
            id: 0,
            image: 'brancou_badio.jpg',
            name: 'Brancou',
            surname: 'Badio',
            position: 'Shooting Guard',
            dateOfBirth: '1999-02-17',
            pointsPerGame: 9.1,
        },
        {
            id: 6,
            image: 'xabier_lopez_arostegui.jpg',
            name: 'Xabier',
            surname: 'López-Arostegui',
            position: 'Shooting Guard',
            dateOfBirth: '1997-05-19',
            pointsPerGame: 7.8,
        },
        {
            id: 37,
            image: 'semi_ojeleye.jpg',
            name: 'Semi',
            surname: 'Ojeleye',
            position: 'Small Forward',
            dateOfBirth: '1994-12-05',
            pointsPerGame: 10.8,
        },
        {
            id: 2,
            image: 'josep_puerto.jpg',
            name: 'Josep',
            surname: 'Puerto',
            position: 'Small Forward',
            dateOfBirth: '1999-03-04',
            pointsPerGame: 5.5,
        },
        {
            id: 77,
            image: 'nate_sestina.jpg',
            name: 'Nate',
            surname: 'Sestina',
            position: 'Power Forward',
            dateOfBirth: '1997-05-12',
            pointsPerGame: 6.3,
        },
        {
            id: 4,
            image: 'jaime_pradilla.jpg',
            name: 'Jaime',
            surname: 'Pradilla',
            position: 'Power Forward',
            dateOfBirth: '2001-01-03',
            pointsPerGame: 8.9,
        },
        {
            id: 3,
            image: 'nathan_reuvers.jpg',
            name: 'Nathan',
            surname: 'Reuvers',
            position: 'Power Forward',
            dateOfBirth: '1998-09-22',
            pointsPerGame: 7.2,
        },
        {
            id: 24,
            image: 'matt_costello.jpg',
            name: 'Matt',
            surname: 'Costello',
            position: 'Center/Forward',
            dateOfBirth: '1993-08-05',
            pointsPerGame: 12.3,
        },
        {
            id: 22,
            image: 'ethan_happ.jpg',
            name: 'Ethan',
            surname: 'Happ',
            position: 'Center',
            dateOfBirth: '1996-05-07',
            pointsPerGame: 10.2,
        }
    ];

    let body = document.querySelector("body");
    let container = document.createElement("div");
    body.appendChild(container);

    // Clean container
    function cleanContainer() {
        container.innerHTML = "";
    }

    // Calculate age from date of birth
    function calculateAge(dateOfBirth) {
        const dob = new Date(dateOfBirth);
        const diff = Date.now() - dob.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    // Draw player card
    function drawPlayer(player) {
        const age = calculateAge(player.dateOfBirth);
        let card = document.createElement("div");
        card.className = "card";
        card.dataset.id = player.id;
        let img = document.createElement("img");
        img.src = "imgs/" + player.image;
        let name = document.createElement("h2");
        name.innerText = player.name + " " + player.surname;
        let p1 = document.createElement("p");
        p1.innerText = "Position: " + player.position;
        let p2 = document.createElement("p");
        p2.innerText = "Age: " + age;
        let p3 = document.createElement("p");
        p3.innerText = "PPG: " + player.pointsPerGame + " points";

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(p3);

        container.appendChild(card);
    }

    // Paint players
    function drawAllPlayers(players) {
        for (let i = 0; i < players.length; i++) {
            drawPlayer(players[i]);
        }

        let buttonList = document.getElementsByClassName("but");

        for (let b of buttonList) {
            b.onclick = function () {
                let id = this.parentElement.dataset.id;
                deletePlayer(players, id);
                cleanContainer();
                drawAllPlayers(players);
            }
        }
    }

    drawAllPlayers(players);
    
   /*  let header = document.querySelector("#header");

    let form = document.createElement("form");
    form.classList.add("form-centrado");
    body.appendChild(form);
    form.appendChild(header);
 */
    
    //CREACION DE SELECT DE POSISCIONES ORNDEADA AFABETICAMENTE Y SIN DUPLICADOS
    const postArray = players.map(player => player.position);
    let postArraySet = [...new Set(postArray)].sort(); //sin duplicados y ordenado 
    //console.log(postArraySet);
    let posDropdown = document.createElement("select");
    posDropdown.id = "f_positiom";
    let blankOpt = document.createElement("option");
    blankOpt.textContent = "Select position";
    blankOpt.disabled = true;
    blankOpt.selected = true;
    posDropdown.appendChild(blankOpt);
    for (const pos of postArraySet) {
        let newOpt = document.createElement("option");
        newOpt.value = pos;
        newOpt.textContent = pos;
        posDropdown.appendChild(newOpt);
    }
    let header = document.querySelector("#header");
    header.appendChild(posDropdown);
    //FIN SELECT
    /* let allCards = document.querySelectorAll(".card");
    let idCards = [];
    for (let i = 0; allCards.length > i; i++) {
        
        idCards.push(Number(allCards[i].dataset.id));
        
    }
    console.log(idCards); */
    
    
    function filterPlayers () {
        let allCards = document.querySelectorAll(".card");
        let idCards = [];
        for (let i = 0; allCards.length > i; i++) {
            
            idCards.push(Number(allCards[i].dataset.id));
            
        }
        //console.log(idCards);
        let newArrayPlayers = players.filter(player => idCards.includes(player.id));
        //console.log(newArrayPlayers[2]);
        return newArrayPlayers.length > 0 ? newArrayPlayers : players;
        
    }
    filterPlayers();

    //APLICAR FILTRO POR POSICION
    posDropdown.addEventListener("change", (e) =>{
        let filteredPlayers = filterPlayers().filter(player => player.position == posDropdown.value);
        cleanContainer();
        drawAllPlayers(filteredPlayers);
    })
    // FIN FILTRO POSICION

    //FILTRO POR NAME
    let pName = document.querySelector("input[name=f_name]");
    pName.oninput = () => {
        let filteredPlayers = filterPlayers().filter(player => {
            let fullName = player.name + " " + player.surname;
            return fullName.toLocaleLowerCase().includes(pName.value.toLocaleLowerCase())
        });
        cleanContainer();
        drawAllPlayers(filteredPlayers);
    }
    // FIN FILTRO NAME
    
    //APLICAR FILTRO POR PUNTOS 
    let pointsMin = document.querySelector("input[name=f_pointMin]");
    let pointsMax = document.querySelector("input[name=f_pointMax]");

    pointsMax.onchange = (e) => {
        let filteredPlayers = filterPlayers().filter(player => {
            
            return player.pointsPerGame >= pointsMin.value && player.pointsPerGame <= pointsMax.value;
        });
        cleanContainer();
        drawAllPlayers(filteredPlayers);
    }
    // FIN FILTRO PUNTOS

    function applyFilters() {
        const position = posDropdown.value; // o "" si está en blanco
        const nameValue = pName.value.toLowerCase().trim();
        const min = parseFloat(pointsMin.value) || 0;
        const max = parseFloat(pointsMax.value) || Infinity;

        let filtered = currentPlayers.filter(player => {
            // filtro por posición
            let okPos = (position === "Select position") || player.position === position;

            // filtro por nombre
            let fullName = (player.name + " " + player.surname).toLowerCase();
            let okName = !nameValue || fullName.includes(nameValue);

            // filtro por puntos
            let okPoints = player.pointsPerGame >= min && player.pointsPerGame <= max;

            return okPos && okName && okPoints;
        });

        cleanContainer();
        drawAllPlayers(filtered);
    }

    //ELEMINAR FILTROS
    let removeFilter = document.getElementById("removeFilters");
    removeFilter.onclick =  () => {
        
        cleanContainer();blankOpt.selected = true;
        
        blankOpt.selected = true;
        drawAllPlayers(players);
    }
   
    
}