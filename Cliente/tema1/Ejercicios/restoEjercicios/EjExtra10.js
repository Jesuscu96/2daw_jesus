window.onload = function () {
    
  
  const capsletters = (arr) => {
    return arr.map((allname) => {
      const words = allname.split(" "); 

      const mayus = words.map((word) => {
        const firstLetter = word.charAt(0).toUpperCase(); 
        const rest = word.slice(1); 
        return firstLetter + rest; 
      });
      
      return mayus.join(" "); 
    });
  };

    const name = ["pedro lopez", "eva gonzalez", "fran garcia"]
    document.write("<p> Nombres y apellidos: pedro lopez, eva gonzalez, fran garcia. </p><br>")   
    document.write(`${capsletters(name).join(", ")}`);

}   