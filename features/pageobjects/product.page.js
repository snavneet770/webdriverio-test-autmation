const { $ } = require('@wdio/globals')
const Page = require('./page');

class ProductPage extends Page {

    get pageTitle () {
        return $('h1');
    }

    get buyItNowButton () {
        return $('#x-bin-action')
    }

    get checkOutAsGuestButton () {
        return $('//span[text()="Check out as guest"]')
    }

    isLoaded () {
        browser.getTitle().should.be.equal('Dell 12" UltraSlim Laptop Intel 2.4GHz 16GB 256GB SSD Wi-Fi Bluetooth Win10 Pro');
        return this();
    }
}

module.exports = new ProductPage();