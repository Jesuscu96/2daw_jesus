$(function() {
    $('input[type="radio"][name="radioGroup"]:checked').val();
    $('input[type="text"][name="someTextField"]').val("Ejercicio 12");
    $('input[type="checkbox"]').val(["1", "3", "4"]);
    var checkboxValues =
        $('input[type="checkbox"][name="checkboxes"]:checked').map(function () {
        return $(this).val();
        }).toArray();
    console.log(checkboxValues);
    
    
})