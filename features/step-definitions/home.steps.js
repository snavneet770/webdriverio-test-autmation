const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const homePage = require('../pageobjects/home.page');
const categoryPage = require('../pageobjects/category.page');

Given('I am on the homepage', async () => {
    await homePage.open();
    await homePage.isLoaded();
});

When('I click on the shop by category dropdown', async () => {
    await homePage.shopByCategory.isDisplayed();
    await homePage.shopByCategory.click();
    });

When('I select cell phone and accessories category', async () => {
    await homePage.cellPhonesAndAccessories.isDisplayed();
    await homePage.cellPhonesAndAccessories.click();
});

Then ('the Cell Phones and Accessories page is displayed', async () => {
    await expect(browser).toHaveUrlContaining('Cell-Phones-Smart-Watches-Accessories');
});

When(/^I enter "(.*)" in the search box$/, async(product) => {
    await homePage.searchBox.isDisplayed();
    await homePage.searchBox.click()
    await homePage.searchBox.setValue(product);
});


When(/^I select "(.*)" category$/, async(option) => {
    await homePage.searchCategory.isDisplayed();
    await homePage.searchCategory.selectByVisibleText(option);
});

When(/^I click on the search button$/, async() => {
    await homePage.searchButton.isDisplayed();
    await homePage.searchButton.click();
});

Then(/^the "(.*)" page is displayed$/, async(pageName) => {
    if (pageName === 'search results') {
        await expect(browser).toHaveUrlContaining('sch/i.html');
    }
});

Then(/^the first product sbould be "(.*)"$/, async(productName) => {
    const firstProduct = await $('(//div[@class="s-item__title"]/span/span)[1]')
    await expect(firstProduct).toHaveTextContaining(productName, { ignoreCase: true });
});

When(/^I click on the first product$/, async() => {
    await categoryPage.firstProduct.isDisplayed();
    await firstProduct.click();
});






