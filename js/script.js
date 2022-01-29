// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"


function criptografia() {
  var caixaDeTextoEsquerdo = document.getElementById("textoEsquerdo").value;
  var caixaDeTextoDireito = document.getElementById("textoDireito");

  if (caixaDeTextoEsquerdo.trim() === "") {
    var popup = document.getElementById("popUp");
    popup.classList.toggle("show");
  }  else{
    var textoCriptografado = caixaDeTextoEsquerdo
      .replaceAll(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/u/gi, "ufat")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober");

    caixaDeTextoDireito.textContent = textoCriptografado;
  }
}

function descriptografia() {
  var caixaDeTextoEsquerdo = document.getElementById("textoEsquerdo").value;
  var caixaDeTextoDireito = document.getElementById("textoDireito");

  if (caixaDeTextoEsquerdo.trim() === "") {
    var popup = document.getElementById("popUp");
    popup.classList.toggle("show");
  } else {
    var textoDescriptografado = caixaDeTextoEsquerdo
      .replaceAll(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ufat/gi, "u")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o");

    caixaDeTextoDireito.textContent = textoDescriptografado;
    }
}

function copiar() {
  var caixaDeTexto = document.getElementById("textoDireito");

  caixaDeTexto.select(); //seleciona o texto
  caixaDeTexto.setSelectionRange(0, 99999); //copia em dispositivos moveis
  document.execCommand("copy"); //executa o comando copiar texto

  window.location.reload();
}
