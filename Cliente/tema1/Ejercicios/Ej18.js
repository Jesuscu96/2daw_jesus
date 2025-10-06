window.onload = function () {
    function isPrime(num) {
        if (num <= 1) {
            document.write(`It is not prime: ${num}. <br>`);
            return;
        }
        else if (num % 2 === 0) {
            document.write(`It is not prime: ${num}. <br>`);
            return;
        }
        else if (num === 2) {
            document.write(`It's prime: ${num}. <br>`);
            return;
        }
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) {
                document.write(`It's not prime ${num}. <br>`);
                return
            } 
        }
        document.write(`If it's prime: ${num}. <br>`);
         

    }
    isPrime(11);
    isPrime(12);
    
}
