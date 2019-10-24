const BasePage = require("../BasePage");
const ActionPage = require("../ActionsPage")
const ClientPage = require("../ClientsPage")
const Logger = require("../../logger")


class ActionTest {

    constructor(name) {
        this.testSelenium = new BasePage().selenium
        this.actionPage = new ActionPage(this.testSelenium)
        this.clientPage = new ClientPage(this.testSelenium)
        this.logger = new Logger(name).logger
    }


    //nevigate to action page
    async actionTest() {
        await this.actionPage.navigateToActionPage();

    }
    //function that add client to the table
    async addClient(firstName, lastName, country, owner, email) {
            await this.actionPage.addClient(firstName, lastName, country, owner, email)
            await this.clientPage.navigateToClientsPage()
            if (await this.clientPage.searchAndValidateClient(email, "Email")) {
                this.logger.info("user update successufuly!!!")
            }
            else {
                this.logger.info("The user does add at the action page, but it does not appear in the table")
            }
    }
    //function that update the user owner or email type or both
    async update(updateName, updateOwner, emailType) {
        let updateDetails = { "Name": updateName, "Owner": updateOwner, "Email-Type": emailType }
        let keysOfUpdate = Object.keys(updateDetails)
        await this.actionPage.update(updateName, updateOwner, emailType)
            for (let i in keysOfUpdate) {
                if (updateDetails[keysOfUpdate[i]]) {
                    await this.clientPage.navigateToClientsPage()
                    if (await this.clientPage.searchAndValidateClient(updateDetails[keysOfUpdate[i]], keysOfUpdate[i])) {
                        this.logger.info("user updates successfully!!!")
                    }
                    else {
                        this.logger.info("user update at action page but not at the table")
                    }

                }
            }
      
    }
}

let actionTest = new ActionTest()


async function functionalTest() {
    await actionTest.actionTest()
    await actionTest.addClient("martin", "rodriges", "malta", "Mendoza Lott", "martin@gmail.com")
    await actionTest.update("Mendoza Lott", "Mendoza Lott", "B")
    await actionTest.update("Mendoza Lott", "martin rodriges", "D")
    await actionTest.update("Mendoza Lott", "martin rodriges", "A")
}

async function negativeTest() {
    await test.analyticTest() 
    await actionTest.addClient(" ", "rodriges", "malta", "Mendoza Lott", "martin@gmail.com")
    await actionTest.addClient(" ", " ", " ", " ", " ")
    await actionTest.addClient()
    await actionTest.update("Mendoza Lott", "Mendoza Lott", "B")


}
async function stability() {
    await test.analyticTest()
    for (let i = 0; i < 10; i++)
    await actionTest.addClient("martin", "rodriges", "malta", "Mendoza Lott", "martin@gmail.com")
    for (let i = 0; i < 10; i++)
    await actionTest.update("Mendoza Lott", "martin rodriges", "D")
}

functionalTest()
negativeTest()
stability()