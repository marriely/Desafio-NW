describe('Teste calculado', function() {
    it('Realiza a soma de dois elementos', function() {
     // browser.ignoreSynchronization = true; //preciso usar isso quando a aplicação é Non angular

      browser.driver.get('https://juliemr.github.io/protractor-demo/');

     
     
      element.all(by.className('el-input__inner')).get(0).sendKeys('qateste@teste.com.br');
      element.all(by.className('el-input__inner')).get(1).sendKeys('123456');
      element(by.className('el-button credentials-actions-button el-button--default color-default credentials-actions-button-green')).click();

      element.all(by.className('el-input__inner')).count().then((contador)=>{
        console.log(contador);
      })
      browser.sleep(5000);

     // element(by.class('el-button credentials-actions-button el-button--default color-default credentials-actions-button-green')).click();
  
     // var todoList = element.all(by.repeater('todo in todoList.todos'));
     //expect(element(by.className('el-input__inner')).getText()).toEqual('qateste@teste.com.br');
     // expect(todoList.get(2).getText()).toEqual('write first protractor test');
  
      // You wrote your first test, cross it off the list
     // todoList.get(2).element(by.css('input')).click();
     // var completedAmount = element.all(by.css('.done-true'));
     // expect(completedAmount.count()).toEqual(2);
    });
  });