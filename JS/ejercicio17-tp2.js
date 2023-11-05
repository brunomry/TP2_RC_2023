document.write(`<main class="p-5"><h2 class="pb-3">Resolución de Ejercicio N°17</h2>`);

//SOLUCION 2 usando metodo charAt
document.write(`<h4>Solución n°1 usando método charAt de cadenas:</h4>`)

const texto = prompt(`Solución n°1 \n Posición de primera vocal de un texto \n\n Ingresa un texto: `).toLowerCase();

if(texto === "") document.write(`No se ingresó ningún texto`);

let vocal = false;

for(let i = 0; i < texto.length; i++){
  if(texto.charAt(i) === 'a' || texto.charAt(i) === 'e' || texto.charAt(i) === 'i' || texto.charAt(i) === 'o' || texto.charAt(i) === 'u'){
    document.write(`<p>La primera vocal del texto "${texto}" es la letra "${texto.charAt(i)}" y se encuentra en la posición <b>${i}</b></p>`);
    vocal = true;
    break;
  }
}

if(!vocal && texto !== "") document.write(`<p>El texto "${texto}" no contiene vocales</p>`);

//SOLUCION 2 usando arreglos y métodos split e includes
document.write(`<h4>Solución n°2 usando arreglos y métodos split e includes:</h4>`)

let texto1 = prompt(`Solución n°2 \n Posición de primera vocal de un texto \n \n Ingresa un texto: `).toLowerCase();
const vocales = ['a', 'e', 'i', 'o', 'u'];
const arrletras = texto1.split('');

if(texto1 === "") document.write(`<p>No se ingresó ningún texto</p>`);

let b = 0;
for(let i = 0; i < arrletras.length; i++){
  if(vocales.includes(arrletras[i])){
    document.write(`<p>La primera vocal del texto "${texto1}" es la letra "${arrletras[i]}" y se encuentra en la posición <b>${i}</b></p>`);
    b = 1;
    break;
  }
}

if(b === 0 && texto1 !== "") document.write(`<p>El texto "${texto1}" no contiene vocales</p>`);

document.write(`</main>`);