import {test,expect} from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import * as users from "../data/credentials.json";
import ProductsPage from "../pages/ProductsPage";
import config from "../../playwright.config";

test.describe('Login Feature',
     ()=>{

    let loginPage:LoginPage;
    test.beforeEach( async({page,baseURL})=>{
        loginPage = new LoginPage(page);
        await page.goto("https://www.saucedemo.com/");
    })
    test('Positive: Standard user tries to login with correct credentials.',
        {tag:['@Smoke','@Regression']}, async({page})=>{
        await loginPage.enterUserName(users.standard.username)
        await loginPage.enterPassword(users.standard.password)
        await loginPage.clickLoginButon();

        const productsPage = new ProductsPage(page);
        expect(productsPage.getProductTitle).toBe("Products")
        console.log("DEBUG");
    });

})