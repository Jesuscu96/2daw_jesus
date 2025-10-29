window.onload = function () {
    const ExerciseExtra12 = () => {
        let table = document.getElementById('myTable');
        let rows = table.getElementsByTagName('tr');

       
        let numRows = rows.length;
        let numCols = rows[0].getElementsByTagName('td').length;

        let colsToAdd = parseInt(prompt("Enter the number of columns."));
        let rowsToAdd = parseInt(prompt("enter the number of rows."));

        // Añadir columnas a cada fila existente
        if (!isNaN(colsToAdd) && colsToAdd > 0) {
            for (let i = 0; i < numRows; i++) {
                for (let k = 0; k < colsToAdd; k++) {
                let newCell = document.createElement('td');
                newCell.textContent = `Row${i + 1} cell${numCols + k + 1}`;
                rows[i].appendChild(newCell);
                }
            }
            numCols += colsToAdd;
        }

        // Añadir filas al final
        if (!isNaN(rowsToAdd) && rowsToAdd > 0) {
            for (let r = 0; r < rowsToAdd; r++) {
                let newRow = document.createElement('tr');
                for (let c = 0; c < numCols; c++) {
                let newCell = document.createElement('td');
                newCell.textContent = `Row${numRows + r + 1} cell${c + 1}`;
                newRow.appendChild(newCell);
                }
                table.appendChild(newRow);
            }
        }
        
    }
    ExerciseExtra12();

    
}