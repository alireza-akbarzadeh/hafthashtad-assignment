import { expect, test } from "@playwright/test"

test.describe("Flight search functionality", () => {
  test("Should return a flight list with 5 items", async ({ page }) => {
    // Navigate to the page
    await page.goto("http://localhost:3000")

    // Check if initial flight list items are displayed

    // Wait for the flight list items to appear
    await page.waitForSelector('[data-testid="flight-item"]')

    // Check if initial flight list items are displayed
    const initialFlightListItems = await page.$$('[data-testid="flight-item"]')
    expect(initialFlightListItems).toHaveLength(5)
  })

  test("Should display search results for a valid query", async ({ page }) => {
    // Navigate to the page
    await page.goto("http://localhost:3000")

    // Perform a search
    const searchInput = page.getByPlaceholder(/بلیط/i)
    if (!searchInput) throw new Error("Search input element not found")

    await searchInput.pressSequentially("زاگرس")
    await searchInput.press("Enter") // Use searchInput to press Enter key

    // Wait for search results to appear
    await page.waitForSelector('[data-testid="flight-item"]')

    // Check if search results are displayed
    const searchResultItems = await page.$$('[data-testid="flight-item"]')
    expect(searchResultItems.length).toBeGreaterThan(0)

    // Check if the "not found" message is not displayed
    const notFoundMessage = await page.$('[data-testid="not-found-message"]')
    expect(notFoundMessage).toBeNull()
  })

  test("Should display 'not found' message for an invalid query", async ({ page }) => {
    // Navigate to the page
    await page.goto("http://localhost:3000")

    // Perform a search with an invalid query
    // Perform a search
    const searchInput = page.getByPlaceholder(/بلیط/i)
    if (!searchInput) throw new Error("Search input element not found")

    await searchInput.pressSequentially("Invalid search query")
    await page.keyboard.press("Enter")

    // Wait for the 'not found' message to appear
    await page.waitForSelector('[data-testid="not-found-message"]')

    // Check if the 'not found' message is displayed
    const notFoundMessage = await page.$('[data-testid="not-found-message"]')
    expect(notFoundMessage).not.toBeNull()

    // Check if no search results are displayed
    const searchResultItems = await page.$$('[data-testid="flight-item"]')
    expect(searchResultItems).toHaveLength(0)
  })
})
