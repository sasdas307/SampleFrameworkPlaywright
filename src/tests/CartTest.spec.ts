import { test, expect } from "@playwright/test";
import * as users from "../data/credentials.json";
import LoginPage from "../pages/LoginPage";
import ProductsPage from "../pages/ProductsPage";
import * as selectors from "../data/selectors.json";
import * as utility from "../utils/utilityMethods";
import CartPage from "../pages/CartPage";

test.describe('Sorting Feature', async () => {
    let loginPage: LoginPage;
    let productsPage: ProductsPage;
    let cartPage: CartPage;

    /* test.beforeEach(async ({ page, baseURL }) => {
        loginPage = new LoginPage(page);
        await page.goto("https://www.saucedemo.com/");
        await loginPage.enterUserName(users.standard.username)
        await loginPage.enterPassword(users.standard.password)
        await loginPage.clickLoginButon();
        await page.waitForLoadState();

        productsPage = new ProductsPage(page);
        expect(await productsPage.getTitle).toBe("Products");
    }) */

    test('Positive: Standard user tries to add 1 product to the cart.',
        { tag: ['@AddItemToCart'] }, async ({ page }) => {
            await productsPage.addItemToCart("backpack");
            expect(await productsPage.isItemAddedToCart()).toBe(true);
            //navigate to cart page
            await productsPage.navigateToCart();
            //check that your cart has been opened
            cartPage = new CartPage(page);

            expect(await cartPage.getTitle).toBe("Your Cart");
            //check that element is in the cart
            expect(await cartPage.getCartItemQuantity).toBe("1");
            expect(await cartPage.getCartItemName).toBe("Sauce Labs Backpack");

        });
    test('Positive: Standard user tries to add 2 products to the cart.',
        { tag: ['@AddItemToCart'] }, async ({ page }) => {
            await productsPage.addItemToCart("backpack");
            await productsPage.addItemToCart("bike-light");
            expect(await productsPage.isItemAddedToCart()).toBe(true);
            //navigate to cart page
            await productsPage.navigateToCart();
            //check that your cart has been opened
            cartPage = new CartPage(page);

            expect(await cartPage.getTitle).toBe("Your Cart");
            //check that element is in the cart
            expect(await cartPage.getCartItemsQty).toBe(2);
            // expect(await cartPage.getCartItemName).toBe("Sauce Labs Backpack");
            // await cartPage.validateProductNames();
            expect(await cartPage.validateProductNames()).toBe(true);
        });
})