var TestCalculadora = require('../page-objects/testcalculadora') //isso eu faço para poder usar os elementos extrídos lá no arquivo do page objetcs?
   //isso eu faço para poder usar os elementos extrídos lá no arquivo do page objetcs?

describe('Teste calculadora', function() {

  var testCalculadora // aqui estou criando uma variável para acessar os valores? e a de cima?

  beforeEach ( function () {

    console.log("passando pelo beforeEach") // nao precisa de ;?

    testCalculadora = new TestCalculadora() // aqui estou fazendo o que? nao precisa de ;

    browser.get('https://juliemr.github.io/protractor-demo/');


  })

    it('Realiza a soma de dois elementos', function() {
             
    console.log("Teste com o valor da soma");
    testCalculadora.primeiro_valor.sendKeys('5');
    testCalculadora.segundo_valor.sendKeys('4');
    testCalculadora.btn_acao.click();
    
    console.log("passou por todos os passos");
     

     
    });
  });