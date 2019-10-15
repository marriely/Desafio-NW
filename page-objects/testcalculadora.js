// PO para extrair os elementos da calculador;
// Com o camando let eu crio as variáveis que iram armazenar os elementos da tela;

var TestCalculadora = function() 
{} //criando a função que será exportada para pode usar as variaveis que recebe os elementos

    TestCalculadora.prototype = Object.create({}, {
  
    primeiro_valor: {get: function() { return element(by.model('first')) }},
    segundo_valor: {get: function() { return element(by.model('second')) }},
    
    soma: {get: function() { return element(by.cssContainingText('option','+')) }},// para pegar quando é combo, ai é o option que tem o valor +
    
    btn_acao: {get: function() { return element(by.click('doAddition()')) }}

    })

    module.export = new TestCalculadora();









