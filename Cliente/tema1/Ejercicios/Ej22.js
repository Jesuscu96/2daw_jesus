window.onload = function () {
    function greaterThanAvarage( x, num) {
        const discriminante = b * b - 4 * a * c;
  
        if (discriminante > 0) {
        const x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        return `Las soluciones son x1 = ${x1.toFixed(2)} y x2 = ${x2.toFixed(2)}`;
        } else if (discriminante === 0) {
        const x = -b / (2 * a);
        return `La solución es x = ${x.toFixed(2)}`;
        } else {
        const real = (-b / (2 * a)).toFixed(2);
        const imag = (Math.sqrt(-discriminante) / (2 * a)).toFixed(2);
        return `Las soluciones son x1 = ${real} + ${imag}i y x2 = ${real} - ${imag}i`;
        }
        
    }
    const array1 = [5, 8, 7, 4, 8, 10,];
    const num1 = 8;
    const num2 = 5;
    document.write(`<p>The array is: ${array1}</p><br>`);
    
    document.write(`<p>The number is 8</p>`);
    document.write(resolverEcuacionSegundoGrado(1, 2, 1));
    
    document.write(`<p>The number is 5</p>`);
    document.write(resolverEcuacionSegundoGrado(1, 2, 1));

}
