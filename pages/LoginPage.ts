import { Page } from '@playwright/test';
import { LoginFormObject } from '../components/LoginFormObject';
import { ConfigType } from 'interfaces/ConfigType';
import { IHaveTitle } from 'interfaces/IHaveTitle';

export class LoginPage implements IHaveTitle{
    private page: Page;
    private loginForm: LoginFormObject;
    private URL : string ;
    //private adminPassword : string = process.env.ADMIN_PASSWORD || '';
    private userPassword : string = process.env.USER_PASSWORD || '';
    private configVars : ConfigType;

    constructor(page: Page, config : ConfigType) {
        this.page = page;
        this.loginForm = new LoginFormObject(page);
        this.URL = config.envUrl +'/login';
        this.configVars = config;
    }
    async areWeOnThisPage(): Promise<boolean> {
        const title = await this.page.title();        
        return title === 'Our events - ExpoFP';
    }

    async goToPage(): Promise<void> {
        await this.page.goto(this.URL);
    }

    // async loginAsAdmin(): Promise<void> {
    //     await this.loginForm.login(this.configVars.adminLogin, this.adminPassword);
    //     this.page.waitForResponse(response => response.status() === 200);
    // }
    async loginAsUser(): Promise<void>{
        await this.loginForm.login(this.configVars.userLogin, this.userPassword);
        this.page.waitForResponse(response => response.status() === 200);
    }
}