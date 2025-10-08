window.onload = function () {
    const isLeapYear = num1 => {
        
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
    
    document.write(`<p>The year is 2024</p>`);
    isLeapYear(2024)
    
    document.write(`<p>The year is 2025</p>`);
    isLeapYear(2025)
    document.write(`<p>The year is 2028</p>`);
    isLeapYear(2028)
}
