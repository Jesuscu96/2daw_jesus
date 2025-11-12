document.addEventListener('DOMContentLoaded', () => {
    const Exercise48 = () => {

        
            //si se ve la imagen en la venta no salta hacia ella
        
        let myImg = document.getElementsByTagName("img");
        let myButton = document.getElementsByTagName("button");
        
        
        for (let i = 0; i < myButton.length; i++) {
            const value = myButton[i].value;
            
            myButton[i].addEventListener("click", () => {
                let numRandom = Math.floor(Math.random() * myImg.length);
                if (value === "1") {
                    myImg[0].scrollIntoView();
                } else if (value === "2") {
                    myImg[1].scrollIntoView();
                } else if (value === "3") {
                    myImg[2].scrollIntoView();
                } else if (value === "4") {
                    myImg[numRandom].scrollIntoView();
                }
            });
        }  
        
    }
    Exercise48();
})
