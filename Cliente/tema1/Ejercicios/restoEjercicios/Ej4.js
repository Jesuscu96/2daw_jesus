window.onload = function () {
    alert("Bienvenidos a esta web.")
    
    const client = parseInt(prompt("Enter your expense:", "...").trim())
    

    if(client < 25){
        return alert(` Standard.`)
   }else if(client >= 25 && client < 50){
        return alert(`Bronze.`)
   }else if(client >= 50 && client < 100){
        return alert(`Silver.`)
   }else if(client >= 100 ){
        return alert(`Gold.`)
   }
    
    

    
  

    
}
