const slide = ["yae.jpg", "xiao.jpg", "noelle.jpeg", "nilou.png"];

let numero = 0;

function changement(sens) {
  numero = numero + sens;

  if (numero > slide.length - 1) numero = 0;

  if (numero < 0) numero = 3;

  document.getElementById("slide").src = "images/" + slide[numero];
}

setInterval("changement(1)", 3000);
