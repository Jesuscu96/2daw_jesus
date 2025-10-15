window.onload = function () {
  const Exercise32 = () => {
    let personas = {};
    let contador = 1;

    while (confirm("¿Deseas agregar otro usuario?")) {
      const nombre = prompt("Introduce el nombre del usuario:");
      const apellido = prompt("Introduce el apellido del usuario:");
      const edad = prompt("Introduce la edad del usuario:");


      if (!isNaN(edad) && edad !== "") {

        const clavePersona = `persona${contador}`;

        personas[clavePersona] = {
          nombre: nombre,
          apellido: apellido,
          edad: Number(edad)
        };

        contador++; 
      } else {
        alert("Edad inválida. No se agregó esta persona.");
      }
    }


    console.log("Personas agregadas:");
    console.log(personas);

  }
  Exercise32();
}  
 