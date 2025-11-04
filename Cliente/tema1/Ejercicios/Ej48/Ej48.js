document.addEventListener('DOMContentLoaded', () => {
    const Exercise48 = () => {

        

        
        let myImg = document.getElementsByTagName("img");
        let myButton = document.getElementsByTagName("button");
        
        
        for (let i = 0; i < myButton.length; i++) {
            myButton[i].addEventListener("click", () => {
            const value = myButton[i].value;
            const numRandom = Math.floor(Math.random() * myImg.length);

            if (value === "1") {
                myImg[0].scrollIntoView({ behavior: "smooth", block: "center" });
            } else if (value === "2") {
                myImg[1].scrollIntoView({ behavior: "smooth", block: "center" });
            } else if (value === "3") {
                myImg[2].scrollIntoView({ behavior: "smooth", block: "center" });
            } else if (value === "4") {
                myImg[numRandom].scrollIntoView({ behavior: "smooth", block: "center" });
            }
            });
        }  
        
    }
    Exercise48();
})
