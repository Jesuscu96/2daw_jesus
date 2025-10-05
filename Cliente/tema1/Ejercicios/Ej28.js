function isEvenPart2(num) {
  const arr = num.toString();
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray = [...newArray, arr[i]];
    if (arr[i] % 2 === 0 && arr[i + 1] % 2 === 0) {
      newArray = [...newArray, "-"];
    }
  }
  return newArray.join("");
}

// Mostrar el resultado en el contenedor `salida`
document.getElementById('salida').innerHTML = 
  `<strong>The number is:</strong> 2540586782<br>
   <strong>Processed:</strong> ${isEvenPart2(2540586782)}`;
