const LoginPage = require('./loginPage');
const loginPage = new LoginPage()


async function firstTestCase(){
  console.log('This is my first test!!!')
  await loginPage.login()
  //More actions and validation﻿...

  
  }
  
firstTestCase()
    
