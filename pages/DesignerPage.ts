import { Page } from "@playwright/test";
import { SideMenuObject } from "components/SideMenuObject";
import { HasSideMenu } from "interfaces/HasSideMenu";
import { ConfigType } from "interfaces/ConfigType";
import { IHaveTitle } from "interfaces/IHaveTitle";

export class DesignerPage implements HasSideMenu , IHaveTitle {
    public URL : string;
    private page: Page;
    sideMenu: SideMenuObject;
    private expoKey: string;

    constructor(page: Page, config: ConfigType) {
        this.page = page;        
        this.sideMenu = new SideMenuObject(page);
        this.URL  = config.envUrl + '/designer/'+ config.expoId;
        this.expoKey = config.expoKey;
    }

    async goToPage(): Promise<void> {
        await this.page.goto(this.URL, {waitUntil: "networkidle"});
        await this.page.waitForResponse(response => response.status() === 200);
        await this.page.waitForSelector('iframe');
        console.log( DesignerPage.name + " Page Loaded!");
    }

    async areWeOnThisPage() : Promise<boolean>{
        const title = await this.page.title();
        console.log(DesignerPage.name + " title: " + title);
        return title === this.expoKey + ' - Designer - ExpoFP';
    }
    
    async goToLiveViewViaSideMenu() : Promise<void>{
        this.sideMenu.clickViewLive();
    }
}