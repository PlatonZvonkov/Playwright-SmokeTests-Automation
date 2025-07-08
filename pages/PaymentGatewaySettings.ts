import { Page } from "@playwright/test";
import { SideMenuObject } from "components/SideMenuObject";
import { ConfigType } from "interfaces/ConfigType";
import { HasSideMenu } from "interfaces/HasSideMenu";
import { IHaveTitle } from "interfaces/IHaveTitle";

export class PaymentGatewaySettingsPage implements HasSideMenu , IHaveTitle {
    private URL : string;
    private page: Page;
    sideMenu: SideMenuObject;

    constructor(page: Page, config: ConfigType) {
        this.page = page;        
        this.sideMenu = new SideMenuObject(page);
        this.URL  = config.envUrl + '/settings/payment/'+ config.expoId;
    }
    async areWeOnThisPage(): Promise<boolean> {
        const title = await this.page.title();
        return title.includes('Payment gateway settings - ExpoFP');
    }
    async goToPage(): Promise<void> {
        await this.page.goto(this.URL);
    }
}