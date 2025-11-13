window.onload = function () {
    const isEven = x => x % 2 == 0;
        
    
    let num1 = prompt ("Enter a number: ")
    document.write(`<p>The number is: ${num1}</p>`);
    document.write(even(isEven))
    
}
