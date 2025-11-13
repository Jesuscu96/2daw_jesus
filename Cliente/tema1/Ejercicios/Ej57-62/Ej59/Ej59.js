

document.addEventListener('DOMContentLoaded', () => {
    const Exercise59 = () => {
        

        
        let miBody = document.body;
        
        let divContent = document.createElement("div");
        divContent.classList.add("content")
        miBody.appendChild(divContent);
        function createSelect () {
            let div = document.createElement("div");
            let label = document.createElement("label");
            label.textContent = "Heroes:";
            divContent.appendChild(div);
            div.appendChild(label);
            let select = document.createElement("select");
            select.name = "heroes";
            div.appendChild(select);
            let op1 = document.createElement("option");
            op1.value = "justicie";
            op1.textContent = "Justice League";
            select.appendChild(op1);
            let op2 = document.createElement("option");
            op2.value = "avengers";
            op2.textContent = "Avengers";
            select.appendChild(op2);
            let op3 = document.createElement("option");
            op3.value = "defenders";
            op3.textContent = "defenders";
            op3.selected = true;
            select.appendChild(op3);
        } 

        let button = document.querySelector(".enviar")
        button.addEventListener("click", () => {
            let p = document.createElement("p");
            p.textContent = "You haven’t selected all the checkboxes.";
            
            
            let checkHero = Array.from(document.querySelectorAll("input[name=hero]"));
            let validar = checkHero.every(check => check.checked);
            validar === true ? createSelect() : divContent.appendChild(p);
            
        });

         
        
    }
    Exercise59();
})