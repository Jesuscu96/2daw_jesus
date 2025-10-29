

window.onload = function () {
  const Exercise37 = () => {
    let table = document.getElementById('myTable')
    let rows = table.getElementsByTagName('tr');
    let numCols = rows[0].getElementsByTagName('td').length;
    for (let row of rows) {
      let newCell = document.createElement('td');
      newCell.textContent = 'New cell';
      row.appendChild(newCell);
    }
    let newRow = document.createElement('tr');
    for (let i = 0; i <= numCols; i++) {  
      let newCell = document.createElement('td');
      newCell.textContent = 'Row' + (rows.length + 1) + ' cell' + (i + 1);
      newRow.appendChild(newCell);
    }
    table.appendChild(newRow);
  
    

   

  }
  Exercise37();
}
