document.addEventListener('DOMContentLoaded', () => {
    const Exercise51 = () => {
        
        
        
        let imagenPrincipal = document.getElementById("imagenPrincipal");
        let miniaturas = document.querySelectorAll(".miniaturas img");
        //console.log(miniaturas.length);
        
        for (let i = 0; i < miniaturas.length; i++) {
            miniaturas[i].addEventListener("mouseover", () => {
                miniaturas[i].style.width = "120px";
                miniaturas[i].style.height = "80px";
            });
            miniaturas[i].addEventListener("mouseout", () => {
                miniaturas[i].style.width = "100px";
                miniaturas[i].style.height = "60px";
            });
            miniaturas[i].addEventListener("dblclick", () => {
                imagenPrincipal.src = miniaturas[i].src;
            });

        } 
       
        
    }
    Exercise51();
})
