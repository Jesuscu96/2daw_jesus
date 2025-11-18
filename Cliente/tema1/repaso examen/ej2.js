

document.addEventListener('DOMContentLoaded', () =>{
    let body = document.querySelector("body");
    let select = document.querySelector("#seasonsDropdown");
    let wintC = document.querySelector("#winter");
    let sprinC = document.querySelector("#spring");
    let sumC = document.querySelector("#summer");
    let fallC = document.querySelector("#fall");
    let newop = document.createElement("option");
    newop.textContent = "seleciona";
    newop.selected = true;
    //select.appendChild(newop);
    
    

    console.log(select[0]);
    
    wintC.addEventListener("click", e =>{
        if(!wintC.checked) {
            select[0].style.display = "none";
            select.appendChild(newop);
            
        }
        else {
            select[0].style.display = "block"
            newop.remove()
        }
    })  
    
        
        
    


    
})