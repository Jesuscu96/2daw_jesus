window.onload = function () {
    function avarage(x) {
        const sum = x.reduce((acc, elem) => acc += elem, 0);
        const len = x.length;
        const avar = (sum / len);
        if(len === 0) {
            return `<p>The avarage is:  ${undefined} </p>`;
        }
        
        if (Number.isInteger(avar)) {
            return `<p>The avarage is: ${avar}</p>`
        }
        else {
            return `<p>The avarage is: ${avar.toFixed(2)}</p>`
        }
    }
    const array1 = [5, 8, 7, 4, 8, 10];
    const array2 = [5, 9, 7, 4];
    const array3 = [];
    
    document.write(`<p>The array is: ${array1}</p>`);
    document.write(avarage(array1));
    
    document.write(`<p>The array is: ${array2}</p>`);
    document.write(avarage(array2));
    
    document.write(`<p>The array is: ${array3}</p>`)
    document.write(avarage(array3));;
    

}
