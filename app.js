const campoTexto = document.getElementById("text-area");
const campoMensaje = document.getElementById("text-cifrado");

const matrizCodigo = [
    ["e","enter"],//indice 0
    ["i", "imes"], //indice 1
    ["a", "ai"], //indice 2
    ["o", "ober"], //indice 3
    ["u", "ufat"], //indice 4
];

function btnEncriptar() {
    if  (campoTexto.value == ""){
        document.getElementById("text-cifrado").style.backgroundImage= "url('images/no-text.png')";
        campoMensaje.value = "";}
        else    {
    const texto =  encriptar(campoTexto.value);
    campoMensaje.value = texto;
    campoTexto.value= "";
    document.getElementById("text-cifrado").style.backgroundImage= "none";
    }
}

function encriptar(fraseEncriptada) {
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (fraseEncriptada.includes(matrizCodigo[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
     return fraseEncriptada;
}

function btnDesencriptar() {
    if  (campoTexto.value == ""){
        document.getElementById("text-cifrado").style.backgroundImage= "url('images/no-text.png')";
        campoMensaje.value = "";} else    {
    const textoDesencriptado = desencriptar(campoTexto.value);
    campoMensaje.value= textoDesencriptado;
    campoTexto.value="";
    document.getElementById("text-cifrado").style.backgroundImage= "none";
    }
}

function desencriptar(fraseDesencriptar) {
    for (let i = 0; i<matrizCodigo.length ; i++) {
        let x = (i -4) * -1;
        if (fraseDesencriptar.includes(matrizCodigo[x][1])){
            fraseDesencriptar = fraseDesencriptar.replaceAll(matrizCodigo[x][1], matrizCodigo[x][0]);
        }
    }
     return fraseDesencriptar;
}

function btnCopiar() {
        // Obtener valor campo
        var copiarTexto = document.getElementById("text-cifrado");

        // selecciona el campo
        copiarTexto.select();
        copiarTexto.setSelectionRange(0, 99999); // For mobile devices

        // Copia el texto  al portapapeles
        navigator.clipboard.writeText(copiarTexto.value);

        // Alerta texto copiado
        alert("El texto cifrado ha sido copiado al portapapeles.");
        campoMensaje.value = "";
}

function forceLower(strInput) {
strInput.value=strInput.value.toLowerCase();
}

function alertaCaracteresAcento () {
    let valor = elements.campoTexto.value;
    if (/[^a-z\s¡!¿?]/g.test(valor)) {
 
        valor = valor.replace(/[^a-z\s¡!¿?]/g, ""); // Remover caracteres inválidos
        elements.campoTexto.value = valor;
    }
}


// Agregar un listener para el evento oninput
campoTexto.addEventListener('input', function() {
    // Obtener el texto ingresado en el área de texto
    var texto = campoTexto.value;

    // Convertir el texto a minúsculas y eliminar caracteres especiales
    texto = texto.toLowerCase().replace(/[^a-z]/g, ' ');

    // Actualizar el valor del área de texto con el texto procesado
    campoTexto.value = texto;
});