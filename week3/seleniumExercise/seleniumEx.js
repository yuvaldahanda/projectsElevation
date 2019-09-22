const { Builder, By, Key } = require('selenium-webdriver');
const path = require('chromedriver').path;
const chrome = require('selenium-webdriver/chrome');
let service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);


const driver = new Builder().forBrowser('chrome').build();


// async function example() {

//     await driver.get('file:///C:/Users/USER.USER-TOSH/Desktop/code/bootcamp/week3/seleniumExercise/index.html');
//     let getInput = await driver.findElement(By.id("inText"))
//     let str="heyhey"
//     await getInput.sendKeys(str)
//     await driver.findElement(By.className("btn")).click()
//     let fromBox =await driver.findElement(By.id('newbox')).getText()

//     if(fromBox == str)
//     {
//       console.log("there is new div create")
//     }
//     else{console.log("nope we sorry there is now new div created")}

//    setTimeout(()=>{
//     driver.quit()
//   }, 2000)



// }


// example()



async function example() {

  let numAge = 22
  let numheight = 170
  let numWeight = 59
  
  let height
  let female
  let male
  let weight 


  await driver.get('https://www.calculator.net/bmi-calculator.html');
  let getInput = await driver.findElement(By.id("cage"))
  await getInput.clear()
  await getInput.sendKeys(numAge)
  female = await driver.findElement(By.id("csex2"))
  await female.click()
  height = await driver.findElement(By.id("cheightmeter"))
  await height.clear()
  await height.sendKeys(numheight)
  weight = await driver.findElement(By.id("ckg"))
  await weight.clear()
  await weight.sendKeys(numWeight)
  let cli= await driver.findElement(By.xpath("//input[@value='Calculate']"))
  await cli.click()
  setTimeout(() => {
    driver.quit()
  }, 15000)



}


example()





