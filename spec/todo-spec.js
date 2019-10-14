var testCalculadora = require('./page-objects/po_calculadora') //isso eu faço para poder usar os elementos extrídos lá no arquivo do page objetcs?

describe('Teste calculadora', function() {

  var testCalculadora // aqui estou criando uma variável para acessar os valores? e a de cima?

  beforeEach ( function () {

    console.log("passando pelo beforeEach") // nao precisa de ;?

    testCalculadora = new TestCalculadora() // aqui estou fazendo o que? nao precisa de ;

    browser.driver.get('https://juliemr.github.io/protractor-demo/');


  })

    it('Realiza a soma de dois elementos', function() {
             
    console.log("Teste com o valor da soma");
    testCalculadora.primeiro_valor.sendkeys('5');
    testCalculadora.segundo_valor.sendkeys('4');
    testCalculadora.btn_acao.click();
    
    console.log("passou por todos os passos");
     

     
    });
  });