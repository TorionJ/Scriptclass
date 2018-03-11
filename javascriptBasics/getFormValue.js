var getFormvalue = function(){
    var form = document.getElementById('form1');
    var firstN = form.firstChild.nextSibling.value;
    var lastN = document.getElementsByTagName('br');
    var lastN2 = lastN[1].previousSibling.value;
    var ans = document.getElementById('answer');
    var name = document.createTextNode(firstN + ' ' + lastN2);
    ans.appendChild(name);
    

}
