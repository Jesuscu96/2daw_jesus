window.onload = function () {
    
  
  const onlyVowels = (arr) => {
    arr = arr.join(" ").toLowerCase().split("")
    const newArray = arr.reduce((acc, elem) => {
      if (elem == "a" || elem == "o" || elem == "u" || elem == "i" || elem == "o" || elem == "e" ) {
        acc ++;
      }
      return acc
    }, 0);
    return newArray
  };

   
    
    let name = ["pedro lopez", "eva gonzalez", "fran garcia"]
    document.write("<p> Cadena de texto: pedro lopez, eva gonzalez, fran garcia. </p><br>")   
    document.write(`${onlyVowels(name)}`);

  

    
    
   
}   