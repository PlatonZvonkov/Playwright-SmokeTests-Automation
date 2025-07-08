import { Page, Locator } from '@playwright/test';

export class AdminCardBodyObject {  
    private ourEvents: Locator;
    private featuredFP: Locator;
    private CMSpages: Locator;
    private payments: Locator;
    private venue3dModel: Locator;
    private venueStats: Locator;
    private allEvents: Locator;
    private threeDpostTemplate: Locator;
    private users: Locator;

    constructor(page: Page) {
        this.ourEvents = page.getByRole('main').getByRole('link', { name: 'Our events' });
        this.featuredFP = page.locator(`[href="/admin/featured"]`);
        this.CMSpages = page.locator(`[href="/admin/cms/pages"]`);
        this.payments = page.locator(`[href="/admin/dashboard/payments"]`);
        this.venue3dModel = page.locator(`[href="/admin/venue3dmodels"]`);
        this.venueStats = page.locator(`[href="/admin/utils/venuestats]"`);
        this.allEvents = page.locator(`[href="/admin/venue3dmodels/allevents"]`);
        this.threeDpostTemplate = page.locator(`[href="/admin/dashboard/socialstemplates"]`);
        this.users = page.locator('[href="/admin/users"]');
    }

    async clickOurEvents(): Promise<void> {
        await this.ourEvents.click(); 
    }
}