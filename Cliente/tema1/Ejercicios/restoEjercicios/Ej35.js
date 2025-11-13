

window.onload = function () {
  const Exercise35 = () => {
    let link = document.getElementsByTagName("a");
    let allLink = link.length;
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");
    
    let body = document.querySelector("body")
    p1.innerText = `Number of links in the HTML:  ${allLink}`;
    body.appendChild(p1);

    let secondToLastLink = link[link.length-2];
    p2.innerText = `URL of the second-to-last link:  ${secondToLastLink}`;
    body.appendChild(p2);
    
    let count = 0;
    for (let i of link) {
      if (i.href == "http://prueba/") count++;
    }
    p3.innerText = `Number of links pointing to http://prueba:  ${count}`;
    body.appendChild(p3);
    
    let thirdP = document.getElementsByTagName('p')[2];
    let linkThirdP = thirdP.getElementsByTagName("a").length
    p4.innerText = `Number of links in the third paragraph:  ${linkThirdP}`;
    body.appendChild(p4);

  }
  Exercise35();
}
