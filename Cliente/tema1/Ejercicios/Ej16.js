window.onload = function () {
    function isLeapYear(num1) {
        
        if(num1 % 400 === 0 ){
            return document.write("It's a leap year.")
        } else if (num1 % 100 == 0) {
            return document.write("It's not a leap year.")
        } else if (num1 % 4 == 0  ) {
            return document.write("It's a leap year.")
        } else {
            return document.write("It's not a leap year.")
        }

    }
    let year = 2024;
    document.write(`<p>The year is ${year}</p>`);
    isLeapYear(year)
    
}
