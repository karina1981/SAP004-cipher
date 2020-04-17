const cipher = {
  proxyResult: function(number, text, type){
    if (typeof text != 'string') {
      throw TypeError("text undefined");
    }
    number = parseInt(number);
    let result = "";
    for(let counter = 0; counter < text.length; counter++) {

      let charcode = text.charCodeAt(counter);
      if (charcode > 122 || charcode < 65 || (charcode > 90 && charcode < 97)) {
        
        result += text[counter];
        continue;
      }

      let indexValid = 0;
      if (type == 'encode') {
        let min = 65;
        if (charcode >= 97 && charcode <= 122) {
          min = 97;
        }

        indexValid = (((charcode - min) + number)%26 )+ min;
      } else {
        let mai = 90
        if (charcode >= 97 && charcode <= 122) {
          mai = 122
        }

        indexValid = (((charcode - mai) - number)% 26) + mai;
      }
      result += String.fromCharCode(indexValid);
    }
    return result;
  },
  encode: function(number, text) {
    return this.proxyResult(number, text, 'encode');
  },
  decode: function(number, text) {
    return this.proxyResult(number, text, 'decode');
  }
};

export default cipher;