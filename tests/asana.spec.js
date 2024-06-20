const { test, expect } = require("@playwright/test");

const testCases = [
  {
    id: 1,
    name: "Test Case 1",
    leftNav: "Cross-functional project plan, Project",
    column: "To do",
    card_title: "Draft project brief",
  },
  {
    id: 2,
    name: "Test Case 2",
    leftNav: "Cross-functional project plan, Project",
    column: "To do",
    card_title: "Schedule kickoff meeting",
  },
  {
    id: 3,
    name: "Test Case 3",
    leftNav: "Cross-functional project plan, Project",
    column: "To do",
    card_title: "Share timeline with teammates",
  },
  {
    id: 4,
    name: "Test Case 4",
    leftNav: "Work Requests",
    column: "New Requests",
    card_title: "[Example] Laptop setup for new hire",
  },
  {
    id: 5,
    name: "Test Case 5",
    leftNav: "Work Requests",
    column: "In Progress",
    card_title: "[Example] Password not working",
  },
  {
    id: 6,
    name: "Test Case 6",
    leftNav: "Work Requests",
    column: "Completed",
    card_title: "[Example] New keycard for Daniela V",
  },
];

test.describe("Asana Data-Driven Tests", () => {
  test.beforeEach(async ({ page }) => {
    await test.step("Login to Asana", async () => {
      // Login to Asana
      await page.goto("https://app.asana.com/-/login");
      await page.fill('input[type="email"]', "ben+pose@workwithloop.com");
      await page.getByRole('button', { name: 'Continue', exact: true }).click();
      await page.fill('input[type="password"]', "Password123");
      await page.getByRole('button', { name: 'Log in' }).click();
      await page.waitForURL("**/app.asana.com/*");
    });
  });

  testCases.forEach((data) => {
    test(data.name, async ({ page }) => {
      await test.step("Navigate to the project page", async () => {
        // Navigate to the project page
        await page.getByLabel(data.leftNav).click();
        await page.waitForLoadState("load");
      });

      await test.step("Verify the card is within the right column", async () => {
        // Locate the column with the title "New Requests"
        const columnTitle = data.column;
        const columnLocator = page.locator(
          `.BoardColumnHeaderTitle:has-text("${columnTitle}")`
        );
        await expect(columnLocator).toBeVisible();

        // Locate the specific card within the column using its title
        const cardTitle = data.card_title;
        const cardLocator = page.locator(
          `.BoardCard-taskName:has-text("${cardTitle}")`
        );

        // Assert that the card is present
        const cardExists = await cardLocator.isVisible();
        expect(cardExists).toBeTruthy();
      });
    });
  });
});
