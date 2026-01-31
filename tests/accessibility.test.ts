import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const pages = [
  { path: '/ja/', name: 'Japanese Home' },
  { path: '/en/', name: 'English Home' },
  { path: '/ja/faq', name: 'Japanese FAQ' },
  { path: '/en/faq', name: 'English FAQ' },
  { path: '/ja/contact', name: 'Japanese Contact' },
  { path: '/en/contact', name: 'English Contact' },
  { path: '/ja/terms', name: 'Japanese Terms' },
  { path: '/en/terms', name: 'English Terms' },
  { path: '/ja/privacy', name: 'Japanese Privacy' },
  { path: '/en/privacy', name: 'English Privacy' },
  { path: '/ja/licenses', name: 'Japanese Licenses' },
  { path: '/en/licenses', name: 'English Licenses' },
  { path: '/ja/changelog', name: 'Japanese Changelog' },
  { path: '/en/changelog', name: 'English Changelog' },
];

for (const page of pages) {
  test(`${page.name} should not have any automatically detectable accessibility issues`, async ({ page: playwright }) => {
    await playwright.goto(page.path);

    const accessibilityScanResults = await new AxeBuilder({ page: playwright })
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
}
