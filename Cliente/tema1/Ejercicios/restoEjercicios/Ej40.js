window.onload = function () {
    const Exercise40 = () => {
        let body = document.querySelector("body");
        let divByID = document.getElementById("container");
        divByID.textContent = "Hello ";

        let divQuery = document.querySelector("#container");
        divQuery.textContent += "World";
        
        let black = document.querySelectorAll(".second")
        for (let i of black) {
            i.style.fontWeight = 'bold';
        }
        let thirdLi = document.querySelector('ol li.third');
        thirdLi.style.fontStyle = 'italic';
                
        let footer = document.querySelector('div.footer');
        footer.classList.add('main');

        footer.classList.remove('footer');

        let newLi = document.createElement('li');
        newLi.textContent = 'four';
        let ul = document.querySelector('ul');
        ul.appendChild(newLi);

        let olLis = document.querySelector('ol').getElementsByTagName('li');
        for (let li of olLis) {
            li.style.backgroundColor = 'green';
        }
        footer.remove();

        /* let img = document.querySelector("img")
        //paragraph.innerText = `this is my text`;
        let textParagraph = firstParagraph.innerText;
        //let newText = `This is my text. `;
        firstParagraph.textContent = newText + textParagraph;

        let newImg = img.setAttribute("src", "./gijon.jpeg");

        let allDiv = document.getElementsByTagName("div");
        let lastDiv = allDiv[allDiv.length -1];
        lastDiv.style.border = "solid 1px red";

        let allLink = document.getElementsByTagName("a");
        let lastLink = allLink[allLink.length -1];
        lastLink.remove() */
        
    }
    Exercise40();
}
