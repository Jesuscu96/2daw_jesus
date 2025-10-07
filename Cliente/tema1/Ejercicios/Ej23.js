window.onload = function () {
    const divideByTwo = x => x / 2; 
    divideByTwo(8)
    const dividetwoNumbers = (num1, num2) => num1 > num2 ? Math.ceil(num1 / num2) : Math.ceil(num2 / num1); 
    dividetwoNumbers(8, 14)  
        
    

    
    document.write(divideByTwo(8) + "<br>");
    document.write(dividetwoNumbers(8, 14) + "<br>");
    
}
