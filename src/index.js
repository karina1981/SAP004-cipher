import cipher from './cipher.js';

document.getElementById('crip').addEventListener('click', function(){
    let codigo = document.getElementById('codigo').value
    let text = document.querySelector('textarea[name="textOn"]').value
     //executar uma função dentro do cipher
    document.getElementById('resultado').innerHTML=cipher.encode(codigo, text);
    console.log(codigo, text);
})

document.getElementById('decrip').addEventListener('click', function(){
    let codigo = document.getElementById('codigo').value
    let text = document.querySelector('textarea[name="textOn"]').value

    document.getElementById('resultado').innerHTML=cipher.decode(codigo, text);

    console.log(codigo, text);
})