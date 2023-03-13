const {test,expect} = require('@playwright/test');

test('Assertions test cases', async ({page}) => {
    await page.goto('https://kitchen.applitools.com');
    // await page.pause();
    //Assertions
    // check element is present or not
    await expect(page.locator("text=The Kitchen")).toHaveCount(1);
    await page.waitForTimeout(5000);

    if(await page.$('text=The Kitchen')) {
        await page.locator("text=The Kitchen").click();
    }
    await page.waitForTimeout(5000);

    //check element is hidden or visible
    await expect(page.locator("text=The Kitchen")).toBeVisible();
    expect(await page.locator("text=The Kitchen")).toBeVisible();
    
    // await expect.soft(page.locator("text=The Kitchen")).toBeHidden();

    //check element is enabled or disabled
    await expect(page.locator("text=The Kitchen")).toBeEnabled();
    // await expect.soft(page.locator("text=The Kitchen")).toBeDisabled();

    //check text
    await expect(page.locator("text=The Kitchen")).toHaveText('The Kitchen');
    await expect.soft(page.locator("text=The Kitchen")).not.toHaveText('Shree');
    // await page.pause();

    // check attribute value
    await expect(page.locator("text=The Kitchen")).toHaveAttribute('class', 'chakra-heading css-dpmy2a');
    await expect.soft(page.locator("text=The Kitchen")).toHaveAttribute('class', /.*css-dpmy2a/);
    await expect.soft(page.locator("text=The Kitchen")).toHaveClass(/.*css-dpmy2a/);

    //check page url and title
    await expect(page).toHaveURL('https://kitchen.applitools.com');
    await expect(page).toHaveTitle('The Kitchen');
    await expect(page).toHaveTitle(/.*Kitchen/);

    // await page.pause();
    //check visual validation with screenshot
    // await expect(page).toHaveScreenshot();

})