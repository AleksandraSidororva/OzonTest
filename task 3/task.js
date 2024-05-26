const webdriver = require('selenium-webdriver');
driver = new webdriver.Builder().forBrowser('chrome').build();
const By = webdriver.By

async function testRun(){
await driver.get('http://sky-todo-list.herokuapp.com/');
let textBox = await driver.findElement(By.xpath('//*[@id="root"]/div/header/div/div/div[1]/div/form/div/div/div/p/input'));
await textBox.sendKeys('100');
await driver.sleep(1000)
let submitButton = await driver.findElement(By.xpath('//*[@id="root"]/div/header/div/div/div[1]/div/form/button'));
await submitButton.click();
}
testRun();