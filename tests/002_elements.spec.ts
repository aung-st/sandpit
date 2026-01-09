import { test, expect } from '@playwright/test';

test('Elements link', async ({ page }) => {
  await page.goto('https://demoqa.com/');

  // Click the get element link.
  await page.locator('div.card:nth-child(1)').click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByText('Please select an item from left to start practice.')).toBeVisible();
});
