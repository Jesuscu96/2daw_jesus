
window.onload = function () {
    const Exercise12 = () => {
        let confirm1 = confirm(`Would you like to receive notifications of our news?.`);
        setTimeout(() => {
            if (confirm1 === true) {
                alert("You will now receive our news.");

            }else{
                alert("Agreed you will not receive our news.");
            }
        }, "2000");

    }
    Exercise12()
    
}
