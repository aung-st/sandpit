import { test, expect } from '@playwright/test';
import ElementsPage from './pages/ElementsPage';

test.describe('Elements Page Tests', () => {
  let elementsPage: ElementsPage;
      
  test.beforeEach(async ({ page }) => {
    elementsPage = new ElementsPage(page);
    await elementsPage.goto();
    await elementsPage.clickElementsLink();
  });

  test('Elements has all menu items visible', async() => {
    await elementsPage.assertAllMenuItemsVisible()
  })

  test('Elements page has visible heading', async ({ page }) => {
    await expect(page.getByText('Please select an item from left to start practice.')).toBeVisible();
  });

  test('Elements has list item text box', async () => {
    await elementsPage.assertMenuItemVisible('Text Box');
  });

  test('Elements has list item check box', async () => {
    await elementsPage.assertMenuItemVisible('Check Box');
  });

  test('Elements has list item radio button', async () => {
    await elementsPage.assertMenuItemVisible('Radio Button');
  });

  test('Elements has list item web tables', async () => {
    await elementsPage.assertMenuItemVisible('Web Tables');
  });

  test('Elements has list item buttons', async () => {
    await elementsPage.assertMenuItemVisible('Buttons');
  });

  test('Elements has list item links', async () => {
    await elementsPage.assertMenuItemVisible(/^Links$/);
  });

  test('Elements has list item broken links - images', async () => {
    await elementsPage.assertMenuItemVisible('Broken Links - Images');
  });

  test('Elements has list item upload and download', async () => {
    await elementsPage.assertMenuItemVisible('Upload and Download');
  });

  test('Elements has list item dynamic properties', async () => {
    await elementsPage.assertMenuItemVisible('Dynamic Properties');
  });

  test('Elements list items close after clicking on another list', async () => {
    await elementsPage.closeListItemsAndNavigateTo('Forms');
  });

});