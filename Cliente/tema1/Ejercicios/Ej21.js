window.onload = function () {
    function greaterThanAvarage( x, num) {
        const sum = x.reduce((acc, elem) => acc += elem, 0);
        const len = x.length;
        const avar = (sum / len);
        if(len === 0) return false;
        document.write(`<p>The avarage is: ${(avar).toFixed(2)}</p>`);
        if (avar.toFixed(2) < num) return true
        if (avar.toFixed(2) > num) return false
        
    }
    const array1 = [5, 8, 7, 4, 8, 10,];
    
    document.write(`<p>The array is: ${array1}</p><br>`);
    
    document.write(`<p>The number is 8</p>`);
    document.write(greaterThanAvarage(array1, 8));
    
    document.write(`<p>The number is 5</p>`);
    document.write(greaterThanAvarage(array1, 5));

}
