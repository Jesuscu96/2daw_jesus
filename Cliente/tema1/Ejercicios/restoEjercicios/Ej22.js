window.onload = function () {
    const quadraticSolver = (a, b, c) => {
        const discriminant = b * b - 4 * a * c;

        if (discriminant < 0) {
            return [NaN, NaN];
        }

        const sqrtDisc = Math.sqrt(discriminant);
        const x1 = (-b + sqrtDisc) / (2 * a); // "+" case
        const x2 = (-b - sqrtDisc) / (2 * a); // "−" case

        return [x1, x2];
    }

    
    document.write(quadraticSolver(1, 2, 1) + "<br>");
    document.write(quadraticSolver(1, 2, -15) + "<br>");
    document.write(quadraticSolver(1, 2, 5) + "<br>");
}
