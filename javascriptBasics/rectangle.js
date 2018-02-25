function display(){

    var width = parseInt(document.getElementById('width').value);
    var height = parseInt(document.getElementById('height').value);
    var area = width * height;
    var perimeter = 2 *(width + height);
    var display = "Area: " + area + " " + "," + " " + "Perimeter: " + perimeter;
    document.getElementById('display').innerHTML = display;

}
