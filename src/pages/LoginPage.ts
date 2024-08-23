import { Page } from "@playwright/test";
import * as selectors from "../data/selectors.json";
export default class LoginPage{

    constructor(private page:Page){

    }
    async enterUserName(userName:string){
        await this.page.locator(selectors.LoginPage.username).fill(userName)
    }
    async enterPassword(password: string) {
        await this.page.locator(selectors.LoginPage.password).fill(password);
    }
    async clickLoginButon() {
        await this.page.click(selectors.LoginPage.loginBtn);
    }
}