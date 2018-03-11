var dispList = function(){

    var list = document.getElementById('colorSelect').length;
    for (var i = 0 ; 0 < list ; i++){

        var dispList = document.getElementById('colorSelect').options;
        alert(dispList[i].text);
    }
}