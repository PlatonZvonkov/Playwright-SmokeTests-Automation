import { Page } from "@playwright/test";
import { SideMenuObject } from "components/SideMenuObject";
import { ConfigType } from "interfaces/ConfigType";
import { HasSideMenu } from "interfaces/HasSideMenu";
import { IHaveTitle } from "interfaces/IHaveTitle";

export class MoneySettingsPage implements HasSideMenu , IHaveTitle {
    private URL : string;
    private page: Page;
    sideMenu: SideMenuObject;

    constructor(page: Page, config: ConfigType) {
        this.page = page;        
        this.sideMenu = new SideMenuObject(page);
        this.URL  = config.envUrl + '/expo/'+ config.expoId+ '/settings/money-and-invoice';
    }
    async areWeOnThisPage(): Promise<boolean> {
        const title = await this.page.title();
        return title.includes('Money settings - ExpoFP');
    }
    async goToPage(): Promise<void> {
        await this.page.goto(this.URL);
    }
}