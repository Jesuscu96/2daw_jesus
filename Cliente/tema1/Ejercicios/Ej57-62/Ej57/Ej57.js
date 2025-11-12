document.addEventListener('DOMContentLoaded', () => {
    const Exercise44 = () => {
        

        
        let miBody = document.body;
        
        let divContent = document.createElement("div");
        divContent.classList.add("content")
        miBody.appendChild(divContent);
        
        

        //name
        let inputName = document.querySelector("input[name=name]");
        let name = document.createElement("p");
        name.textContent = inputName.value;
        divContent.appendChild(name);

        //pass
        let inputPass = document.querySelector("input[name=pass]");
        let pass = document.createElement("p");
        pass.textContent = inputPass.value;
        divContent.appendChild(pass);

        //age
        let inputAge = document.querySelector("input[name=age]");
        let age = document.createElement("p");
        pass.textContent = inputAge.value;
        divContent.appendChild(age);

        //age
        let inputAge = document.querySelector("input[name=age]");
        let age = document.createElement("p");
        pass.textContent = inputAge.value;
        divContent.appendChild(age);

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
    
        

         
        
    }
    Exercise44();
})