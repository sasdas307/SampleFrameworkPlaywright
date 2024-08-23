import {test, expect} from "@playwright/test";
import * as users from "../data/credentials.json";
import LoginPage from "../pages/LoginPage";
import ProductsPage from "../pages/ProductsPage";
import * as selectors from "../data/selectors.json";
import * as utility from "../utils/utilityMethods";

test.describe('Sorting Feature',async()=>{
    let loginPage:LoginPage;
    let productsPage:ProductsPage;

    test.beforeEach(async ({page,baseURL})=>{
        loginPage = new LoginPage(page);
        await page.goto("https://www.saucedemo.com/");
        await loginPage.enterUserName(users.standard.username)
        await loginPage.enterPassword(users.standard.password)
        await loginPage.clickLoginButon();
        await page.waitForLoadState();

        productsPage = new ProductsPage(page);
        // productsPage.getProductTitle();
        expect(await productsPage.getTitle).toBe("Products");
    })

    test('Positive: User can sort the products by name (a to z)',
        {tag:['@SortByNameAsc']},async({page})=>{
        const actProductNames = await productsPage.getProductNames;
        const expSortedProductNames = utility.sortAlphabeticallyASC(actProductNames)
        expect(actProductNames,'Product Names are not displayed in sorted order').toEqual(expSortedProductNames);
    })

    test.only('Positive: User can sort the products by price (low to high)',
        {tag:['@SortByPriceAsc']},async({page})=>{
            await productsPage.selectByValue();
            await productsPage.getProductPrice();
    })

})
