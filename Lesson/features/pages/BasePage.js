const { Given, Then } = require('@cucumber/cucumber');
const { browser } = require('protractor')
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var { expect } = require('chai')

let homepage = function () {
    //let text = element(by.tagName('h3'))
    let firstNumber_input = element(by.model('first'));
    let secondNumber_input = element(by.model('second'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));


    this.get =  function (url) {
        browser.waitForAngularEnabled(false);
        browser.get(url);
        //expect(await browser.getCurrentUrl()).to.equal('https://juliemr.github.io/protractor-dem/');  
    }
    this.text = function () {
        let text = element(by.tagName('h3'))
        text.getText().then(function (eleSize) {
            console.log('Main text:' + eleSize);
        })
    };

    this.firstNumber_input = function (firstno) {
        firstNumber_input.sendKeys(firstno);
    };
    this.secondNumber_input = function (secondno) {
        secondNumber_input.sendKeys(secondno);
    };
    this.clickgo = function () {
        goButton.click();
    };
    this.verifyResult = async function (result) {

        let output = await element(by.xpath('/html/body/div/div/form/h2'));
        expect(output.getText()).to.equal(result);
        //expect(browser.getCurrentUrl()).to.equal('https://juliemr.github.io/protractor-dem/');  
    }
}
module.exports = new homepage();

