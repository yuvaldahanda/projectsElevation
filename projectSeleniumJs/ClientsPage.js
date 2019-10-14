class ClientsPage {
    constructor(selenium) {
        this.selenium = selenium
        this.startTest = false
        this.personDetail = {}
        this.arrayOfPersons = []
    }
    async navigateToClientsPage() {
        await this.selenium.getURL("https://lh-crm.herokuapp.com/client")
    }



    async isDetailTheSamePopUp(user, searchBy)//check if the vlaue are the same as show at the table
    {
        await this.openCorrectTable(user, searchBy)
        await this.selenium.clickElement("className", "clientDetails")

        let id = ["name", "country", "email"]
        let gettingTextFromId = []
        for (let i in id) {
            let element = await this.selenium.findElementBy("id", id[i])
            gettingTextFromId.push(await element.getAttribute("value"))

        }
        let name = gettingTextFromId[0].split(" ")
        gettingTextFromId.splice(0,1)
        gettingTextFromId.unshift(name[0], name[1])
        let currentTable = await this.getCurrentTable()
        let attr = ["First Name", "Last Name", "Country", "Email"]//this is the attribute that i check

        for (let j in currentTable) {
            for (let i in gettingTextFromId) {
                if (gettingTextFromId[i] != currentTable[j]["'" + attr[i] + "'"]) {
                    console.log("found bug at ->" + attr[i])
                    return false
                }

            }
        }
        return true
    }
    async getClientDetails() {
        let arr = await this.selenium.findElementListBy("className", "clientDetails")
        return arr
    }

    //searching client and delete him
    async deleteClient(deleteUser, searchBy) {
        await this.openCorrectTable(deleteUser, searchBy)
        let arr = await this.getClientDetails()
        if (arr.length == 1) {
            await this.selenium.clickElement("className", "clientDetails")
            await this.selenium.clickElement("xpath", "//input[@value='Delete Client']")
        }
        else {
            console.log("there is more then 1 person with that details please search by uniqe value and then delete")
        }
        arr = await this.getClientDetails()
        if (!arr) {//checking if there is a table if there is a table so its bad! the delete dont work if there is no table to show then wohoo the delete work
            return false
        }
        return true
    }



    async updateClient(updateUser, searchBy, updateName, updateEmail, updateCountry) {
        let name = updateName.split(" ")
        await this.openCorrectTable(updateUser, searchBy)
        await this.selenium.clickElement("className", "clientDetails")
        let update = [updateName, updateEmail, updateCountry] //if i want update 2 attribure or 3 or either 1
        let id = ["name", "country", "email"]
        let attr = ["First Name", "Last Name", "Country", "Email"]
        for (let index in id) { //clearing fields and then isert a new input
            if (update[index]) {
                await this.selenium.clearElementField("id", id[index])
                await this.selenium.write(update[index], "id", id[index])
                await this.selenium.clickElement("xpath", "//input[@value='Update Client']")
            }
        }
        let name = updateName.split(" ")
        update = [name[0], name[1], updateEmail, updateCountry]
        let currentTableAfterUpdate = await this.getCurrentTable() //getting the current table after update


        //if the update that we do is not the same as the new details at the table then it return false and dont continue loop 
        //if everything fine then it do the loop with out returning false and its mean that everthing fine and we can return true!
        for (let j in currentTableAfterUpdate) {
            for (let i in update) {
                if (update[i]) { //checking if there is update that we do if  there is  a update then we check the update According to the table
                    if (update[i] != currentTableAfterUpdate[j]["'" + attr[i] + "'"]) {
                        return false
                    }
                }
            }
        }
        return true

    }



    //this function check switch between pages
    async moveBetweenTablePages(numOfClicking) {

        let pages = await this.selenium.findElementListBy("className", "page")
        for (let i = 0; i < numOfClicking; i++) {
            await this.selenium.clickElement("xpath", "//img[@name='next']")
        }
        numOfClicking += 1 //because pages start at 1
        let numberAfterClick = await this.selenium.getTextFromElement(null, null, pages[0])
        if (numOfClicking != numberAfterClick)
            return false

        return true
    }

    //function that check if the value that we send is showen number of times that we know he should apper
    async isValueExistNumberOfTimes(input, searchBy, number) {
        let counter = 0
        await this.openCorrectTable(input, searchBy)
        let arrayOfPersons = await this.getCurrentTable()
        for (let i in arrayOfPersons) {
            if (arrayOfPersons[i]["'" + searchBy + "'"] == input) {
                counter++
            }
        }
        if (counter != number)
            return false
        return true
    }

    //this function check if the all the attribure are exist
    async isPersonAttributeExist(arrOfAllAttribute) {
        let rows = await this.getRowsFromTable()
        for (let index in rows) {
            if (rows[index] != arrOfAllAttribute[index]) {
                return false
            }
        }
        this.startTest = true //we have to know that all attribute in there place before we start the thest
        return true
    }
    //getting the rows from table 
    async getRowsFromTable() {
        let personAttr = []
        let rows = await this.selenium.findElementListBy("className", "table-header-th")
        for (let getText of rows) {
            personAttr.push(await this.selenium.getTextFromElement(null, null, getText))
        }
        return personAttr
    }


    //this function return the current table as the user see for exmple: after insert input and search by we can see table that relevent to that search so with this function i can return this current table
    //this function also get the all user detail from >showen table(only what is showen at the browser)
    //first i check that there is no problem with attribute and then i get them from table And uses them individually for each user (creating a object) 
    //and iterate over person detail and isert details to object and then push all the object wich is user to array and return this array 
    async getCurrentTable() {
        let arrayOfPersons = []
        let personAttr = []
        let colums = await this.selenium.findElementListBy("className", "clientDetails")
        personAttr = await this.getRowsFromTable()
        for (let i in colums) {
            let detailsOfPerson = await this.selenium.findElementListBy("tagName", "th", colums[i])
            for (let j in personAttr) {
                this.personDetail["'" + personAttr[j] + "'"] = await this.selenium.getTextFromElement(null, null, detailsOfPerson[j])

            }
            arrayOfPersons.push(this.personDetail)
            this.personDetail = {}
        }
        let dropDownMenu = await this.selenium.findElementBy("className", "select-css")
        await this.selenium.write("Name", null, null, dropDownMenu, null, true)
        console.table(arrayOfPersons)
        return arrayOfPersons
    }



    //function that open the table after insert input and search by "country","sold"....
    async openCorrectTable(input, searchBy) {
        await this.selenium.write(input, "xpath", "//input[@type='text']")
        let dropDownMenu = await this.selenium.findElementBy("className", "select-css")
        await this.selenium.clickElement(null, null, dropDownMenu)
        await this.selenium.write(searchBy, null, null, dropDownMenu, null, true)
        await this.selenium.clickElement(null, null, dropDownMenu)

    }
    async sleep() {
        await this.selenium.sleepSec()
    }

    async clearEelementField() {
        this.selenium.clearElementField("xpath", "//input[@type='text']")
    }

    //this function handleing the problem with search By NAME because at the table we have first name and last name attributes and we check if the input that we send is exist under this attribute
    async _isSearchByIncludeName(input, searchBy) {


        let concenateSearchBy = ["First " + searchBy, "Last " + searchBy]
        let arrayOfPersons = []
        await this.openCorrectTable(input, searchBy)
        arrayOfPersons = await this.getCurrentTable()
        for (let i in arrayOfPersons) {
            if (!(arrayOfPersons[i]["'" + concenateSearchBy[0] + "'"].includes(input)) &&
                !(arrayOfPersons[i]["'" + concenateSearchBy[1] + "'"].includes(input))) { //this if check if first name and last name both not include the input paramter and return false if one of them are true then we continue to loop so if we end the all loop with out geeting false that mean everting ok!  o
                return false
            }
        }
        return true

    }


    //this function is searching string at the table by some attribute and check if the string is exist at the table
    async searchAndValidateClient(input, searchBy) {

        if (searchBy == "Name") {
            return this._isSearchByIncludeName(input, searchBy)
        }
        let arrayOfPersons = []
        await this.openCorrectTable(input, searchBy)
        arrayOfPersons = await this.getCurrentTable()
        for (let i in arrayOfPersons) {
            if (!(arrayOfPersons[i]["'" + searchBy + "'"].includes(input))) { //this is check all the lines of person if they not include the input the WE HAVE BUG! its return false,if it do all the loop with out return false then ITS AMAZAING we can return true
                return false
            }
        }
        return true



    }

}
module.exports = ClientsPage









// for (let i in colums) {
//     let detailsOfPerson = await this.selenium.findElementListBy("tagName", "th", colums[i])
//     for (let j in rows) {
//         let personAttribute = await this.selenium.getTextFromElement(null, null, rows[j])
//         if (personAttribute.includes(searchBy)) {
//             let value = await this.selenium.getTextFromElement(null, null, detailsOfPerson[j])
//             if(value.includes(input))
//             {
//                 console.log("\x1b[44m%s\x1b[0m" ,
//                     "you have search ->"+input +" by ->"+searchBy+"\n"+
//                     "and this is what we found at the table :)"+"\n"+
//                     personAttribute+":"+value+"\n"+
//                     "that test Pass!"
//                     )

//             }
//             else{
//                 console.log(
//                     "you have search ->"+input +" by ->"+searchBy+"\n"+
//                     "and we dont found under :)"+"\n"+
//                     personAttribute+":"+value+"\n"
//                     )
//             }
//         }
//     }
// }




//just trying another option

//  async getCurrentTable() {


    //     let rows = await this.selenium.findElementListBy("className", "table-header-th")
    //     let colums = await this.selenium.findElementListBy("className", "clientDetails")

    //     for (let j in rows) {
    //         let detailsOfPerson = await this.selenium.findElementListBy("tagName", "th", colums[i])
    //         for (let i in colums) {
    //             switch (i) {
    //                 case 0: detailOfPerson.fName = await this.selenium.getTextFromElement(null, null, detailsOfPerson[i]); break;
    //                 case 1: detailOfPerson.lname = await this.selenium.getTextFromElement(null, null, detailsOfPerson[i]); break;
    //                 case 2: detailOfPerson.country = await this.selenium.getTextFromElement(null, null, detailsOfPerson[i]); break;
    //                 case 3: detailOfPerson.email = await this.selenium.getTextFromElement(null, null, detailsOfPerson[i]); break;
    //                 case 4: detailOfPerson.owner = await this.selenium.getTextFromElement(null, null, detailsOfPerson[i]); break;
    //                 case 5: detailOfPerson.sold = await this.selenium.getTextFromElement(null, null, detailsOfPerson[i]); break;
    //                 case 6: detailOfPerson.contactDate = await this.selenium.getTextFromElement(null, null, detailsOfPerson[i]); break;
    //                 case 7: detailOfPerson.emailType = await this.selenium.getTextFromElement(null, null, detailsOfPerson[i]); break;
    //             }
    //         }
    //         this.arrayOfPerson.push(detailOfPerson)
    //         this.detailOfPerson = {}
    //     }

    // }

    // async isExist(input, searchBy) {
    //     let rows = await this.selenium.findElementListBy("className", "table-header-th")
    //     for (let j in arr) {
    //         let personAttribute = await this.selenium.getTextFromElement(null, null, rows[j])
    //         if (personAttribute.includes(searchBy) &&  this.arrayOfPerson[i])
    //     }

    // }