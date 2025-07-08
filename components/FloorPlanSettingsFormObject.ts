import { Page, Locator } from '@playwright/test';

export class FloorPlanSettingsFormObject {  
    private hideShareButton: Locator;
    private saveButton: Locator;

    constructor(page: Page) {
        this.hideShareButton = page.getByLabel('Hide "Share" button ');
        this.saveButton = page.getByRole('button', {name:'Save changes'});
    }

    async saveChanges(): Promise<void> {
        await this.saveButton.click();
    }
    async checkHideShareButton() : Promise<void>{        
        await this.hideShareButton.check();
    }
}
