window.onload = function () {
    
    function camelCase = text => {
        text = text.toLowerCase();
        let parts = text.split(" ");
        for (let i = 1; i < parts.length; i++) {
            let letters = parts[i].split("");
            letters[0] = letters[0].toUpperCase();
            parts[i] = letters.join("");
        }
        
        return parts.join("");
    }
    let names = ["pedro lopez", "eva gonzalez", "fran garcia"]
    document.write("<p> Nombres y apellidos: pedro lopez, eva gonzalez, fran garcia. </p><br>")   
    document.write(`${camelCase(`)}`);

  

    
    
   
}   