window.onload = function () {
    const countries = ["Estonia", "Finland", "Sweden", "Denmark", "Norway", "Iceland",];
    const names = ["Eve", "Mathias", "Derek", "Athenea"];
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    //Ej1
    const ej1 = (num) => {
        const newArray = num.reduce((acc, _) => acc + 1, 0);
        return newArray
    };
    document.write(`<p>Ej1: ${ej1(numbers)}</p></br>`);
    //Ej2
    const ej2 = (num) => {
        const newArray = num.reduce((acc, elem, ind) => {
            if (ind === num.length - 1) {
                return acc + "and " + elem + " are north European countries";
            } else if (ind === 0) {
                return elem;
            } else {
                return acc + ", " + elem;
            }
        }, "");
      return newArray;
    };
    document.write(`<p>Ej2: ${ej2(countries)}</p></br>`);
  

  
};
