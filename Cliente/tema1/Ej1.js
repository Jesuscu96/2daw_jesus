window.onload = function () {
    alert("Bienvenidos a esta web.")
    const name1 = prompt("Introduzca su nombre:", "").trim();
    const edad = parseInt(prompt("Introduzca su edad:", "").trim());
    const email = prompt("Introduzca su email:", "").trim();
    const tlf = prompt("Introduzca su edad:", "").trim();
    const password = prompt("Introduzca su contraseña:", "").trim();
    let confirm1 = confirm(`Son estos sus datos? ${name1}, ${edad}, ${tlf}, ${email}, ${password}.`);
    alert("Sus datos han sido guardados.");
    
}
