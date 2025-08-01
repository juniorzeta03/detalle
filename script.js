// script.js
const frases = [
  "Gracias por ser esa chispa en mis días grises..😘",
  "Si fueras código, no te cambiaría ni una línea.❤️",
  "Entre líneas y comandos, apareciste tú.☺️",
  "Hay bugs(problemas) que son bonitos… como cuando pienso en ti y me distraigo.🫣",
  "Eres como una constante que siempre está en mi mente.🧠",
  "¿Y si tú eres el algoritmo perfecto que no sabía que necesitaba?👀",
  "Dicen que los sistemas no sienten… pero tú hiciste crash en el mío.🫢",
  "Tal vez nunca lo notes, pero siempre estarás en mis líneas de código favoritas.💙",
  "No eres un error, eres la excepción que lo cambió todo.❤️‍🩹",
  "En mi lógica, tú siempre devuelves verdadero (true)💫.",
  "Un sistema esta lleno de variables pero a ti te veo como una Constante💕"
];

const cartasContainer = document.querySelector('.cartas');

function crearCartas() {
  cartasContainer.innerHTML = "";
  frases.forEach(frase => {
    const carta = document.createElement('div');
    carta.classList.add('carta');
    carta.innerHTML = `
      <div class="carta-inner">
        <div class="carta-frente">
          💌 Carta
        </div>
        <div class="carta-atras">
          ${frase}
        </div>
      </div>
    `;
    cartasContainer.appendChild(carta);
  });
}

function reiniciarCartas() {
  crearCartas();
}

crearCartas();
