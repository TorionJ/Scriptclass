var changeContent = function(row, cell, str){
        var x = row - 1;
        var y = cell - 1;
        var td = document.getElementsByTagName('tr')[x]; //Grab the row of the <td> 
        var child = document.getElementsByTagName('td')[y]; // Grab the cell (text node) of <td>
        if (td.hasChildNodes){
            td.removeChild(child) // If the <td> has a child text node delete the text node
        }
        var nCell = td.insertCell(y); //insert the new cell
        nCell = nCell.innerHTML = str; //make the text node whatever the string text are
        var tableRow1 = document.getElementsByTagName('table')[x]; // declaring the table row
        var td1 = tableRow1.firstChild;  // declaring that the td1 is the first child of the table row
        var cell1 = td1.firstChild;  // declaring that cell1 (text node) is the first child of td1
        
        console.log(td1.value);
}