window.onload = function () {
    const Exercise42 = () => {
        let names = [];
        let nameTag = document.querySelectorAll(".name-tag");
        for (let i = 0; i < nameTag.length; i++){
            let nameCelebrity = prompt("Enter the name of a celebrity.");
            names.push(nameCelebrity);
        }
        let inputGreeting = prompt("Enter a greeting.");

        
        console.log(nameTag.length);
        let countName = 0; 
        for (let i of nameTag) {
            let myH1 = i.getElementsByTagName("h1")[0]
            let myP = i.getElementsByTagName("p")[0]
            myH1.textContent = inputGreeting;
            myP.textContent = names[countName];
            countName++
        }
        
    }
    Exercise42();

    
}
