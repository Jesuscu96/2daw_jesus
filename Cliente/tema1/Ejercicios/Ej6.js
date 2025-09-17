window.onload = function () {
    alert("Bienvenidos a esta web.")
    
    const num1 = parseInt(prompt("Enter a year:", "...").trim())
    if(num1 % 4 === 0 ){
          if (num1 % 4 === 0 && num1 % 100 !== 0  && num1 % 400 === 0) {
               return alert("It's a leap year.")
          }
          return alert("It's a leap year.")
     }
     else {
          return alert("It's not a leap year.")
     }

    
    
    
    

    
  

    
}
