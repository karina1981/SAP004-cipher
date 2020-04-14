const cipher = {
  encode: function(numero, texto) {
    if (typeof texto != 'string') {
      throw TypeError("texto undefined");
    }
    numero = parseInt(numero);
    let resultado = "";
    for(let contador = 0; contador < texto.length; contador++) {

      let charcode = texto.charCodeAt(contador);
      if (charcode > 122 || charcode < 65 || (charcode > 90 && charcode < 97)) {
        
        resultado += texto[contador];
        continue;
      }

      let min = 65;
      if (charcode >= 97 && charcode <= 122) {
        
        min = 97;
      }

      let indexValido = (((texto.charCodeAt(contador) - min) + numero)%26 )+ min;
      resultado += String.fromCharCode(indexValido);
    }

    return resultado;
  },

  decode: function(numero, texto) {
     if (typeof texto!= 'string'){
     throw TypeError("texto undefined");
    }
    numero = parseInt(numero);
    let resultado = "";
    for(let contador = 0; contador < texto.length; contador++){
      
      let charcode = texto.charCodeAt(contador);
      if (charcode > 122 || charcode < 65 || (charcode > 90 && charcode < 97)) {
        
        resultado += texto[contador];
        continue;
      }

      let mai = 90
      if (charcode >= 97 && charcode <= 122) {

        mai = 122
      }

      let indexValido = (((texto.charCodeAt(contador) - mai) - numero)% 26) + mai;
      resultado += String.fromCharCode(indexValido);
    }
    return resultado;
  }
};

export default cipher;