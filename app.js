const texto = document.querySelector(".texto")
const respuesta = document.querySelector(".respuesta");
const btnEncriptar = document.querySelector(".btn-encriptar");
const btnDesncriptar = document.querySelector(".btn-desencriptar");
const btnCopiar = document.querySelector("#btn-copy");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

const llaves_encriptacion = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
]

function validarEntrada(texto) {

    if (texto.value.length > 0) {
        return true;
    }

    return false;
}

btnEncriptar.addEventListener("click", function btnEncriptar() {
    if (validarEntrada) {

        const textoEncriptado = encriptar(texto.value);
        texto.value = "";
        respuesta.innerHTML = textoEncriptado;
        btnCopiar.classList.remove("ocultar")

    }

    else {
        texto.value = "";
        btnCopiar.classList.add("ocultar")
        respuesta.value = "Ingresa el texto que desees encriptar o desencriptar"
    }
});

btnDesncriptar.addEventListener("click", function btnDesncriptar() {
    if (validarEntrada) {

        const textoEncriptado = desencriptar(texto.value);
        texto.value = "";
        respuesta.innerHTML = textoEncriptado;
        btnCopiar.classList.remove("ocultar")

    }

    else {
        texto.value = "";
        btnCopiar.classList.add("ocultar")
        respuesta.innerText = "Ingresa el texto que desees encriptar o desencriptar"
    }

})

btnCopiar.addEventListener("click", () => copiarPortapeles(respuesta.innerHTML));

async function copiarPortapeles(texto) {

    try {
        await navigator.clipboard.writeText(texto)
        btnCopiar.value = "Texto Copiado";

        setTimeout(function () {
            btnCopiar.value = "Copiar";
        }, 2000);
    } catch (error) {
        alert("Ocurrió un error: " + error);
    }
}

function encriptar(texto) {

    texto = texto.toLowerCase();

    for (let i = 0; i < llaves_encriptacion.length; i++) {
        if (texto.includes(llaves_encriptacion[i][0])) {
            texto = texto.replaceAll(llaves_encriptacion[i][0], llaves_encriptacion[i][1]);
        }
    }

    return texto;
}

function desencriptar(texto) {

    texto = texto.toLowerCase();

    for (let i = 0; i < llaves_encriptacion.length; i++) {
        if (texto.includes(llaves_encriptacion[i][1])) {
            texto = texto.replaceAll(llaves_encriptacion[i][1], llaves_encriptacion[i][0]);
        }
    }

    return texto;
}


