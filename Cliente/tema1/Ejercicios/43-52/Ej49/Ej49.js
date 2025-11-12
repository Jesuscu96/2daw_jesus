document.addEventListener('DOMContentLoaded', () => {
    const Exercise49 = () => {
        
        let myBody = document.querySelector("body");
        let myImg = document.querySelector("img");
        let miH1 = document.createElement("h1");
        
        miH1.textContent = "Bienvenido";
        myBody.insertBefore(miH1, myImg);
        


        myImg.addEventListener("mouseover", () => {
            myImg.src = "./img/santander.jpeg";
        })
        myImg.addEventListener("mouseout", () => {
            myImg.src = "./img/oviedo.jpeg";
        })
        myImg.addEventListener("click", () => {
            alert("Stop clicking me!!")
        })
       
        
    }
    Exercise49();
})
