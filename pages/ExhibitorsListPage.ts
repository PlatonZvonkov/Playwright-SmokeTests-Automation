import { Page } from "@playwright/test";
import { SideMenuObject } from "components/SideMenuObject";
import { ConfigType } from "interfaces/ConfigType";
import { HasSideMenu } from "interfaces/HasSideMenu";
import { IHaveTitle } from "interfaces/IHaveTitle";

export class ExhibitorsListPage implements HasSideMenu , IHaveTitle {
    private URL : string;
    private page: Page;
    sideMenu: SideMenuObject;
    private expoKey: string;

    constructor(page: Page, config: ConfigType) {
        this.page = page;
        this.sideMenu = new SideMenuObject(page);
        this.URL  = config.envUrl + '/exhibitors/'+ config.expoId;
        this.expoKey = config.expoKey;
    }
    async areWeOnThisPage(): Promise<boolean> {
        const title = await this.page.title();
        console.log(ExhibitorsListPage.name + " title: " + title);
        return title === this.expoKey + ' - Exhibitors - ExpoFP';
    }
    async goToPage(): Promise<void> {
        await this.page.goto(this.URL, {waitUntil: 'networkidle'});
        this.page.waitForResponse(response => response.status() === 200);
        console.log(ExhibitorsListPage.name + "Page Loaded!");
    }
}