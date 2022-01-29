// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// // A letra "u" é convertida para "ufat"

function nome(){
    var nome = window.prompt('Qual seu nome?');
    var label = document.querySelector('label');
    label.textContent = 'Digite uma palavra, ' +  nome + ':';
}


function criptografia() {
  var caixaDeTextoEsquerdo = document.getElementById("textoEsquerdo").value;
  var caixaDeTextoDireito = document.getElementById("textoDireito");

  if (caixaDeTextoEsquerdo.trim() === "") {
    var popup = document.getElementById("popUp");
    popup.classList.toggle("show");
  } else {
    var textoCriptografado = caixaDeTextoEsquerdo.toLowerCase()
      .replace(/[^a-z ]/g, "")
      .replaceAll(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/u/g, "ufat")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober");

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
    var textoDescriptografado = caixaDeTextoEsquerdo.toLowerCase()
      .replace(/[^a-z ]/g, "")
      .replaceAll(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ufat/g, "u")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o");

    caixaDeTextoDireito.textContent = textoDescriptografado;
  }
}

function copiar() {
  var caixaTextoDireito = document.getElementById("textoDireito");

  caixaTextoDireito.select(); //seleciona o texto
  caixaTextoDireito.setSelectionRange(0, 99999); //copia em dispositivos moveis
  navigator.clipboard.writeText(caixaTextoDireito.value);

  window.location.reload();
}

function mostrarHora(){
    var mostrarData = document.querySelector("hr");
    var data = new Date;
    mostrarData.textContent = 'Hora do acesso: ' + data.getHours() + ':' + data.getMinutes();
    mostrarData.style.fontSize = '.8rem';
    
}

nome()
mostrarHora()