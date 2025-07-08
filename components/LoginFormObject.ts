import { Page, Locator } from '@playwright/test';

export class LoginFormObject {   
    private usernameField: Locator;
    private passwordField: Locator;
    private loginButton: Locator;

    constructor(page: Page) {        
        this.usernameField = page.getByPlaceholder('Enter your email');
        this.passwordField = page.getByPlaceholder('Enter your password');
        this.loginButton = page.locator(`[name='loginBtn']`);
    }

    async login(username: string, password: string): Promise<void> {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }
}
