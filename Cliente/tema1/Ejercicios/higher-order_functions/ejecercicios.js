window.onload = function () {
    const countries = ["Estonia", "Finland", "Sweden", "Denmark", "Norway", "Iceland",];
    const names = ["Eve", "Mathias", "Derek", "Athenea"];
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const intStr = ["red", 2, "blue", 8, "black", 13, 6, "pink"]
    //Ej1
    const ej1 = num => {
        const newArray = num.reduce((acc, _) => acc + 1, 0);
        return newArray
    };
    document.write(`<p>Ej1: ${ej1(numbers)}</p></br>`);
    //Ej2
    const ej2 = count => {
        const newArray = count.reduce((acc, elem, ind) => {
            if (ind === count.length - 1) {
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
    //Ej3
    const ej3 = count => {
        const newArray = count.map(elem => elem.toUpperCase() + " ");
        return newArray
    }
    document.write(`<p>Ej3: ${ej3(countries)}</p></br>`);
    //Ej4
    const ej4 = count => {
        const newArray = count.map(elem => elem.length + " ");
        return newArray
    }
    document.write(`<p>Ej4: ${ej4(countries)}</p></br>`);
    //Ej5
    const ej5 = count => {
        const newArray = count.forEach((count, ind) => {
            console.log(`${ind}: ${count}`);
        });
    }
    console.log(ej5(countries));
    document.write(`<p>Ej5: Se muestra en consola</p></br>`);
    //Ej6
    const ej6 = count => {
        const newArray = count.filter(elem => elem.toLowerCase().includes("land"));
        return newArray
    }
    document.write(`<p>Ej6: ${ej6(countries)}</p></br>`);
    //Ej7
    const ej7 = count => {
        const newArray = count.filter(elem => elem.length === 6);
        return newArray
    }
    document.write(`<p>Ej7: ${ej7(countries)}</p></br>`);
     //Ej8
    const ej8 = count => {
        const newArray = count.filter(elem => elem.length >= 6);
        return newArray
    }
    document.write(`<p>Ej8: ${ej8(countries)}</p></br>`);
    //Ej9
    const ej9 = count => {
        const newArray = count.filter(elem => elem[0] === "E");
        return newArray
    }
    document.write(`<p>Ej9: ${ej9(countries)}</p></br>`);
    //Ej10
    const ej10 = array1 => {
        const newArray = array1.filter(elem => typeof elem === "string");
        return newArray
    }
    
    document.write(`<p>Ej10: ${ej10(intStr)}</p>`);
    document.write(`<p>Array original: ${intStr}</p></br>`);
    //Ej11
    const ej11 = count => {
        const newArray = count.some(elem => elem.length > 7);
        return newArray
    }
    document.write(`<p>Ej11: ${ej11(countries)}</p></br>`)
    //Ej12
    const ej12 = count => {
        const newArray = count.every(elem => elem.toLowerCase().includes("land"));
        return newArray
    }
    document.write(`<p>Ej12: ${ej12(countries)}</p></br>`);
    //Ej13
    document.write(`<p>Ej13: Learn about two new higher-order functions: find and findIndex.</p></br>`);
    //Ej14
    const ej14 = count => {
        const newArray = count.find(elem => elem.length === 6);
        return newArray
    }
    document.write(`<p>Ej14: ${ej14(countries)}</p></br>`);
    //Ej15
    const ej15 = count => {
        const newArray = count.findIndex(elem => elem.length === 6);
        return newArray
    }
    document.write(`<p>Ej15: ${ej15(countries)}</p></br>`);
    //Ej16
    const ej16 = count => {
        const newArray = count.findIndex(elem => elem === "Norway");
        return newArray
    }
    document.write(`<p>Ej16: ${ej16(countries)}</p></br>`);
    //Ej17
    const ej17 = count => {
        const newArray = count.findIndex(elem => elem === "Russia");
        return newArray
    }
    document.write(`<p>Ej17: ${ej17(countries)}</p></br>`);
};  
