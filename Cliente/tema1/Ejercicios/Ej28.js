window.onload = function () {
  const Exercise28 = () => {
    const map = new Map([["José", "Profesor"], ["Lorenzo", "Profesor"], ["Nuria", "Estudiante", "Profesor"], ["Vicente", "Estudiante"], ["Joaquín", "Estudiante"],  ["María", "Estudiante"]])
   
    let op = prompt("Enter a name: ").trim();
    if(map.has(op)){
      alert(`La persona ${op} es ${map.get(op)}`)
    } else{
      alert(`La persona ${op} no existe`)
    }
  }
  Exercise28();
}  
 //Solo muestra el primer valor de esa clave probado con Nuria