let numeroRandom = 0
const max = 9
const min = 0
let nombres = ["Maria", "Amanda", "Josefina", "Genesis", "Sofia", "Josefa", "Fernanda", "Florencia", "Francisca", "Martina"]

function adivinar(){
    numeroRandom = Math.floor((Math.random() * (max - min + 1)) + min);
    console.log(numeroRandom)
    document.getElementById("adivinarSpan").innerHTML = nombres[numeroRandom];
}