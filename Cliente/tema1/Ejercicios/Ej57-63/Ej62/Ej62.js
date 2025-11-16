document.addEventListener('DOMContentLoaded', () => {
    //submit
    let submit = document.querySelector("input[type=submit]");
    
    //email valido 
    let email = document.querySelector("input[name=email]");
    email.type = "email";
    email.required = true;
    email.addEventListener('blur', e => {
        if(email.value === "") {
            email.style.backgroundColor = "lightcoral";
            email.placeholder = "The email address is incorrect."
            submit.addEventListener('click', e => {
                e.defaultPrevented();        
            }) 
        }
        else {
            email.style.backgroundColor = "white";
        }
    })
    
    //name
    let name = document.querySelector("input[name=name]");
    name.required = true;
    name.addEventListener('blur', e => {

        if(name.value === "") {
            name.style.backgroundColor = "lightcoral";
            name.placehodler = "The field cannot be empty.";
            submit.addEventListener('click', e => {
                e.defaultPrevented();        
            })
        }
        else {
            name.style.backgroundColor = "white";
        }
    })
    
    //comments
    let comments = document.querySelector("textarea[name=comments]");
    comments.required = true;
    comments.addEventListener('blur', e => {
        let commentsArray = comments.value.split("");
        if(commentsArray.length > 50) {
            comments.style.backgroundColor = "lightcoral";
            comments.placeholder = "Comments must not exceed 50 characters."
            submit.addEventListener('click', e => {
                e.defaultPrevented(9);        
            }) 
        }
        else {
            comments.style.backgroundColor = "white";
        }
    })
    
    //pass
    let pass = document.querySelector("input[name=password]");
    pass.required = true;
    pass.addEventListener('blur', e => {
        let passTest = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/
;
        if(!passTest.test(pass.value)) {
            pass.style.backgroundColor = "lightcoral";
            pass.placeholder = "Password must be at least 6 characters and include at least one lowercase, one uppercase and one digit."
            submit.addEventListener('click', e => {
                e.defaultPrevented();        
            }) 
        }
        else {
            pass.style.backgroundColor = "white";
        }
    })
    
    


})