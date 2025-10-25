
window.onload = function () {
  const Exercise39 = () => {
    
    let body = document.querySelector("body");
    let img = document.createElement("img");
    body.appendChild(img)
    const randomNumber = Math.floor(Math.random() * 4) + 1;
    

    switch (randomNumber) {
      case 1:
        img.setAttribute("src", "./img/comillas.jpeg");
        break;
      case 2:
        img.setAttribute("src", "./img/oviedo.jpeg");
        break;
      case 3:
        img.setAttribute("src", "./img/ribadesella.jpeg");
        break;
      case 4:
        img.setAttribute("src", "./img/santander.jpeg");
        break;
      }
    }
  Exercise39();
}
