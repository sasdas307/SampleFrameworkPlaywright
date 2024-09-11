import {test,expect} from "@playwright/test";
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

test('Sample env Test', async({page})=>{
    console.log(process.env.NODE_ENV);
    console.log(process.env.userid);
    console.log(process.env.password);
})

test('Attach Screenshot for each step', async({page},testInfo)=>{
    let loginPage:LoginPage;
    loginPage = new LoginPage(page);
    await page.goto("/");
    await loginPage.enterUserName("standard_user")
    await testInfo.attach('UserName',
        {
            body:await page.screenshot(),
            contentType: "image/png"
        })
        await loginPage.enterPassword("secret_sauce")
        await loginPage.clickLoginButon();
        await testInfo.attach('ClickLogin',
        {
            body:await page.screenshot(),
            contentType: "image/png"
        })
})

test.only('Practice Test ', async({page},testInfo)=>{
    await page.goto("https://www.amazon.in/");
    /* await page.locator("#searchDropdownBox").selectOption("search-alias=baby");
    await page.locator("#twotabsearchtextbox").fill("Baby Products");
    await page.locator("#twotabsearchtextbox").press("Enter")
    await page.waitForLoadState();
    for(const eachItem of await page.locator("//button[text()='Add to cart']").all()){
        await eachItem.click();
    }
    await page.waitForLoadState();
    await page.locator("#nav-cart-count-container").click();
    await page.waitForLoadState();
    const allPrice = await page.locator("//span[@class='currencyINR']/parent::span").allTextContents();
    const actPrice = allPrice.map(eachItem=> {return eachItem.replace(",","")}).map(eachItem => {return Number.parseFloat(eachItem)})
    const expPrice = [...actPrice].sort((a,b)=> {return a-b})
    expect(actPrice).toStrictEqual(expPrice) */
    await page.locator("//span[@id='nav-link-accountList-nav-line-1']").hover();
    const linkLocators = await page.locator("#nav-al-wishlist>a").all();
    // for(let eachLink of linkLocators){
    //     console.log(await eachLink.getAttribute("href"))
    // }
    await page.locator("//div[@id='nav-al-wishlist']//span[text()='Create a Wish List']/parent::a").click();
    console.log("DEBUG")
})

