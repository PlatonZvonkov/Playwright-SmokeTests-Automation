import { Page } from "@playwright/test";
import { ConfigType } from "interfaces/ConfigType";
import { IHaveTitle } from "interfaces/IHaveTitle";

export class AdminOurEventsPage implements IHaveTitle {
  private URL: string;
  private page: Page;

  constructor(page: Page, config: ConfigType) {
    this.page = page;
    this.URL = config.envUrl + "/admin/events";
  }

  async goToPage(): Promise<void> {
    await this.page.goto(this.URL);
  }

  async areWeOnThisPage(): Promise<boolean> {
    const title = await this.page.title();
    return title === "Our events - ExpoFP";
  }
}
