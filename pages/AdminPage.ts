import { Page } from "@playwright/test";
import { AdminCardBodyObject } from "components/AdminCardBodyObject";
import { ConfigType } from 'interfaces/ConfigType';
import { IHaveTitle } from "interfaces/IHaveTitle";

export class AdminPage implements IHaveTitle{
    private URL : string ;
    private page: Page; 
    private cardBody : AdminCardBodyObject;

    constructor(page: Page, config : ConfigType) {
        this.page = page;
        this.URL = config.envUrl + '/admin';
        this.cardBody = new AdminCardBodyObject(page);
    }

    async goToPage(): Promise<void> {
        await this.page.goto(this.URL);
    }
    
    async areWeOnThisPage() : Promise<boolean>{
        const title = await this.page.title();
        return title === 'Admin - ExpoFP';
    }

    async gotoOurEvents() :Promise<void>{
        await this.cardBody.clickOurEvents();
        await this.page.waitForEvent('load');
    }
    async logout():Promise<void>{
        await this.page.locator(`[href="/logout"]`).click();
    }
}