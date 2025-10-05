window.onload = function () {
    
    function duplicate(arr) {
        const duplicateSins = array1.map(fila =>
            fila.filter((item, i) => fila.indexOf(item) === i)
        );
        return duplicateSins
    }   


  

    
    
    const array1 = [
        [2, 5, 4, 0, 5, 8 ,6, 7, 8, 2, "<br>"],
        [3, 5, 4, 5, 5, 8 ,6, 7, 8, 7, "<br>"],
        [4, 5, 8, 0, 5, 8 ,6, 7, 8, 2, "<br>"]
    ];
    document.write(`<p>The array is: <br> ${array1}</p>`);
    document.write(duplicate(array1));
}   