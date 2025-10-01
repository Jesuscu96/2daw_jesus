window.onload = function () {
    function isPrime(num) {
        if (num <= 1) {
            document.write(`It is not prime: ${num}. <br>`);
            return;
        }
         if (num % 2 === 0) {
            document.write(`It is not prime: ${num}. <br>`);
            return;
        }
        if (num === 2) {
            document.write(`It is prime: ${num}. <br>`);
            return;
        }
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) return document.write(`It is not prime ${num}. <br>`);
        }
        return document.write(`If it is prime: ${num}. <br>`);
         

    }
    const num1 = 11;
    const num2 = 12;
   
    isPrime(num1);
    isPrime(num2);
    
}
