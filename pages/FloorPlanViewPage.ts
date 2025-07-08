import { Page } from "@playwright/test";
import { Booth } from "interfaces/IBooth";
import { IHaveTitle } from "interfaces/IHaveTitle";

export class FloorPlanViewPage implements IHaveTitle {
    private URL : string;
    private page: Page; 

    constructor(page: Page, key: string) {
        this.page = page;
        this.URL = 'https://' + key +".expofp.com";
    }

    async gotoBooth(name: string) : Promise<void>{
        await this.page.goto(this.URL+'/?'+name, {waitUntil : 'commit'});
    }
    async getBoothInfo(name: string) : Promise<Booth>{
       return {
        name : '110',
        price : '$2000'
       }
    }
    async goToPage(): Promise<void> {
        await this.page.goto(this.URL, {waitUntil: "load"});
    }

    async areWeOnThisPage() : Promise<boolean>{
        const title = await this.page.title();        
        return title.includes('Expo Floor Plan by ExpoFP');
    }
    getUrl() : string {
        return this.URL;
    }
}