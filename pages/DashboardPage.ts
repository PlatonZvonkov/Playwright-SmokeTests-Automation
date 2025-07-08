import { Page } from "@playwright/test";
import { SideMenuObject } from "components/SideMenuObject";
import { HasSideMenu } from "interfaces/HasSideMenu";
import { ConfigType } from "interfaces/ConfigType";
import { IHaveTitle } from "interfaces/IHaveTitle";

export class DashboardPage implements HasSideMenu , IHaveTitle {
    public URL : string;
    private page: Page;
    sideMenu: SideMenuObject;

    constructor(page: Page, config: ConfigType) {
        this.page = page;        
        this.sideMenu = new SideMenuObject(page);
        this.URL  = config.envUrl + '/expo/'+ config.expoId
    }

    async goToPage(): Promise<void> {
        await this.page.goto(this.URL, {waitUntil: "networkidle"});
        this.page.waitForResponse(response => response.status() === 200);
        console.log(DashboardPage.name + " Page Loaded!");
    }

    async areWeOnThisPage() : Promise<boolean>{
        const title = await this.page.getByRole('heading').first().evaluate(x=>x.textContent);
        console.log(DashboardPage.name + " title: " + title);
        return title === 'Dashboard';
    }
    async goToLiveViewViaSideMenu() : Promise<void>{
        this.sideMenu.clickViewLive();
    }
}