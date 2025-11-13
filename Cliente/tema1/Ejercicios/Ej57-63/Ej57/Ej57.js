document.addEventListener('DOMContentLoaded', () => {
    const Exercise57 = () => {
        

        
        let miBody = document.body;
        
        let divContent = document.createElement("div");
        divContent.classList.add("content")
        miBody.appendChild(divContent);

        let button = document.querySelector(".enviar")
        button.addEventListener("click", () => {
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
            age.textContent = inputAge.value;
            divContent.appendChild(age);
            
            //interest
            document.querySelectorAll("input[name=interest]")
                .forEach(check => {
                    if (check.checked) {
                        let interest = document.createElement("p");
                        interest.textContent = check.value;
                        divContent.appendChild(interest);
                    }
                });
            
            // Gender
            let inputGender = document.querySelectorAll("input[name=gender]");
            let gender = document.createElement("p");
            for(let i = 0; i < inputGender.length; i++) {
                inputGender[i].checked ? gender.textContent = inputGender[i].value : "";
            }
            divContent.appendChild(gender);
            
            //country
            let inputCountry = document.querySelector("select[name=pais]");
            let country = document.createElement("p");
            country.textContent = inputCountry.value;
            divContent.appendChild(country);

            //comments
            let inputComments = document.querySelector("textarea[name=comments]")
            let comments = document.createElement("p");
            comments.textContent = inputComments.value;
            divContent.appendChild(comments);
        });

         
        
    }
    Exercise57();
})