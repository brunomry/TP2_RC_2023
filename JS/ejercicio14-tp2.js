document.write(`<main class="p-5"><h2 class="pb-3">Resolución de Ejercicio N°14</h2>`);

let cadena = prompt(` \n Guión entre cada caracter de una cadena de texto \n Ingrese una cadena de texto:`).toLowerCase().trim();

let cadenaNueva = "";
if(cadena !== ""){
  for (let i = 0; i < cadena.length; i++) {
    cadenaNueva += cadena[i].concat("-");
  }
  cadenaNueva = cadenaNueva.slice(0,-1);
  document.write(`<p>Texto "${cadena}" con un guión entre caracteres: <span class="fw-bold">${cadenaNueva}</span></p>`);
}else{
  document.write(`<p>No se ingresó ningún texto</p>`);
}

document.write(`</main>`);