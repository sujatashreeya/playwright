// @ts-check


const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
 // await page.goto('https://playwright.dev/');
 await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  // Click the get started link.
  // await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*opensource/);
});
