import { expect, test } from "@playwright/test"

test.describe("Flight search functionality", () => {
  test("Should display search results for a valid query", async ({ page }) => {
    // Navigate to the page
    await page.goto("http://localhost:3000")

    // Check if initial flight list items are displayed
    const initialFlightListItems = await page.$$('[data-testid="flight-item"]')
    expect(initialFlightListItems).toHaveLength(5)

    // Perform a search
    const searchInput = await page.$('[data-testid="search-input"]')
    if (!searchInput) throw new Error("Search input element not found")

    await searchInput.fill("Your search query")
    await page.keyboard.press("Enter")

    // Wait for search results to appear
    await page.waitForSelector('[data-testid="search-result"]')

    // Check if search results are displayed
    const searchResultItems = await page.$$('[data-testid="search-result"]')
    expect(searchResultItems.length).toBeGreaterThan(0)

    // Check if the "not found" message is not displayed
    const notFoundMessage = await page.$('[data-testid="not-found-message"]')
    expect(notFoundMessage).toBeNull()

    // Click on a flight to view details
    const flightDetailButton = await page.$('[data-testid="flight-detail-button"]')
    await flightDetailButton?.click()

    // Check if flight details are displayed
    const flightInfo = await page.$('[data-testid="flight-info"]')
    expect(flightInfo).not.toBeNull()
  })

  test("Should display 'not found' message for an invalid query", async ({ page }) => {
    // Navigate to the page
    await page.goto("http://localhost:3000")

    // Perform a search with an invalid query
    const searchInput = await page.$('[data-testid="search-input"]')
    if (!searchInput) throw new Error("Search input element not found")

    await searchInput.fill("Invalid search query")
    await page.keyboard.press("Enter")

    // Wait for the 'not found' message to appear
    await page.waitForSelector('[data-testid="not-found-message"]')

    // Check if the 'not found' message is displayed
    const notFoundMessage = await page.$('[data-testid="not-found-message"]')
    expect(notFoundMessage).not.toBeNull()

    // Check if no search results are displayed
    const searchResultItems = await page.$$('[data-testid="search-result"]')
    expect(searchResultItems).toHaveLength(0)
  })
})
