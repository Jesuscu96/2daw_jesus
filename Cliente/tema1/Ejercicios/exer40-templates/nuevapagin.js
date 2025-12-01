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
            surname: 'LÃ³pez-Arostegui',
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
    container.id = "container";
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
    }

    const backButton = document.getElementById('back');
    const pageInfo = document.getElementById('page-info');
    const nextButton = document.getElementById('next');

    let currentPage = 1;
    let elementsPerPage = 3;
    

    let getTotalPages = () => Math.ceil(players.length / elementsPerPage);
    pageInfo.textContent =  `${currentPage} / ${getTotalPages()}`

    function getDataSlice(page) {
        
        let startSlice = page * elementsPerPage - elementsPerPage;
        let endSlice = page * elementsPerPage;
        return players.slice(startSlice, endSlice);
    }

    //console.log(getDataSlice(currentPage));
    drawAllPlayers(getDataSlice(currentPage));

    function nextPage() {
        currentPage++;
        drawPage();
    }

    function lastPage() {
        currentPage--;
        drawPage();
    }
    function manageButtons() {
        if (currentPage <= 1) {
            backButton.disabled = true;
        } else {
            backButton.disabled = false;
        }
        if (currentPage >= getTotalPages()) {
            nextButton.disabled = true;
        } else {
            nextButton.disabled = false;
        }
    }
    function drawPage() {
        cleanContainer();
        manageButtons();
        drawAllPlayers(getDataSlice(currentPage));
        pageInfo.textContent =  `${currentPage} / ${getTotalPages()}`
        
    }

    backButton.addEventListener('click', (e)=>{lastPage()});
    nextButton.addEventListener('click', (e)=>{nextPage()});



}
// <!DOCTYPE html>
// <html class="no-js">

// <head>
//     <meta charset="utf-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <title>Paging Players</title>
//     <meta name="description" content="">
//     <meta name="viewport" content="width=device-width, initial-scale=1">
//     <link rel="stylesheet" href="exer40-paging.css">
//     <script src="exer40-paging.js"></script>
// </head>

// <body>
//     <div id="header">
//         <h1>TEAM MANAGEMENT</h1>
//         <section>
//             <!-- Paging controls -->
//             <div id="controls">
//                 <!-- Previous page button -->
//                 <button id="back"> &lt; </button>
//                 <!-- Info on current page -->
//                 <span id="page-info"></span>
//                 <!-- Next page button -->
//                 <button id="next"> &gt; </button>
//             </div>
//         </section>
//     </div>

// </body>

// </html>