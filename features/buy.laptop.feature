Feature: Search a product and proceed to buy

  Scenario: Access a product and via Search tap
    Given I am on the homepage
    When I enter "Laptop" in the search box
    And I click on the search button
    Then the first product sbould be "Dell 12" UltraSlim Laptop Intel"
    When I click on the first product
    Then the product details page is open in new tab
    And I validate the units sold
    And I click on the buy it now button
    And I continue to checkout as guest
    Then the checkout page is open
    

