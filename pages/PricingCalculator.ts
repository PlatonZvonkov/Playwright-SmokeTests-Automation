import { Page } from '@playwright/test';
import { ConfigType } from 'interfaces/ConfigType';

export class PricingCalculator {
    private page: Page;
    private URL : string;
    private PartnersPricingCalculatorUrl: string;

    constructor(page: Page, config : ConfigType) {
        this.page = page;
        this.URL = config.pricingCalculatorUrl;
        this.PartnersPricingCalculatorUrl = config.partnersPricingCalculatorUrl;
    }

    async gotoCalculatorPage(): Promise<void> {
        await this.page.goto(this.URL, {waitUntil : 'load'});
    }

    async gotoPartnersCalculatorPage(): Promise<void> {
        await this.page.goto(this.PartnersPricingCalculatorUrl, {waitUntil : 'load'});
    }
}