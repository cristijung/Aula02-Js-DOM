
function changeColor(newColor) {
    const elem = document.getElementById('trocar');
    elem.style.color = newColor;
}

//-------------------------------------------------

function trocarFiltro(type) {
    let image = document.getElementById('baleia');

    if (type == 'gray') {
        image.style.filter = 'grayscale(100%)';
    } else if (type == 'sepia') {
        image.style.filter = 'sepia(100%)';
    } else {
        image.style.filter = 'none'
    }
}