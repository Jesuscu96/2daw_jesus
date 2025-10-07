window.onload = function () {
    let op = prompt("Enter a phrase of up to 10 words.", "El perro de San Roque no tiene rabo, porque Ramón Rodríguez se lo ha robado").trim().toLowerCase();
    let word = op.split(" ");
    document.write("<p>" + word.length + "</p>");
    document.write("<p>" + word[word.length-1] + "</p>");
    document.write("<p>" + word.reverse().join(" ") + "</p>");
    document.write("<p>" + word.sort().join(" ") + "</p>");
    document.write("<p>" + word.sort().reverse().join(" ") + "</p>");
        
}

