const cipher = {
  encode: function(numero, texto) {
    texto = texto.toUpperCase();//.replace(/[^A-Z]+/g,"");
    numero = parseInt(numero);
    let resultado = "";
    for(let contador = 0; contador < texto.length; contador++) {
      let indexValido = (((texto.charCodeAt(contador) - 65) + numero)%26 )+ 65;
      resultado += String.fromCharCode(indexValido);
    }
    return resultado;
  },
  decode: function(numero, texto) {
    texto = texto.toUpperCase();//.replace(/[^A-Z]+/g,"");
    numero = parseInt(numero);
    let resultado = "";
    for(let contador = 0; contador < texto.length; contador++){
      let indexValido = (((texto.charCodeAt(contador) - 90) - numero)% 26) + 90;
      resultado += String.fromCharCode(indexValido);
    }
    return resultado;
  }
};

export default cipher;

