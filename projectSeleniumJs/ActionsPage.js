
class ActionPage {

    constructor(selenium,logger) {
        this.logger = logger
        this.selenium = selenium
    }
    async navigateToActionPage() {
        await this.selenium.getURL("https://lh-crm.herokuapp.com/actions")
    }


    //check if the error pop up appear
    async iseErrorPopUpAppear() {
        if (await this.selenium.findElementBy("calssName", "error-pop-up")) {
            this.logger.info("action Test:-> PASS -> error popUp appear")
            return true
        }
        else {
            this.logger.info("action Test:-> Fail -> error pop up not appear")
            return false
        }
    }

    //function that check if the pop up appear after update
    async isSuccessPopUpAppear() {
        if (await this.selenium.waitUntilElementExist("className", "success-pop-up")) {
            this.logger.info("action Test:-> PASS -> Success update pop up")
            return true
        }
        else {
            this.logger.info("action Test:-> Fail -> success update not appear")
            return false
        }
    }


    //function that add client to the table
    async addClient(firstName, lastName, country, owner, email) {

        let insertDetail = [firstName, lastName, country, owner, email]
        let id = ["firstName", "lastName", "country", "owner", "email"]

        for (let i in id) {
            if (insertDetail[i]) {
                await this.selenium.write(insertDetail[i], "xpath", "//input[@id='" + id[i] + "']")
            }
        }
        await this.selenium.clickElement("xpath", "//input[@value='Add']")
        await this.iseErrorPopUpAppear()
        await this.isSuccessPopUpAppear()
    }

    //function that update the user owner or email type or both
    async update(updateName, updateOwner, emailType, sold) {
        let inputLists = ["names", "owner", "emailType"]
        let update = [updateName, updateOwner, emailType]
        for (let i in inputLists) {
            if (update[i]) {
                await this.selenium.write(update[i], "xpath", "//input[@list='" + inputLists[i] + "']")
                if (i == 1 && update[i]) {
                    await this.selenium.clickElement("xpath", "//input[@value ='Transfer']")
                    await this.iseErrorPopUpAppear()
                }
                if (i == 2 && update[i]) {
                    await this.selenium.clickElement("xpath", "//input[@value ='Send']")
                    await this.iseErrorPopUpAppear()
                }

            }
        }
        if (sold) {
            await this.selenium.clickElement("xpath", "//input[@value='Sold']")
        }
        await this.isSuccessPopUpAppear()

    }


}
module.exports = ActionPage