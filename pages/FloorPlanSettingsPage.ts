import { Page } from "@playwright/test";
import { SideMenuObject } from "components/SideMenuObject";
import { HasSideMenu } from "interfaces/HasSideMenu"
import { FloorPlanSettingsFormObject } from "components/FloorPlanSettingsFormObject";
import { ConfigType } from "interfaces/ConfigType";
import { IHaveTitle } from "interfaces/IHaveTitle";

export class FloorPlanSettingsPage implements HasSideMenu, IHaveTitle {
    private URL : string;
    private page: Page;
    floorPlanSettingsFormObject : FloorPlanSettingsFormObject;
    sideMenu: SideMenuObject;

    constructor(page: Page, config: ConfigType) {
        this.page = page; 
        this.sideMenu = new SideMenuObject(page);
        this.floorPlanSettingsFormObject = new FloorPlanSettingsFormObject(page);
        this.URL = config.envUrl +'/expo/'+ config.expoId +'/settings/floor-plan';
    }

    async goToPage(): Promise<void> {
        await this.page.goto(this.URL, {waitUntil: "load"});
    }

    async areWeOnThisPage() : Promise<boolean>{        
        const title = await this.page.getByRole('heading').evaluate(x=>x.textContent);
        return title === 'Floor plan settings';
    }
    async goToLiveViewViaSideMenu() : Promise<void>{
        this.sideMenu.clickViewLive();
    }
    async hideShareButton() : Promise<void>{
        await this.floorPlanSettingsFormObject.checkHideShareButton();
        await this.floorPlanSettingsFormObject.saveChanges();
    }
}