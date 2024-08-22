const { $ } = require('@wdio/globals')
const Page = require('./page');

class HomePage extends Page{
    open () {
        return super.open('');
    }
    get shopByCategory () {
        return $('#gh-shop-a');
    }
    get cellPhonesAndAccessories () {
        return $('=Cell phones & accessories');
    }
    get searchBox () {
        return $('//input[@aria-label="Search for anything"]');
    }
    get searchCategory () {
        return $('#gh-cat');
    }
    get searchButton () {
        return $('#gh-btn');
    }
    isLoaded () {
        return this.shopByCategory.isDisplayed();
    }

}

module.exports = new HomePage();