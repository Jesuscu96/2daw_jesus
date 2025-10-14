window.onload = function () {
    const Exercise26 = () => {
    let finish = true;
    while (finish) {
      let op = prompt("Enter a number - or stop to exit").trim();
        
      switch (op) {
        case !isNaN(parseInt(op)):
          var sum = 0;
          sum += op;

          break;

        case "stop" || "Stop":
          finish = false;
          break;
        // default:
        //   alert("Invalid option!!");
        //   alert(`Enter a number - or negative number to exit.`);
      }
    }
  };
}   