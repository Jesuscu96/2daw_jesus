window.onload = function () {
    const ExerciseExtra1 = () => {
        
        let body = document.querySelector("body");
        let names = [];
        let allDiv = document.querySelectorAll(".name-tag");
        //let nameTag = div1;
        
        
        let stopPromp = true;
        
        while (stopPromp) {

            let nameCelebrity = prompt("Enter the name of a celebrity.").trim();
            
            if(nameCelebrity.toLowerCase() !== "stop") {

                let divTag = document.createElement("div");
                divTag.classList.add("name-tag");
                let h1 = document.createElement("h1");
                h1.textContent = "Greeting";
                let p = document.createElement("p");
                p.textContent = nameCelebrity;
                divTag.appendChild(h1);
                divTag.appendChild(p);
                body.appendChild(divTag);

            } else {
                stopPromp = false;
                break;
            }
            
        }
        const divDelete = allDiv[allDiv.length -1].remove();
        
    }
    ExerciseExtra1();

    
}
