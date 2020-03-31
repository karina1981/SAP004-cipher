
const cipher = {
  caracteresValidos: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  encode: function(numero, texto) {
    if (numero == undefined || texto == undefined) {
      throw new TypeError('Parametros requiridos', 2);
    }
    numero = parseInt(numero);

    if (numero <= 0) {
      throw new TypeError('Numero deve ser positivo', 6);
    }

    if (texto.length == 0) {
      throw new TypeError('Texto deve ser digitado', 5);
    }

    const caracteresValidos = this.caracteresValidos;

    let resultado = "";
    let myRe = /[^A-Z]+/g;
    let verificaCaracteresValidos = texto.match(myRe);

    if (verificaCaracteresValidos && verificaCaracteresValidos.length > 0) {
      throw new TypeError('Voce deve digitar apenas letras de A - Z e numeros', 10)
    }

    if (!isNaN(numero) && numero > 0) {

      for(let contador = 0; contador < texto.length; contador++) {
        let caracterAtual = texto[contador];
        let indexValido = caracteresValidos.indexOf(caracterAtual);
        let contadorCifrado = indexValido + numero;

        let indice = contadorCifrado % caracteresValidos.length;

        resultado += caracteresValidos[indice].toString();
      }

      return resultado;

    } else {
      throw new TypeError('Deve digitar um numero', 4);
    }

  },
  decode: function(numero, texto) {
    if (numero == undefined || texto == undefined) {
      throw new TypeError('Parametros requiridos', 3);
    }
    numero = parseInt(numero);

    if (numero <= 0) {
      throw new TypeError('Numero deve ser positivo', 4);
    }

    if (texto.length == 0) {
      throw new TypeError('Texto deve ser digitado', 5);
    }

    const caracteresValidos = this.caracteresValidos;

    let resultado = '';
    let myRe = /[^A-Z]+/g;
    let verificaCaracteresValidos = texto.match(myRe);

    if (verificaCaracteresValidos && verificaCaracteresValidos.length > 0) {
      throw new TypeError('Voce deve digitar apenas letras de A - Z e numeros', 10);
    }
    if (!isNaN(numero) && numero > 0) {

      for(let contador = 0; contador < texto.length; contador++) {
        let caracterAtual = texto[contador];
        let indexValido = caracteresValidos.indexOf(caracterAtual);
        let contadorCifrado = indexValido - numero;

        let indice = contadorCifrado % caracteresValidos.length;

        if (indice < 0) {
          indice = caracteresValidos.length + indice;
        }

        resultado += caracteresValidos[indice].toString();
      }

      return resultado;

    } else {
      throw new TypeError('Deve digitar um numero', 11);
    }

  }
};

export default cipher;
