

window.onload = function () {
  const Exercise36 = () => {
    let allParagraph = document.getElementsByTagName("p");
    let firstParagraph = allParagraph[0];
    console.log(firstParagraph);
  
    
    
    let img = document.querySelector("img")
    //paragraph.innerText = `this is my text`;
    let textParagraph = firstParagraph.innerText;
    let newText = `This is my text. `;
    firstParagraph.textContent = newText + textParagraph;

    let newImg = img.setAttribute("src", "./gijon.jpeg");
   
    let allDiv = document.getElementsByTagName("div");
    let lastDiv = allDiv[allDiv.length -1];
    lastDiv.style.border = "solid 1px red";

    let allLink = document.getElementsByTagName("a");
    let lastLink = allLink[allLink.length -1];
    lastLink.remove()

  }
  Exercise36();
}
