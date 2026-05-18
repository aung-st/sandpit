import { test,expect } from '@playwright/test';
import ElementsPage from './pages/ElementsPage';

test.describe('Elements Page Tests', () => {
  let elementsPage: ElementsPage;

  test.beforeEach(async ({ page }) => {
    elementsPage = new ElementsPage(page);
    await elementsPage.goto();
    await elementsPage.clickElementsLink();
  });

  test('Elements page has visible heading', async ({ page }) => {
    await expect(page.getByText('Please select an item from left to start practice.')).toBeVisible();
  });

  test('Elements has list item text box', async () => {
    await elementsPage.assertTextBoxVisible();
  });

  test('Elements has list item check box', async () => {
    await elementsPage.assertCheckBoxVisible();
  });

  test('Elements has list item radio button', async () => {
    await elementsPage.assertRadioButtonVisible();
  });

  test('Elements has list item web tables', async () => {
    await elementsPage.assertWebTablesVisible();
  });

  test('Elements has list item buttons', async () => {
    await elementsPage.assertButtonsVisible();
  });

  test('Elements has list item links', async () => {
    await elementsPage.assertLinksVisible();
  });

  test('Elements has list item broken links - images', async () => {
    await elementsPage.assertBrokenLinksImagesVisible();
  });

  test('Elements has list item upload and download', async () => {
    await elementsPage.assertUploadAndDownloadVisible();
  });

  test('Elements has list item dynamic properties', async () => {
    await elementsPage.assertDynamicPropertiesVisible();
  });

  test('Elements list items close after clicking on another list', async () => {
    await elementsPage.closeListItemsAndNavigateTo('Forms');
  });

});
