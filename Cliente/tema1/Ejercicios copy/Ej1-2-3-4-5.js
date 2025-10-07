window.onload = function () {
    alert("Bienvenidos a esta web.")
    const name1 = prompt("Enter a Exercises:", "1...5").trim();
    
    switch(name1) {
        case "1":
            return window.location.href = "./Ej1.html";
        case "2":
            return window.location.href = "./Ej2.html";
        case "3":
            return window.location.href = "./Ej3.html";
        case "4":
            return window.location.href = "./Ej4.html";
        case "5":
            return window.location.href = "./Ej5.html";
            
    }
    

    
}

    
