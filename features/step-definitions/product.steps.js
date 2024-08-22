const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const categoryPage = require('../pageobjects/product.page');



Then(/^the product details page is open in new tab$/, async() => {
	const tab = await browser.getWindowHandles();
    await browser.switchToWindow(tab[1]);
    await expect(browser).toHaveUrlContaining('Dell 12');
});

Then(/^I validate the units sold$/, async() => {
	
});

Then(/^I click on the buy it now button$/, () => {
	return true;
});

Then(/^I continue to checkout as guest$/, () => {
	return true;
});


When(/^I enter my personal details$/, () => {
	return true;
});
