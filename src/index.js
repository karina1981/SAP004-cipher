import cipher from './cipher.js';

const getValues = function() {
    return { 'code' : document.getElementById('code').value, 'text': document.querySelector('textarea[name="text-On"]').value };
}

const writeResult = function(result) {
    document.getElementById('result').innerHTML = result;
}

document.getElementById('encrypt').addEventListener('click', function(){
    let values = getValues();
    let result = cipher.encode(values.code, values.text);
    writeResult(result);
})

document.getElementById('decrypt').addEventListener('click', function(){
    let values = getValues();
    let result = cipher.decode(values.code, values.text);
    writeResult(result);
})