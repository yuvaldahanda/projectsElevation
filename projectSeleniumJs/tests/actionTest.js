const BasePage = require("../BasePage");
const ActionPage = require("../ActionsPage")
const ClientPage = require("../ClientsPage")



class ActionTest {

    constructor(name) {
        this.testSelenium = new BasePage(name).selenium
        this.logger = this.testSelenium.logger
        this.actionPage = new ActionPage(this.testSelenium, this.logger)
        this.clientPage = new ClientPage(this.testSelenium, this.logger)

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
            this.logger.info("action Test:-> PASS -> user added successufuly!")
        }
        else {
            this.logger.info("action Test:-> Fail -> user not added")
        }
        await this.actionPage.navigateToActionPage()
    }
    //function that update the user owner or email type or both
    async update(updateName, updateOwner, emailType) {
        await this.actionPage.update(updateName, updateOwner, emailType)
        await this.clientPage.navigateToClientsPage()
        if (await this.clientPage.searchAndValidateClient(updateName,"Name")) {
            
            this.logger.info("action Test:-> PASS -> user updates successfully!!!")
        }
        else {
            this.logger.info("action Test:-> Fail -> user update at action page but not at the table")
        }
        await this.actionPage.navigateToActionPage()
    }



}

let actionTest = new ActionTest("resultTests")


async function functionalTest() {
    await actionTest.actionTest()
    await actionTest.addClient("martin", "rodriges", "malta", "Mendoza Lott", "martin@gmail.com")
    await actionTest.update("Mendoza Lott", "Mendoza Lott", "B")
    // await actionTest.update("Mendoza Lott", "martin rodriges", "D")
    // await actionTest.update("Mendoza Lott", "martin rodriges", "A")
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
// negativeTest()
// stability()