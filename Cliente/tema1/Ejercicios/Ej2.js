window.onload = function () {
    alert("Bienvenidos a esta web.")
    const name1 = prompt("Enter a fruit:", "fruit...").trim().toLowerCase();
    switch(name1) {
        case "banana":
            alert(`${name1}s are good.`);
            break;
        case "orange":
            alert(`I'm not a fan of ${name1}s.`);
            break
        case "apple":
            alert(`Oh really, do you like ${name1}s?.`);
            break
            
    }
    

    
}
