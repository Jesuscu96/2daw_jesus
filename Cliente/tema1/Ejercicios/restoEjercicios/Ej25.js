window.onload = function () {
    const higherOrder = () => {
        const grades = [];
        for (let i = 0; i < 5 ; i++) {
            let num1 = parseInt(prompt("Introduce una nota: "));
            grades.push(num1);
        }
        
        num2 = 5;
        const menoresCinco = grades.filter(elem => elem < num2);
        
        return menoresCinco;
    } 

    const resultado = higherOrder();
    document.write(`Notas menores que 5: ${resultado.join(", ")}`);
    
}   