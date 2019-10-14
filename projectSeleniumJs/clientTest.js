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
                "not found any bugs ")
        else(
            console.log("Oh OH The input not exist")
        )
    }

    async isPersonAttrExist(arrOfPersonAttr)
    {
        if(await this.clientsPage.isPersonAttributeExist(arrOfPersonAttr))
        {
            console.log("All person attributes that you send are exist :)")
        }
        else{
            console.log("Oh oh missing some attribute")
        }
    }

    async moveTablePage(num)
    {
        await this.clientsPage.moveBetweenTablePages(num)

        
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
        await this.clientsPage.updateClient(updateUser, searchBy,updateName,updateEmail,updateCountry)
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
}   
    
let clientPageTest = new ClientsPageTest();

async function test()
{
  await clientPageTest.clientTest();
//  await clientPageTest.searchBy("michelepetersen@imant.com","Email")
//  await clientPageTest.clearField()
//  await clientPageTest.searchBy("jeanriddle@imant.com","Email")
//  await clientPageTest.clearField()
//  await clientPageTest.searchBy("Michele","Name")
// await clientPageTest.updateUser("Michele","Name","michele",null,"heyr")
    await clientPageTest.isDetailTheSamePopUp("Charles Munoz", "Name")

}
//  clientPageTest.searchBy("Michele ","Name")
//   clientPageTest.searchBy("Buchanan","Name")
// clientPageTest.isPersonAttrExist(["First Name","Last Name","Country","Email","Owner","Sold","Contact Date","Email-Type"])
 //clientPageTest.deleteUser("elnorabullock@imant.com","Email")
test()

