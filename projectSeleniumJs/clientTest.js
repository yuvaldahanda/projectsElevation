const BasePage = require("./BasePage");
const ClientsPage = require("./ClientsPage")


class ClientsPageTest {
    constructor() {
        this.testSelenium = new BasePage().selenium
        this.clientsPage = new ClientsPage(this.testSelenium)
        // this.anaPage = new analyticspage(this.testSelenium) // to move between pages
        // if your test uses more pages, you will have to inisiate them here, in the constractor
    }
   
    async clientTest(){
        await this.clientsPage.navigateToClientsPage();
        
    }
    async searchBy(input,searchBy){
       if (await this.clientsPage.searchAndValidateClient(input,searchBy))
            console.log(
                "search by:"+searchBy+"\n"+
                "input:"+input+"\n"+
                "WOW AMAZING all the lines include -> "+input+" at the table")
        else(
            console.log("Oh OH The input not exist")
        )
    }
    
    async deleteUser(deleteUser,deleteBy)
    {
        if(await this.clientsPage.deleteClient(deleteUser,deleteBy))
        {
            console.log("the User delete successfully!!")
        }
        else{
            console.log("User not deleted")
        }
    }
    async clearField()
    {
        await this.clientsPage.clearEelementField()
    }

    async updateUser(updateUser, searchBy,updateName,updateEmail,updateCountry)
    {
        if(await this.clientsPage.updateClientAtClientPage(updateUser, searchBy,updateName,updateEmail,updateCountry))
            console.log("update success !!")
        else{
            console.log("Failed to update")
        }
    }
    async isDetailTheSamePopUp(user, searchBy){
        if(await this.clientsPage.isDetailTheSamePopUp(user, searchBy))
        {
            console.log("the details at the popUp are the same as the table")
        }
        else{
            console.log("please fix it!")
        }
    }
    async isPopExist()
    {
        if(await this.clientsPage.isPopUpExistAfterClick())
        {
            console.log("popUp exist!")
        }
        else{
            console.log("popUp not exist")
        }
    }
    async moveBetweenPages(clickNext,clickPrevious,numOfPageAfterClicking)
    {
        if(await this.clientsPage.isMoveBetweenPages(clickNext,clickPrevious,numOfPageAfterClicking))
        {
            console.log("Pass:Pages can be swapped smoothly !")
        }
        else{
            console.log("Fail:Pages canot be swapped smoothly")
        }
    }
    
}   
    
let clientPageTest = new ClientsPageTest()

async function functionalTest()
{
  await clientPageTest.clientTest();

  //await clientPageTest.moveBetweenPages(6,4,3)
   await clientPageTest.isPopExist()
// await clientPageTest.isDetailTheSamePopUp("Finch Robinson","Name")
//   await clientPageTest.deleteUser("123","Name")
//  await clientPageTest.updateUser("Gross Paul","Name","Gross Paull",null,"brock@gmail.com")
//await clientPageTest.isPersonAttrExist(["First Name","Owner1","Last Name"])
//await clientPageTest.searchBy("yes","Sold")
//  await clientPageTest.searchBy("jeanriddle@imant.com","Email")
//  await clientPageTest.searchBy("Michele","Name")
// await clientPageTest.updateUser("Michele","Name","michele",null,"heyr")
// await clientPageTest.isDetailTheSamePopUp("Charles Munoz", "Name")
// await clientPageTest.updateUser("berg hobbs","Name","berg HOBBS","berg@gmail.com","malta2")


}

functionalTest()

