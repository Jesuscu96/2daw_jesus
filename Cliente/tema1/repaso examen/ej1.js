document.addEventListener('DOMContentLoaded', () => {
    let newLi = document.createElement("li");
    let ul = document.querySelector("ul")
    newLi.classList.add("cuatro");
    newLi.textContent = "4";
    let li3 = document.querySelector(".tres");
    ul.insertBefore(newLi, li3)

    
})