var username = '';
var header = document.querySelector('h1');
var initialHeaderText = header.textContent;

header.style.textAlign = 'center';
header.style.fontSize = '42px';

function setUsername(event) {
    var name = event.target.value;
    header.textContent = initialHeaderText + ' ' + name;
    return name;
}

