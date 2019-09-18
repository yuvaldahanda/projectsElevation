const {Builder, By, Key} = require('selenium-webdriver');
const path = require('chromedriver').path;
const chrome = require('selenium-webdriver/chrome');
let service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);


const driver = new Builder().forBrowser('chrome').build();


async function example() {
  
    await driver.get('file:///C:/Users/USER.USER-TOSH/Desktop/code/bootcamp/week3/seleniumExercise/index.html');
    let getInput = await driver.findElement(By.id("inText"))
    let str="heyhey"
    await getInput.sendKeys(str)
    await driver.findElement(By.className("btn")).click()
    let fromBox =await driver.findElement(By.id('newbox')).getText()
    console.log(fromBox+"============")

   setTimeout(()=>{
    driver.quit()
  }, 2000)
    


}


example()