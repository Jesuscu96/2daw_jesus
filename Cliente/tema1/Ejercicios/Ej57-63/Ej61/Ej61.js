document.addEventListener('DOMContentLoaded', () => {
    const Exercise61 = () => {
        let pass = document.querySelector("input[name=pass]");
        let label = document.querySelector("label");
        function  strength (x) {
            label.textContent = "Password"
            label.textContent += `: Strength ${x}`
        }

        pass.addEventListener('input', e => {
            let letter = pass.value
            let low = /^.{0,7}$|^[A-Za[\d]{8,}$/;
            let medium = /^(?=.*[A-Za-z])(?=.*\d)[A--z]{8,}$|^Za-z\d]{8,}$/;
            let hight = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
           /*  if(!low.test(letter)) { 
                strength("LOW");
            }
            else if(!medium.test(letter)) {
                strength("MEDIUM");
            }
            else if(!hight.test(letter)) {
                strength("HIGHT");
            }
            else if(letter === "") {
                strength("EMPTY")
            } */
            if(hight.test(letter)) {
                strength("HIGHT");
            }
            else if(medium.test(letter)) {
                strength("MEDIUM");
            }
            else if(low.test(letter)) { 
                strength("LOW");
            }
            
        });

    }
    Exercise61();
})