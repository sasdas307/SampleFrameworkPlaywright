import {Page} from "@playwright/test";
import * as selectors from "../data/selectors.json";
export default class CartPage{

    constructor(private page: Page){

    }

    get getTitle(){
        return this.page.locator(selectors.CartPage.cartTitle).textContent();
    }

    get getCartItemQuantity(){
        return this.page.locator(selectors.CartPage.cartProductQty).textContent()
    }

    get getCartItemsQty(){
        return this.page.locator(selectors.CartPage.cartItems).count();
    }

    get getCartItemName(){
        return this.page.locator(selectors.CartPage.cartProductName).textContent()
    }

    async validateProductNames(){
        let itemNames = await this.page.locator(selectors.CartPage.cartProductName).all();
        let isItemFound:boolean = true;
        for(const eachItem of itemNames){
            let itemName = await eachItem.textContent();
            if(itemName?.includes("Sauce Labs Backpack") || itemName?.includes("Sauce Labs Bike Light")){
                isItemFound = isItemFound && true;
            }else{
                isItemFound = isItemFound && false;
            }
        }
        return isItemFound;
    }


}