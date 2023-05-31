import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/login");
  await expect(page).toHaveTitle(/Jira clone/);
});

test("page renders", async ({ page }) => {
  await page.goto("/login");
  await expect(page.getByRole("heading", { name: "Select login user" })).toBeVisible();
});

test("login and redirect", async ({ page }) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "Login" }).click();

  await expect(page).toHaveURL(/.*projects/);
});
