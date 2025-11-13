window.onload = function () {
  const Exercise7 = () => {
    for (let i = 0; i <= 10; i++) {
      let multi = i * 9;
      console.log(`${i} x 9 = ${multi}`);
    }
  };
  const Exercise8 = () => {
    var array1 = [];
    var array2 = [];
    for (let j = 0; j < 3; j++) {
      let num1 = parseInt(prompt("Enter a number:").trim());
      array1.push(num1);
    }

    while (array1.length > 0) {
      let min = Math.min(...array1);
      let indice = array1.indexOf(min);
      array2.push(min);
      array1.splice(indice, 1);
    }
    console.log(array2);
  };
  const Exercise9 = () => {
    const array3 = ["José", "Lola", "Lorenzo", "Mariluz", "Maria José"];
    const myName = prompt("Enter a username:", "username...").trim();
    let found = false;

    for (const t of array3) {
      //method with for
      if (t.toLowerCase() == myName.toLowerCase()) {
        alert(`Name found.`);
        found = true;
        break;
      }
    }
    if (!found) alert(`${myName} is not a current teacher.`);

    const array4 = array3.reduce((acc, elem) => {
      //method with reduce
      if (elem.toLowerCase() == myName.toLowerCase()) {
        return (acc = alert(`Name found.`));
      }
      acc += 1;
      if (acc == array3.length - 1) {
        return (acc = alert(`${myName} is not a current teacher.`));
      }
    });
    // Of the two methods, I like the reduce method better because you can play with the acumulador
  };
  const Exercise10 = () => {
    var array5 = ["*", "*", "*", "*", "*", "*", "*"];
    const array6 = [1, 2, 3, 4, 5, 6, 7];
    var count = 0;
    for (let g of array6) {
      array5.splice(count, 1, g);
      console.log(array5.toString());

      count++;
    }
  };
  const Exercise11 = () => {
    let finish = true;
    while (finish) {
      let op = prompt("Enter a number - or negative number to exit").trim();
        
      switch (op) {
        case !isNaN(parseInt(op)):
          var sum = 0;
          sum += op;

          break;

        case parseInt(op) <= 0:
          alert(`End of the exercises, the total sum is ${sum}.`);

          finish = false;
          break;
        default:
          alert("Invalid option!!");
          alert(`Enter a number - or negative number to exit.`);
      }
    }
  };

  
    alert(`He chooses the exercise to perform 7, 8, 9, 10, 11 and to finish he enters 0.`);
    let finish = true;
    while (finish) {
      let op = parseInt(
        prompt("Enter a number - 7, 8, 9, 10, 11 or 0 to exit").trim()
      );
      switch (op) {
        case 7:
          Exercise7();
          break;
        case 8:
          Exercise8();
          break;
        case 9:
          Exercise9();
          break;
        case 10:
          Exercise10();
          break;
        case 11:
          Exercise11();
          break;
        case 0:
          alert("End of the exercises.");
          finish = false;
          break;
        default:
          alert("Invalid option!!");
          alert(
            `He chooses the exercise to perform 7, 8 or 9 and to finish he enters 0.`
          );
      }
    }
  
};
