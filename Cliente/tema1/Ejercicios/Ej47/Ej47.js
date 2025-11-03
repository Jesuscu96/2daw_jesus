document.addEventListener('DOMContentLoaded', () => {
    const Exercise47 = () => {
        let myDiv = document.getElementsByTagName("div");
        let myH1 = document.getElementsByTagName("h1");
        let myP = document.getElementsByTagName("p");
        let myButton = document.getElementsByTagName("input");
        console.log(myP[0]);
        for (let i = 0; i < myDiv.length; i++){
            myButton[i].addEventListener("click", () => {
                myH1[i].style.display = "none";
                myP[i].style.display = "none";
            })
            myP.addEventListener("mouseout", () => {
                myP.style.backgroundColor = "green";
            })
            myP.addEventListener("click", () => {
                myP.style.backgroundColor = "red";
            })
            myP.addEventListener("dblclick", () => {
                myP.style.backgroundColor = "blue";
            })
        }

        
    }
    Exercise47();
})
