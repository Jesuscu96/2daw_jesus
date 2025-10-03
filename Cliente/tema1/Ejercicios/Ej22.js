window.onload = function () {
    function quadraticSolver(a, b, c) {
        const discriminante = b * b - 4 * a * c;
  
        if (discriminante > 0) {
        const x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        return `The solutions are x1 = ${x1.toFixed(2)} y x2 = ${x2.toFixed(2)}`;
        } else if (discriminante === 0) {
        const x = -b / (2 * a);
        return `The solution is x = ${x.toFixed(2)}`;
        } else {
        const real = (-b / (2 * a)).toFixed(2);
        const imag = (Math.sqrt(-discriminante) / (2 * a)).toFixed(2);
        return `The solutions are x1 = ${real} + ${imag}i y x2 = ${real} - ${imag}i`;
        }
        
    }
    
    document.write(quadraticSolver(1, 2, 1));
    document.write(quadraticSolver(1, 2, 1));
    /*function quadraticSolver(a, b, c) {
        const discriminant = b * b - 4 * a * c;
        if (discriminant < 0) {
            // No hay soluciones reales
            return [NaN, NaN];
        }
        const sqrtDisc = Math.sqrt(discriminant);
        const denom = 2 * a;
        const sol1 = (-b + sqrtDisc) / denom;
        const sol2 = (-b - sqrtDisc) / denom;
        return [sol1, sol2];
    }

    // Ejemplos de uso:
    console.log(quadraticSolver(1, -3, 2)); // [2, 1]
    console.log(quadraticSolver(1, 2, 1));  // [-1, -1]
    console.log(quadraticSolver(1, 2, 5));  // [NaN, NaN]*/



}
