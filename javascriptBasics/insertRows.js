var insert_Row = function(){

    /*var row = document.c('tr').insertRow;
    var data = document.createElement('td');
    var data2 = document.createElement('td');
    var rowTxt = document.createTextNode('Row 3 cell 1');
    var rowTxt2 = document.createTextNode('Row 3 cell 2');
    var td = data.appendChild(rowTxt);
    var td2 = data2.appendChild(rowTxt2);
    row.appendChild(td);
    row.appendChild(td2);
    parent.appendChild(row); */
    var table = document.getElementById('sampleTable').insertRow(-1);
    var x = table.insertCell(0);
    var y = table.insertCell(1);
    x.innerHTML = 'New Cell 1';
    y.innerHTML = 'New Cell 2';

}