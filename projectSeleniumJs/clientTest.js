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
            console.log("i found at the table problem")
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


}   
    
let clientPageTest = new ClientsPageTest();

 clientPageTest.clientTest();
 //clientPageTest.searchBy("esperanzamaldonado@imant.com","Email")
// clientPageTest.isPersonAttrExist(["First Name","Last Name","Country","Email","Owner","Sold","Contact Date","Email-Type"])
clientPageTest.deleteUser("lisamayer@imant.com","Email")