window.onload = function () {
   
  const letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
  const tablaLetras = letrasDNI.reduce((acc, letra, i) => {
    acc[i] = letra;
    return acc;
  }, {});
    
  
  function obtenerLetraDNI(numeroDNI) {
    if (typeof numeroDNI !== 'number' || numeroDNI < 0 || numeroDNI > 99999999) {
      return 'Número inválido';
    }
    const resto = numeroDNI % 23;
    return tablaLetras[resto];
  }

  console.log(obtenerLetraDNI(13375678)); 
  
}  
//const letrasDNI = [
    //[0, 'T'], [1, 'R'], [2, 'W'], [3, 'A'], [4, 'G'],
    //[5, 'M'], [6, 'Y'], [7, 'F'], [8, 'P'], [9, 'D'],
    //[10, 'X'], [11, 'B'], [12, 'N'], [13, 'J'], [14, 'Z'],
    //[15, 'S'], [16, 'Q'], [17, 'V'], [18, 'H'], [19, 'L'],
    //[20, 'C'], [21, 'K'], [22, 'E']
  //];Esta es otra y podiramos usar el Map