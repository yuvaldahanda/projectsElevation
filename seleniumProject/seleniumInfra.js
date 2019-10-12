const { Builder, By, Key } = require('selenium-webdriver');
const path = require('chromedriver').path;
const chrome = require('selenium-webdriver/chrome');
let service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);
const driver = new Builder().forBrowser('chrome').build();



    driver.get("https://www.seleniumhq.org/docs/03_webdriver.jsp")










// class seleniumInf {


//     constructor() {

//     }


//     async getURL(URL) {
//         await this.driver.get(URL);
//     }

//     async close() {
//         setTimeout(() => { driver.quit() }, 2000)
//     }

//     async clickElement(locatorType, locatorValue,element,fromElement) {
//         try {
//             element = await this.findElement(By[locatorType](locatorValue));
//             await element.click();
//             console.log('Clicked on ' + locatorType + ' element with class' + locatorValue)
//         }
//         catch (error) {
//             console.error('Got error while trying to click on element with class ' + locatorValue)
//         }
//     }

//     async write(locatorType,locatorValue,data,element)
//     {
//         element = await this.findElement(By[locatorType](locatorValue))
//         await element.sendKeys(data)
        
//     }

//     async getTextFromElement(locatorType,locatorValue,data,element)
//     {
//         element = await this.findElement(By[locatorType](locatorValue))
//         await element.getText()

//     }

//     async clearElementField(locatorType,locatorValue,data,element)
//     {
//         await this.findElement(By[locatorType](locatorValue)).clear()

//     }
//     async isElementExist(locatorType,locatorValue)
//     {
//         await this.findElements( By[locatorType](locatorValue) ).size() != 0


//     }

//     async findElementBy(locatorType,locatorValue,element)
//     {

//     }











//     // async clickLoginButton(locatorType,locatorValue) {
//     //             try {
//     //                 element = await this.findElement(By[locatorType](locatorValue));
//     //                 await element.click();
//     //                 console.log('Clicked on '+locatorType +' element with class'+locatorValue)
//     //             }
//     //             catch (error) {
//     //                 console.error('Got error while trying to click on element with class '+locatorValue)
//     //             }
//     //     }




// }
// let a = new seleniumInf()
// a.getURL("https://www.seleniumhq.org/docs/03_webdriver.jsp")


// module.exports.seleniumInf = seleniumInf



