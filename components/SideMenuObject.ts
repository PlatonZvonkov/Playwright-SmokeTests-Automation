import { Page, Locator } from "@playwright/test";

export class SideMenuObject {
  private dashboard: Locator;
  private designer: Locator;
  private viewLive: Locator;
  private settings: Locator;
  private floorPlan: Locator;
  private logOut: Locator;

  constructor(page: Page) {
    this.dashboard = page.locator(`[title="Dashboard"]`);
    this.designer = page.locator(`[title="Designer"]`);
    this.viewLive = page.locator(`[title="View live"]`);
    this.settings = page.locator(`[title="Settings"]`);
    this.logOut = page.locator(`[href="/logout"]`).last();
    this.floorPlan = page.getByRole("link", {
      name: "Floor plan",
      exact: true,
    });
  }

  async clickDashboard(): Promise<void> {
    await this.dashboard.click();
  }

  async clickDesigner(): Promise<void> {
    await this.designer.click();
  }

  async clickViewLive(): Promise<void> {
    await this.viewLive.click();
  }

  async selectFloorPlanSettings(): Promise<void> {
    await this.settings.click();
    await this.floorPlan.click();
  }
  async clickLogout(): Promise<void>{
    await this.logOut.click();
  }
}
