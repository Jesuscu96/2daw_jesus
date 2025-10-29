

window.onload = function () {
  const Exercise37 = () => {
    let table = document.getElementById('myTable')
    let rows = table.getElementsByTagName('tr');
    let numRows = rows.length;
    let numCols = rows[0].getElementsByTagName('td').length;
    for (let i = 0; i < numRows; i++) {
      let newCell = document.createElement('td'); 
      newCell.textContent = `Row${i + 1} cell${numCols + 1}`;
      rows[i].appendChild(newCell);
    }
   
    let newRow = document.createElement('tr');
    for (let j = 0; j <= numCols; j++) {  
      let newCell = document.createElement('td');
      newCell.textContent = `Row${numRows + 1} cell${j + 1}`;
      newRow.appendChild(newCell);
    }
    table.appendChild(newRow);

  }
  Exercise37();
}
