class ClientsPage {
    constructor(selenium) {
        this.selenium = selenium
        this.personDetail = {}
        this.arrayOfPersons = []
    }
    async navigateToClientsPage() {
        await this.selenium.getURL("https://lh-crm.herokuapp.com/client")
    }
    /*This method gets an input to search and the field to search by
    searchBy can be: Name, Country, Email, Owner, Sold, EmailType
    Return value: true if client exist, false otherwise
    */


    async isDetailTheSamePopUp()//also check if the vlaue are the same
    {

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



    async updateClient() {

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
        let arrayOfPersons = await this._getCurrentTable()
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
        let rows = await this._getRowsFromTable()
        for (let index in rows) {
            if (rows[index] != arrOfAllAttribute[index]) {
                return false
            }
        }
        return true
    }
    //getting the rows from table 
    async _getRowsFromTable() {
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
    async _getCurrentTable() {
        let arrayOfPersons = []
        let personAttr = []
        let colums = await this.selenium.findElementListBy("className", "clientDetails")
        personAttr = await this._getRowsFromTable()
        for (let i in colums) {
            let detailsOfPerson = await this.selenium.findElementListBy("tagName", "th", colums[i])
            for (let j in personAttr) {
                this.personDetail["'" + personAttr[j] + "'"] = await this.selenium.getTextFromElement(null, null, detailsOfPerson[j])

            }
            arrayOfPersons.push(this.personDetail)
            this.personDetail = {}
        }
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
        await this.selenium.sleepSec()

    }


    //this function handleing the problem with search By NAME because at the table we have first name and last name attributes and we check if the input that we send is exist under this attribute
    async _isSearchByIncludeName(input, searchBy) {
        concenateSearchBy = ["First " + searchBy, "Last " + searchBy]
        let arrayOfPersons = []
        await this.openCorrectTable(input, searchBy)
        arrayOfPersons = await this._getCurrentTable()
        for (let j in concenateSearchBy) {
            for (let i in arrayOfPersons) {
                if (arrayOfPersons[i]["'" + concenateSearchBy[j] + "'"] != input) { //this iterate over the first name and the last name and check if the vlaue that we send is exist i do this because there is problen to search by Name because Name is not an attribute at the table
                    return false
                }
            }
        }
        return true
    }


    //this function is searching string at the table by some attribute and check if the string is exist at the table
    async searchAndValidateClient(input, searchBy) {
        if (searchBy == "Name") {
            await this._isSearchByIncludeName()
            return
        }
        let arrayOfPersons = []
        await this.openCorrectTable(input, searchBy)
        arrayOfPersons = await this._getCurrentTable()
        for (let i in arrayOfPersons) {
            if (arrayOfPersons[i]["'" + searchBy + "'"] != input) {
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