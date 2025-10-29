window.onload = function () {
    const ExerciseExtra2 = () => {
        
        let body = document.querySelector("body");
        let names = [];
        let allDiv = document.querySelector(".name-tag");
        let newTemplate = document.createElement("template")
        body.appendChild(newTemplate)
        let count = 1; 
        let stopPromp = true;
        
        while (stopPromp) {

            let nameCelebrity = prompt("Enter the name of a celebrity.").trim();
            
            if(nameCelebrity.toLowerCase() !== "stop") {

                let divTag = allDiv.cloneNode(true);
                divTag.classList.add("name-tag");
                let p = divTag.getElementsByTagName("p")[0];
                p.textContent = nameCelebrity;;
                body.appendChild(divTag);

            } else {
                stopPromp = false;
                break;
            }
            
        }
        const divDelete = newTemplate.appendChild(allDiv);
        
    }
    ExerciseExtra2();

    
}
