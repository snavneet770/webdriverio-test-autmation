const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const categoryPage = require('../pageobjects/category.page');

Then('the Cell Phone Smart Watch Accessories page is displayed', async () => {
    await expect(browser).toHaveUrlContaining('Cell-Phones-Smart-Watches-Accessories');
});

When('I click Cell Phones and Smartphones in left navigation section', async () => {
    await categoryPage.cellPhonesAndSmartphones.isDisplayed();
    await categoryPage.cellPhonesAndSmartphones.click();
});

When('the Cell Phones and Smartphones page is displayed', async () => {
    await expect(browser).toHaveUrlContaining('Cell-Phones-Smartphones');
});

When('I click on all filters', async () => {
    await categoryPage.allFilters.waitForDisplayed();
    await categoryPage.allFilters.click();
});

When('I select condition as new', async () => {
    await categoryPage.conditionFilter.waitForDisplayed()
    await categoryPage.conditionFilter.click();
    await categoryPage.conditionFilterNewCheckBox.waitForDisplayed({ timeout: 3000 })
    await categoryPage.conditionFilterNewCheckBox.click();
    await categoryPage.conditionFilterNewCheckBox.isSelected();
});

When('I select item location as Worldwide', async () => {
    await categoryPage.itemLocationFilter.waitForDisplayed();
    await categoryPage.itemLocationFilter.click();
    await categoryPage.itemLocationFilterWorldwide.waitForDisplayed({ timeout: 3000 });
    await categoryPage.itemLocationFilterWorldwide.click();
    await categoryPage.itemLocationFilterWorldwide.isSelected();
});

When('I apply the filters', async () => {
    await categoryPage.applyFilter.waitForDisplayed();
    await categoryPage.applyFilter.click();
});

When(/^I enter price in range "(.*)" and "(.*)" dollars$/, async(min, max) => {
    await categoryPage.priceFilter.waitForDisplayed();
    await categoryPage.priceFilter.click()
    await categoryPage.minPriceInput.waitForDisplayed({ timeout: 3000 });
    await categoryPage.minPriceInput.setValue(min);
    await categoryPage.maxPriceInput.waitForDisplayed();
    await categoryPage.maxPriceInput.setValue(max);
});


Then(/^verfiy the filters are applied$/, async() => {
    const heading = (await $('h1'));
    await expect(heading).toHaveTextContaining('Cell Phones & Smartphones between US $', { ignoreCase: true });
    const appliedFilters = (await $('span=3 filters applied'));
    await expect(appliedFilters).toBeDisplayed();
});


Then(/^verfiy the filter tags are displayed$/, async() => {
    const filterTags = (await $('span=3 filters applied'));
    await filterTags.click();
    const conditionFilterTag = (await $('span=Condition: New'));
    await expect(conditionFilterTag).toBeDisplayed();
    const itemLocationFilterTag = (await $('span=Item Location: Worldwide'));
    await expect(itemLocationFilterTag).toBeDisplayed();
});
