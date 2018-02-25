function area(){
    var radius = parseInt(document.getElementById('radius').value);
    var area = Math.PI * radius * radius;
    var display = "The area is " + area + ".";
    document.getElementById('area').innerHTML = display;
}
function circumference(){
    var radius = parseInt(document.getElementById('radius').value);
    var circumference = 2 * Math.PI * radius;
    var display = "The circumference is " + circumference +".";
    document.getElementById('circumference').innerHTML = display;
}