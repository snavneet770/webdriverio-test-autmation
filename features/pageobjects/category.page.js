const { $ } = require('@wdio/globals')
const Page = require('./page');

class CategoryPage {
    get cellPhonesAndSmartphones () {
        return $('=Cell Phones & Smartphones');
    }
    get allFilters () {
        return $('button=All Filters');
    }
    get conditionFilter () {
        return $('#c3-mainPanel-condition');
    }
    get priceFilter () {
        return $('#c3-mainPanel-price');
    }
    get itemLocationFilter () {
        return $('#c3-mainPanel-location');
    }
    get minPriceInput () {
        return $('//input[@aria-label="Minimum Value, US Dollar"]');
    }
    get maxPriceInput () {
        return $('//input[@aria-label="Maximum Value, US Dollar"]');
    }
    get applyFilter () {
        return $('button=Apply');
    }
    get conditionFilterNewCheckBox () {
        return $('//*[@id="c3-subPanel-LH_ItemCondition_New"]/span');
    }
    get itemLocationFilterWorldwide () {
        return $('//*[@id="c3-subPanel-location_Worldwide"]/span/span');
    }
    get firstProduct () {
        return $('#item3ba75831d6');
    }

}

module.exports = new CategoryPage();