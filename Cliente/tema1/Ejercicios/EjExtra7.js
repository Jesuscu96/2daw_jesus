window.onload = function () {
    
    function isEvenPart2(num) {
        const arr = num.toString()
        
        let newArray = [];
        
        for (let i = 0; i < arr.length; i++) {
            newArray = [...newArray, arr[i]];
            if (arr[i] % 2 === 0 && arr[i + 1] % 2 === 0)  {
                newArray = [...newArray, "-"];
            } 
        }
        return newArray.join("");
    
    }
  

    
    
    
    document.write(`<p style="color: red;">The number is: 2540586782 .</p>`);
    document.write(isEvenPart2(2540586782));
}   