document.addEventListener('DOMContentLoaded', () => {
    const Exercise52 = () => {
        
        document.getElementById("abrir").addEventListener("click", function() {
            if (ventana && !ventana.closed) {
                ventana.close();
            }

            ventana = window.open(
                "",
                "miVentana",
                "width=100,height=100,toolbar=no,menubar=no,location=no"
            );

            if (ventana) {
                ventana.document.write("<body style='background:red;margin:0;'></body>");
                ventana.document.close();
            }
        });

        document.getElementById("cambiar").addEventListener("click", function() {
            if (ventana && !ventana.closed) {
                ventana.resizeTo(250, 250);
                ventana.focus();
            }
        });
       
        
    }
    Exercise52();
})
