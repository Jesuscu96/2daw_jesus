window.onload = function () {
    function isOdd(x) {
        return x % 2 !== 0
    }
    let array1 = [5, 8, 7, 4]
    document.write(`<p>${array1}</p>`);
    document.write(array1.some(isOdd));
    
}
