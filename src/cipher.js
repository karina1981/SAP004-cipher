const cipher = {
  encode: function(numero, texto) {
    numero = parseInt(numero);
    let caracteresValidos = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    let resultado = '';
    let myRe = /[^A-Z-0-9]+/g;
    let verificaCaracteresValidos = texto.match(myRe);
    
    if (verificaCaracteresValidos && verificaCaracteresValidos.length > 0) {
      alert('Voce deve digitar apenas letras de A - Z e numeros')
      return false;
    }
    if (numero != NaN && numero > 0) {

      for(let contador = 0; contador < texto.length; contador++) {
        let caracterAtual = texto[contador];
        let indexValido = caracteresValidos.indexOf(caracterAtual);
        let contadorCifrado = indexValido + numero;

        let indice = contadorCifrado % caracteresValidos.length;

        resultado += caracteresValidos[indice].toString();
      }
      

    } else {
      alert('Informe um numero maior que zero no campo solicitado.');

      return false;
    }

  },
  decode: function(numero, texto) {

  }
};

export default cipher;
