import { Page } from '@playwright/test';
import { ConfigType } from 'interfaces/ConfigType';

export class PublicPage {
    private page: Page;
    private URL : string;
    private CreatePlanUrl: string;

    constructor(page: Page, config : ConfigType) {
        this.page = page;
        this.URL = config.publicUrl;
        this.CreatePlanUrl = config.createPlanUrl;
    }

    async gotoPublicPage(): Promise<void> {
        await this.page.goto(this.URL, {waitUntil : 'commit'});
    }

    async gotoCreatePlan(): Promise<void> {
        await this.page.goto(this.CreatePlanUrl, {waitUntil : 'commit'});
    }

    async goToLoginPageViaHeader(): Promise<void> {
        await this.page.getByRole('link', { name: 'Log In' }).first().click();
    }
}