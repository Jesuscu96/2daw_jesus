document,addEventListener('DOMContentLoaded', () => {
    const countries = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];
    const names = ['Eve', 'Mathias', 'Derek', 'Athenea'];
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const contenedor = document.querySelector(".contenedor");
    function ej1 (num) {
        const numbers1 = num.reduce((acc, elem) =>{
            acc += elem;
            return acc

        });
        console.log(numbers1);
        
        let pEj1 = document.createElement("p");
        pEj1.classList.add("ej1");
        pEj1.textContent = `Ej1 solución: ${numbers1}`;
        contenedor.appendChild(pEj1);
    }
    ej1(numbers);
    function ej2 (count) {
        const coun2 = count.reduce((acc, elem) => {
            if (elem !== "Norway" && elem !== "Iceland") {
                acc += ", " + elem;
            }
            else if(elem === "Norway") {
                acc += ", " + elem + " e ";                
            }
            else if(elem === "Iceland") {
                acc += elem + " son países del norte Europa.";
            }
            return acc
        });
        console.log(coun2);
        let pEj2 = document.createElement("p");
        pEj2.classList.add("ej2");
        pEj2.textContent = `Ej2 solución: ${coun2}`;
        contenedor.appendChild(pEj2);
        
    }
    ej2(countries);
    /* function ej3 (count) {
        const coun3 = count.reduce((acc, elem) => {
            if (elem !== "Iceland") {
                acc += ", " + elem;
            }
            else {
                acc += ", " + elem + ".";
            }
            return acc.toUpperCase();
        });
        console.log(coun3);
        let pEj3 = document.createElement("p");
        pEj3.classList.add("ej3");
        pEj3.textContent = `Ej3 solución: ${coun3.toUpperCase()}`;
        contenedor.appendChild(pEj3);
        
    }
    ej3(countries); */
    function ej3 (count) {
        const coun3 = count.map((elem) => (elem.toUpperCase()) );
        console.log(coun3);        
        let pEj3 = document.createElement("p");
        pEj3.classList.add("ej3");
        pEj3.textContent = `Ej3 solución: ${coun3}`;
        contenedor.appendChild(pEj3);
        
    } 
    ej3(countries);
    function ej4 (count) {
        const coun4 = count.map(elem => elem.length);
        console.log(coun4);        
        let pEj4 = document.createElement("p");
        pEj4.classList.add("ej4");
        pEj4.textContent = `Ej4 solución: ${coun4}`;
        contenedor.appendChild(pEj4);
        
    }
    ej4(countries);
    let countries2 = [...countries];
    console.log("countries2");
    console.log(countries2);

    console.log(countries2);
    
    
})