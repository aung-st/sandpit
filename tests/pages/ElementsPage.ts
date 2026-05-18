import { Page, expect } from '@playwright/test';

class ElementsPage {
  private page: Page;
  private url: string = 'https://demoqa.com';

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(this.url);
  }

  async clickElementsLink() {
    await this.page.locator('.category-cards > a:nth-child(1) > div:nth-child(1)').click();
  }

  async assertTextBoxVisible() {
    await expect(this.page.getByRole('listitem').filter({ hasText: 'Text Box' })).toBeVisible();
  }

  async assertCheckBoxVisible() {
    await expect(this.page.getByRole('listitem').filter({ hasText: 'Check Box' })).toBeVisible();
  }

  async assertRadioButtonVisible() {
    await expect(this.page.getByRole('listitem').filter({ hasText: 'Radio Button' })).toBeVisible();
  }

  async assertWebTablesVisible() {
    await expect(this.page.getByRole('listitem').filter({ hasText: 'Web Tables' })).toBeVisible();
  }

  async assertButtonsVisible() {
    await expect(this.page.getByRole('listitem').filter({ hasText: 'Buttons' })).toBeVisible();
  }

  async assertLinksVisible() {
    await expect(this.page.getByRole('listitem').filter({ hasText: /^Links$/ })).toBeVisible();
  }

  async assertBrokenLinksImagesVisible() {
    await expect(this.page.getByRole('listitem').filter({ hasText: 'Broken Links - Images' })).toBeVisible();
  }

  async assertUploadAndDownloadVisible() {
    await expect(this.page.getByRole('listitem').filter({ hasText: 'Upload and Download' })).toBeVisible();
  }

  async assertDynamicPropertiesVisible() {
    await expect(this.page.getByRole('listitem').filter({ hasText: 'Dynamic Properties' })).toBeVisible();
  }
  
  async closeListItemsAndNavigateTo(menu: string) {
    await this.page.getByText(menu).click();
    await expect(this.page.getByRole('listitem').filter({ hasText: 'Text Box' })).not.toBeVisible();
  }
}

export default ElementsPage;
