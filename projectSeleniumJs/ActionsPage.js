const ClientPage = require("./ClientsPage")
class ActionPage {

    constructor(selenium) {

        this.selenium = selenium
        this.clientPage = new ClientPage(this.selenium)

    }
    async navigateToClientsPage() {
        await this.selenium.getURL("https://lh-crm.herokuapp.com/actions")
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
        if (!await this.selenium.isElementExists("className", "error-pop-up")) {
            await this.clientPage.navigateToClientsPage()
            await this.clientPage.openCorrectTable(email, "Email")
            let arrayOfPerson = await this.clientPage.getCurrentTable()
            let attr = await this.clientPage.getRowsFromTable()
            insertDetail = [firstName, lastName, country, email, owner]
            attr.splice(5, 3)
            for (let i in arrayOfPerson) {
                for (let j in insertDetail) {
                    if (arrayOfPerson[i]["'" + attr[j] + "'"].toLowerCase() != insertDetail[j]) {
                        return false
                    }
                }

            }
            return true
        }
        else {
            console.log("missing details")
        }

    }

    async update(updateName, updateOwner, emailType, sold) {
        let inputLists = ["names", "owner", "emailType"]
        let update = [updateName, updateOwner, emailType]
        for (let i in inputLists) {
            if (update[i]) {
                await this.selenium.write(update[i], "xpath", "//input[@list='" + inputLists[i] + "']")
                if (i==1 && update[i])
                    await this.selenium.clickElement("xpath", "//input[@value ='Transfer']")
                if (i==2 && update[i])
                    await this.selenium.clickElement("xpath", "//input[@value ='Send']")
            }
        }
        if (sold) {
            await this.selenium.clickElement("xpath", "//input[@value='Sold']")
        }
        if (!await this.selenium.isElementExists("className", "error-pop-up")) {
            await this.clientPage.navigateToClientsPage()
            await this.clientPage.openCorrectTable(updateName, "Name")
            let arrayOfPerson = await this.clientPage.getCurrentTable()
            if (updateName) {
                let name = update[0].split(" ")
                update.splice(0, 1)
                update.unshift(name[0], name[1])
            }
            let attr = ["First Name", "Last Name", "Owner", "Email-Type"]
            for (let i in arrayOfPerson) {
                for (let j in update) {
                    if (arrayOfPerson[i]["'" + attr[j] + "'"].toLowerCase() != update[j]) {
                        return false
                    }
                }

            }
            return true
        }
        else {
            console.log("missing details")
        }
    }
}
module.exports = ActionPage