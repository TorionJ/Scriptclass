var removeColor = function(){

    var select = document.getElementById('colorSelect');
    if (select.hasChildNodes){
        select.remove(select.selectedIndex);
    }
}