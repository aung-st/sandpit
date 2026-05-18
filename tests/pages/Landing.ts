import { Page, expect } from '@playwright/test';

class LandingPage {
  private page: Page;
  private url: string = 'https://demoqa.com/';

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(this.url);
  }

  async assertTitleContains(substring: string) {
    await expect(this.page).toHaveTitle(new RegExp(substring));
  }

  async isElementVisible(name: string) {
    await expect(this.page.getByRole('heading', { name })).toBeVisible();
  }
}

export default LandingPage;
