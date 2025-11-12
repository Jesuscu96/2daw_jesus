document.addEventListener('DOMContentLoaded', () => {
    const Exercise47 = () => {
        let myDiv = document.getElementsByTagName("div");
        let myH1 = document.getElementsByTagName("h1");
        let myP = document.getElementsByTagName("p");
        let myButton = document.getElementsByTagName("input");
        //console.log(myButton[0]);
        for (let i = 0; i < myDiv.length; i++){
            myButton[i].addEventListener("click", () => {
                if (myButton[i].value === "HIDE" ) {
                    
                    myH1[i].style.display = "none";
                    myP[i].style.display = "none";
                    myButton[i].value = "SHOW";
                    
                } else {
                    myH1[i].style.display = "block";
                    myP[i].style.display = "block";
                    myButton[i].value = "HIDE"
                
                }
                
            });
            myDiv[i].addEventListener("mouseover", () => {
                myDiv[i].style.backgroundColor = "lightblue";
            })
            myDiv[i].addEventListener("mouseout", () => {
                myDiv[i].style.backgroundColor = "lightgray";
            })
        
            
            // myP.addEventListener("dblclick", () => {
            //     myP.style.backgroundColor = "blue";
            // })
            
            
        }

        
    }
    Exercise47();
})
