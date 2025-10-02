import {test as base} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage.js"

export const test=base.extend
{
async ({page},use)=>
{
    
        const loginPage=new LoginPage(page)
        await loginPage.gotoURL()
        await  loginPage.fillEmail("admin@email.com")
        await loginPage.fillPassword("admin@123")
        await loginPage.submit()
        await use(loginPage)

}

}