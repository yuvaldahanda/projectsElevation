const BasePage = require("../BasePage");
const ClientsPage = require("../ClientsPage")


class ClientsPageTest {
    constructor(name) {
        this.testSelenium = new BasePage(name).selenium
        this.logger = this.testSelenium.logger
        this.clientsPage = new ClientsPage(this.testSelenium, this.logger)


        // this.anaPage = new analyticspage(this.testSelenium) // to move between pages
        // if your test uses more pages, you will have to inisiate them here, in the constractor
    }

    //nevigate to client test
    async clientTest() {
        await this.clientsPage.navigateToClientsPage();

    }
    async isAttributeExist(array) {
        await this.clientsPage.isAttributeExist(array)
    }
    //search client by name email owner .....
    async searchBy(input, searchBy) {
        if (await this.clientsPage.searchAndValidateClient(input, searchBy)) {
            this.logger.info("Client Test:-> PASS -> " + input + " found at the table")
        }
        else {
            this.logger.info("Client Test:-> Fail -> " + input + " cannot found at the table")
        }
        await this.clientsPage.clearEelementField()
    }
    //search user and then delete him
    async deleteUser(deleteUser, deleteBy) {
        if (await this.clientsPage.deleteClient(deleteUser, deleteBy)) {
            this.logger.info("Client Test:-> PASS -> " + deleteUser + " client delete successfully!!")
        }
        else {
            this.logger.info("Client Test:-> Fail -> " + deleteUser + " client not deleted")
        }
        await this.clientsPage.clearEelementField()
    }
    //update user details
    async updateUser(updateUser, searchBy, updateName, updateEmail, updateCountry) {
        if (await this.clientsPage.updateClientAtClientPage(updateUser, searchBy, updateName, updateEmail, updateCountry))
            this.logger.info("Client Test:-> PASS -> " + updateUser + " update success !!")
        else {
            this.logger.info("Client Test:-> Fail -> " + updateUser + " update Failed")
        }
        await this.clientsPage.clearEelementField()

    }
    // Is the data in the table the same as the pop-up message
    async isDetailTheSamePopUp(user, searchBy) {
        if (await this.clientsPage.isDetailTheSamePopUp(user, searchBy)) {
            this.logger.info("Client Test:-> PASS -> the details at the popUp are the same as the table")
        }
        else {
            this.logger.info("Client Test:-> Fail -> Details are not the same")
        }
        await this.clientsPage.clearEelementField()

    }
    //checking if the pop up exist aftr click
    async isPopUpExist() {
        if (await this.clientsPage.isPopUpExistAfterClick()) {
            this.logger.info("Client Test:-> PASS -> popUp exist!")
        }
        else {
            this.logger.info("Client Test:-> Fail -> popUp not exist")
        }
        await this.clientsPage.clearEelementField()

    }
    //check if we can move between pages
    async moveBetweenPages(clickNext, clickPrevious, numOfPageAfterClicking) {
        if (await this.clientsPage.isMoveBetweenPages(clickNext, clickPrevious, numOfPageAfterClicking)) {
            this.logger.info("Client Test:-> PASS -> Pages can be swapped smoothly !")
        }
        else {
            this.logger.info("Client Test:-> Fail -> Pages cannot be swapped smoothly")
        }
        await this.clientsPage.clearEelementField()

    }
    async isAttributeExist(arrayOfAttr)
    {
        if(await this.clientsPage.isAttributeExist(arrayOfAttr))
        {
            this.logger.info("Client Test:-> PASS -> "+ arrayOfAttr +" is exist") 
        }
        else{
            this.logger.info("Client Test:-> Fail -> "+ arrayOfAttr + "Attribute not exist")
        }
    }

}

let clientPageTest = new ClientsPageTest("resultTests")

async function functionalTest() {
    await clientPageTest.clientTest();
    await clientPageTest.moveBetweenPages(6, 4, 3)
    // await clientPageTest.isPopUpExist()
    // await clientPageTest.isDetailTheSamePopUp("Finch Robinson", "Name")
    // await clientPageTest.deleteUser("looolldo", "Name")
    // await clientPageTest.updateUser("Gross Paul", "Name", "Gross Paull", null, "brock@gmail.com")
    // await clientPageTest.isPersonAttrExist(["First Name", "Owner1", "Last Name"])
    // await clientPageTest.searchBy("yes", "Sold")
    await clientPageTest.searchBy("jeanriddle@imant.com", "Email")
    // await clientPageTest.searchBy("jeanriddle@imant.com", "Email")
    // await clientPageTest.searchBy("bubu", "Email")
    // await clientPageTest.searchBy("Mi22che22le22222", "Name")
     await clientPageTest.updateUser("Michele", "Name", "michele", null, "heyr")
     await clientPageTest.isDetailTheSamePopUp("Mccarthy Neal", "Name")
     await clientPageTest.updateUser("berg hobbs", "Name", "BERG HOBBS", "berg@gmail.com", "malta2")
}
async function negativeTest() {
    await clientPageTest.clientTest();
     await clientPageTest.isAttributeExist(["First Name","Owner1","Last Name"])
    // await clientPageTest.searchBy(" ","Email")
    // await clientPageTest.searchBy("@","Email")
    // await clientPageTest.searchBy("Michele222","Name")
    // await clientPageTest.updateUser("Michele","Name",";",null,";")
    // await clientPageTest.updateUser("berg hobbs","Name"," "," "," ")


}
async function stability() {
    // await clientPageTest.clientTest();
    // for (let i = 0; i < 10; i++)
    //     await clientPageTest.updateUser("Gross Paul", "Name", "Gross Paull", null, "brock@gmail.com")
    // for (let i = 0; i < 10; i++)
    //     await clientPageTest.searchBy("jeanriddle@imant.com", "Email")
}

// functionalTest()
  negativeTest()
// stability()