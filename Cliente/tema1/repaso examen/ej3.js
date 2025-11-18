document.addEventListener('DOMContentLoaded', e =>{
    let email1 = document.querySelector("input[name=email1]");
    let email2 = document.querySelector("input[name=email2]");
    let boton = document.querySelector("input[name=submit]");
    //boton.disabled = true;
    let form = document.querySelector("form");
    let p = document.createElement("p");
   
    email2.onkeyup = () =>{
        if(email1.value !== email2.value) {
            boton.disabled = true;
            p.textContent = "emails no coinciden"          
            form.insertBefore(p, boton);
        }
        else {
            boton.disabled = false;
            p.textContent = "";
            form.insertBefore(p, boton);
        }
    }

    
})