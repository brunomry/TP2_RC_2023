document.write(`<main class="p-5"><h2 class="pb-3">Resolución de Ejercicio N°15</h2>`);

//SOLUCION 1
document.write(`<h4>Solución n°1 usando método de cadenas:</h4>`)

const texto = prompt(`Solución n°1 \n Cantidad de vocales en un texto \n \n Ingresa un texto: `).toLowerCase();

if(texto === "") document.write(`<p>No se ingresó ningún texto</p>`);

let cantVocales=0;
for(let i = 0; i < texto.length; i++){
  if(texto.charAt(i) === 'a' || texto.charAt(i) === 'e' || texto.charAt(i) === 'i' || texto.charAt(i) === 'o' || texto.charAt(i) === 'u')
    cantVocales++;
}

if(texto !== "") document.write(`<p>La cantidad de vocales que aparecen en el texto "${texto}" es igual a: <span class="fw-bold">${cantVocales}</span></p>`);

//SOLUCION 2 usando arreglos y métodos split e includes
document.write(`<h4>Solución n°2 usando arreglos y métodos split e includes:</h4>`)

let texto1 = prompt(`Solución n°2 \n Cantidad de vocales en un texto \n \n Ingresa un texto: `).toLowerCase();
const vocales = ['a', 'e', 'i', 'o', 'u'];
const letras = texto1.split('');
let cantidadVocales=0;

if(texto1 === "") document.write(`<p>No se ingresó ningún texto</p>`);

for(let i = 0; i < letras.length; i++){
  if(vocales.includes(letras[i])) cantidadVocales++;
}

if(texto1 !== "") document.write(`<p>La cantidad de vocales que aparecen en el texto "${texto1}" es igual a: <span class="fw-bold">${cantidadVocales}</span></p>`);

document.write(`</main>`);