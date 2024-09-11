import { Page,expect } from "@playwright/test";
import * as selectors from "../data/selectors.json";
import logger from '../utils/LoggerUtils';
export default class ProductsPage {
    constructor(public page: Page) {
    }

    async getProductTitle(){
        await this.page.waitForSelector(selectors.ProductsPage.productTitle,{state:'attached'});
        return await this.page.locator(selectors.ProductsPage.productTitle).textContent()
        // await expect(this.page.locator(selectors.ProductsPage.productTitle)).toContainText("Products");
       
    }
    get getTitle(){
        return this.page.locator(selectors.ProductsPage.productTitle).textContent();
       
    }

    get getProductNames(){
        return this.page.locator(selectors.ProductsPage.productNames).allTextContents();
    }

    async selectByValue(){
        await this.page.locator(selectors.ProductsPage.selectProductLowToHigh).selectOption('lohi');
    }

    async addItemToCart(productName:string){
        await this.page.locator("button[data-test*='" + productName + "']").click();
    }

    async isItemAddedToCart(){
        return await this.page.locator(selectors.CartPage.cartBadge).isEnabled();
    }

    async navigateToCart(){
        await this.page.locator(selectors.ProductsPage.cartLink).click();
    }


    async getProductPrice(){
        const productPrice = await this.page.locator(selectors.ProductsPage.productPrice).allTextContents();
        const newProductPrice = productPrice.map(eachItem => {return eachItem.replace("$","")}).map(eachItem => {return Number.parseFloat(eachItem)});
        const expSortedProductPrice = [...newProductPrice]
                                        .sort((a,b) => a-b);
        expect(newProductPrice).toStrictEqual(expSortedProductPrice);
    }


}