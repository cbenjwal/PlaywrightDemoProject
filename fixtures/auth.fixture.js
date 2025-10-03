import {test as base} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage.js"
import {readJson} from "../utils/readjson.js"

export const test=base.extend(
    {

            loginPage:async ({page},use)=>
            {

                console.log("Running Login Page Fixture Before Test");

                const loginPage=new LoginPage(page)
                
                await loginPage.gotoURL()
                
                await loginPage.fillEmail("admin@email.com")
                
                await loginPage.fillPassword("admin@123")
                
                await loginPage.submit()

                await use(loginPage)

                console.log("Running After Test ");
                
                
            },

            loginPageJSON:async ({page},use)=>
            {

                console.log("Running Login Page Fixture Before Test Using JSON File");

                const data=readJson("./testdata/users.json")

                const loginPage=new LoginPage(page)
                
                await loginPage.gotoURL()
                
                await loginPage.fillEmail(data.username)
                
                await loginPage.fillPassword(data.password)
                
                await loginPage.submit()

                await use(loginPage)

                console.log("Running After Test For JSON File");
                
                
            },
    }

)