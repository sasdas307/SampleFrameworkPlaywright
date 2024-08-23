import {test} from "@playwright/test";
import LoginPage from "../pages/LoginPage";

[
    {username: "standard_user",password:"secret_sauce"},
    {username: "problem_user",password:"secret_sauce"},
    {username: "performance_glitch_user",password:"secret_sauce"},
  
].forEach(({username,password})=>{
    test(`Parameterize Tests using ${username}`,{tag:['@UnitTest']}, async({page})=>{
        let loginPage:LoginPage;
        loginPage = new LoginPage(page);
        await page.goto("/");
        await loginPage.enterUserName(`${username}`)
        await loginPage.enterPassword(`${password}`)
        await loginPage.clickLoginButon();
        console.log("DEBUG")
    })
})

