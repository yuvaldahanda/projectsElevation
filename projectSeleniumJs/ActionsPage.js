
class ActionPage {

    constructor(selenium) {

        this.selenium = selenium


    }
    async navigateToActionPage() {
        await this.selenium.getURL("https://lh-crm.herokuapp.com/actions")
    }



    async _isErrorPopUpAppear() {
        if (!await this.selenium.isElementExists("className", "error-pop-up")) {
            return true
        }
        else {
            return false
        }
    }


    async addClient(firstName, lastName, country, owner, email) {

        let insertDetail = [firstName, lastName, country, owner, email]
        let id = ["firstName", "lastName", "country", "owner", "email"]

        for (let i in id) {
            if (insertDetail[i]) {
                await this.selenium.write(insertDetail[i], "xpath", "//input[@id='" + id[i] + "']")
            }
        }
        await this.selenium.clickElement("xpath", "//input[@value='Add']")
     return await this._isErrorPopUpAppear()
    }

    async update(updateName, updateOwner, emailType, sold) {
        let inputLists = ["names", "owner", "emailType"]
        let update = [updateName, updateOwner, emailType]
        for (let i in inputLists) {
            if (update[i]) {
                await this.selenium.write(update[i], "xpath", "//input[@list='" + inputLists[i] + "']")
                if (i == 1 && update[i])
                    await this.selenium.clickElement("xpath", "//input[@value ='Transfer']")
                if (i == 2 && update[i])
                    await this.selenium.clickElement("xpath", "//input[@value ='Send']")
            }
        }
        if (sold) {
            await this.selenium.clickElement("xpath", "//input[@value='Sold']")
        }
     return await this._isErrorPopUpAppear()

    }


}
module.exports = ActionPage