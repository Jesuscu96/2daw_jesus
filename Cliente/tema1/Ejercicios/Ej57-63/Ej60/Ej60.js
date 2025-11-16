

document.addEventListener('DOMContentLoaded', () => {
    const Exercise60 = () => {
        
        /*60.- Create a webpage with a text input. Then, using JavaScript: when the user enters any of ‘d’, ‘a’ or ‘w’, show a red warning under the input — “The letter [x] is not allowed on this page” — and prevent that letter from appearing in the input. For any other character, allow input normally and hide/remove the warning. */
        
        let miBody = document.body;
        
        
       
        let text = document.querySelector("input[name=text]")
        let p = document.createElement("p");
        function error (x) {
            p.style = "color: red;"
            p.textContent = `La letra ${x} no está permitida en esta página.`;
            miBody.appendChild(p);
        }
        
        text.addEventListener("keydown", e => {
            let letter = e.key.toLowerCase();
            if (letter === "d")  {
               
                e.preventDefault();
                error(letter);
            } 
            else if (letter === "a") {
               
                e.preventDefault();
                error(letter);

            } 
            else if (letter === "w") {

                e.preventDefault();
                error(letter);

            }
            else {
                p.textContent = "";
            }
            
        });

         
        
    }
    Exercise60();
})