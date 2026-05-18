import { test } from '@playwright/test';
import LandingPage from './pages/Landing';

test('Has Demo QA title', async ({ page }) => {
  const demoQA = new LandingPage(page);
  await demoQA.goto();
  await demoQA.assertTitleContains('demosite');
});

// --- Card Visibility Checks ---

test('Has elements card', async ({ page }) => {
  const demoQA = new LandingPage(page);
  await demoQA.goto();
  await demoQA.isElementVisible('Elements');
});

test('Has forms card', async ({ page }) => {
  const demoQA = new LandingPage(page);
  await demoQA.goto();
  await demoQA.isElementVisible('Forms');
});

test('Has alerts, frame & windows card', async ({ page }) => {
  const demoQA = new LandingPage(page);
  await demoQA.goto();
  await demoQA.isElementVisible('Alerts, Frame & Windows');
});

test('Has widgets card', async ({ page }) => {
  const demoQA = new LandingPage(page);
  await demoQA.goto();
  await demoQA.isElementVisible('Widgets');
});

test('Has interactions card', async ({ page }) => {
  const demoQA = new LandingPage(page);
  await demoQA.goto();
  await demoQA.isElementVisible('Interactions');
});

test('Has book store application card', async ({ page }) => {
  const demoQA = new LandingPage(page);
  await demoQA.goto();
  await demoQA.isElementVisible('Book Store Application');
});
