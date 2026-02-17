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

    let body = document.querySelector('body')
    let header = document.querySelector("#header");
    let container = document.createElement('div');
    container.id = 'container';
    body.appendChild(container);

    function drawCards(players) {
        for (let player of players) {
            drawCard(player)
        }
    }
    function drawCard(player) {
        let card = document.createElement('div');
        card.className = 'card';
        let img = document.createElement('img');
        img.src = './imgs/' + player.image;
        let h2 = document.createElement('h2');
        h2.textContent = player.name + ' ' + player.surname;
        let position = document.createElement('p');
        position.textContent = 'Position: ' + player.position;
        let date = document.createElement('p');
        date.textContent = 'Date: ' + player.dateOfBirth;
        let points = document.createElement('p');
        points.textContent = 'Points: ' + player.pointsPerGame;
        card.appendChild(img);
        card.appendChild(h2);
        card.appendChild(position);
        card.appendChild(date);
        card.appendChild(points);
        card.id = player.id;
        container.appendChild(card);
    }
    //drawCards(players);

    function cleanContainer() {
        container.textContent = '';
    }
    let filtro = [...players];
    //paginacion

    let currentPage = 1;
    let perPage = 4;
    let totalpages = () => Math.ceil(filtro.length / perPage);
    //botones

    function updateControls() {
        if (currentPage <= 1) {
            backBtn.disabled = true;
        } else {
            backBtn.disabled = false;
        }
        if (currentPage >= totalpages()) {
            nextBtn.disabled = true;
        } else {
            nextBtn.disabled = false;
        }
        info.textContent = currentPage + "/" + totalpages();
    }


    let backBtn = document.querySelector('#back');
    backBtn.disabled = true;
    let nextBtn = document.querySelector('#next');
    let info = document.querySelector("#page-info");
    info.textContent = currentPage + "/" + totalpages();

    function pagination(page) {
        let start = page * perPage - perPage;
        let end = page * perPage;
        return filtro.slice(start, end)
    }
    function renderPage() {
        cleanContainer();

        if (filtro.length === 0) {
            updateControls();
            return;
        }

        drawCards(pagination(currentPage));
        updateControls();
    }

    function nextPage() {
        if (currentPage < totalpages()) {
            currentPage++;
            renderPage();
        }
    }

    function backPage() {
        if (currentPage >= 1) {
            currentPage--;
            renderPage();
        }
    }

    drawCards(pagination(currentPage));
    nextBtn.addEventListener("click", (e) => { nextPage() });
    backBtn.addEventListener("click", (e) => { backPage() });



    let search = document.querySelector('input[name=f_name]');
    let position = document.querySelector('#position');
    let orderSurname = false;
    function resetFilter() {
        cleanContainer();
        search.value = "";
        position.value = 'all';
        sortMode = '';
        orderSurname = false;

        // reset datos y página
        filtro = [...players];
        currentPage = 1;

        drawCards(pagination(currentPage));
    }

    function filter() {
        let searchText = search.value.trim().toLowerCase();
        let positionText = position.value.toLowerCase().trim();
        filtro = [...players];
        if (searchText.length < 0) {
            filtro = filtro.filter(player => {
                let fullName = player.name.toLowerCase() + " " + player.surname.toLowerCase()
                return fullName.includes(searchText);
            })
        }



        if (positionText !== 'all' || positionText.length < 0 ) {
            filtro = filtro.filter(player => {

                return player.position.toLowerCase().trim() === positionText;
            })
        }

        if (orderSurname === true) {
            filtro.sort((a, b) => {
                let sa = a.surname.toLowerCase();
                let sb = b.surname.toLowerCase();

                if (sa > sb) return 1;
                if (sa < sb) return -1;
                return 0;
            });
        }


        currentPage = 1;
        cleanContainer()
        drawCards(pagination(currentPage));

    }



    let reset = document.querySelector('#reset')
    reset.addEventListener("click", () => resetFilter());
    search.addEventListener("input", filter);
    position.addEventListener("change", filter);
    let bSurname = document.querySelector('#b_surname');
    bSurname.addEventListener("click", () => {
        orderSurname = true;   
        filter();        
    });

}