const { Builder, By, Key, until, Condition } = require('selenium-webdriver');
const path = require('chromedriver').path;
const chrome = require('selenium-webdriver/chrome');
let service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

class SelenuimInfra {
    constructor() {
        this.driver = new Builder().forBrowser('chrome').build();
    }
    async sleepSec() {
        await this.driver.sleep(100)
    }
    async getURL(URL) { // Open browser
        await this.driver.get(URL)
    }

    async retuenDriver() {
        return this.driver
    }
    async close() { // Close browser
        setTimeout(() => {
            this.driver.quit()
        }, 1000)
    }
   
    async waitUntilElementExist(locatorType, locatorValue) {
        try {
            if (await this.driver.wait(until.elementLocated(By[locatorType](locatorValue)), 5000))
                return true
        }
        catch (error) {
            console.log(error);
            return false
        }

    }

    async waitUntilElementNotExist(locatorType, locatorValue) {

        await this.driver.wait(() => {
            return this.driver.findElements(By[locatorType](locatorValue)).then(function (found) {
                return found.length === 0;
            });
        }, 15000, 'The element should disappear');

    }

    async validURL(pageName) {
        if (this.driver.wait(until.urlContains(pageName), 10000)) {
            console.log("This Is The Right URL")
            return true
        }
        else {
            console.log("Wrong! This Is Worng URL")
            return false
        }
    }

    // Click on element
    async clickElement(locatorType, locatorValue, element, fromElement) {
        try {
            if (!element) {
                if (fromElement) {
                    element = await fromElement.findElement(By[locatorType](locatorValue))
                } else {
                    element = await this.driver.findElement(By[locatorType](locatorValue))
                }
            }
            await element.click()

            if (!element)
                console.log(`Clicked on element with ${locatorType} = ${locatorValue}`)
        }
        catch (error) {
            console.error(`Got error while trying to click on element with ${locatorType} = ${locatorValue}`)
        }
    }


    // Send Keys To Element
    async write(data, locatorType, locatorValue, element, fromElement) {
        try {
            if (!element) {
                if (fromElement) {
                    element = await fromElement.findElement(By[locatorType](locatorValue))
                } else {
                    element = await this.driver.findElement(By[locatorType](locatorValue))
                }
            }
            await element.sendKeys(data)
            if (!element)
                console.log(`Send Keys to element with ${locatorType} = ${locatorValue} `)
        }
        catch (error) {
            console.error(`Got error while trying to send keys to element with ${locatorType} = ${locatorValue}`)
        }
    }

    // Get text from element
    async getTextFromElement(locatorType, locatorValue, element, fromElement) {
        try {
            if (!element) {
                if (fromElement) {
                    element = await fromElement.findElement(By[locatorType](locatorValue))
                } else {
                    element = await this.driver.findElement(By[locatorType](locatorValue))
                }
            }
            if (!element)
                console.log(`Get text from element with ${locatorType} = ${locatorValue} `)
            return await element.getText()
        }
        catch (error) {
            console.error(`Got error while trying to get text from element with ${locatorType} = ${locatorValue}`)
            console.log(error)
            return ""
        }
    }

    // Clear element field
    async clearElementField(locatorType, locatorValue, element, fromElement) {
        try {
            if (!element) {
                if (fromElement) {
                    element = await fromElement.findElement(By[locatorType](locatorValue))
                } else {
                    element = await this.driver.findElement(By[locatorType](locatorValue))
                }
            }
            await element.clear()
            if (!element)
                console.log(`Clear text from element with ${locatorType} = ${locatorValue} `)
        }
        catch (error) {
            console.error(`Got error while trying to Clear text from element with ${locatorType} = ${locatorValue}`)
        }
    }

    // Check if element exists
    async isElementExists(locatorType, locatorValue) {
        let element
        try {
            element = await this.driver.findElement(By[locatorType](locatorValue))
            return true
        }
        catch{
            return false
        }
    }

    // Find and return element by type and value
    async findElementBy(locatorType, locatorValue, fromElement) {
        let element
        try {
            if (fromElement) {
                element = await fromElement.findElement(By[locatorType](locatorValue))
            }
            else {
                element = await this.driver.findElement(By[locatorType](locatorValue))
            }
            //console.log(`Find element with ${locatorType} = ${locatorValue} `)
        }
        catch{
            console.error(`Got error while trying to find element with ${locatorType} = ${locatorValue}`)
        }
        return element
    }

    // Find all the elements with the same type and value and return array(list)
    async findElementListBy(locatorType, locatorValue, fromElement) {
        let element
        try {
            if (fromElement) {
                element = await fromElement.findElements(By[locatorType](locatorValue))
            }
            else {
                element = await this.driver.findElements(By[locatorType](locatorValue))
            }
            return element
        }
        catch{
            console.error(`Got error while trying to find element with ${locatorType} = ${locatorValue}`)
        }
    }

}

module.exports = SelenuimInfra

