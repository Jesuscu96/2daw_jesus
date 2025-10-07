window.onload = function () {
    alert("Bienvenidos a esta web.")
    const name2 = prompt("Enter a usuari:", "usuari...").trim().toLowerCase();
    const name1 = prompt("Enter a password:", "password...").trim().toLowerCase();
    let newdate = new Date()
    hour = newdate.getHours()
    minut = newdate.getMinutes()
    second = newdate.getSeconds()

    hourActuality = hour + " : " + minut + " : " + second

    switch(name1) {
        case "daw":
            alert(`Hello ${name1} student. ${hourActuality}`);
            break;
        default:
            alert(`Access denied.`);
            break
        
    }
  

    
}
