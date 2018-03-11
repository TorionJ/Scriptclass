var addRnC = function(row, cell, str){
    var table = document.getElementById('myTable');
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var tn = document.createTextNode(str);
    if (row === 0 || cell === 0){
        msg = "Please enter a number greater than 0";
        return alert(msg);
    }
    else if ((row === 1 && cell === 1) || row > cell){
        var nRow = table.appendChild(tr); //This creates a new row.
        var nCell = tr.appendChild(td); //This creates an empty cell.
        nCell = nCell.appendChild(tn); //This is the text for the empty cell.
    }
    else if (row === cell || cell > row){
        x = row - 1; // pulling the row from the index
        tr = table.getElementsByTagName('tr')[x]; //Selecting which row I need from the table
        var nCell = tr.appendChild(td); //Adding the <td> to the <tr>
        nCell = nCell.appendChild(tn); //appending <text node> to <td>
    }


}