const { $ } = require('@wdio/globals')
const Page = require('./page');

class CheckoutPage extends page {

    get firstNameInput () {
        return $('#firstName');
    }

    get lastNameInput () {
        return $('#lastName');
    }

    get addressInput () {
        return $('#addressLine1');
    }

    get cityInput () {
        return $('#city');
    }

    get emailInput () {
        return $('#email');
    }

    get confirmEmailInput () {
        return $('#emailConfirm');
    }

    get phoneNmberInput () {
        return $('#phoneNumber');
    }   

}

module.exports = new CheckoutPage();