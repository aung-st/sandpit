import { test, expect } from '@playwright/test';

test('Elements link', async ({ page }) => {
  await page.goto('https://demoqa.com/');

  // Click the get element link.
  await page.locator('.category-cards > a:nth-child(1) > div:nth-child(1)').click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByText('Please select an item from left to start practice.')).toBeVisible();
});

// Elements menu tests

test('Elements has list item text box', async ({ page }) => {
await page.goto('https://demoqa.com/');

// Click the get element link.
await page.locator('.category-cards > a:nth-child(1) > div:nth-child(1)').click();
await expect(page
    .getByRole('listitem')
    .filter({ hasText: 'Text Box' })).toBeVisible();
});

test('Elements has list item check box', async ({ page }) => {
await page.goto('https://demoqa.com/');

// Click the get element link.
await page.locator('.category-cards > a:nth-child(1) > div:nth-child(1)').click();
await expect(page
    .getByRole('listitem')
    .filter({ hasText: 'Check Box' })).toBeVisible();
});

test('Elements has list item radio button', async ({ page }) => {
await page.goto('https://demoqa.com/');

// Click the get element link.
await page.locator('.category-cards > a:nth-child(1) > div:nth-child(1)').click();
await expect(page
    .getByRole('listitem')
    .filter({ hasText: 'Radio Button' })).toBeVisible();
});

test('Elements has list item web tables', async ({ page }) => {
await page.goto('https://demoqa.com/');

// Click the get element link.O
await page.locator('.category-cards > a:nth-child(1) > div:nth-child(1)').click();
await expect(page
    .getByRole('listitem')
    .filter({ hasText: 'Web Tables' })).toBeVisible();
});


test('Elements has list item buttons', async ({ page }) => {
await page.goto('https://demoqa.com/');

// Click the get element link.
await page.locator('.category-cards > a:nth-child(1) > div:nth-child(1)').click();
await expect(page
    .getByRole('listitem')
    .filter({ hasText: 'Buttons' })).toBeVisible();
});


test('Elements has list item links', async ({ page }) => {
await page.goto('https://demoqa.com/');

// Click the get element link.
await page.locator('.category-cards > a:nth-child(1) > div:nth-child(1)').click();
await expect(page
    .getByRole('listitem')
    .filter({ hasText: /^Links$/ })).toBeVisible();
});


test('Elements has list item broken links - images', async ({ page }) => {
await page.goto('https://demoqa.com/');

// Click the get element link.
await page.locator('.category-cards > a:nth-child(1) > div:nth-child(1)').click();
await expect(page
    .getByRole('listitem')
    .filter({ hasText: 'Broken Links - Images' })).toBeVisible();
});

test('Elements has list item upload and download', async ({ page }) => {
await page.goto('https://demoqa.com/');

// Click the get element link.
await page.locator('.category-cards > a:nth-child(1) > div:nth-child(1)').click();
await expect(page
    .getByRole('listitem')
    .filter({ hasText: 'Upload and Download' })).toBeVisible();
});


test('Elements has list item dynamic properties', async ({ page }) => {
await page.goto('https://demoqa.com/');

// Click the get element link.
await page.locator('.category-cards > a:nth-child(1) > div:nth-child(1)').click();
await expect(page
    .getByRole('listitem')
    .filter({ hasText: 'Dynamic Properties' })).toBeVisible();
});

test('Elements list items close after clicking on another list', async ({ page }) => {
await page.goto('https://demoqa.com/');

// Click the get element link.
await page.locator('.category-cards > a:nth-child(1) > div:nth-child(1)').click();

await page.getByText('Forms').click()

await expect(page.getByText('Text Box')).not.toBeVisible()

});

// Forms menu 
test('Forms has list item practise form', async ({ page }) => {
await page.goto('https://demoqa.com/');

// Click the get element link.
await page.locator('.category-cards > a:nth-child(1) > div:nth-child(1)').click();

await page.getByText('Forms').click()

await expect(page
    .getByRole('listitem')
    .filter({ hasText: 'Practice Form' })).toBeVisible();
});

test('Forms list items close after clicking on another list', async ({ page }) => {
await page.goto('https://demoqa.com/');

// Click the get element link.
await page.locator('.category-cards > a:nth-child(1) > div:nth-child(1)').click();

await page.getByText('Alerts, Frame & Windows').click()

await expect(page
    .getByRole('listitem')
    .filter({ hasText: 'Practice Form' })).not.toBeVisible();
});

// Alerts menu

test('Alerts has list item browser windows', async ({ page }) => {
await page.goto('https://demoqa.com/');

// Click the get element link.
await page.locator('.category-cards > a:nth-child(1) > div:nth-child(1)').click();

await page.getByText('Alerts, Frame & Windows').click()

await expect(page
    .getByRole('listitem')
    .filter({ hasText: 'Browser Windows' })).toBeVisible();
});

test('Alerts has list item alerts', async ({ page }) => {
await page.goto('https://demoqa.com/');

// Click the get element link.
await page.locator('.category-cards > a:nth-child(1) > div:nth-child(1)').click();

await page.getByText('Alerts, Frame & Windows').click()

await expect(page
    .getByRole('listitem')
    .filter({ hasText: 'Alerts' })).toBeVisible();
});

test('Alerts has list item frames', async ({ page }) => {
await page.goto('https://demoqa.com/');

// Click the get element link.
await page.locator('.category-cards > a:nth-child(1) > div:nth-child(1)').click();

await page.getByText('Alerts, Frame & Windows').click()

await expect(page
    .getByRole('listitem')
    .filter({ hasText: /^Frames$/ })).toBeVisible();
});

test('Alerts has list item nested frames', async ({ page }) => {
await page.goto('https://demoqa.com/');

// Click the get element link.
await page.locator('.category-cards > a:nth-child(1) > div:nth-child(1)').click();

await page.getByText('Alerts, Frame & Windows').click()

await expect(page
    .getByRole('listitem')
    .filter({ hasText: 'Nested Frames' })).toBeVisible();
});

test('Alerts has list item modal dialogs', async ({ page }) => {
await page.goto('https://demoqa.com/');

// Click the get element link.
await page.locator('.category-cards > a:nth-child(1) > div:nth-child(1)').click();

await page.getByText('Alerts, Frame & Windows').click()

await expect(page
    .getByRole('listitem')
    .filter({ hasText: 'Modal Dialogs' })).toBeVisible();
});

test('Widgets has list item accordian', async ({ page }) => {
await page.goto('https://demoqa.com/');

// Click the get element link.
await page.locator('.category-cards > a:nth-child(1) > div:nth-child(1)').click();

await page.getByText('Widgets').click()

await expect(page
    .getByRole('listitem')
    .filter({ hasText: 'Accordian' })).toBeVisible();
});

test('Widgets has list item auto complete', async ({ page }) => {
await page.goto('https://demoqa.com/');

// Click the get element link.
await page.locator('.category-cards > a:nth-child(1) > div:nth-child(1)').click();

await page.getByText('Widgets').click()

await expect(page
    .getByRole('listitem')
    .filter({ hasText: 'Auto Complete' })).toBeVisible();
});

test('Widgets has list item date picker', async ({ page }) => {
await page.goto('https://demoqa.com/');

// Click the get element link.
await page.locator('.category-cards > a:nth-child(1) > div:nth-child(1)').click();

await page.getByText('Widgets').click()

await expect(page
    .getByRole('listitem')
    .filter({ hasText: 'Date Picker' })).toBeVisible();
});

test('Widgets has list item slider', async ({ page }) => {
await page.goto('https://demoqa.com/');

// Click the get element link.
await page.locator('.category-cards > a:nth-child(1) > div:nth-child(1)').click();

await page.getByText('Widgets').click()

await expect(page
    .getByRole('listitem')
    .filter({ hasText: 'Slider' })).toBeVisible();
});

test('Widgets has list item progress bar', async ({ page }) => {
await page.goto('https://demoqa.com/');

// Click the get element link.
await page.locator('.category-cards > a:nth-child(1) > div:nth-child(1)').click();

await page.getByText('Widgets').click()

await expect(page
    .getByRole('listitem')
    .filter({ hasText: 'Progress Bar' })).toBeVisible();
});

test('Widgets has list item tabs', async ({ page }) => {
await page.goto('https://demoqa.com/');

// Click the get element link.
await page.locator('.category-cards > a:nth-child(1) > div:nth-child(1)').click();

await page.getByText('Widgets').click()

await expect(page
    .getByRole('listitem')
    .filter({ hasText: 'Tabs' })).toBeVisible();
});

test('Widgets has list item tool tips', async ({ page }) => {
await page.goto('https://demoqa.com/');

// Click the get element link.
await page.locator('.category-cards > a:nth-child(1) > div:nth-child(1)').click();

await page.getByText('Widgets').click()

await expect(page
    .getByRole('listitem')
    .filter({ hasText: 'Tool Tips' })).toBeVisible();
});

test('Widgets has list item menu', async ({ page }) => {
await page.goto('https://demoqa.com/');

// Click the get element link.
await page.locator('.category-cards > a:nth-child(1) > div:nth-child(1)').click();

await page.getByText('Widgets').click()

await expect(page
    .getByRole('listitem')
    .filter({ hasText: /^Menu$/ })).toBeVisible();
});

test('Widgets has list item select menu', async ({ page }) => {
await page.goto('https://demoqa.com/');

// Click the get element link.
await page.locator('.category-cards > a:nth-child(1) > div:nth-child(1)').click();

await page.getByText('Widgets').click()

await expect(page
    .getByRole('listitem')
    .filter({ hasText: 'Select Menu' })).toBeVisible();
});

test('Interactions has list item sortable', async ({ page }) => {
await page.goto('https://demoqa.com/');

// Click the get element link.
await page.locator('.category-cards > a:nth-child(1) > div:nth-child(1)').click();

await page.getByText('Interactions').click()

await expect(page
    .getByRole('listitem')
    .filter({ hasText: 'Sortable' })).toBeVisible();
});

test('Interactions has list item selectable', async ({ page }) => {
await page.goto('https://demoqa.com/');

// Click the get element link.
await page.locator('.category-cards > a:nth-child(1) > div:nth-child(1)').click();

await page.getByText('Interactions').click()

await expect(page
    .getByRole('listitem')
    .filter({ hasText: 'Selectable' })).toBeVisible();
});

test('Interactions has list item Resizeable', async ({ page }) => {
await page.goto('https://demoqa.com/');

// Click the get element link.
await page.locator('.category-cards > a:nth-child(1) > div:nth-child(1)').click();

await page.getByText('Interactions').click()

await expect(page
    .getByRole('listitem')
    .filter({ hasText: 'Resizable' })).toBeVisible();
});

test('Interactions has list item droppable', async ({ page }) => {
await page.goto('https://demoqa.com/');

// Click the get element link.
await page.locator('.category-cards > a:nth-child(1) > div:nth-child(1)').click();

await page.getByText('Interactions').click()

await expect(page
    .getByRole('listitem')
    .filter({ hasText: 'Droppable' })).toBeVisible();
});

test('Interactions has list item dragabble', async ({ page }) => {
await page.goto('https://demoqa.com/');

// Click the get element link.
await page.locator('.category-cards > a:nth-child(1) > div:nth-child(1)').click();

await page.getByText('Interactions').click()

await expect(page
    .getByRole('listitem')
    .filter({ hasText: 'Dragabble' })).toBeVisible();
});

test('Book Store Application has list item login', async ({ page }) => {
await page.goto('https://demoqa.com/');

// Click the get element link.
await page.locator('.category-cards > a:nth-child(1) > div:nth-child(1)').click();

await page.getByText('Book Store Application').click()

await expect(page
    .getByRole('listitem')
    .filter({ hasText: 'Login' })).toBeVisible();
});

test('Book Store Application has list item book store', async ({ page }) => {
await page.goto('https://demoqa.com/');

// Click the get element link.
await page.locator('.category-cards > a:nth-child(1) > div:nth-child(1)').click();

await page.getByText('Book Store Application').click()

await expect(page
    .getByRole('listitem')
    .filter({ hasText: /^Book Store$/ })).toBeVisible();
});

test('Book Store Application has list item profile', async ({ page }) => {
await page.goto('https://demoqa.com/');

// Click the get element link.
await page.locator('.category-cards > a:nth-child(1) > div:nth-child(1)').click();

await page.getByText('Book Store Application').click()

await expect(page
    .getByRole('listitem')
    .filter({ hasText: 'Profile' })).toBeVisible();
});

test('Book Store Application has list item book store api', async ({ page }) => {
await page.goto('https://demoqa.com/');

// Click the get element link.
await page.locator('.category-cards > a:nth-child(1) > div:nth-child(1)').click();

await page.getByText('Book Store Application').click()

await expect(page
    .getByRole('listitem')
    .filter({ hasText: 'Book Store API' })).toBeVisible();
});