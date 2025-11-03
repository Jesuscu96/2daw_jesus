document.addEventListener('DOMContentLoaded', () => {
    const Exercise46 = () => {
        
        const myP = document.querySelector(".parrafo");
        myP.addEventListener("mouseover", () => {
            myP.style.backgroundColor = "grey";
        })
        myP.addEventListener("mouseout", () => {
            myP.style.backgroundColor = "green";
        })
        myP.addEventListener("click", () => {
            myP.style.backgroundColor = "red";
        })
        myP.addEventListener("dblclick", () => {
            myP.style.backgroundColor = "blue";
        })
        
    }
    Exercise46();
})