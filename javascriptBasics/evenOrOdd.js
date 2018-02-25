function evenOrOdd(){
    var number = parseInt(document.getElementById('num').value);
    if (number % 2 == 0){
        document.getElementById('answer').innerHTML = number +' is an even number.';
    }
    else {
        document.getElementById('answer').innerHTML = number + ' is an odd number.';
    };
}