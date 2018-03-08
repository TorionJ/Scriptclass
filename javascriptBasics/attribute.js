var getAttributes = function(){

    pTag = document.getElementById('w3r');
    if (pTag.hasAttribute('id')){

        alert('The value of the type attribute is ' + pTag.getAttribute('type'));
        alert('The value of the hreflang attribute is ' + pTag.getAttribute('hreflang'));
        alert('The value of the rel attribute is ' + pTag.getAttribute('rel'));
        alert('The value of the target attribute is ' + pTag.getAttribute('target'));
        alert('The value of the href attribute is ' + pTag.getAttribute('href'));

    }
}