Feature: Product category and filters

  Scenario: Access a Product via category after applying multiple filters
    Given I am on the homepage
    When I click on the shop by category dropdown
    And I select cell phone and accessories category
    Then the Cell Phone Smart Watch Accessories page is displayed
    When I click Cell Phones and Smartphones in left navigation section
    Then the Cell Phones and Smartphones page is displayed
    When I click on all filters
    And I select condition as new
    And I enter price in range "25" and "100" dollars
    And I select item location as Worldwide
    And I apply the filters
    Then the Cell Phones and Smartphones page is displayed
    And verfiy the filters are applied
    And verfiy the filter tags are displayed
