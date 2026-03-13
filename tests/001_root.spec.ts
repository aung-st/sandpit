import { test, expect } from '@playwright/test';

test('Has Demo QA title', async ({ page }) => {
  await page.goto('https://demoqa.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/demosite/);
});

// --- Card Visibility Checks ---

test('Has elements card', async ({ page }) => {
  await page.goto('https://demoqa.com/');

  await expect(page.getByRole('heading', {name: 'Elements'})).toBeVisible();
});

test('Has forms card', async ({ page }) => {
  await page.goto('https://demoqa.com/');

  await expect(page.getByRole('heading', {name: 'Forms'})).toBeVisible();
});

test('Has alerts, frame & windows card', async ({ page }) => {
  await page.goto('https://demoqa.com/');

  await expect(page.getByRole('heading', {name: 'Alerts, Frame & Windows'})).toBeVisible();
});

test('Has widgets card', async ({ page }) => {
  await page.goto('https://demoqa.com/');

  await expect(page.getByRole('heading', {name: 'Widgets'})).toBeVisible();
});

test('Has interactions card', async ({ page }) => {
  await page.goto('https://demoqa.com/');

  await expect(page.getByRole('heading', {name: 'Interactions'})).toBeVisible();
});

test('Has book store application card', async ({ page }) => {
  await page.goto('https://demoqa.com/');

  await expect(page.getByRole('heading', {name: 'Book Store Application'})).toBeVisible();
});