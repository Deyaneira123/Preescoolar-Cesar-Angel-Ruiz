function morado() {
    document.getElementById("ayuda").style.backgroundColor = "purple";
}
function rojo() {
    document.getElementById("ayuda").style.backgroundColor = "#C00000";
}
function verde() {
    document.getElementById("ayuda").style.backgroundColor = "green";
}
function restablecer() {
    document.getElementById("ayuda").style.backgroundColor = "#50312F";
}
var arreglo = new Array();
arreglo[0] = new Image();
arreglo[0].src = "./Ayuda/uno.jpeg";
arreglo[1] = new Image();
arreglo[1].src = "./Ayuda/dos.jpeg";
arreglo[2] = new Image();
arreglo[2].src = "./Ayuda/tres.jpg";

function nextImagen() {
    var img = document.getElementById("imagen");
    for (var i = 0; i < arreglo.length; i++) {
        if (arreglo[i].src == img.src) {
            if (i === arreglo.length) {
                document.getElementById("imagen").src = arreglo[0].src;
                break;
            }
            document.getElementById("imagen").src = arreglo[i + 1].src;
            break;
        }
    }
}

function previoImagen() {
    var img = document.getElementById("imagen");
    for (var i = arreglo.length - 1; i >= 0; i--) {
        if (arreglo[i].src == img.src) {
            if (i === arreglo.length) {
                document.getElementById("imagen").src = arreglo[4].sc;
                break;
            }
            document.getElementById("imagen").src = arreglo[i - 1].src;
            break;
        }
    }
}