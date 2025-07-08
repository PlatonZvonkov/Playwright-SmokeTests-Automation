import { Page } from '@playwright/test';
import { ConfigType } from 'interfaces/ConfigType';
import { IHaveTitle } from 'interfaces/IHaveTitle';

export class ReserveBoothPage implements IHaveTitle{
    private page: Page;
    private URL : string;
    private expoKey : string;

    constructor(page: Page, config : ConfigType) {
        this.page = page;
        this.URL = config.envUrl + '/reservebooth/' + config.testBoothId +'?price=0&culture=en/';
        this.expoKey = config.expoKey
    }

    async goToPage(): Promise<void> {
        await this.page.goto(this.URL, {waitUntil : 'load'});
    }
    async areWeOnThisPage(): Promise<boolean> {
        const title = await this.page.title();
        return title === 'Reserve booth at '+this.expoKey+' - ExpoFP';
    }
}