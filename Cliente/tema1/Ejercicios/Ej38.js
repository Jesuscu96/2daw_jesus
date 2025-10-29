

window.onload = function () {
  const Exercise38 = () => {
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
    let body = document.querySelector("body");
    let p1 = document.createElement("p");
    p1.innerText = `You can't enter a row or column that doesn't exist.`;
    let p2 = document.createElement("p");
    p2.innerText = `The table doesn't exist.`;
    if(table) {
      const promRoms = parseInt(prompt("enter the row number."));
      const promCols = parseInt(prompt("enter the column number."));
      if(isNaN(promRoms) || promRoms > 3 || promRoms <= 0 || isNaN(promCols) || promCols > 3 || promCols <= 0) {
        body.appendChild(p1);
        return;
      }
      const text = prompt("Enter short words.");

      
    }else{
      body.appendChild(p2);
      return;
    }
    const cols = rows[promRoms -1].getElementsByTagName('td');
    cols[promCols -1].textContent = text;

   

  }
  Exercise38();
}
