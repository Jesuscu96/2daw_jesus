window.onload = function () {
  const Exercise27 = () => {
    let finish = true;
    let newArray = []
    while (finish) {
      let op = prompt("Enter a city - or stop to finish").trim();
      if (op.toLocaleLowerCase() !=="stop"){
        newArray.push(op)
      }
      else if(op.toLocaleLowerCase() ==="stop"){
        let setArray = new Set(newArray.sort())
        for(const i of setArray) {
          document.write(`<p>${i} </p>`)
        }
        finish = false;
        break;
      }

    }
  }
  Exercise27();
}  
 