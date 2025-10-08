window.onload = function () {
    const linearSearch = x =>  x  === 8;
    
    let array1 = [5, 8, 7, 4]
    let array2 = [5, 9, 7, 4]
    document.write(`<p>The number is 8</p>`);
    
    document.write(`<p>The array is: ${array1}</p>`);
    document.write(array1.some(linearSearch));
    
    document.write(`<p>The array is: ${array2}</p>`);
    document.write(array2.some(linearSearch));

}
