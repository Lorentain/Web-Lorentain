// CÓDIGO SCROLL TO TOP
const botonScrollTop = document.getElementById("btn-scrollTop")
botonScrollTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// CÓDIGO SLIDER
var imagenes = ["img/img1.jpg","img/img2.jpg","img/img3.jpg","img/img4.jpg"]
var contador = 0;

function slider(contenedor) {
    contenedor.addEventListener("click", (e) => {
        let atras = contenedor.querySelector(".atras")
        let adelante = contenedor.querySelector(".adelante")
        let img = contenedor.querySelector("img")
        tgt = e.target;

        if(tgt == atras) {
            if(contador > 0) {
                img.src = imagenes[contador - 1];
                contador--;
            }else {
                img.src = imagenes[imagenes.length - 1];
                contador = imagenes.length - 1;
            }
        }else if(tgt == adelante) {
            if(contador < imagenes.length - 1) {
                img.src = imagenes[contador + 1];
                contador++;
            }else {
                img.src = imagenes[0];
                contador = 0;
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.querySelector(".contenedor-slider");

    slider(contenedor);
});