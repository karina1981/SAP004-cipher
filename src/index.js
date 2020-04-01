import cipher from './cipher.js';


document.getElementById("codificar").addEventListener("click", function() {
    let numero = document.getElementById('pass');
    let texto = document.getElementById('story');
    let resultado = cipher.encode(parseInt(numero.value), texto.value);
    document.getElementById('resultado').innerHTML = resultado;
});

document.getElementById("descodificar").addEventListener("click", function() {
    let numero = document.getElementById('pass');
    let texto = document.getElementById('story');
    let resultado = cipher.decode(parseInt(numero.value), texto.value);
    document.getElementById('resultado').innerHTML = resultado;
});