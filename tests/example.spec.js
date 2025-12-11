import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   await page.getByRole('link', { name: 'Get started' }).click();
//   await expect(page).toHaveURL(/docs\/intro/);
// });

// test('Google search test', async ({ page }) => {
//   await page.goto('https://google.com');
//   await expect(page).toHaveTitle(/Google/);
// });

test('login and verify secure area', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://practice.expandtesting.com/login');
  
  // Fill in the username
  await page.locator('input[name="username"]').fill('practice');
  
  // Fill in the password
  await page.locator('input[name="password"]').fill('SuperSecretPassword!');
  
  // Click the login button
  await page.locator('button[type="submit"]').click();
  
  // Verify the secure area loads by checking for secure area content
  // Wait for logout button or success message to appear (more reliable than URL check)
  const secureAreaIndicator = page.getByRole('button', { name: /logout/i })
    .or(page.getByText('You logged into a secure area!'))
    .or(page.getByRole('heading', { name: /secure area/i }))
    .first();
  
  await expect(secureAreaIndicator).toBeVisible({ timeout: 10000 });
});
