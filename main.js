const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptada) {
    let lista = [{"a","ai"}, {"e","enter"}, {"i","imes"}, {"o","ober"},{"u","ufat"}];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < lista.length; i++) {
        if (stringEncriptada.includes(lista[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(lista[i][0], lista[i][1]);
        }
        
    }
    return stringEncriptada;
}

function desencriptar(stringDesencriptada) {
    let lista = [{"a","ai"}, {"e","enter"}, {"i","imes"}, {"o","ober"},{"u","ufat"}];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < lista.length; i++) {
        if (stringDesencriptada.includes(lista[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(lista[i][1], lista[i][0]);
        }
        
    }
    return stringEncriptada;
}


