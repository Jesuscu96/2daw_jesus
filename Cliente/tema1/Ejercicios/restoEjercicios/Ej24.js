window.onload = function () {
    const higherOrder = () => {
        const ages = [];
        for (let i = 0; i < 5 ; i++) {
            let num1 = parseInt(prompt("Introduce una edad: "));
            ages.push(num1);
        }
        
        num2 = parseInt(prompt("Introduce una edad: "));
        const menoresNum2= ages.filter(elem => elem > num2);
        
        return menoresNum2;
    } 

    const resultado = higherOrder();
    document.write(`Edades mayores que el número dado: ${resultado.join(", ")}`);
    
}   