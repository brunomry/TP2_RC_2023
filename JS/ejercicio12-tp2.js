document.write(`<main class="p-5"><h2 class="pb-3">Resolución de Ejercicio N°12</h2>`);

const minimo = 1;
const maximo = 99;

let numeroAleatorio = Math.random() * (maximo - minimo) + minimo;

document.write(`<p>Número aleatorio entre ${minimo} y ${maximo}: <span class="fw-bold">${numeroAleatorio}</span></p>`);

document.write(`</main>`);
