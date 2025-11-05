document.addEventListener('DOMContentLoaded', () => {
    const Exercise50 = () => {
        
        let myHtml = document.querySelector("html");
        let mybody = document.querySelector("body");
        let myP = document.querySelector("p");


        myHtml.addEventListener("mousemove", (e) => {
            myP.textContent = `${e.screenX} ${e.clientY}`;
        })
       
       
        
    }
    Exercise50();
})
