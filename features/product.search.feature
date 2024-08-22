Feature: Search a product

  Scenario: Access a product and via Seach
    Given I am on the homepage
    When I enter "MacBook" in the search box
    And I select "Computers/Tablets & Networking" category
    And I click on the search button
    Then the "search result" page is displayed
    And the first product sbould be "Apple MacBook Pro"
    
