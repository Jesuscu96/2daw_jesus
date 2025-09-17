window.onload = function () {
    alert("Bienvenidos a esta web.")
    
    const num1 = parseInt(prompt("Enter a number:", "1 ... 10").trim())
    const num2 = Math.floor(Math.random() * 10) + 1;

    if(num1 == num2){
        return alert(`Well done!.`)
     }
     else{ 
          return alert(`Sorry, wrong guess….`)
     }
    
    

    
  

    
}
