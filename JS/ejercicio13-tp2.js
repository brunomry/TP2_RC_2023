document.write(`<main class="p-5"><h2 class="pb-3">Resolución de Ejercicio N°13</h2>`);

let texto = prompt(`Convertir un texto a mayúscula \n \n Ingrese un texto:`); 

(texto === "")
  ? document.write(`No se ingresó ningún texto`)
  : document.write(`<p>Texto "${texto}" convertido a mayúscula: <span class="f-bold">${texto.toUpperCase()}</span></p>`); 

document.write(`</main>`);