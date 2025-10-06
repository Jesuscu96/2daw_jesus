window.onload = function () {
    function isPalindrome(x) {
        const word = x.toLowerCase();
        const wordrev = word.split("").reverse().join("");
        if(word === wordrev) {
            return document.write(`If it is palindrome ${x}. <br>`);
        } else {
            return document.write(`It is not palindrome ${x}. <br>`);
        }
    }
        
    isPalindrome("Jesus");
    isPalindrome("Ana");
    
}
