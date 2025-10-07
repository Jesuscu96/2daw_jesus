window.onload = function () {
    function myElements(myArray, x) {      
        
        return myArray.slice(0, x).join("");
        
        
 
    }
    const array1 = ["blue", "red", "green", "black", "orange", "pink", "white", "yellow"];
    
    
    document.write(`<p>The array is: ${array1} .</p>`);
    document.write(`<p>The number is: 6.</p>`);
    document.write(myElements(array1, 6));
}   