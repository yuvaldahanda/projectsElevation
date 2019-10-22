const BasePage = require("./BasePage");
const ClientsPage = require("./ClientsPage")
const Logger = require('../logger')

class ClientsPageTest {
    constructor(name) {
        this.logger = new Logger(name).logger
        this.testSelenium = new BasePage().selenium
        this.clientsPage = new ClientsPage(this.testSelenium,this.logger)
        
        
        // this.anaPage = new analyticspage(this.testSelenium) // to move between pages
        // if your test uses more pages, you will have to inisiate them here, in the constractor
    }

    //nevigate to client test
    async clientTest() {
        await this.clientsPage.navigateToClientsPage();

    }
    //search client by name email owner .....
    async searchBy(input, searchBy) {
        if (await this.clientsPage.searchAndValidateClient(input, searchBy))
            console.log(
                "search by:" + searchBy + "\n" +
                "input:" + input + "\n" +
                "WOW AMAZING all the lines include -> " + input + " at the table")
        else (
            console.log("Oh OH The input not exist")
        )
      await this.clientsPage.clearEelementField()
    }

    //search user and then delete him
    async deleteUser(deleteUser, deleteBy) {
        if (await this.clientsPage.deleteClient(deleteUser, deleteBy)) {
            console.log("the User delete successfully!!")
        }
        else {
            console.log("User not deleted")
        }
        await this.clientsPage.clearEelementField()
    }
    

    //update user details
    async updateUser(updateUser, searchBy, updateName, updateEmail, updateCountry) {
        if (await this.clientsPage.updateClientAtClientPage(updateUser, searchBy, updateName, updateEmail, updateCountry))
            console.log("update success !!")
        else {
            console.log("Failed to update")
        }
        await this.clientsPage.clearEelementField()
       
    }
    // Is the data in the table the same as the pop-up message
    async isDetailTheSamePopUp(user, searchBy) {
        if (await this.clientsPage.isDetailTheSamePopUp(user, searchBy)) {
            console.log("the details at the popUp are the same as the table")
        }
        else {
            console.log("please fix it!")
        }
        await this.clientsPage.clearEelementField()
    }
    //checking if the pop up exist aftr click
    async isPopUpExist() {
        if (await this.clientsPage.isPopUpExistAfterClick()) {
            console.log("popUp exist!")
        }
        else {
            console.log("popUp not exist")
        }
        await this.clientsPage.clearEelementField()
    }
    //check if we can move between pages
    async moveBetweenPages(clickNext, clickPrevious, numOfPageAfterClicking) {
        if (await this.clientsPage.isMoveBetweenPages(clickNext, clickPrevious, numOfPageAfterClicking)) {
            console.log("Pass:Pages can be swapped smoothly !")
        }
        else {
            console.log("Fail:Pages canot be swapped smoothly")
        }
        await this.clientsPage.clearEelementField()
    }

}

let clientPageTest = new ClientsPageTest("clientTestResults")

async function functionalTest() {
    await clientPageTest.clientTest();

    // await clientPageTest.moveBetweenPages(6,4,3)
    // await clientPageTest.isPopUpExist()
    // await clientPageTest.isDetailTheSamePopUp("Finch Robinson","Name")
    // await clientPageTest.deleteUser("123","Name")
    // await clientPageTest.updateUser("Gross Paul","Name","Gross Paull",null,"brock@gmail.com")
    // await clientPageTest.isPersonAttrExist(["First Name","Owner1","Last Name"])
    // await clientPageTest.searchBy("yes","Sold")
    // await clientPageTest.searchBy("jeanriddle@imant.com","Email")
    // await clientPageTest.searchBy("jeanriddle@imant.com","Email")
    // await clientPageTest.searchBy("bubu","Email")
    // await clientPageTest.searchBy("Mi22che22le22222","Name")
   // await clientPageTest.updateUser("Michele","Name","michele",null,"heyr")
        await clientPageTest.isDetailTheSamePopUp("Sherri Pace", "Name")
    // await clientPageTest.updateUser("berg hobbs","Name","berg HOBBS","berg@gmail.com","malta2")


}
async function negativeTest() {
    await clientPageTest.clientTest();
    // await clientPageTest.isPersonAttrExist(["First Name","Owner1","Last Name"])
    // await clientPageTest.searchBy(" ","Email")
    // await clientPageTest.searchBy("@","Email")
    // await clientPageTest.searchBy("Michele222","Name")
    // await clientPageTest.updateUser("Michele","Name",";",null,";")
    // await clientPageTest.updateUser("berg hobbs","Name"," "," "," ")


}
async function stability() {
    await test.analyticTest()
    for (let i = 0; i < 10; i++)
        await clientPageTest.updateUser("Gross Paul", "Name", "Gross Paull", null, "brock@gmail.com")
    for (let i = 0; i < 10; i++)
        await clientPageTest.searchBy("jeanriddle@imant.com", "Email")
}

functionalTest()
// negativeTest()
// stability()