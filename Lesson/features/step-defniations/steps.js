const { Given, Then } = require('@cucumber/cucumber');
const { browser } = require('protractor')
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var { expect } = require('chai')

var homepage = require('../pages/BasePage.js')
Given("I open website",async function () {

    homepage.get('https://juliemr.github.io/protractor-demo/');
    expect(await browser.getCurrentUrl()).to.equal('https://juliemr.github.io/protractor-demo/'); 
    homepage.text();
})
var homepage = require('../pages/BasePage.js')
Then('I add two numbers {string} and {string}', async (string, string2) => {
    // Write code here that turns the phrase above into concrete actions
    homepage.firstNumber_input(string);
    homepage.secondNumber_input(string2);
    homepage.clickgo();
    await browser.sleep(200);
    homepage.verifyResult('8');
    await browser.sleep(2000)


})
