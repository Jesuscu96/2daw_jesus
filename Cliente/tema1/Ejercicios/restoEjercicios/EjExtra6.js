window.onload = function () {
    function myElements(a, b, c) {
        let sum = 0;
        for (let i = 1; i < c; i++) {
            if (i % a === 0 && i % b === 0) {
                sum += i; 
            }
        }
        return sum;      
    }

    document.write(myElements(3, 5, 1000));
}   