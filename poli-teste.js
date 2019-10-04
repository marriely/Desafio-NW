describe('Login no mktzap', function () {
    //let EC = protractor.ExpectedConditions;
    let pagina;
    beforeEach(() => {
        //browser.ignoreSynchronization=true;
        //Acessa URL
        browser.get('https://juliemr.github.io/protractor-demo/');
        
    });

    it('Realizar cálculo de soma', () => {
        expect(browser.getCurrentUrl('https://juliemr.github.io/protractor-demo/')).toEqual('https://juliemr.github.io/protractor-demo/');
       let primeiro=element.all(by.model('first')); //criando a variavel para salvar o elemento
       primeiro.sendKeys('10');
       
        element.all(by.cssContainingText('option', '+')).click();
        element.all(by.model('second')).sendKeys('30');
        element(by.id('gobutton')).click();
        expect(element(by.binding('latest')).getText()).toEqual('40'); // esse latest indica que é a última posição do ngbinding
        // o expect é onde eu comparo o meu resultado

    });

    it('Realizar cálculo de divisão', () => {
        expect(browser.getCurrentUrl('https://juliemr.github.io/protractor-demo/')).toEqual('https://juliemr.github.io/protractor-demo/');
        element.all(by.model('first')).sendKeys('100');
        element.all(by.cssContainingText('option', '/')).click();
        element.all(by.model('second')).sendKeys('5');
        element(by.id('gobutton')).click();
        expect(element(by.binding('latest')).getText()).
        toEqual('20'); 

    });
       
    it('Realizar cálculo de porcentagem', () => {
        expect(browser.getCurrentUrl('https://juliemr.github.io/protractor-demo/')).toEqual('https://juliemr.github.io/protractor-demo/');
        element.all(by.model('first')).sendKeys('250');
        element.all(by.cssContainingText('option', '%')).click();
        element.all(by.model('second')).sendKeys('32');
        element(by.id('gobutton')).click();
        expect(element(by.binding('latest')).getText()).
        toEqual('26'); 

    });

    it('Realizar cálculo de multiplicação', () => {
        expect(browser.getCurrentUrl('https://juliemr.github.io/protractor-demo/')).toEqual('https://juliemr.github.io/protractor-demo/');
        element.all(by.model('first')).sendKeys('256');
        element.all(by.cssContainingText('option', '*')).click();
        element.all(by.model('second')).sendKeys('30');
        element(by.id('gobutton')).click();
        expect(element(by.binding('latest')).getText()).
        toEqual('7680'); 

    });

    it('Realizar cálculo de subtração', () => {
        expect(browser.getCurrentUrl('https://juliemr.github.io/protractor-demo/')).toEqual('https://juliemr.github.io/protractor-demo/');
        element.all(by.model('first')).sendKeys('5632');
        element.all(by.cssContainingText('option', '-')).click();
        element.all(by.model('second')).sendKeys('1356');
        element(by.id('gobutton')).click();
        expect(element(by.binding('latest')).getText()).
        toEqual('4276'); 

    });

    afterEach(() => {
       
    });
});