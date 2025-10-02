import {test} from "../fixture/auth.fixture.js"

test("Login Scenario",async function({page,loginPage}){
/*
    const loginPage=new LoginPage(page)
    await loginPage.gotoURL()
    await  loginPage.fillEmail("admin@email.com")
    await loginPage.fillPassword("admin@123")
    await loginPage.submit()
*/
    await page.waitForTimeout(2000)

})