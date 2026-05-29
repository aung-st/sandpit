import { Page, expect } from '@playwright/test';

class ElementsPage {
  private page: Page;
  private readonly url: string = 'https://demoqa.com';

  // --- Locators ---
  private readonly elementsCard = (page: Page) =>
    page.locator('.category-cards > a:nth-child(1) > div:nth-child(1)');

  private readonly menuItem = (text: string | RegExp) =>
    this.page.getByRole('listitem').filter({ hasText: text });

  // --- Element items to assert visibility ---
  private readonly MENU_ITEMS = [
    'Text Box',
    'Check Box',
    'Radio Button',
    'Web Tables',
    'Buttons',
    /^Links$/,
    'Broken Links - Images',
    'Upload and Download',
    'Dynamic Properties',
  ] as const;

  constructor(page: Page) {
    this.page = page;
  }

  // --- Navigation ---
  async goto() {
    await this.page.goto(this.url);
  }

  async clickElementsLink() {
    await this.elementsCard(this.page).click();
  }

  // --- Assertions ---

  /**
   * Asserts a single menu item is visible by name.
   * e.g. await elementsPage.assertMenuItemVisible('Text Box');
   */
  async assertMenuItemVisible(item: string | RegExp) {
    await expect(this.menuItem(item)).toBeVisible();
  }

  /**
   * Asserts all known Elements menu items are visible.
   */
  async assertAllMenuItemsVisible() {
    for (const item of this.MENU_ITEMS) {
      await expect(this.menuItem(item)).toBeVisible();
    }
  }

  /**
   * Clicks a menu item by label and asserts the submenu collapses.
   */
  async closeListItemsAndNavigateTo(menu: string) {
    await this.page.getByText(menu).click();
    await expect(this.menuItem('Text Box')).not.toBeVisible();
  }
}

export default ElementsPage;