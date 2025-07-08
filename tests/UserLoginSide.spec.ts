import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "pages/DashboardPage";
import config from "config";
import { PricingCalculator } from "pages/PricingCalculator";
import { ExhibitorsListPage } from "pages/ExhibitorsListPage";
import { DesignerPage } from "pages/DesignerPage";
import { IHaveTitle } from "interfaces/IHaveTitle";
import { UploadFloorPlanPage } from "pages/UploadFloorPlanPage";

let _loginPage: LoginPage;
let _exhibitorsList: ExhibitorsListPage;
let _dashboardPage: DashboardPage;
let _designerPage: DesignerPage;
let _uploadFloorPlanPage: UploadFloorPlanPage;
let _pagesToTest: Array<IHaveTitle>;

test.beforeEach(async ({ page }) => {
  _loginPage = new LoginPage(page, config);
  _dashboardPage = new DashboardPage(page, config);
  _exhibitorsList = new ExhibitorsListPage(page, config);
  _designerPage = new DesignerPage(page,config);  
  _uploadFloorPlanPage = new UploadFloorPlanPage(page, config);
  _pagesToTest = new Array<IHaveTitle>();
});

test.afterEach(async ({ page }) => {
  await page.locator(`[href="/logout"]`).last().click();
  await page.close();
});

test.skip("Dashboard-Exhibitors-Designer-UploadFloorPlan Smoke", async () => {
  // Arrange
  test.slow();
  _pagesToTest.push(_dashboardPage, _exhibitorsList, _designerPage, _uploadFloorPlanPage);
  await _loginPage.goToPage();
  await _loginPage.loginAsUser();

  for (var page of _pagesToTest) {   
    console.log("Act");
     // Act
     await page.goToPage();
     console.log("Assert");
     // Assert
     await expect(await page.areWeOnThisPage()).toBe(true);
  }
});
