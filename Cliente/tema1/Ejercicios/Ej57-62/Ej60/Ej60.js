

document.addEventListener('DOMContentLoaded', () => {
    const Exercise60 = () => {
        
        /*60.- Create a webpage with a text input. Then, using JavaScript: when the user enters any of ‘d’, ‘a’ or ‘w’, show a red warning under the input — “The letter [x] is not allowed on this page” — and prevent that letter from appearing in the input. For any other character, allow input normally and hide/remove the warning. */
        
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
        function error (x) {
            let p = document.createElement("p");
            p.textContent = `La letra ${x} no está permitida en esta página.`;
            p.style = "color: red;"
            divContent.appendChild(p);
        }
        let text = document.querySelector("input[name=text]")
        text.addEventListener("keydowm", (e) => {
            if (e.key.toLowercase() === "d")  {
                let letterd = "d";
                error(letterd);
            } 
            else if (e.key.toLowercase()  === "a") {
                let lettera = "a";
                error(lettera);

            } 
            else if (e.key.toLowercase()  === "w") {
                let letterw = "w";
                error(letterw);

            }
            else {
                p.textContent = "";
            }
            
        });

         
        
    }
    Exercise60();
})