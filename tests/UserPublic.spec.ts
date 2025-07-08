import { test, expect } from "@playwright/test";
import config from "config";
import { PricingCalculator } from "pages/PricingCalculator";
import { ReserveBoothPage } from "pages/ReserveBoothPage";

let _pricingCalculator: PricingCalculator;
let _reserveBooth: ReserveBoothPage;

test.beforeEach(async ({ page }) => {
  _pricingCalculator = new PricingCalculator(page, config);
  _reserveBooth = new ReserveBoothPage(page, config);
});

test("Public Page smoke", async ({ page }) => {
 
  await page.goto(config.publicUrl, { waitUntil: "commit" });

  await expect(page).toHaveTitle(config.publicPageTitle);
});

test("Public Create-Plan Smoke", async ({ page }) => {
 
  await page.goto(config.createPlanUrl, { waitUntil: "commit" });

  await expect(page).toHaveTitle(config.publicPageTitle);
});

test("Public Pricing-Calculator smoke", async ({ page }) => {
 
  await _pricingCalculator.gotoCalculatorPage();

  await expect(page).toHaveTitle(config.calculatorPageTitle);
});

test("Public Partners-Pricing-Calculator smoke", async ({ page }) => {
 
  await _pricingCalculator.gotoPartnersCalculatorPage();

  await expect(page).toHaveTitle(config.partnersPricingCalculatorPageTitle);
});

test("Public Login Smoke", async ({ page }) => {
  await page.goto(config.publicUrl, { waitUntil: "commit" });

  await page.getByRole("link", { name: "Log In" }).first().click();

  await expect(page).toHaveTitle(config.loginPageTitle);
});
test("Public Reserve Booth Smoke", async () => {

  await _reserveBooth.goToPage();

  await expect(await _reserveBooth.areWeOnThisPage()).toBe(true);
});
