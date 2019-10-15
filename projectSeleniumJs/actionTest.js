const BasePage = require("./BasePage");
const ActionPage = require("./ActionsPage")


class ActionTest{

    constructor()
    {
        this.testSelenium = new BasePage().selenium
        this.actionPage = new ActionPage(this.testSelenium) 
    }

    
    async clientTest(){
        await this.actionPage.navigateToClientsPage();
        
    }
    async addClient(firstName,lastName,country,owner,email)
    {
        if(await this.actionPage.addClient(firstName,lastName,country,owner,email))
        {
            console.log("the user is exist at the client page !")
        }
        else{
            console.log("user does not exist at the table :(")
        }
    }
    async update(updateName, updateOwner, emailType)
    {
       if(await this.actionPage.update(updateName, updateOwner, emailType))
       {
           console.log("user successfuly Updated")
       }
       else{
           console.log("user not updated")
       }
    }
}

let actionTest= new ActionTest()
actionTest.clientTest()
//actionTest.addClient("pppppp","ppasdasp","rorasdasdo","pppadsapp","asdasdad")
actionTest.update("asd","ruruu","hey")