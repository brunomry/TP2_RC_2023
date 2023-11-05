document.write(`<main class="p-5"><h2 class="pb-3">Resolución de Ejercicio N°16</h2>`);

//SOLUCIÓN N°1 USANDO BUCLE FOR, CONDICIONAL IF-ELSE Y CADENA
document.write(`<h4>Solución n°1: </h4>`);

const cadena = prompt(`Solución n°1 \n Cadena de texto reversada \n Ingrese una cadena de texto:`);
let cadenaReversada = "";

if(cadena === ""){
  document.write(`<p>No se ingresó ningún texto</p>`);
}else{
  for (let i = cadena.length - 1; i >= 0; i--) cadenaReversada += cadena.charAt(i);
  document.write(`<p>El texto "${cadena}" al revés es igual a: <span class="fw-bold">"${cadenaReversada}"</span></p>`);
}

//SOLUCIÓN N°2 USANDO OPERADOR TERNARIO Y MÉTODOS SPLIT(), REVERSE() Y JOIN()
document.write(`<h4>Solución n°2 usando operador ternario y métodos split(), reverse() y join()</h4>`);

const texto = prompt(`Solución n°2 \n Cadena de texto reversada \n Ingrese una cadena de texto:`);

(texto === "")
  ? document.write(`<p>No se ingresó ningún texto</p>`)
  : document.write(`<p>El texto "${texto}" al revés es igual a: <span class="fw-bold">"${texto.split("").reverse().join("")}"</span></p>`);
